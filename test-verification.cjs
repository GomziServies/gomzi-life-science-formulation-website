// test-verification.cjs
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
let failures = 0;
let passed = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}: ${details}`);
    failures++;
  }
}

console.log('====================================================');
console.log('EMPIRICAL VERIFICATION HARNESS - MILESTONE 1');
console.log('====================================================\n');

// ----------------------------------------------------
// TEST SUITE 1: Image Files & Magic Bytes Verification
// ----------------------------------------------------
console.log('--- SUITE 1: Asset Existence & Binary Magic Bytes ---');

const expectedFiles = [
  { file: 'powders.webp', type: 'webp' },
  { file: 'sachets.webp', type: 'webp' },
  { file: 'capsules.webp', type: 'webp' },
  { file: 'tablets.webp', type: 'webp' },
  { file: 'liquids.webp', type: 'webp' },
  { file: 'gels.webp', type: 'webp' },
  { file: 'jellies.webp', type: 'webp' },
  { file: 'gummies.webp', type: 'webp' },
  { file: 'functional-beverages.webp', type: 'webp' },
];

const catDir = path.join(ROOT, 'public', 'categories');
assert(fs.existsSync(catDir), 'Category directory exists', catDir);

expectedFiles.forEach(({ file, type }) => {
  const filePath = path.join(catDir, file);
  const exists = fs.existsSync(filePath);
  assert(exists, `File exists: ${file}`, `Path not found: ${filePath}`);

  if (exists) {
    const stats = fs.statSync(filePath);
    assert(stats.size > 0, `${file} is non-empty (${stats.size} bytes)`, `Size is 0`);

    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(16);
    fs.readSync(fd, buffer, 0, 16, 0);
    fs.closeSync(fd);

    if (type === 'webp') {
      const riff = buffer.toString('ascii', 0, 4);
      const webp = buffer.toString('ascii', 8, 12);
      const isWebP = riff === 'RIFF' && webp === 'WEBP';
      assert(isWebP, `${file} valid WebP magic bytes (RIFF...WEBP)`, `Header: riff='${riff}', webp='${webp}'`);
    } else if (type === 'png') {
      const isPNG =
        buffer[0] === 0x89 &&
        buffer[1] === 0x50 && // P
        buffer[2] === 0x4e && // N
        buffer[3] === 0x47 && // G
        buffer[4] === 0x0d &&
        buffer[5] === 0x0a &&
        buffer[6] === 0x1a &&
        buffer[7] === 0x0a;
      assert(isPNG, `${file} valid PNG magic bytes (\\x89PNG\\r\\n\\x1a\\n)`, `Header: ${buffer.subarray(0, 8).toString('hex')}`);
    }
  }
});

// ----------------------------------------------------
// TEST SUITE 2: Home.jsx FORMATS & Component Contracts
// ----------------------------------------------------
console.log('\n--- SUITE 2: Home.jsx Data Model & JSX Contracts ---');

const homePath = path.join(ROOT, 'src', 'pages', 'Home.jsx');
assert(fs.existsSync(homePath), 'src/pages/Home.jsx exists');

const homeContent = fs.readFileSync(homePath, 'utf8');

// Parse FORMATS array using regex extraction
const formatsMatch = homeContent.match(/const\s+FORMATS\s*=\s*(\[[\s\S]*?\]);/);
assert(Boolean(formatsMatch), 'FORMATS array definition found in Home.jsx');

if (formatsMatch) {
  let formats;
  try {
    formats = eval(formatsMatch[1]);
  } catch (err) {
    // If direct eval fails due to formatting, evaluate via Function
    formats = new Function(`return ${formatsMatch[1]}`)();
  }

  assert(Array.isArray(formats) && formats.length === 9, `FORMATS contains exactly 9 items (found ${formats?.length})`);

  const expectedCategories = [
    'Powders',
    'Sachets',
    'Capsules',
    'Tablets',
    'Liquids',
    'Gels',
    'Jellies',
    'Gummies',
    'Functional Beverages',
  ];

  expectedCategories.forEach((catName) => {
    const item = formats.find((f) => f.name === catName);
    assert(Boolean(item), `FORMATS contains item for '${catName}'`);
    if (item) {
      assert(Boolean(item.badge && item.badge.trim().length > 0), `'${catName}' has valid badge: "${item.badge}"`);
      assert(Boolean(item.alt && item.alt.trim().length > 5), `'${catName}' has descriptive alt text: "${item.alt}"`);
      assert(Boolean(item.image && item.image.startsWith('/categories/')), `'${catName}' references /categories/ asset: "${item.image}"`);

      // Verify asset exists in public folder
      const diskAsset = path.join(ROOT, 'public', item.image.replace(/^\//, ''));
      assert(fs.existsSync(diskAsset), `'${catName}' image exists at ${diskAsset}`);
    }
  });
}

// Verify Markup Structure
assert(homeContent.includes('className="rd-formats-grid"'), 'Home.jsx renders rd-formats-grid container');
assert(homeContent.includes('className="rd-format-card"'), 'Home.jsx renders rd-format-card items');
assert(homeContent.includes('className="rd-format-card-img"'), 'Home.jsx renders rd-format-card-img');
assert(homeContent.includes('className="rd-format-badge"'), 'Home.jsx renders rd-format-badge');
assert(homeContent.includes('className="rd-format-card-title"'), 'Home.jsx renders rd-format-card-title');
assert(homeContent.includes('loading="lazy"'), 'Home.jsx includes lazy loading on images');
assert(homeContent.includes('alt={item.alt}'), 'Home.jsx binds alt={item.alt} cleanly');
assert(homeContent.includes('src={item.image}'), 'Home.jsx binds src={item.image} cleanly');

// Verify Heading, Subtitle, and CTA Button Preservation
assert(homeContent.includes('<h2>R&D & Formulation</h2>'), 'Section title <h2>R&D & Formulation</h2> preserved');
assert(homeContent.includes('From product concept to commercial formulation'), 'Section subtitle text preserved');
assert(
  homeContent.includes('<Link to="/rd-formulation" className="btn btn-red btn-lg">'),
  'CTA Button <Link to="/rd-formulation" className="btn btn-red btn-lg"> preserved'
);

// ----------------------------------------------------
// TEST SUITE 3: Responsive CSS Grid Verification
// ----------------------------------------------------
console.log('\n--- SUITE 3: Responsive CSS Grid in src/index.css ---');

const cssPath = path.join(ROOT, 'src', 'index.css');
assert(fs.existsSync(cssPath), 'src/index.css exists');

const cssContent = fs.readFileSync(cssPath, 'utf8');

// Desktop Grid Rule
const desktopGridRegex = /\.rd-formats-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\)/;
assert(desktopGridRegex.test(cssContent), 'Desktop: .rd-formats-grid uses repeat(3, 1fr)');

// Tablet Media Query (max-width: 1023px)
const tabletMediaMatch = cssContent.match(/@media\s*\(max-width:\s*1023px\)\s*\{([\s\S]*?)\n\}/);
assert(Boolean(tabletMediaMatch), 'Tablet media query @media (max-width: 1023px) exists');

if (tabletMediaMatch) {
  const tabletBody = tabletMediaMatch[1];
  const tabletCols = /\.rd-formats-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*1fr\)/.test(tabletBody);
  assert(tabletCols, 'Tablet: .rd-formats-grid uses repeat(2, 1fr)');

  const tabletSpan = /\.rd-format-card:last-child\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/.test(tabletBody);
  assert(tabletSpan, 'Tablet: .rd-format-card:last-child spans full width (grid-column: 1 / -1)');
}

// Mobile Media Query (max-width: 599px)
const mobileMediaMatch = cssContent.match(/@media\s*\(max-width:\s*599px\)\s*\{([\s\S]*?)\n\}/);
assert(Boolean(mobileMediaMatch), 'Mobile media query @media (max-width: 599px) exists');

if (mobileMediaMatch) {
  const mobileBody = mobileMediaMatch[1];
  const mobileCols = /\.rd-formats-grid\s*\{[^}]*grid-template-columns:\s*1fr/.test(mobileBody);
  assert(mobileCols, 'Mobile: .rd-formats-grid uses 1fr single column');

  const mobileSpan = /\.rd-format-card:last-child\s*\{[^}]*grid-column:\s*auto/.test(mobileBody);
  assert(mobileSpan, 'Mobile: .rd-format-card:last-child resets to grid-column: auto');
}

// Verify absence of improper 1024px collision
const collisionMatch = /@media\s*\(max-width:\s*1024px\)\s*\{[\s\S]*?\.rd-formats-grid[\s\S]*?\}/;
assert(!collisionMatch.test(cssContent), 'No conflicting 1024px single-column collapse on .rd-formats-grid');

// Aspect ratio & image styling
assert(cssContent.includes('aspect-ratio: 16 / 10'), 'Card img wrapper enforces aspect-ratio: 16 / 10');
assert(cssContent.includes('object-fit: cover'), 'Card img enforces object-fit: cover');
assert(cssContent.includes('backdrop-filter: blur(8px)'), 'Pill badge uses frosted glass backdrop-filter');

// ----------------------------------------------------
// SUMMARY
// ----------------------------------------------------
console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passed + failures}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failures}`);
console.log('====================================================');

if (failures > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
