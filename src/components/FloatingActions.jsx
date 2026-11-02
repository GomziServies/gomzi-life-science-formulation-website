import { Link, useLocation } from 'react-router-dom';
import { scrollToElement } from './ScrollToTop';

export default function FloatingActions() {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      const formEl = document.getElementById('contact');
      if (formEl) {
        scrollToElement(formEl);
        // Softly set focus on the first field after scrolling begins
        setTimeout(() => {
          const firstField = document.getElementById('name');
          if (firstField) {
            firstField.focus({ preventScroll: true });
          }
        }, 350);
      }
    }
  };

  return (
    <div className="floating-action-container">
      <Link
        to="/contact#contact"
        onClick={handleClick}
        className="floating-enquire-btn"
        aria-label="Enquire Now - Go to Contact Form"
        title="Enquire Now"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </Link>
    </div>
  );
}
