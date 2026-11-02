import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { scrollToElement } from '../components/ScrollToTop';
import CustomSelect from '../components/CustomSelect';
import { INTEREST_OPTIONS, submitContactInquiry } from '../services/contactInquiry';

const EMAIL = 'info@gomzilifesciences.in';

const FAQS = [
  {
    question: 'How quickly can you respond to enquiries?',
    answer: `All enquiries receive a response within one business day. For urgent requests, email us directly at ${EMAIL} with "URGENT" in the subject line.`,
  },
  {
    question: 'What are your minimum order quantities?',
    answer:
      'We work with flexible quantities. Ingredient samples available from 1 kg for development and testing. Commercial orders typically start at 5-10 kg, with larger quantities available for scale.',
  },
  {
    question: 'Do you offer R&D support for new product concepts?',
    answer:
      "Yes. We specialize in R&D support from concept through commercial formulation. Share your product idea, and we'll discuss a custom development plan.",
  },
  {
    question: 'Can you help with regulatory compliance?',
    answer:
      'Yes. We provide guidance on FSSAI compliance, health claim positioning, and ingredient selection for regulatory approval in India.',
  },
  {
    question: 'Do you supply all ingredients in bulk?',
    answer:
      "All 50+ ingredients in our portfolio are available in flexible quantities: 1 kg, 5 kg, 10 kg, 25 kg+. Some specialty ingredients may have minimum quantities—we'll discuss during your enquiry.",
  },
  {
    question: 'How do I request a quote?',
    answer: `Fill out the form above or email ${EMAIL} with your requirements (ingredient names, quantities, format). Our team will provide pricing and specifications within one business day.`,
  },
];

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  requirement: '',
  message: '',
};

export default function Contact() {
  usePageMeta(
    'Contact Gomzi Lifesciences | Enquire About Ingredients & R&D',
    'Contact Gomzi Lifesciences for ingredient sourcing, R&D support, or product development. Send an enquiry or call our team.'
  );

  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSent(false);
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting || sent) return;
    setSubmitting(true);
    setSent(false);
    setError('');
    try {
      await submitContactInquiry(form, window.location.href);
      setSent(true);
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(err.message || 'Your enquiry could not be sent. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section
        style={{ padding: '3.25rem 1.5rem 1.25rem', marginTop: '72px', textAlign: 'center' }}
      >
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ color: '#99c229', marginBottom: '1rem' }}>
            Let's Build Something Great
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5b6378', lineHeight: 1.7 }}>
            Get in touch for ingredient enquiries, R&D collaboration, or
            product development support. Our team will respond within one
            business day.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT FORM & INFO ==================== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div>
              <h2 style={{ color: '#99c229', marginBottom: '1.5rem' }}>
                Send an Enquiry
              </h2>
              <form className="contact-form" onSubmit={onSubmit} aria-busy={submitting}>
                <fieldset disabled={submitting} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirement">
                      What are you interested in? *
                    </label>
                    <CustomSelect
                      id="requirement"
                      name="requirement"
                      required
                      value={form.requirement}
                      options={INTEREST_OPTIONS}
                      placeholder="Select an option"
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your product idea *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="What are you looking to develop? Any specific ingredients or formats in mind?"
                      value={form.message}
                      onChange={onChange}
                    />
                  </div>

                </fieldset>
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="btn btn-red btn-lg"
                  style={{
                    width: '100%',
                    ...(submitting ? { opacity: 0.7, cursor: 'wait' } : {}),
                    ...(sent ? { backgroundColor: '#99c229' } : {}),
                  }}
                >
                  {submitting ? 'Sending Enquiry…' : sent ? '✓ Enquiry Sent!' : 'Send Enquiry'}
                </button>
                {error && <p role="alert" style={{ color: '#b42318', marginTop: '1rem' }}>{error}</p>}
                {sent && (
                  <p role="status" style={{ color: '#507016', marginTop: '1rem' }}>
                    Thank you for your enquiry! We will get back to you within one business day.
                  </p>
                )}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#5b6378',
                    marginTop: '1rem',
                    textAlign: 'center',
                  }}
                >
                  We'll get back to you within one business day.
                </p>
              </form>
            </div>

            {/* INFO */}
            <div>
              <h2 style={{ color: '#99c229', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>

              <div
                style={{
                  background: '#f5f6fb',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #99c229',
                  marginBottom: '1.5rem',
                }}
              >
                <h3 style={{ color: '#99c229', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Email
                </h3>
                <p style={{ color: '#5b6378', margin: 0 }}>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{
                      color: '#111111',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    {EMAIL}
                  </a>
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#5b6378',
                    margin: '0.5rem 0 0',
                    fontStyle: 'italic',
                  }}
                >
                  For any enquiries, quotes, or collaboration requests
                </p>
              </div>

              <div
                style={{
                  background: '#f5f6fb',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #99c229',
                  marginBottom: '1.5rem',
                }}
              >
                <h3 style={{ color: '#99c229', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Headquarters
                </h3>
                <p style={{ color: '#5b6378', margin: '0.5rem 0', fontWeight: 600 }}>
                  Surat, Gujarat, India
                </p>
                <p style={{ fontSize: '0.9rem', color: '#5b6378', margin: 0 }}>
                  RJD Textile Park, Ichchhapor, Hazira Road, Surat 394510
                </p>
              </div>

              <div
                style={{
                  background: '#f5f6fb',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #99c229',
                  marginBottom: '1.5rem',
                }}
              >
                <h3 style={{ color: '#99c229', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Website
                </h3>
                <p style={{ color: '#5b6378', margin: 0 }}>GOMZILIFESCIENCES.IN</p>
              </div>

              <div
                style={{
                  background: '#f5f6fb',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  borderTop: '4px solid #99c229',
                  marginTop: '2rem',
                }}
              >
                <p style={{ color: '#5b6378', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  <strong>Response Time:</strong> All enquiries receive a
                  response within one business day.
                </p>
                <p style={{ color: '#5b6378', margin: 0, fontSize: '0.95rem' }}>
                  <strong>Support:</strong> Our team is available to discuss
                  your product vision, ingredient requirements, and R&D needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="section alt-bg">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#99c229', marginBottom: '2rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>

          {FAQS.map((faq, index) => (
            <div
              key={faq.question}
              style={{ marginBottom: index === FAQS.length - 1 ? 0 : '2rem' }}
            >
              <h3 style={{ color: '#99c229', marginBottom: '0.5rem' }}>
                {faq.question}
              </h3>
              <p style={{ color: '#5b6378', margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Start?</h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#5b6378',
              marginBottom: '2rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Whether you need ingredients, R&D support, or both—let's talk
            about your product vision.
          </p>
          <a
            href="#contact"
            className="btn btn-red btn-lg"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement(document.getElementById('contact'));
            }}
          >
            Send an Enquiry Above
          </a>
        </div>
      </section>
    </>
  );
}
