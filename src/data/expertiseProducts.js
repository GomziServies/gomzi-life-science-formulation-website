// Products shown on the "Our Expertise" page.
// Source: GLS brochure ("GLS NEW BROCHURE CHANGES 02").
// Multi Grain Atta is not in the brochure — its copy follows the client's pack design;
// update it once final product details are available.

export const PRODUCTS = [
  {
    id: 'yeast-protein',
    name: 'Yeast Protein',
    category: 'Protein Powder',
    badge: 'Next-Gen Protein',
    image: '/products/yeast-protein.webp',
    description:
      'A sustainable, dairy-free protein made from yeast—ideal for clean-label and vegan protein brands looking for something new.',
    stats: [
      { value: 'Dairy-Free', label: 'Protein base' },
      { value: '7', label: 'Flavour options' },
      { value: '35 g', label: 'Scoop size' },
    ],
    groups: [
      {
        label: 'Available flavours',
        items: [
          'Mawakulfi',
          'Chocolate',
          'Cookies & Cream',
          'Coffee',
          'Buttermilk',
          'Belgian Chocolate',
          'Brownie Chocolate',
        ],
      },
    ],
  },
  {
    id: 'fat-burner',
    name: 'Fat Burner',
    category: 'Weight Management',
    badge: 'Jitter-Free',
    image: '/products/fat-burner.webp',
    description:
      'A low-stimulant fat burner with L-Carnitine, prebiotic fibre and botanical extracts. Supports fat metabolism and sustained energy—without the jitters.',
    stats: [
      { value: 'Low', label: 'Stimulant formula' },
      { value: '6', label: 'Functional claims' },
      { value: '6 g', label: 'Serving size' },
    ],
    groups: [
      {
        label: 'Functional claims',
        items: [
          'Low-Stimulant / Jitter-Free',
          'Prebiotic Gut Support',
          'Supports Fat Metabolism',
          'Aids Active Weight Management',
          'Supports Healthy Blood Sugar Balance',
          'Promotes Sustained Energy',
        ],
      },
      { label: 'Available flavour', items: ['Blueberry'] },
    ],
  },
  {
    id: 'instant-protein-tea',
    name: 'Instant Protein Spiced Milk Tea',
    category: 'Instant Beverage',
    badge: 'Ready to Mix',
    image: '/products/spiced-milk-tea.webp',
    description:
      'Your favourite chai, made convenient. Aromatic spices, a creamy taste and quick preparation in every cup.',
    stats: [
      { value: '14 g', label: 'Single-serve sachet' },
      { value: 'Instant', label: 'Just add hot water' },
      { value: 'Private', label: 'Label ready' },
    ],
    storage:
      'Store in a cool, dry place away from moisture and strong odours. Keep the container or sachets tightly sealed.',
  },
  {
    id: 'instant-protein-coffee',
    name: 'Instant Protein Mocha Coffee',
    category: 'Instant Beverage',
    badge: 'Ready to Mix',
    image: '/products/mocha-coffee.webp',
    description:
      'Make every sip special. Rich coffee and smooth cocoa in a convenient, creamy mocha premix.',
    stats: [
      { value: '14 g', label: 'Single-serve sachet' },
      { value: 'Instant', label: 'Hot or cold' },
      { value: 'Private', label: 'Label ready' },
    ],
    storage:
      'Store in a cool, dry place away from direct sunlight, heat and moisture. Keep the pouch or container tightly sealed after each use.',
  },
  {
    id: 'multigrain-protein-atta',
    name: 'Multi Grain Atta with Protein',
    category: 'Health Food',
    badge: 'Protein in Every Roti',
    image: '/products/multigrain-protein-atta.webp',
    description:
      'Wholesome nutrition for a stronger you. A multi grain atta enriched with protein for soft, nutritious and delicious rotis—tradition with a healthier tomorrow.',
    stats: [
      { value: 'Multi', label: 'Grain blend' },
      { value: 'Zero', label: 'Preservatives' },
      { value: '500 g', label: 'Zip-lock pouch' },
    ],
    groups: [
      {
        label: 'Key benefits',
        items: ['High Protein', 'Rich in Fibre', 'Made with Natural Grains', 'No Preservatives'],
      },
      {
        label: 'Ideal for',
        items: ['Rotis & Chapatis', 'Parathas', 'Everyday Family Meals'],
      },
    ],
    note: 'Pack sizes and formulation are customised as per your brand’s requirement.',
  },
];
