import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/rd-formulation', label: 'R&D & Formulation' },
  { to: '/applications', label: 'Applications' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header scroll effect (same threshold as the original script.js)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        {/* Logo only — no separate brand text (logo image contains the name) */}
        <Link to="/" className="brand" aria-label="Gomzi Lifesciences">
          <img src="/gomzi-logo.webp" alt="Gomzi Lifesciences Logo" className="logo-img" />
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className={`nav-links${open ? ' active' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-red btn-sm" onClick={closeMenu}>
              Enquire Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
