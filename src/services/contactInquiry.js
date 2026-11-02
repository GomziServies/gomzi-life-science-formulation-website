export const INTEREST_OPTIONS = [
  { value: 'ingredient-sourcing', label: 'Ingredient Sourcing' },
  { value: 'rd-formulation', label: 'R&D & Formulation Support' },
  { value: 'both', label: 'Both Ingredients & R&D' },
  { value: 'clinical-ingredients', label: 'Clinical Ingredients' },
  { value: 'general-inquiry', label: 'General Enquiry' },
  { value: 'other', label: 'Other' },
];

const localHosts = ['localhost', '127.0.0.1', '[::1]'];
const apiBaseUrl = (
  import.meta.env?.VITE_API_BASE_URL?.trim() ||
  (import.meta.env?.DEV || localHosts.includes(globalThis.location?.hostname)
    ? 'http://localhost:80'
    : 'https://api.fggroup.in')
).replace(/\/+$/, '');

const OTP_PURPOSE = 'gls-formulation-contact';
export const normalizeEmail = (email) => email.trim().toLowerCase();

async function otpRequest(action, body) {
  let response;
  try {
    response = await fetch(`${apiBaseUrl}/public/v1/inquiry-otp/${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, purpose: OTP_PURPOSE }),
      signal: AbortSignal.timeout(45000),
    });
  } catch {
    throw new Error('Email verification could not be completed. Please check your connection and try again.');
  }
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.status !== 200) {
    throw new Error(result?.message || 'Email verification is unavailable. Please try again.');
  }
  if (!result?.data?.verification_id || !(Date.parse(result.data.expires_at) > Date.now())) {
    throw new Error('Email verification could not be confirmed. Please request a new code.');
  }
  return result.data;
}

export async function sendContactEmailOtp(email) {
  email = normalizeEmail(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Please enter a valid email address.');
  const result = await otpRequest('send', { email });
  return { ...result, email };
}

export async function verifyContactEmailOtp(challenge, otp) {
  if (!challenge?.verification_id || !/^\d{6}$/.test(otp.trim())) {
    throw new Error('Enter the six-digit code sent to your email.');
  }
  const result = await otpRequest('verify', {
    email: challenge.email, verification_id: challenge.verification_id, otp: otp.trim(),
  });
  if (!/^[a-f0-9]{64}$/.test(result.verification_token || '')) {
    throw new Error('Email verification could not be confirmed. Please request a new code.');
  }
  return { ...result, email: challenge.email };
}

export function createContactInquiry(form, pageUrl) {
  const values = Object.fromEntries(
    Object.entries(form).map(([key, value]) => [key, value.trim()])
  );
  const interest = INTEREST_OPTIONS.find((option) => option.value === values.requirement);

  if (!values.name || !values.company || !values.email || !values.phone || !values.message || !interest) {
    throw new Error('Please fill in all required fields.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    throw new Error('Please enter a valid email address.');
  }
  if (!/^\+?[\d\s().-]+$/.test(values.phone) || !/^\d{7,15}$/.test(values.phone.replace(/\D/g, ''))) {
    throw new Error('Please enter a valid phone number (7–15 digits).');
  }

  return {
    name: values.name,
    email: values.email,
    mobile: values.phone,
    subject: `GLS Formulation Enquiry - ${interest.label}`,
    message: `Company: ${values.company}\nInterested in: ${interest.label}\n\n${values.message}`,
    // Keep the website identity stable on localhost as well as production.
    // The API uses this source to route GLS inquiries and notifications.
    source: 'https://gomzilifesciences.in/contact',
    details: {
      company: values.company,
      requirement: values.requirement,
      interest: interest.label,
      message: values.message,
      page_url: pageUrl,
    },
  };
}

export async function submitContactInquiry(form, pageUrl, verification) {
  const payload = createContactInquiry(form, pageUrl);
  if (!verification?.verification_id || !verification?.verification_token ||
      verification.email !== normalizeEmail(form.email) ||
      !(Date.parse(verification.expires_at) > Date.now())) {
    throw new Error('Please verify your email before sending your enquiry.');
  }
  payload.email_verification_id = verification.verification_id;
  payload.email_verification_token = verification.verification_token;
  let response;
  try {
    response = await fetch(`${apiBaseUrl}/public/v1/contact-inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
  } catch {
    throw new Error('We could not confirm your enquiry was saved. Please check your connection and try again, or email info@gomzilifesciences.in.');
  }

  const result = await response.json().catch(() => null);
  if (response.status === 403) {
    const error = new Error('Your email verification has expired. Please request and verify a new code.');
    error.code = 'EMAIL_VERIFICATION_REQUIRED';
    throw error;
  }
  if (!response.ok || result?.status !== 200 || !result?.data?.inquiryId) {
    throw new Error('Your enquiry could not be saved. Please try again or email info@gomzilifesciences.in.');
  }
  return result.data;
}
