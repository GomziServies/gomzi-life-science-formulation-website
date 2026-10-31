import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';


const FACILITIES = [
  {
    title: 'Cleanroom Powder Blending',
    subtitle: 'Surat Manufacturing Unit',
    text: 'ISO & WHO-GMP compliant cleanroom facility equipped with industrial ribbon blenders, fluid-bed processors, and high-shear mixers for homogeneous nutraceutical blending.',
    image: '/facility/cleanroom-manufacturing.webp',
    alt: 'Gomzi cleanroom powder blending equipment and operators in protective gear'
  },
  {
    title: 'In-House Analytical & QC Lab',
    subtitle: 'Quality Assurance Testing',
    text: 'Advanced laboratory infrastructure conducting HPLC assay testing, heavy metal screening, microbiological assays, and raw material potency verification.',
    image: '/facility/quality-control-lab.webp',
    alt: 'Microscopic and analytical quality control testing laboratory'
  },
  {
    title: 'Automated Augering & Packaging',
    subtitle: 'Unit Dose & Bulk Packaging',
    text: 'High-speed automated jar filling, induction sealing, sachet packing, and blister lines operating under strict humidity and atmospheric control.',
    image: '/facility/packaging-filling-line.webp',
    alt: 'Supplement powder auger filling and packaging line with operators'
  }
];

const CERTIFICATIONS = [
  {
    name: 'FSSAI',
    label: 'Food Safety',
    logos: [{ src: '/certs/fssai.png', alt: 'FSSAI logo' }],
  },
  {
    name: 'GMP',
    label: 'Manufacturing Standards',
    logos: [{ src: '/certs/gmp-badge.svg', alt: 'GMP — Good Manufacturing Practice badge' }],
  },
  {
    name: 'WHO',
    label: 'Pharmaceutical Grade',
    logos: [{ src: '/certs/who.png', alt: 'World Health Organization logo' }],
  },
  {
    name: 'Halal & Kosher',
    label: 'Certification Available',
    logos: [
      { src: '/certs/halal.png', alt: 'Halal certification logo' },
      { src: '/certs/kosher.png', alt: 'OU Kosher certification logo' },
    ],
  },
];

export default function About() {
  usePageMeta(
    'About Gomzi Lifesciences | Nutraceutical Ingredients & R&D',
    "Learn about Gomzi Lifesciences—a B2B ingredients and R&D partner for health, wellness, and functional food brands. Part of Gomzi Group's 15+ year heritage."
  );

  return (
    <>
      {/* ==================== PAGE HERO (full-width background banner) ==================== */}
      <section className="about-hero-banner">
        <div className="about-hero-inner">
          <picture>
            {/* Mobile View: High-resolution portrait banner (≤ 768px) */}
            <source
              media="(max-width: 768px)"
              srcSet="/about-hero-mobile.webp"
              type="image/webp"
              width="756"
              height="1024"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/about-hero-mobile.jpg"
              type="image/jpeg"
              width="756"
              height="1024"
            />
            {/* Desktop View: Landscape banner (> 768px) */}
            <source
              media="(min-width: 769px)"
              srcSet="/about-hero-bg.webp"
              type="image/webp"
              width="1672"
              height="750"
            />
            <img
              src="/about-hero-bg.png"
              alt="About Gomzi Lifesciences - Pharmaceutical & Nutraceutical Manufacturing Facilities"
              className="about-hero-img"
              width="1672"
              height="750"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">About Gomzi Lifesciences</h1>
          <p className="sr-only">
            Part of Gomzi Group · 15+ Years. Built on 15+ years of pharma and nutraceutical expertise. A B2B
            partner for brands developing science-backed health products.
          </p>
        </div>
      </section>

      {/* ==================== STORY ==================== */}
      <section className="section about-story-section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            <div>
              <h2 style={{ color: '#99c229', marginBottom: '1rem' }}>Our Story</h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#5b6378',
                  marginBottom: '1.5rem',
                }}
              >
                Gomzi Lifesciences was born from Gomzi Group's deep heritage in
                pharmaceutical and nutraceutical manufacturing. With 15+ years of
                experience sourcing and formulating health ingredients, we saw an
                opportunity to bring our expertise directly to brands.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#5b6378',
                  marginBottom: '1.5rem',
                }}
              >
                Most brands start with a product idea but lack access to quality
                raw materials and R&D support. We saw brands struggling with
                ingredient sourcing, formulation complexity, and manufacturing
                connections.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#5b6378' }}>
                Gomzi Lifesciences changes that. We bring quality ingredients, R&D
                expertise, and manufacturing connections—everything a brand needs
                to bring their product to market.
              </p>
            </div>
            <div>
              <img
                src="/facility/sterile-powder-processing-facility.webp"
                alt="Gomzi Lifesciences Sterile Powder Processing Facility"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '380px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VALUES ==================== */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-center-title">Mission & Values</h2>
          <div className="value-grid mission-values-grid">
            <Reveal className="value-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(153, 194, 41, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99c229"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#99c229" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower health and wellness brands with quality raw
                materials, expert R&D, and end-to-end product development
                support.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(153, 194, 41, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99c229"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>
                Every ingredient meets pharmaceutical-grade standards.
                Pharmaceutical, nutraceutical, and food-grade certifications
                across our portfolio.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(153, 194, 41, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99c229"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>B2B Focused</h3>
              <p>
                We work exclusively with brands and manufacturers. Our approach
                is flexible, professional, and built on long-term partnerships.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(153, 194, 41, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99c229"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2v7.31L4.1 19.46A2 2 0 0 0 5.82 22h12.36a2 2 0 0 0 1.72-2.54L14 9.31V2" />
                  <path d="M8.5 2h7" />
                  <path d="M7 16h10" />
                  <circle cx="10" cy="18.5" r="1" fill="#99c229" />
                  <circle cx="13.5" cy="17.5" r="1.5" fill="#99c229" />
                </svg>
              </div>
              <h3>Science-Led</h3>
              <p>
                Every recommendation is backed by ingredient knowledge,
                formulation expertise, and evidence-based product development
                practices.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE DO ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">What We Help With</h2>
          <div className="feature-grid">
            <Reveal className="feature-item">
              <h3>Ingredient Sourcing</h3>
              <p>
                Access 50+ nutraceutical-grade raw materials. From common amino
                acids to clinical specialty ingredients.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Product Formulation</h3>
              <p>
                R&D support to develop stable, effective formulations. Sensory
                optimization and ingredient compatibility work.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Format Development</h3>
              <p>
                Experience across powders, capsules, tablets, liquids,
                gummies, and functional beverages.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Manufacturing Support</h3>
              <p>
                Connections with established manufacturing partners. Scale from
                development batches to commercial production.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Regulatory Guidance</h3>
              <p>
                Support with ingredient selection for FSSAI compliance and
                health claim positioning.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Flexible Quantities</h3>
              <p>
                Available in development quantities (1 kg) through commercial
                scale (25 kg+).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== Gomzi GROUP ==================== */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-center-title">Part of Gomzi Group</h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.05rem',
              color: '#5b6378',
              marginBottom: '2rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Gomzi Lifesciences is part of Gomzi Group—a integrated pharma, amino acid,
            and nutraceutical supply business founded 15+ years ago.
          </p>

          <div className="value-grid">
            <Reveal className="value-card">
              <h3>Gomzi Chemicals</h3>
              <p style={{ fontWeight: 600, color: '#111111', marginBottom: '1rem' }}>
                Raw Material Distribution
              </p>
              <p>
                A trusted source for pharmaceutical and nutraceutical raw
                materials. Serving manufacturers, distributors, and businesses
                across India with quality ingredients and reliable sourcing.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <h3>GomziAmino Pharma</h3>
              <p style={{ fontWeight: 600, color: '#111111', marginBottom: '1rem' }}>
                Amino Acid Manufacturing
              </p>
              <p>
                WHO-GMP certified manufacturing of pharmaceutical-grade amino
                acids. Specialized in injectable-grade amino acids and
                nutraceutical-grade formulations.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <h3>Gomzi Formulations</h3>
              <p style={{ fontWeight: 600, color: '#111111', marginBottom: '1rem' }}>
                R&D & Formulation
              </p>
              <p>
                Expert formulation support. From concept development through
                commercial manufacturing. Partner with brands to create
                market-ready products.
              </p>
            </Reveal>
          </div>

          <div
            style={{
              background: 'white',
              padding: '2rem 2.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #99c229',
              marginTop: '2rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            <h3 style={{ color: '#99c229', marginBottom: '1rem' }}>
              Why This Matters
            </h3>
            <p style={{ color: '#5b6378', lineHeight: 1.7, margin: 0 }}>
              By being part of Gomzi Group, we offer a complete solution. We
              don't just supply ingredients—we understand manufacturing,
              quality systems, and product development at every stage. That
              translates to faster development cycles, lower costs, and better
              products.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS ==================== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Certifications & Compliance</h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#5b6378',
              marginBottom: '2rem',
            }}
          >
            Our operations meet stringent pharmaceutical and food safety
            standards.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} style={{ minWidth: '200px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    height: '100px',
                    marginBottom: '0.75rem',
                  }}
                >
                  {cert.logos.map((logo) => (
                    <img
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      style={{
                        maxHeight: '92px',
                        maxWidth: '110px',
                        objectFit: 'contain',
                      }}
                    />
                  ))}
                </div>
                <p style={{ fontWeight: 700, color: '#99c229', fontSize: '1.1rem' }}>
                  {cert.name}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#5b6378' }}>
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section alt-bg" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Develop Your Product?</h2>
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
            Let's talk about your product idea. Whether you need ingredients,
            R&D support, or end-to-end development—we're here to help.
          </p>
          <Link to="/contact" className="btn btn-red btn-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
