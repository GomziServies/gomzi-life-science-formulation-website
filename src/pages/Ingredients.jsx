import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';

const FILTER_TABS = [
  { category: 'all', label: 'All' },
  { category: 'amino', label: 'Amino Acids' },
  { category: 'sports', label: 'Sports & Performance' },
  { category: 'vitamins', label: 'Vitamins' },
  { category: 'minerals', label: 'Minerals' },
  { category: 'functional', label: 'Functional & Specialty' },
];

const SECTIONS = [
  {
    title: 'Amino Acids (23 ingredients)',
    category: 'amino',
    items: [
      { name: 'L-Glutamine', type: 'Amino Acid' },
      { name: 'L-Asparagine', type: 'Amino Acid' },
      { name: 'L-Proline', type: 'Amino Acid' },
      { name: 'L-Aspartic Acid', type: 'Amino Acid' },
      { name: 'L-Tyrosine', type: 'Amino Acid' },
      { name: 'L-Glutamic Acid', type: 'Amino Acid' },
      { name: 'L-Cysteine', type: 'Amino Acid' },
      { name: 'L-Serine', type: 'Amino Acid' },
      { name: 'L-Arginine', type: 'Amino Acid' },
      { name: 'L-Glycine', type: 'Amino Acid' },
      { name: 'L-Histidine', type: 'Amino Acid' },
      { name: 'L-Leucine', type: 'Amino Acid' },
      { name: 'L-Isoleucine', type: 'Amino Acid' },
      { name: 'L-Lysine HCl', type: 'Amino Acid' },
      { name: 'L-Methionine', type: 'Amino Acid' },
      { name: 'L-Threonine', type: 'Amino Acid' },
      { name: 'L-Phenylalanine', type: 'Amino Acid' },
      { name: 'L-Tryptophan', type: 'Amino Acid' },
      { name: 'L-Valine', type: 'Amino Acid' },
      { name: 'L-Alanine', type: 'Amino Acid' },
      { name: 'Taurine', type: 'Amino Acid' },
      { name: 'Beta Alanine', type: 'Amino Acid' },
      { name: 'L-Citrulline', type: 'Amino Acid' },
    ],
  },
  {
    title: 'Sports & Performance (5 ingredients)',
    category: 'sports',
    items: [
      { name: 'Creatine Monohydrate', type: 'Sports' },
      { name: 'Citrulline Malate', type: 'Sports' },
      { name: 'HMB Calcium', type: 'Sports' },
      { name: 'Beta Alanine', type: 'Sports' },
      { name: 'L-Citrulline', type: 'Sports' },
    ],
  },
  {
    title: 'Vitamins (6 ingredients)',
    category: 'vitamins',
    items: [
      { name: 'Vitamin C', type: 'Vitamin' },
      { name: 'Vitamin B Complex', type: 'Vitamin' },
      { name: 'Vitamin D3', type: 'Vitamin' },
      { name: 'Vitamin E', type: 'Vitamin' },
      { name: 'Vitamin A', type: 'Vitamin' },
      { name: 'Vitamin K2 MK-7', type: 'Vitamin' },
    ],
  },
  {
    title: 'Minerals (7 ingredients)',
    category: 'minerals',
    items: [
      { name: 'Magnesium Salts', type: 'Mineral' },
      { name: 'Zinc Salts', type: 'Mineral' },
      { name: 'Calcium Salts', type: 'Mineral' },
      { name: 'Iron Bisglycinate', type: 'Mineral' },
      { name: 'Potassium Citrate', type: 'Mineral' },
      { name: 'Selenium Yeast', type: 'Mineral' },
      { name: 'Chromium Picolinate', type: 'Mineral' },
    ],
  },
  {
    title: 'Functional & Specialty Ingredients (4 ingredients)',
    category: 'functional',
    items: [
      { name: 'Melatonin', type: 'Specialty' },
      { name: 'Sodium Hyaluronate', type: 'Specialty' },
      { name: 'PQQ', type: 'Specialty' },
      { name: 'HMB Calcium', type: 'Specialty' },
    ],
  },
];

const CLINICAL_CARDS = [
  {
    title: 'King Agaricus 21®',
    subtitle: "Japan's most researched mushroom",
    tags: ['Immunity', 'Clinical Support', 'Hair & Skin'],
    text: 'Premium mushroom extract with extensive clinical research. Ideal for immune support formulations, wellness products, and specialty applications.',
    applications:
      'Immunity supplements, wellness products, skin health formulations',
  },
  {
    title: 'DuraBeet® / Agrana®',
    subtitle: 'Sustained-release beetroot extract',
    tags: ['Endurance', 'Heart Health', 'Blood Flow'],
    text: 'Clinically-studied beetroot extract for cardiovascular health and athletic performance. Proven efficacy in endurance and nitric oxide production.',
    applications:
      'Sports nutrition, cardiovascular health, performance products',
  },
  {
    title: 'ProBionic®',
    subtitle: 'Clinically backed postbiotic blend',
    tags: ['Gut Health', 'Immunity', 'Skin & Derma'],
    text: 'Premium postbiotic formulation for digestive wellness, immune support, and dermatological health. Science-backed for multiple health areas.',
    applications: 'Gut health supplements, immunity products, beauty & skin wellness',
  },
];

const PACK_SIZES = ['1 KG', '5 KG', '10 KG', '25 KG+'];

const cardSubtitleStyle = {
  color: '#111111',
  fontWeight: 600,
  fontSize: '0.95rem',
  marginBottom: '1rem',
};

export default function Ingredients() {
  usePageMeta(
    'Ingredients Catalog | Gomzi Lifesciences | Nutraceutical Raw Materials',
    'Gomzi Lifesciences ingredient catalog: amino acids, vitamins, minerals, and specialty ingredients. 50+ nutraceutical-grade raw materials available in flexible quantities.'
  );

  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  // Bumped on tab click so visible items replay the "scaleIn" animation
  // exactly like the original filter script did.
  const [animationTick, setAnimationTick] = useState(0);

  const onCategoryChange = (next) => {
    setCategory(next);
    setAnimationTick((tick) => tick + 1);
  };

  const visibleSections = SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) => {
      const matchesSearch = `${item.name} ${item.type}`
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === 'all' || section.category === category;
      return matchesSearch && matchesCategory;
    }),
  }));

  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section className="hero-banner-section">
        <div className="hero-banner-wrapper">
          <picture>
            <source srcSet="/ingredients-hero-master.webp" type="image/webp" />
            <img
              src="/ingredients-hero-master.png"
              alt="Nutraceutical Ingredients - 50+ Pharmaceutical-Grade Raw Materials | Gomzi Lifesciences"
              className="hero-banner-img"
              width="1672"
              height="750"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">Nutraceutical Ingredients</h1>
          <p className="sr-only">
            50+ pharmaceutical-grade raw materials. Available in flexible
            quantities—from 1 kg for development through to 25 kg+ for
            commercial manufacturing.
          </p>
        </div>
      </section>

      {/* ==================== CLINICAL & SPECIALTY INGREDIENTS ==================== */}
      <section className="clinical-showcase" id="clinical">
        <div className="container">
          <Reveal className="clinical-header">
            <h2>Clinical & Specialty Ingredients</h2>
            <p className="clinical-tagline">
              Science-led, clinically-backed ingredients for differentiated
              product development. Build evidence-backed products with premium
              actives.
            </p>
          </Reveal>
          <div className="clinical-grid">
            {CLINICAL_CARDS.map((card) => (
              <div className="clinical-card" key={card.title}>
                <h3>{card.title}</h3>
                <p style={cardSubtitleStyle}>{card.subtitle}</p>
                <div className="clinical-benefits">
                  {card.tags.map((tag) => (
                    <span className="benefit-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{card.text}</p>
                <p
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    color: '#5b6378',
                  }}
                >
                  <strong>Applications:</strong> {card.applications}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INGREDIENT SEARCH & FILTERS ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">Browse Our Ingredients</h2>

          <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            <input
              type="text"
              className="ingredient-search"
              placeholder="Search ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem',
                border: '2px solid #e5e7f0',
                borderRadius: '6px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div className="filter-tabs">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.category}
                className={`filter-tab${category === tab.category ? ' active' : ''}`}
                onClick={() => onCategoryChange(tab.category)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {visibleSections.map((section) => (
            <div
              key={section.title}
              style={{
                marginBottom: section === visibleSections[visibleSections.length - 1] ? 0 : '3rem',
              }}
            >
              <h3
                style={{
                  color: '#99c229',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid #e5e7f0',
                }}
              >
                {section.title}
              </h3>
              <div className="ingredient-grid">
                {section.items.map((item) => (
                  <div
                    className="ingredient-item"
                    data-category={section.category}
                    key={`${section.category}-${item.name}`}
                    style={animationTick ? { animation: 'scaleIn 0.3s ease-out' } : undefined}
                  >
                    <h4>{item.name}</h4>
                    <p>{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PACK SIZES ==================== */}
      <section className="section alt-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Flexible Pack Sizes</h2>
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
            All ingredients are available in flexible quantities tailored to
            your development and manufacturing needs.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              margin: '2rem 0',
            }}
          >
            {PACK_SIZES.map((size) => (
              <div
                key={size}
                style={{
                  background: 'white',
                  padding: '1.5rem 2rem',
                  borderRadius: '8px',
                  border: '2px solid #99c229',
                  fontWeight: 600,
                  color: '#99c229',
                  fontSize: '1.1rem',
                }}
              >
                {size}
              </div>
            ))}
          </div>
          <p style={{ color: '#5b6378', fontSize: '0.95rem' }}>
            Technical documentation available for applicable materials.
            Availability may vary by ingredient.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Need a Specific Ingredient?</h2>
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
            Get in touch for ingredient quotes, technical specifications, or to
            discuss a custom formulation.
          </p>
          <Link to="/contact" className="btn btn-red btn-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
