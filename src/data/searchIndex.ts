export interface SearchItem {
  id: string;
  type: 'lesson' | 'formula' | 'glossary' | 'topic' | 'math';
  title: string;
  description: string;
  subject: 'physics' | 'math' | 'general';
  route: string;
  tags: string[];
}

export const searchIndex: SearchItem[] = [
  // Lessons (physics)
  {
    id: 'lesson-astronomy',
    type: 'lesson',
    title: 'Introduction to Astronomy',
    description: 'Astronomy is the scientific study of celestial objects and phenomena beyond Earth.',
    subject: 'physics',
    route: '/lessons/astronomy',
    tags: ['astronomy', 'cosmos', 'observational'],
  },
  {
    id: 'lesson-astrophysics',
    type: 'lesson',
    title: 'Introduction to Astrophysics',
    description: 'Applies physics principles to understand celestial objects and cosmic phenomena.',
    subject: 'physics',
    route: '/lessons/astrophysics',
    tags: ['astrophysics', 'stars', 'spectroscopy'],
  },
  {
    id: 'lesson-cosmology',
    type: 'lesson',
    title: 'Cosmology & The Universe',
    description: "Study of the origin, evolution, and structure of the entire universe.",
    subject: 'physics',
    route: '/lessons/cosmology',
    tags: ['cosmology', 'big-bang', 'dark-energy'],
  },
  {
    id: 'lesson-black-holes',
    type: 'lesson',
    title: 'Black Holes & Gravity',
    description: 'Black holes are extreme objects where gravity is so strong that nothing can escape.',
    subject: 'physics',
    route: '/lessons/black-holes',
    tags: ['black-holes', 'gravity', 'relativity'],
  },
  {
    id: 'lesson-dark-matter',
    type: 'lesson',
    title: 'Dark Matter & Dark Energy',
    description: 'Dark matter and dark energy dominate the universe but are not directly observable with light.',
    subject: 'physics',
    route: '/lessons/dark-matter',
    tags: ['dark-matter', 'cosmology', 'galaxies'],
  },
  {
    id: 'lesson-famous-scientists',
    type: 'topic',
    title: 'Famous Scientists & Their Discoveries',
    description: 'Profiles and discoveries of key scientists who shaped physics and astronomy.',
    subject: 'general',
    route: '/lessons/famous-scientists',
    tags: ['history', 'biography', 'discoveries'],
  },

  // Math lessons
  {
    id: 'math-differentiation-basics',
    type: 'math',
    title: 'Differentiation Basics',
    description: 'Fundamental concepts and rules of derivatives, including the power, product, and chain rules.',
    subject: 'math',
    route: '/math/differentiation-basics',
    tags: ['calculus', 'derivative', 'power-rule'],
  },
  {
    id: 'math-advanced-derivatives',
    type: 'math',
    title: 'Advanced Differentiation Techniques',
    description: 'Implicit differentiation, logarithmic derivatives, and advanced rules.',
    subject: 'math',
    route: '/math/advanced-derivatives',
    tags: ['calculus', 'implicit', 'logarithmic-differentiation'],
  },
  {
    id: 'math-integration-basics',
    type: 'math',
    title: 'Integration Fundamentals',
    description: 'Introduction to antiderivatives and indefinite integrals and their basic formulas.',
    subject: 'math',
    route: '/math/integration-basics',
    tags: ['integration', 'antiderivative', 'fundamental-theorem'],
  },
  {
    id: 'math-integration-techniques',
    type: 'math',
    title: 'Advanced Integration Techniques',
    description: 'Substitution, integration by parts, partial fractions, and trigonometric substitution.',
    subject: 'math',
    route: '/math/integration-techniques',
    tags: ['integration', 'u-substitution', 'parts'],
  },
  {
    id: 'math-definite-integrals',
    type: 'math',
    title: 'Definite Integrals & Applications',
    description: 'Applications of definite integrals to area, volume, arc length and physical quantities.',
    subject: 'math',
    route: '/math/definite-integrals-applications',
    tags: ['definite-integral', 'area', 'volume'],
  },
  {
    id: 'math-polynomial-equations',
    type: 'math',
    title: 'Polynomial Equations & Factoring',
    description: 'Solving polynomial equations, factoring techniques, and the quadratic formula.',
    subject: 'math',
    route: '/math/polynomial-equations',
    tags: ['algebra', 'quadratic-formula', 'factoring'],
  },
  {
    id: 'math-linear-systems',
    type: 'math',
    title: 'Linear Systems & Matrices',
    description: 'Matrix operations, determinants, eigenvalues, and solving linear systems.',
    subject: 'math',
    route: '/math/linear-systems-advanced',
    tags: ['linear-algebra', 'matrices', 'eigenvalues'],
  },
  {
    id: 'math-sequences-series',
    type: 'math',
    title: 'Sequences & Series',
    description: 'Arithmetic and geometric sequences, series sums, and convergence tests.',
    subject: 'math',
    route: '/math/sequences-series',
    tags: ['series', 'convergence', 'arithmetic'],
  },

  // Glossary (general)
  ...((): SearchItem[] => {
    const g = [
      { term: 'Acceleration', route: '/glossary/acceleration', tags: ['motion', 'kinematics'] },
      { term: 'Alpha Particle', route: '/glossary/alpha-particle', tags: ['radioactivity'] },
      { term: 'Ampere', route: '/glossary/ampere', tags: ['electricity'] },
      { term: 'Amplitude', route: '/glossary/amplitude', tags: ['waves'] },
      { term: 'Atom', route: '/glossary/atom', tags: ['atomic', 'chemistry'] },
      { term: 'Buoyancy', route: '/glossary/buoyancy', tags: ['fluids'] },
      { term: 'Capacitance', route: '/glossary/capacitance', tags: ['electronics'] },
      { term: 'Centripetal Force', route: '/glossary/centripetal-force', tags: ['circular-motion'] },
      { term: 'Density', route: '/glossary/density', tags: ['materials'] },
      { term: 'Energy', route: '/glossary/energy', tags: ['work', 'power'] },
      { term: 'Escape Velocity', route: '/glossary/escape-velocity', tags: ['orbital-mechanics'] },
      { term: 'Force', route: '/glossary/force', tags: ['dynamics'] },
      { term: 'Frequency', route: '/glossary/frequency', tags: ['waves', 'oscillation'] },
      { term: 'Gravity', route: '/glossary/gravity', tags: ['forces', 'orbits'] },
      { term: 'Inertia', route: '/glossary/inertia', tags: ['motion'] },
      { term: 'Joule', route: '/glossary/joule', tags: ['units'] },
      { term: 'Kinetic Energy', route: '/glossary/kinetic-energy', tags: ['energy', 'motion'] },
      { term: 'Momentum', route: '/glossary/momentum', tags: ['conservation'] },
      { term: 'Neutron', route: '/glossary/neutron', tags: ['nuclear'] },
      { term: 'Photon', route: '/glossary/photon', tags: ['light', 'quantum'] },
    ];

    return g.map((x) => ({
      id: `glossary-${x.term.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'glossary',
      title: x.term,
      description: '',
      subject: 'general',
      route: x.route,
      tags: x.tags,
    }));
  })(),

  // Additional curated topics (ensure at least 30+ total)
  {
    id: 'topic-spectroscopy',
    type: 'topic',
    title: 'Spectroscopy & Light Analysis',
    description: 'How spectroscopy reveals composition, temperature, and motion of celestial objects.',
    subject: 'physics',
    route: '/topics/spectroscopy',
    tags: ['spectroscopy', 'light', 'optics'],
  },
  {
    id: 'topic-gravitational-waves',
    type: 'topic',
    title: 'Gravitational Waves',
    description: 'Ripples in spacetime produced by accelerating massive objects like merging black holes.',
    subject: 'physics',
    route: '/topics/gravitational-waves',
    tags: ['gravitational-waves', 'relativity'],
  },
  {
    id: 'topic-hubble-constant',
    type: 'topic',
    title: 'Hubble Constant & Expansion',
    description: 'Measurements and implications of the universe expanding and the Hubble constant.',
    subject: 'physics',
    route: '/topics/hubble-constant',
    tags: ['cosmology', 'expansion'],
  },
];

export default searchIndex;
