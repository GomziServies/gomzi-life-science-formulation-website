import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useSnapSlider } from '../hooks/useSnapSlider';
import { WhatsAppIcon } from '../components/FloatingActions';
import { scrollToElement } from '../components/ScrollToTop';
import { whatsappLink } from '../config/contact';
import { PRODUCTS } from '../data/expertiseProducts';

const GENERAL_MESSAGE =
  "Hello Gomzi Life Science, I'd like to launch my own brand. Please share details about private label manufacturing.";

const WHY_US = [
  {
    title: 'Low MOQ',
    text: 'Start your brand with only 50–100 kg—ideal for startups testing a new product.',
  },
  {
    title: 'Fast Delivery',
    text: 'Production ready in 5–10 days, so you can launch and restock quickly.',
  },
  {
    title: 'Certified Quality',
    text: 'Manufactured in FSSAI, GMP, Kosher and Halal certified facilities.',
  },
  {
    title: 'Your Brand, Your Label',
    text: 'Choose flavours, packaging and label design—we manufacture under your name.',
  },
];

function productMessage(product) {
  return `Hello Gomzi Life Science, I'm interested in private label manufacturing of ${product.name}. Please share MOQ, pricing and other details.`;
}

function jumpTo(id) {
  scrollToElement(document.getElementById(id));
}

function ProductDetail({ product, index }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <section
      id={product.id}
      className={`section xp-product${index % 2 === 1 ? ' alt-bg xp-product-reverse' : ''}`}
    >
      <div className="container xp-product-grid">
        <div className="xp-product-media">
          <span className="rd-format-badge">{product.badge}</span>
          <img
            src={product.image}
            alt={`${product.name} – private label product by Gomzi Life Science`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="xp-product-info">
          <p className="rd-hero-kicker">
            {number} · {product.category}
          </p>
          <h2>{product.name}</h2>
          <p className="xp-product-desc">{product.description}</p>

          <ul className="xp-stats">
            {product.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          {product.groups?.map((group) => (
            <div className="xp-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul className="xp-pills">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {product.storage && (
            <p className="xp-meta">
              <strong>Storage:</strong> {product.storage}
            </p>
          )}
          {product.note && <p className="xp-meta">{product.note}</p>}

          <div className="xp-actions">
            <a
              href={whatsappLink(productMessage(product))}
              target="_blank"
              rel="noopener noreferrer"
              className="xp-btn-whatsapp"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <WhatsAppIcon size={20} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Product range cards. A centred grid on desktop/tablet; on phones the CSS
 * turns it into a horizontal scroll-snap slider and these dots track it.
 */
function ProductRange() {
  const { trackRef, onScroll, stops, active, goTo } = useSnapSlider();

  return (
    <>
      <div className="xp-overview-grid" ref={trackRef} onScroll={onScroll}>
        {PRODUCTS.map((product) => (
          <button
            type="button"
            className="rd-format-card xp-overview-card"
            key={product.id}
            onClick={() => jumpTo(product.id)}
          >
            <div className="rd-format-card-img-wrap xp-overview-img">
              <img src={product.image} alt="" loading="lazy" />
              <span className="rd-format-badge">{product.category}</span>
            </div>
            <div className="rd-format-card-body">
              <h3 className="rd-format-card-title">{product.name}</h3>
              <span className="rd-format-card-arrow" aria-hidden="true">
                ↓
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="xp-slider-dots" role="group" aria-label="Product slides">
        {stops.map((stop, i) => (
          <button
            type="button"
            key={stop}
            className={`xp-slider-dot${active === i ? ' active' : ''}`}
            aria-label={`Show slide ${i + 1} of ${stops.length}`}
            aria-current={active === i ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}

export default function OurExpertise() {
  usePageMeta(
    'Our Expertise | Private Label Manufacturing | Gomzi Life Science',
    'Private label manufacturing of Yeast Protein, Fat Burner, Tablets & Capsules, Fiber Jelly, Instant Protein Tea, Coffee & Soup and Multi Grain Atta with Protein. Low MOQ 50–100 kg, ready in 5–10 days.'
  );

  return (
    <>
      {/* ==================== PAGE HERO (full-width banner) ==================== */}
      <section className="rd-hero-banner">
        <div className="rd-hero-inner xp-banner-inner">
          <picture>
            {/* Mobile View: portrait banner (≤ 768px) */}
            <source
              media="(max-width: 768px)"
              srcSet="/expertise-hero-mobile.webp"
              type="image/webp"
              width="1078"
              height="1459"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/expertise-hero-mobile.jpg"
              type="image/jpeg"
              width="1078"
              height="1459"
            />
            {/* Desktop View: landscape banner (> 768px) */}
            <source
              media="(min-width: 769px)"
              srcSet="/expertise-hero-banner.webp"
              type="image/webp"
              width="1874"
              height="839"
            />
            <img
              src="/expertise-hero-banner.jpg"
              alt="Our Expertise in Premium Nutrition & Wellness Products – Instant Spiced Tea, Multi Grain Atta with Protein, Instant Mocha Coffee and Yeast Protein"
              className="rd-hero-img"
              width="1874"
              height="839"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
          {/* Screen reader & SEO semantic structure */}
          <h1 className="sr-only">Our Expertise in Premium Nutrition & Wellness Products</h1>
          <p className="sr-only">
            High protein nutrition, natural and wholesome ingredients, no preservatives and
            multi grain goodness—private label manufacturing by Gomzi Life Science.
          </p>
        </div>
      </section>

      {/* ==================== PRODUCT OVERVIEW ==================== */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <h2>Our Product Range</h2>
            <p className="section-subtitle">
              Ready-to-launch formulations, manufactured under your brand name.
              Tap a product to see its details.
            </p>
          </div>
          <ProductRange />
        </div>
      </section>

      {/* ==================== PRODUCT DETAILS ==================== */}
      {PRODUCTS.map((product, index) => (
        <ProductDetail product={product} index={index} key={product.id} />
      ))}

      {/* ==================== WHY GOMZI ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-center-title">Why Manufacture with Gomzi?</h2>
          <div className="value-grid xp-why-grid">
            {WHY_US.map((item, i) => (
              <div className="value-card" key={item.title}>
                <div className="value-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="section alt-bg xp-cta">
        <div className="container">
          <h2>Let's Start Your Brand Today</h2>
          <p>
            You're just one step away from owning a supplement company. Share your
            product idea and we'll come back with formulation options, MOQ and pricing.
          </p>
          <div className="xp-cta-actions">
            <a
              href={whatsappLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="xp-btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-red btn-lg">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
