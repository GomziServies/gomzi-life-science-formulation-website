import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/expertiseProducts';
import { useSnapSlider } from '../hooks/useSnapSlider';

function Arrow({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

/**
 * Home-page overview of the /our-expertise page: intro, a product slider
 * (every product links to its section on that page) and a CTA.
 */
export default function ExpertiseShowcase() {
  const { trackRef, onScroll, stops, active, goTo, prev, next, atStart, atEnd } = useSnapSlider();

  return (
    <section className="section hx-section" aria-labelledby="hx-title">
      <div className="container">
        <div className="section-header">
          <p className="rd-hero-kicker hx-kicker">Private Label Manufacturing</p>
          <h2 id="hx-title">Our Expertise</h2>
          <p className="section-subtitle">
            Premium nutrition & wellness products, manufactured under your brand—from
            next-gen proteins, tablets, capsules and fiber jelly to instant protein
            tea, coffee, soup and everyday health foods.
          </p>
        </div>

        <div className="hx-slider">
          <div className="hx-track" ref={trackRef} onScroll={onScroll}>
            {PRODUCTS.map((product) => (
              <Link
                to={`/our-expertise#${product.id}`}
                className="rd-format-card hx-card"
                key={product.id}
              >
                <div className="rd-format-card-img-wrap hx-card-img">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="rd-format-badge">{product.category}</span>
                </div>
                <div className="hx-card-body">
                  <h3 className="rd-format-card-title">{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="hx-card-link">
                    View details <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {stops.length > 1 && (
            <div className="hx-controls">
              <button type="button" className="hx-arrow" onClick={prev} disabled={atStart} aria-label="Previous products">
                <Arrow dir="prev" />
              </button>
              <div className="xp-slider-dots hx-dots" role="group" aria-label="Product slides">
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
              <button type="button" className="hx-arrow" onClick={next} disabled={atEnd} aria-label="Next products">
                <Arrow dir="next" />
              </button>
            </div>
          )}
        </div>

        <div className="hx-cta">
          <Link to="/our-expertise" className="btn btn-red btn-lg">
            Explore Our Expertise →
          </Link>
        </div>
      </div>
    </section>
  );
}
