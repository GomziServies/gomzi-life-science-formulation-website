import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createContactInquiry, INTEREST_OPTIONS, submitContactInquiry } from './contactInquiry.js';

const form = {
  name: ' Test Customer ',
  company: ' Test Company ',
  email: ' customer@example.com ',
  phone: ' +91 98765 43210 ',
  requirement: 'rd-formulation',
  message: ' Looking for formulation support. ',
};
const pageUrl = 'http://localhost:5173/contact';

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
    assert.deepEqual(JSON.parse(options.body), createContactInquiry(form, pageUrl));
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(JSON.stringify({ status: 200, data: { inquiryId: 'saved-id' } }));
  });
  assert.deepEqual(await submitContactInquiry(form, pageUrl), { inquiryId: 'saved-id' });
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
    await assert.rejects(submitContactInquiry(form, pageUrl), /could not be saved/);
    fetchMock.mock.restore();
  }
});

test('reports network and timeout failures without retrying a possibly saved inquiry', async (t) => {
  for (const error of [new TypeError('Failed to fetch'), new DOMException('Timeout', 'TimeoutError')]) {
    const fetchMock = t.mock.method(globalThis, 'fetch', async () => { throw error; });
    await assert.rejects(submitContactInquiry(form, pageUrl), /could not confirm/);
    assert.equal(fetchMock.mock.callCount(), 1);
    fetchMock.mock.restore();
  }
});
