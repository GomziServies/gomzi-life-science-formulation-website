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
    badge: 'Advanced Formula',
    image: '/products/fat-burner.webp',
    description:
      'An advanced weight management formula with L-Carnitine, prebiotic fibre and botanical extracts. Boosts metabolism and energy—low-stimulant and jitter-free.',
    stats: [
      { value: '30', label: 'Servings per jar' },
      { value: '300 g', label: 'Net quantity' },
      { value: 'Low', label: 'Stimulant formula' },
    ],
    groups: [
      {
        label: 'Key benefits',
        items: ['Boosts Metabolism', 'Increases Energy', 'Supports Fat Loss', 'Controls Appetite'],
      },
      {
        label: 'Also',
        items: [
          'Low-Stimulant / Jitter-Free',
          'Prebiotic Gut Support',
          'Supports Healthy Blood Sugar Balance',
        ],
      },
      { label: 'Available flavour', items: ['Blueberry'] },
    ],
  },
  {
    id: 'tablets-capsules',
    name: 'Tablets & Capsules',
    category: 'Supplements',
    badge: 'Overall Wellness',
    image: '/products/tablets-capsules.webp',
    description:
      'A premium nutrition supplement that supports overall wellness—available in tablet and capsule formats, formulated to your brand’s requirement.',
    stats: [
      { value: '60', label: 'Tablets / capsules' },
      { value: '2', label: 'Dosage formats' },
      { value: 'Private', label: 'Label ready' },
    ],
    groups: [
      {
        label: 'Key benefits',
        items: ['Immunity Support', 'Energy & Vitality', 'General Wellness'],
      },
      { label: 'Formats', items: ['Tablets', 'Capsules'] },
    ],
  },
  {
    id: 'fiber-jelly',
    name: 'Fiber Jelly',
    category: 'Functional Jelly',
    badge: 'Gut Health',
    image: '/products/fiber-jelly.webp',
    description:
      'Tasty, chewable fiber jellies that support digestive health and gut wellness—an easy and enjoyable way to add fibre to the everyday routine.',
    stats: [
      { value: '30', label: 'Jellies per jar' },
      { value: 'Mango', label: 'Flavour' },
      { value: 'Gut', label: 'Wellness' },
    ],
    groups: [
      {
        label: 'Key benefits',
        items: ['Helps Improve Digestion', 'Supports Bowel Regularity', 'Rich in Dietary Fiber'],
      },
      { label: 'Available flavour', items: ['Mango'] },
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
    id: 'instant-protein-soup',
    name: 'Instant Protein Soup',
    category: 'Instant Food',
    badge: 'Ready in 1 Minute',
    image: '/products/instant-protein-soup.webp',
    description:
      'High-protein, nutritious and delicious. A creamy instant soup premix that’s ready in just one minute—a quick, wholesome snack or light meal.',
    stats: [
      { value: '1 min', label: 'Ready in' },
      { value: '10', label: 'Servings per pack' },
      { value: '250 g', label: 'Zip-lock pouch' },
    ],
    groups: [
      {
        label: 'Key benefits',
        items: ['High Protein', 'Low Fat', 'No Added Preservatives'],
      },
      { label: 'Available flavour', items: ['Creamy Vegetable'] },
    ],
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
