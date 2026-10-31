import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';


const SHOWCASE_PRODUCTS = [
  {
    name: 'Gomzi Whey Isolate 2.0',
    category: 'Whey Protein',
    specs: '27g Protein · 6.1g BCAAs · High Biological Value',
    image: '/showcase/gomzi-whey-isolate.webp',
    alt: 'Gomzi Whey Isolate 2.0 chocolate supplement container'
  },
  {
    name: 'Gomzi Fermented BCAA',
    category: 'Amino Acids',
    specs: '2:1:1 Ratio · Tangy Orange · Intra-Workout Recovery',
    image: '/showcase/gomzi-bcaa.webp',
    alt: 'Gomzi BCAA Branched-Chain Amino Acids tangy orange powder jar'
  },
  {
    name: 'Gomzi Ignite Pre-Workout',
    category: 'Pre-Workout',
    specs: '4.1g Citrulline · Beta-Alanine · Fruit Punch Energy',
    image: '/showcase/gomzi-preworkout.webp',
    alt: 'Gomzi Ignite Pre-Workout fruit punch powder container'
  },
  {
    name: 'Gomzi Pure Creatine',
    category: 'Performance',
    specs: '100% Micronized Monohydrate · Rapid ATP Synthesis',
    image: '/showcase/gomzi-creatine.webp',
    alt: 'Gomzi Micronized Creatine Monohydrate lemon flavor'
  },
  {
    name: 'Gomzi Clean Mass Gainer',
    category: 'Mass Gainer',
    specs: 'Complex Carbohydrates · High Calorie · Chocolate Blend',
    image: '/showcase/gomzi-mass-gainer.webp',
    alt: 'Gomzi Mass Gainer chocolate flavor formulation jar'
  }
];

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

const subtitleStyle = {
  color: '#111111',
  fontWeight: 600,
  fontSize: '0.95rem',
  marginBottom: '1rem',
};

export default function Home() {
  usePageMeta(
    'Gomzi Lifesciences | Nutraceutical Ingredients & R&D for Health Brands',
    'Gomzi Lifesciences supplies nutraceutical-grade raw materials and provides R&D & formulation support for health, wellness, sports nutrition and functional food brands.'
  );

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-banner-section">
        <div className="hero-banner-wrapper">
          <picture>
            {/* Mobile View: High-resolution portrait banner (≤ 768px) */}
            <source
              media="(max-width: 768px)"
              srcSet="/hero-banner-mobile.webp"
              type="image/webp"
              width="756"
              height="1024"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/hero-banner-mobile.jpg"
              type="image/jpeg"
              width="756"
              height="1024"
            />
            {/* Desktop View: Landscape banner (> 768px) */}
            <source
              media="(min-width: 769px)"
              srcSet="/hero-banner-master.webp"
              type="image/webp"
              width="1672"
              height="750"
            />
            <img
              src="/hero-banner-master.png"
              alt="Nutraceutical Ingredients & R&D, Under One Roof - Gomzi Lifesciences"
              className="hero-banner-img"
              width="1672"
              height="750"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">Nutraceutical Ingredients & R&D, Under One Roof.</h1>
          <p className="sr-only">
            Quality raw materials, expert formulation, and manufacturing support—everything brands need to develop market-ready products.
          </p>
          {/* Action buttons integrated into banner open space */}
          <div className="hero-banner-ctas">
            <Link to="/ingredients" className="hero-btn-primary">
              Explore Ingredients
            </Link>
            <Link to="/rd-formulation" className="hero-btn-secondary">
              Talk to Our R&D Team
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SOURCE. DEVELOP. SCALE. ==================== */}
      <section className="value-prop">
        <div className="container">
          <h2 className="section-center-title">Source. Develop. Scale.</h2>
          <div className="value-grid">
            <Reveal className="value-card">
              <div className="value-number">01</div>
              <h3>Source</h3>
              <p>
                Nutraceutical-grade raw materials including amino acids,
                vitamins, minerals, and specialty ingredients.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <div className="value-number">02</div>
              <h3>Develop</h3>
              <p>
                R&D and formulation support across powders, liquids, capsules,
                gummies, and other formats.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <div className="value-number">03</div>
              <h3>Scale</h3>
              <p>
                Manufacturing connections and product development support to
                take your formula to market.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== EXPLORE INGREDIENTS ==================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Our Ingredient Portfolio</h2>
            <p className="section-subtitle">
              50+ nutraceutical-grade raw materials across amino acids,
              vitamins, minerals, and specialty ingredients.
            </p>
          </Reveal>
          <div className="value-grid">
            <Reveal className="value-card">
              <h3>Amino Acids</h3>
              <p>
                23 essential and non-essential amino acids for sports
                nutrition, wellness, and performance.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#5b6378', marginTop: '1rem' }}>
                L-Glutamine, L-Arginine, L-Citrulline, Taurine, Beta Alanine + 18 more
              </p>
            </Reveal>
            <Reveal className="value-card">
              <h3>Vitamins & Minerals</h3>
              <p>
                Essential vitamins and mineral salts for health, immunity, and
                functional nutrition.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#5b6378', marginTop: '1rem' }}>
                Vitamin D3, Magnesium, Zinc, Iron, Selenium + more
              </p>
            </Reveal>
            <Reveal className="value-card">
              <h3>Sports & Performance</h3>
              <p>
                Specialized ingredients for athletic performance and sports
                nutrition products.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#5b6378', marginTop: '1rem' }}>
                Creatine Monohydrate, HMB Calcium, Citrulline Malate
              </p>
            </Reveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <Link to="/ingredients" className="btn btn-red btn-lg">
              View All Ingredients →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== R&D & FORMULATION ==================== */}
      <section className="section alt-bg">
        <div className="container">
          <Reveal className="section-header">
            <h2>R&D & Formulation</h2>
            <p className="section-subtitle">
              From product concept to commercial formulation. We develop across
              multiple formats to bring your ideas to market.
            </p>
          </Reveal>
          <div className="rd-formats-grid">
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
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <Link to="/rd-formulation" className="btn btn-red btn-lg">
              Explore R&D & Formulation →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BUILT FOR BRANDS ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">Built for Brands at Every Stage</h2>
          <div className="value-grid">
            <Reveal className="value-card">
              <img
                src="/brands/startups-founders.webp"
                alt="Startups and founders formulation consultation"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  borderRadius: '8px',
                  marginBottom: '1.25rem',
                }}
                loading="lazy"
              />
              <h3>Startups & Founders</h3>
              <p>
                Have an idea? Need help turning it into a product? We work with
                flexible quantities and lean development processes.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <img
                src="/brands/d2c-brands.webp"
                alt="D2C supplement brand ecommerce and product scaling"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'center 38%',
                  borderRadius: '8px',
                  marginBottom: '1.25rem',
                }}
                loading="lazy"
              />
              <h3>D2C Brands</h3>
              <p>
                Scaling production or launching new products? We provide
                ingredient sourcing and formulation development support.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <img
                src="/brands/manufacturers.webp"
                alt="Nutraceutical bulk manufacturing and powder filling"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'center 50%',
                  borderRadius: '8px',
                  marginBottom: '1.25rem',
                }}
                loading="lazy"
              />
              <h3>Manufacturers</h3>
              <p>
                Need reliable nutraceutical raw material sourcing? We supply in
                flexible quantities for all production scales.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-center-title">
            From Raw Material to Finished Product
          </h2>
          <div className="process-steps">
            <Reveal className="process-step">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  background: '#f1f5f9',
                }}
              >
                <img
                  src="/process/01-ingredient-sourcing.webp"
                  alt="Nutraceutical raw materials and ingredient sourcing inspection"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
              </div>
              <div className="step-number">01</div>
              <h3>Ingredient Sourcing</h3>
              <p>
                Identify and source quality raw materials from our portfolio of
                50+ ingredients.
              </p>
            </Reveal>
            <Reveal className="process-step">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  background: '#f1f5f9',
                }}
              >
                <img
                  src="/process/02-formulation.webp"
                  alt="Precision laboratory formulation and measurement"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
              </div>
              <div className="step-number">02</div>
              <h3>Formulation</h3>
              <p>
                Develop your formulation based on your product concept and
                target market.
              </p>
            </Reveal>
            <Reveal className="process-step">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  background: '#f1f5f9',
                }}
              >
                <img
                  src="/process/03-rd-sampling.webp"
                  alt="R&D prototype sampling and pilot powder filling"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 45%',
                  }}
                  loading="lazy"
                />
              </div>
              <div className="step-number">03</div>
              <h3>R&D & Sampling</h3>
              <p>
                Create samples and optimize based on sensory feedback and
                functional requirements.
              </p>
            </Reveal>
            <Reveal className="process-step">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  background: '#f1f5f9',
                }}
              >
                <img
                  src="/process/04-manufacturing-support.webp"
                  alt="Commercial manufacturing support and cleanroom production"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                  }}
                  loading="lazy"
                />
              </div>
              <div className="step-number">04</div>
              <h3>Manufacturing Support</h3>
              <p>
                Connect with suitable manufacturing partners and scale to
                commercial production.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== WHY Gomzi NUTRA ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">Why Choose Gomzi Lifesciences?</h2>
          <div className="feature-grid">
            <Reveal className="feature-item">
              <h3>Ingredient Access</h3>
              <p>
                A broad portfolio of nutraceutical-grade raw materials,
                including clinical and specialty ingredients.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Flexible Procurement</h3>
              <p>
                Available in development quantities (1 kg) through to
                commercial scale (25 kg+).
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>Technical Understanding</h3>
              <p>Ingredient sourcing backed by deep R&D and formulation expertise.</p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>One Partner, Multiple Stages</h3>
              <p>
                Handle ingredient sourcing, formulation, R&D, and manufacturing
                support—all from one team.
              </p>
            </Reveal>
            <Reveal className="feature-item">
              <h3>B2B Focus</h3>
              <p>
                Built to work with founders, brands, and manufacturers—not
                direct consumers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="section alt-bg" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Let's Build Your Next Product</h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#5b6378',
              marginBottom: '2rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Whether you need ingredients, R&D support, or both—we're here to
            help you develop a market-ready product.
          </p>
          <Link to="/contact" className="btn btn-red btn-lg">
            Talk to Gomzi Lifesciences
          </Link>
        </div>
      </section>

      {/* ==================== OUR GROUP ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">Part of the Gomzi Group</h2>
          <div className="value-grid">
            <Reveal className="value-card">
              <h3>Gomzi Chemicals</h3>
              <p style={subtitleStyle}>
                Pharmaceutical & Nutraceutical Raw Material Supply
              </p>
              <p>
                A reliable source for pharmaceutical and nutraceutical raw
                materials, serving manufacturers and businesses across India
                with quality ingredients and dependable sourcing.
              </p>
            </Reveal>
            <Reveal className="value-card">
              <h3>Gomzi Amino</h3>
              <p style={subtitleStyle}>
                Amino Acids & Nutritional Ingredients
              </p>
              <p>
                Specialized sourcing and supply of amino acids and nutritional
                ingredients for nutraceutical, sports nutrition, food and
                wellness applications.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
