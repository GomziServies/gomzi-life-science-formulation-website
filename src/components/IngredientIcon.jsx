/**
 * High-performance, relatable SVG icon mapper for nutraceutical ingredients.
 * Every icon connects directly to the universal biological and consumer association:
 * - Citrus fruit for Vitamin C
 * - Anatomical bone for Calcium & Vitamin K2
 * - Gym barbell for Creatine & BCAAs
 * - Radiant sun for Vitamin D3
 * - Cardiovascular pump for Nitric Oxide (Citrulline, Arginine)
 * - Blood vitality droplet for Iron
 * - Electrolyte spark droplet for Potassium
 * - Crescent moon for Melatonin (Sleep)
 * - Eye for Vitamin A (Vision)
 * - Botanical antioxidant drop for Vitamin E
 * - Brain for Cognitive/Focus ingredients (PQQ, Tyrosine)
 * - DNA double-helix for Core Amino Acids (Protein Building Blocks)
 */
export default function IngredientIcon({ category, name = '', className = '' }) {
  const n = name.toLowerCase().trim();

  // ==========================================
  // 1. SPECIFIC INGREDIENTS BY BIOLOGICAL ROLE
  // ==========================================

  // --- CALCIUM & VITAMIN K2: BONE HEALTH ---
  if (n.includes('calcium') || n.includes('vitamin k2') || n.includes('k2')) {
    // Anatomical Bone: Universal symbol for Bone Density & Calcium Transport
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M17 10c.7-.7 1.69-1 2.5-1a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.3 1.8 1 2.5l-7 7c-.7-.7-1.69-1-2.5-1a2.5 2.5 0 1 0 0 5 .5.5 0 0 1 .5.5 2.5 2.5 0 1 0 5 0c0-.81-.3-1.8-1-2.5Z" />
      </svg>
    );
  }

  // --- VITAMIN C: CITRUS FRUIT SLICE ---
  if (n.includes('vitamin c')) {
    // Sliced Lemon/Orange Citrus Fruit: Universal symbol for Vitamin C & Immunity
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 12V2a10 10 0 0 1 10 10Z" />
        <path d="M12 12 4.93 4.93" />
        <path d="M12 12l-7.07 7.07" />
        <path d="M12 12v10" />
      </svg>
    );
  }

  // --- VITAMIN D3: RADIANT SUNSHINE ---
  if (n.includes('vitamin d3') || n.includes('vitamin d')) {
    // Sunshine: The "Sunshine Vitamin" synthesized via sunlight
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    );
  }

  // --- VITAMIN A: VISION EYE ---
  if (n.includes('vitamin a')) {
    // Eye: Universal symbol for Retinol, Vision, and Eye Health
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  // --- VITAMIN E: BOTANICAL ANTIOXIDANT SKIN OIL DROP ---
  if (n.includes('vitamin e')) {
    // Nourishing botanical oil droplet with leaf: Skincare, Anti-aging, Tocopherols
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 10a4 4 0 0 1 4 4" />
        <path d="M12 10v7" />
      </svg>
    );
  }

  // --- VITAMIN B COMPLEX: CELLULAR ENERGY FLASH ---
  if (n.includes('vitamin b')) {
    // Energy Flash: Universal symbol for B-Vitamins and Metabolic Vitality
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // --- CREATINE & BCAAs: GYM WEIGHT BARBELL / DUMBBELL ---
  if (
    n.includes('creatine') ||
    n.includes('leucine') ||
    n.includes('valine') ||
    n.includes('isoleucine')
  ) {
    // Weightlifting Barbell: Universal symbol for Strength, Gym Performance & Muscle Synthesis
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M2 10v4M6 7v10M18 7v10M22 10v4M6 12h12" />
      </svg>
    );
  }

  // --- CITRULLINE & ARGININE: CARDIOVASCULAR BLOOD FLOW PUMP ---
  if (n.includes('citrulline') || n.includes('arginine')) {
    // Heart Pulse / Vascular Flow: Universal symbol for Nitric Oxide & Muscle Pump
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.28" />
      </svg>
    );
  }

  // --- BETA ALANINE & TAURINE: ENDURANCE STOPWATCH / FIRE ---
  if (n.includes('beta alanine') || n.includes('taurine')) {
    // Stopwatch / Endurance Timer: Universal symbol for Stamina & Delaying Fatigue
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="14" r="8" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="14" x2="15" y2="11" />
        <path d="M19 5l-2 2" />
      </svg>
    );
  }

  // --- HMB: MUSCLE PRESERVATION SHIELD ---
  if (n.includes('hmb')) {
    // Shield with checkmark: Anti-catabolic protection against muscle breakdown
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 12 15 16 10" />
      </svg>
    );
  }

  // --- ZINC: IMMUNITY HEALING SHIELD WITH CROSS ---
  if (n.includes('zinc')) {
    // Healing Shield with Cross: Universal symbol for Zinc's role in Immunity & Tissue Healing
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    );
  }

  // --- IRON BISGLYCINATE: BLOOD VITALITY DROPLET ---
  if (n.includes('iron')) {
    // Blood Vitality Droplet: Universal symbol for Iron, Hemoglobin & Oxygen Transport
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    );
  }

  // --- POTASSIUM CITRATE: ELECTROLYTE SPARK DROPLET ---
  if (n.includes('potassium')) {
    // Water drop with electric spark inside: Universal symbol for Electrolyte Hydration
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M10 13l2-3 1 3h2l-3 4 1-2h-3" />
      </svg>
    );
  }

  // --- MAGNESIUM: NATURAL MINERAL CRYSTAL ---
  if (n.includes('magnesium')) {
    // Layered Mineral Crystal: Natural mineral salt for muscle calm & enzyme activation
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    );
  }

  // --- SELENIUM & CHROMIUM: ATOMIC ELEMENT ---
  if (n.includes('selenium') || n.includes('chromium')) {
    // Atom with Orbiting Electrons: Trace elemental minerals & cellular protection
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(150 12 12)" />
      </svg>
    );
  }

  // --- MELATONIN: SLEEP CRESCENT MOON & STAR ---
  if (n.includes('melatonin')) {
    // Crescent Moon with Night Star: Universal symbol for Sleep & Circadian Rhythm
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M18 4v2M17 5h2" />
      </svg>
    );
  }

  // --- SODIUM HYALURONATE: PURE MOISTURE RIPPLE DROPLET ---
  if (n.includes('hyaluronate') || n.includes('hyaluronic')) {
    // Pure Hydration Droplet with Moisture Ripple: Plump skin & joint moisture
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M8 15a4 4 0 0 0 8 0" />
      </svg>
    );
  }

  // --- PQQ & FOCUS AMINOS: BRAIN & COGNITIVE VITALITY ---
  if (
    n.includes('pqq') ||
    n.includes('tyrosine') ||
    n.includes('tryptophan') ||
    n.includes('phenylalanine')
  ) {
    // Brain: Universal symbol for Neurotransmitters, Cognitive Focus & Mitochondrial Power
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
      </svg>
    );
  }

  // --- RECOVERY & COLLAGEN AMINOS: GUT & CELLULAR REPAIR SHIELD ---
  if (
    n.includes('glutamine') ||
    n.includes('proline') ||
    n.includes('glycine') ||
    n.includes('lysine') ||
    n.includes('cysteine') ||
    n.includes('methionine')
  ) {
    // Healing Recovery Shield: Gut lining repair, collagen synthesis, cellular defense
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    );
  }

  // ==========================================
  // 2. CATEGORY-LEVEL FALLBACKS (UNIVERSAL)
  // ==========================================

  // --- CATEGORY: VITAMINS ---
  if (category === 'vitamins') {
    // Nutraceutical Vitamin Capsule
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    );
  }

  // --- CATEGORY: SPORTS & PERFORMANCE ---
  if (category === 'sports') {
    // Barbell / Gym Strength
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M2 10v4M6 7v10M18 7v10M22 10v4M6 12h12" />
      </svg>
    );
  }

  // --- CATEGORY: MINERALS ---
  if (category === 'minerals') {
    // Mineral Crystal Strata
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    );
  }

  // --- CATEGORY: FUNCTIONAL & SPECIALTY ---
  if (category === 'functional') {
    // Bio-active Laboratory Formulation Flask
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M10 2v7.31L4.15 19.3A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.71-2.7L14 9.31V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <line x1="6.5" y1="16" x2="17.5" y2="16" />
      </svg>
    );
  }

  // --- CATEGORY: AMINO ACIDS (DEFAULT) ---
  // DNA Double-Helix: The foundational building blocks of protein & life
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 18c6-6 10-6 16-12" />
      <path d="M4 6c6 6 10 6 16 12" />
      <line x1="7" y1="8.5" x2="7" y2="15.5" />
      <line x1="12" y1="9.5" x2="12" y2="14.5" />
      <line x1="17" y1="8.5" x2="17" y2="15.5" />
    </svg>
  );
}
