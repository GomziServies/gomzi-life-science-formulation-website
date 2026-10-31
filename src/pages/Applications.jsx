import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';

const APPLICATIONS = [
  {
    title: 'Sports Nutrition',
    text: 'Protein powders, pre-workout formulas, amino acid blends, recovery supplements.',
    tags: ['BCAA', 'Creatine', 'Performance'],
  },
  {
    title: "Women's Wellness",
    text: 'Hormonal balance, beauty-from-within, bone health, menstrual support.',
    tags: ['Collagen', 'Beauty', "Women's Health"],
  },
  {
    title: "Men's Wellness",
    text: 'Energy, stamina, muscle support, prostate health, vitality.',
    tags: ['Energy', 'Performance', 'Wellness'],
  },
  {
    title: 'Gut & Digestive Health',
    text: 'Probiotics, prebiotics, digestive enzymes, fiber blends, microbiome support.',
    tags: ['ProBionic®', 'Fiber', 'Digestion'],
  },
  {
    title: 'Functional Nutrition',
    text: 'Meal replacement, nutritional beverages, protein supplements, daily nutrition.',
    tags: ['Meal Replacement', 'Protein', 'Nutrition'],
  },
  {
    title: 'Beauty & Wellness',
    text: 'Skin health, hair care, nail strength, collagen support, anti-aging.',
    tags: ['Beauty', 'Collagen', 'Skin'],
  },
  {
    title: 'Healthy Aging',
    text: 'Joint support, bone health, cognitive function, mobility, vitality for mature adults.',
    tags: ['Joint Health', 'Aging', 'Mobility'],
  },
  {
    title: 'Cognitive & Focus',
    text: 'Mental clarity, focus enhancement, brain health, stress support, nootropics.',
    tags: ['Focus', 'Cognition', 'Brain'],
  },
  {
    title: 'Energy & Performance',
    text: 'Energy boost, endurance, stamina, fatigue support, vitality enhancement.',
    tags: ['Energy', 'Endurance', 'Performance'],
  },
  {
    title: 'Vitamins & Minerals',
    text: 'Micronutrient supplementation, immunity support, deficiency correction.',
    tags: ['Vitamin D', 'Multivitamin', 'Minerals'],
  },
  {
    title: 'Functional Foods & Beverages',
    text: 'Fortified foods, functional beverages, wellness drinks, nutraceutical snacks.',
    tags: ['Beverages', 'Foods', 'Fortification'],
  },
];

const WHY_SERIES = [
  {
    title: 'Consumer Trends',
    text: 'Each category aligns with real consumer health interests and market growth. We stay ahead of these trends.',
  },
  {
    title: 'Proven Ingredients',
    text: "We've validated ingredient combinations and formulation strategies for each category through market success.",
  },
  {
    title: 'Market Access',
    text: 'Our experience helps you position your product correctly in each category. Distribution insights included.',
  },
  {
    title: 'Regulatory Knowledge',
    text: 'Each category has specific regulatory considerations. We guide you through FSSAI and health claim positioning.',
  },
  {
    title: 'Competitive Analysis',
    text: 'We understand the competitive landscape in each category. Help you identify differentiation opportunities.',
  },
  {
    title: 'Flexible Scaling',
    text: 'Whether launching in one category or expanding across multiple—we grow with your brand.',
  },
];

export default function Applications() {
  usePageMeta(
    'Applications | Gomzi Lifesciences | Nutraceutical Product Categories',
    "Explore 11 product categories where Gomzi Lifesciences ingredients and R&D support apply: sports nutrition, women's wellness, gut health, and more."
  );

  return (
    <>
      {/* ==================== PAGE HERO (full-width banner) ==================== */}
      <section className="hero-banner-section">
        <div className="hero-banner-wrapper">
          <picture>
            {/* Mobile View: High-resolution portrait banner (≤ 768px) */}
            <source
              media="(max-width: 768px)"
              srcSet="/applications-hero-mobile.webp"
              type="image/webp"
              width="756"
              height="1024"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/applications-hero-mobile.jpg"
              type="image/jpeg"
              width="756"
              height="1024"
            />
            {/* Desktop View: Landscape banner (> 768px) */}
            <source
              media="(min-width: 769px)"
              srcSet="/applications-hero-banner.webp"
              type="image/webp"
              width="1672"
              height="750"
            />
            <img
              src="/applications-hero-banner.png"
              alt="Applications & Categories - 11 Product Categories | Gomzi Lifesciences"
              className="hero-banner-img"
              width="1672"
              height="750"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">Applications & Categories</h1>
          <p className="sr-only">
            11 product categories where Gomzi Lifesciences ingredients and R&D
            expertise create differentiated, market-ready solutions.
          </p>
        </div>
      </section>

      {/* ==================== APPLICATIONS GRID ==================== */}
      <section className="section applications-grid-section">
        <div className="container">
          <div className="application-grid">
            {APPLICATIONS.map((application) => (
              <Reveal className="application-card" key={application.title}>
                <h3>{application.title}</h3>
                <p>{application.text}</p>
                <div className="application-tags">
                  {application.tags.map((tag) => (
                    <span key={tag} className="application-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY THESE CATEGORIES ==================== */}
      <section className="section alt-bg why-categories-section">
        <div className="container">
          <h2 className="section-center-title">Why These Categories?</h2>
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
            These 11 categories represent the fastest-growing,
            highest-opportunity segments of the nutraceutical market. We've
            developed deep expertise and ingredient portfolios for each.
          </p>

          <div className="feature-grid">
            {WHY_SERIES.map((column) => (
              <Reveal className="feature-item" key={column.title}>
                <h3>{column.title}</h3>
                <p>{column.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NOT SURE? ==================== */}
      <section className="section applications-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Not Sure Which Category Fits Your Idea?</h2>
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
            Let's talk through your product concept. Our team can help you
            position it in the right category and develop accordingly.
          </p>
          <Link to="/contact" className="btn btn-red btn-lg">
            Discuss Your Product
          </Link>
        </div>
      </section>
    </>
  );
}
