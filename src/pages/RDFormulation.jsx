import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const FORMATS = [
  { name: 'Powders', badge: 'Solid Dose', image: '/categories/powders.webp', alt: 'Powder formulation and blending' },
  { name: 'Sachets', badge: 'Unit Dose', image: '/categories/sachets.webp', alt: 'Sachet packaging and delivery' },
  { name: 'Capsules', badge: 'Encapsulated', image: '/categories/capsules.webp', alt: 'Nutraceutical capsules' },
  { name: 'Tablets', badge: 'Compressed', image: '/categories/tablets.webp', alt: 'Compressed tablets' },
  { name: 'Liquids', badge: 'Oral Solution', image: '/categories/liquids.webp', alt: 'Liquid formulations and syrups' },
  { name: 'Gels', badge: 'Semi-Solid', image: '/categories/gels.webp', alt: 'Nutritional gels' },
  { name: 'Jellies', badge: 'Nutra Confection', image: '/categories/jellies.webp', alt: 'Functional jellies' },
  { name: 'Gummies', badge: 'Functional Chew', image: '/categories/gummies.webp', alt: 'Nutraceutical gummy vitamins' },
  { name: 'Functional Beverages', badge: 'Ready-to-Drink', image: '/categories/functional-beverages.webp', alt: 'Functional beverages and drinks' },
];

const CAPABILITIES = [
  {
    title: 'Stability & Shelf Life',
    text: 'Optimized formulations for shelf stability. Testing across temperature and humidity conditions.',
  },
  {
    title: 'Sensory Optimization',
    text: 'Taste, texture, and mouthfeel refinement. Masking strategies for difficult actives.',
  },
  {
    title: 'Bioavailability',
    text: 'Formulation strategies to optimize absorption and efficacy of active ingredients.',
  },
  {
    title: 'Packaging Guidance',
    text: 'Recommendations for packaging compatibility and preservation strategies.',
  },
  {
    title: 'Ingredient Compatibility',
    text: 'Testing for interactions between ingredients. Stability studies and shelf-life projections.',
  },
  {
    title: 'Manufacturing Scalability',
    text: 'Formulations designed for efficient manufacturing. Process optimization for scale.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Concept & Strategy',
    text: 'Understand your product vision. Identify target market, positioning, and ingredient requirements.',
  },
  {
    number: '02',
    title: 'Formulation Design',
    text: 'Develop initial formulations. Select ingredients, ratios, and delivery formats.',
  },
  {
    number: '03',
    title: 'Sample Development',
    text: 'Create development samples. Small-batch production for testing and feedback.',
  },
  {
    number: '04',
    title: 'Optimization',
    text: 'Refine based on feedback. Sensory optimization, stability testing, bioavailability work.',
  },
  {
    number: '05',
    title: 'Finalization',
    text: 'Lock down the final formula. Complete documentation and manufacturing specifications.',
  },
  {
    number: '06',
    title: 'Scale & Support',
    text: 'Connect with manufacturing partners. Support commercial scale-up and production.',
  },
];

const EXPERTISE_AREAS = [
  {
    title: "Sports & Performance",
    text: 'Protein powders, pre-workout formulations, recovery supplements. Amino acid ratios, taste masking, mixability optimization.',
  },
  {
    title: "Women's Wellness",
    text: 'Hormonal balance, beauty, bone health formulations. Specialized ingredient combinations and bioavailability enhancement.',
  },
  {
    title: 'Gut & Digestive Health',
    text: 'Probiotic formulations, fiber blends, digestive enzyme combinations. Stability and shelf-life optimization.',
  },
  {
    title: 'Sleep & Recovery',
    text: 'Melatonin formulations, relaxation blends, sleep-supporting supplements. Sensory optimization for bedtime use.',
  },
  {
    title: 'Functional Beverages',
    text: 'Protein drinks, wellness shots, functional juices. Taste masking, stability in liquid formats, pH optimization.',
  },
  {
    title: 'Special Populations',
    text: "Kids' formulations, elderly nutrition, specific dietary needs. Palatability, texture, and compliance optimization.",
  },
];

const RND_DELIVERABLES = [
  {
    title: 'Technical Documentation',
    text: 'Complete formulation specs, manufacturing instructions, and quality control parameters.',
  },
  {
    title: 'Stability Data',
    text: 'Real-time stability testing. Shelf-life projections and storage recommendations.',
  },
  {
    title: 'Manufacturing Support',
    text: 'Scale-up guidance and manufacturing partner connections. Process validation support.',
  },
  {
    title: 'Regulatory Guidance',
    text: 'FSSAI compliance support and health claim positioning. Documentation for regulatory submissions.',
  },
  {
    title: 'Ongoing Support',
    text: 'Post-launch troubleshooting and optimization. Continuous improvement recommendations.',
  },
  {
    title: 'Quality Assurance',
    text: 'Testing at each development stage. Third-party lab coordination available.',
  },
];

const TIMELINE_TIERS = [
  {
    label: 'Simple Formulation (Vitamin blend, single-format)',
    duration: '4-6 weeks from concept to final formula',
  },
  {
    label: 'Moderate Complexity (Multi-active formula, taste optimization)',
    duration: '8-12 weeks from concept to final formula',
  },
  {
    label: 'High Complexity (Gummies, functional beverages, bioavailability work)',
    duration: '12-16 weeks from concept to final formula',
  },
];

export default function RDFormulation() {
  usePageMeta(
    'R&D & Formulation | Gomzi Lifesciences | Product Development',
    'Gomzi Lifesciences offers expert R&D and formulation support for nutraceutical products. Develop across powders, capsules, liquids, gummies, and more.'
  );

  return (
    <>
      {/* ==================== PAGE HERO (full-width banner) ==================== */}
      <section className="rd-hero-banner">
        <div className="rd-hero-inner">
          <picture>
            {/* Mobile View: High-resolution portrait banner (≤ 768px) */}
            <source
              media="(max-width: 768px)"
              srcSet="/rd-hero-mobile.webp"
              type="image/webp"
              width="756"
              height="1024"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/rd-hero-mobile.jpg"
              type="image/jpeg"
              width="756"
              height="1024"
            />
            {/* Desktop View: Landscape banner (> 768px) */}
            <source
              media="(min-width: 769px)"
              srcSet="/rd-hero-banner.webp"
              type="image/webp"
              width="1672"
              height="750"
            />
            <img
              src="/rd-hero-banner.png"
              alt="Natural Wellness Supplement Collection - Formulation & Development"
              className="rd-hero-img"
              width="1672"
              height="750"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">R&D & Formulation</h1>
          <p className="sr-only">
            Concept to Commercial Formulation. From product concept to commercial formulation. Expert development
            across multiple formats. Build science-backed, market-ready products.
          </p>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="section rd-section" id="formats">
        <div className="container">
          <h2 className="section-center-title">Development Formats</h2>
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
            We develop across 9+ product formats. From simple powders to
            complex gummies and functional beverages.
          </p>

          <div className="rd-formats-grid" style={{ marginBottom: '3rem' }}>
            {FORMATS.map((item) => (
              <div className="rd-format-card" key={item.name}>
                <div className="rd-format-card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="rd-format-card-img"
                    loading="lazy"
                  />
                  <span className="rd-format-badge">{item.badge}</span>
                </div>
                <div className="rd-format-card-body">
                  <h3 className="rd-format-card-title">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="feature-grid">
            {CAPABILITIES.map((capability) => (
              <div className="feature-item" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE R&D PROCESS ==================== */}
      <section className="section alt-bg rd-section">
        <div className="container">
          <h2 className="section-center-title">The R&D Process</h2>
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
            A structured approach from idea to commercial formulation. Clear
            milestones and deliverables at each stage.
          </p>

          <div className="process-steps rd-process-steps">
            {PROCESS_STEPS.map((step) => (
              <div className="process-step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE AREAS ==================== */}
      <section className="section rd-section">
        <div className="container">
          <h2 className="section-center-title">Expertise Areas</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {EXPERTISE_AREAS.map((area) => (
              <div
                key={area.title}
                style={{
                  background: '#f5f6fb',
                  padding: '2rem',
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ color: '#99c229', marginBottom: '1rem' }}>
                  {area.title}
                </h3>
                <p style={{ color: '#5b6378' }}>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT COMES WITH R&D ==================== */}
      <section className="section alt-bg rd-section">
        <div className="container">
          <h2 className="section-center-title">What Comes with R&D Support</h2>
          <div className="value-grid">
            {RND_DELIVERABLES.map((deliverable) => (
              <div className="value-card" key={deliverable.title}>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE & INVESTMENT ==================== */}
      <section className="section rd-section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#99c229', marginBottom: '1rem', textAlign: 'center' }}>
            Development Timeline
          </h2>
          <div
            style={{
              background: '#f5f6fb',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '2rem',
            }}
          >
            {TIMELINE_TIERS.map((tier) => (
              <div style={{ marginBottom: tier === TIMELINE_TIERS[TIMELINE_TIERS.length - 1] ? 0 : '1rem' }} key={tier.label}>
                <p style={{ fontWeight: 600, color: '#99c229', marginBottom: '0.5rem' }}>
                  {tier.label}
                </p>
                <p style={{ color: '#5b6378' }}>{tier.duration}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#5b6378', fontSize: '0.95rem' }}>
            Timelines depend on formulation complexity, number of iterations,
            and testing requirements. Custom development agreements available.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section alt-bg rd-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Start R&D?</h2>
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
            Have a product idea? Let's discuss your vision and create a custom
            R&D plan.
          </p>
          <Link to="/contact" className="btn btn-red btn-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
