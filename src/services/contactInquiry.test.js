import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  createContactInquiry, INTEREST_OPTIONS, normalizeEmail, sendContactEmailOtp,
  submitContactInquiry, verifyContactEmailOtp,
} from './contactInquiry.js';

const form = {
  name: ' Test Customer ',
  company: ' Test Company ',
  email: ' customer@example.com ',
  phone: ' +91 98765 43210 ',
  requirement: 'rd-formulation',
  message: ' Looking for formulation support. ',
};
const pageUrl = 'http://localhost:5173/contact';
const verification = {
  email: 'customer@example.com', verification_id: '0123456789abcdef01234567',
  verification_token: 'a'.repeat(64), expires_at: new Date(Date.now() + 900000).toISOString(),
};

test('maps every form field to the FG API contract and GLS admin filter', () => {
  for (const option of INTEREST_OPTIONS) {
    const payload = createContactInquiry({ ...form, requirement: option.value }, pageUrl);
    assert.equal(payload.name, 'Test Customer');
    assert.equal(payload.email, 'customer@example.com');
    assert.equal(payload.mobile, '+91 98765 43210');
    assert.equal(payload.subject, `GLS Formulation Enquiry - ${option.label}`);
    assert.equal(payload.message, `Company: Test Company\nInterested in: ${option.label}\n\nLooking for formulation support.`);
    assert.equal(payload.source, 'https://gomzilifesciences.in/contact');
    assert.deepEqual(payload.details, {
      company: 'Test Company', requirement: option.value, interest: option.label,
      message: 'Looking for formulation support.', page_url: pageUrl,
    });
    assert.match(payload.subject, /GLS|Gomzi Life|Contract Manufacturing|Private Label|Supplement|Pouch Packaging|Whey/i);
  }
});

test('rejects missing or whitespace-only required fields', () => {
  for (const key of Object.keys(form)) {
    assert.throws(() => createContactInquiry({ ...form, [key]: '   ' }, pageUrl), /required/);
  }
});

test('rejects invalid interests, email addresses, and phone numbers', () => {
  assert.throws(() => createContactInquiry({ ...form, requirement: 'invalid' }, pageUrl), /required/);
  assert.throws(() => createContactInquiry({ ...form, email: 'invalid@' }, pageUrl), /email/);
  for (const phone of ['123', '1234567890123456', 'call 9876543210']) {
    assert.throws(() => createContactInquiry({ ...form, phone }, pageUrl), /phone/);
  }
});

test('posts JSON to the public inquiry endpoint and requires a saved inquiry ID', async (t) => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    requests += 1;
    assert.equal(url, 'https://api.fggroup.in/public/v1/contact-inquiry');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    assert.deepEqual(JSON.parse(options.body), {
      ...createContactInquiry(form, pageUrl),
      email_verification_id: verification.verification_id,
      email_verification_token: verification.verification_token,
    });
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(JSON.stringify({ status: 200, data: { inquiryId: 'saved-id' } }));
  });
  assert.deepEqual(await submitContactInquiry(form, pageUrl, verification), { inquiryId: 'saved-id' });
  assert.equal(requests, 1);
});

test('does not send invalid submissions', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => { throw new Error('unexpected request'); });
  await assert.rejects(submitContactInquiry({ ...form, company: '' }, pageUrl), /required/);
  assert.equal(fetchMock.mock.callCount(), 0);
});

test('rejects API failures, HTML responses, and unconfirmed saves', async (t) => {
  for (const [status, body] of [
    [400, JSON.stringify({ status: 400, message: 'Invalid input' })],
    [500, JSON.stringify({ status: 500 })],
    [200, '<html>Proxy error</html>'],
    [200, JSON.stringify({ status: 200, data: {} })],
    [200, JSON.stringify({ status: 500, data: { inquiryId: 'invalid' } })],
  ]) {
    const fetchMock = t.mock.method(globalThis, 'fetch', async () => new Response(body, { status }));
    await assert.rejects(submitContactInquiry(form, pageUrl, verification), /could not be saved/);
    fetchMock.mock.restore();
  }
});

test('reports network and timeout failures without retrying a possibly saved inquiry', async (t) => {
  for (const error of [new TypeError('Failed to fetch'), new DOMException('Timeout', 'TimeoutError')]) {
    const fetchMock = t.mock.method(globalThis, 'fetch', async () => { throw error; });
    await assert.rejects(submitContactInquiry(form, pageUrl, verification), /could not confirm/);
    assert.equal(fetchMock.mock.callCount(), 1);
    fetchMock.mock.restore();
  }
});

test('requires verification for the current email and rejects expired or missing proof', async (t) => {
  const mock = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected request'); });
  for (const proof of [undefined, {}, { ...verification, email: 'someone@example.com' },
    { ...verification, expires_at: new Date(0).toISOString() }]) {
    await assert.rejects(submitContactInquiry(form, pageUrl, proof), /verify your email/);
  }
  assert.equal(mock.mock.callCount(), 0);
});

test('requests an email code for the GLS purpose and normalizes the address', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.fggroup.in/public/v1/inquiry-otp/send');
    assert.deepEqual(JSON.parse(options.body), { email: 'customer@example.com', purpose: 'gls-formulation-contact' });
    return new Response(JSON.stringify({ status: 200, data: {
      verification_id: verification.verification_id, expires_at: verification.expires_at, resend_after: 60,
    } }));
  });
  const challenge = await sendContactEmailOtp(' Customer@Example.com ');
  assert.equal(challenge.email, 'customer@example.com');
  assert.equal(normalizeEmail(' Customer@Example.com '), challenge.email);
  await assert.rejects(sendContactEmailOtp('bad'), /valid email/);
});

test('verifies the email code using the challenge and returns server proof', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.fggroup.in/public/v1/inquiry-otp/verify');
    assert.deepEqual(JSON.parse(options.body), {
      email: verification.email, verification_id: verification.verification_id,
      otp: '123456', purpose: 'gls-formulation-contact',
    });
    return new Response(JSON.stringify({ status: 200, data: verification }));
  });
  assert.deepEqual(await verifyContactEmailOtp(verification, '123456'), verification);
  await assert.rejects(verifyContactEmailOtp(verification, '123'), /six-digit/);
});

test('shows incorrect code and rate-limit errors without accepting verification', async (t) => {
  for (const [status, message] of [[400, 'Invalid or expired code.'], [429, 'Too many verification emails.']]) {
    const mock = t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ status, message }), { status }));
    await assert.rejects(verifyContactEmailOtp(verification, '123456'), { message });
    mock.mock.restore();
  }
});

test('rejects incomplete OTP responses and allows requesting a new code after server expiry', async (t) => {
  const mock = t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ status: 200, data: {} })));
  await assert.rejects(sendContactEmailOtp(form.email), /could not be confirmed/);
  mock.mock.restore();
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ status: 403 }), { status: 403 }));
  await assert.rejects(submitContactInquiry(form, pageUrl, verification), { code: 'EMAIL_VERIFICATION_REQUIRED' });
});
