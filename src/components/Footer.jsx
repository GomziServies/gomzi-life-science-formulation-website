import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './FloatingActions';
import { whatsappLink, WHATSAPP_DISPLAY } from '../config/contact';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/rd-formulation', label: 'R&D & Formulation' },
  { to: '/applications', label: 'Applications' },
  { to: '/contact', label: 'Contact' },
];

const GROUP_LINKS = ['Gomzi Chemicals', 'Gomzi Amino'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-brand" aria-label="Gomzi Lifesciences Home">
            <img
              src="/gomzi-logo.webp"
              alt="Gomzi Lifesciences Logo"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-brand-desc">
            A division of Gomzi Chemicals. Advanced R&D, formulation support, and reliable nutraceutical raw material sourcing.
          </p>
          <div className="footer-meta-pill">
            <span className="footer-meta-dot"></span>
            <span>Surat, Gujarat, India</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:info@gomzilifesciences.in" className="footer-contact-link">
                <svg
                  className="footer-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@gomzilifesciences.in</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <WhatsAppIcon size={16} className="footer-icon" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href="https://gomzilifesciences.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <svg
                  className="footer-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>GOMZILIFESCIENCES.IN</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Our Group</h4>
          <ul className="footer-links">
            {GROUP_LINKS.map((name) => (
              <li key={name}>
                <a href="#" className="footer-group-link">
                  <span>{name}</span>
                  <svg
                    className="footer-arrow-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; 2026 Gomzi Lifesciences. All rights reserved.</p>
          <div className="footer-bottom-tags">
            <span>Nutraceutical Formulation</span>
            <span className="footer-dot-sep">•</span>
            <span>Raw Material Distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
