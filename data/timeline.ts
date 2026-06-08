export interface TimelineEvent {
  year: number;
  title: string;
  scientist: string;
  description: string;
}

export const physicsTimeline: TimelineEvent[] = [
  { year: 1900, title: 'Quantum Theory', scientist: 'Max Planck', description: 'Explained light emission spectra by quantizing energy and launching modern quantum physics.' },
  { year: 1905, title: 'Special Relativity', scientist: 'Albert Einstein', description: 'Introduced mass-energy equivalence and a new understanding of space and time.' },
  { year: 1911, title: 'Atomic Nucleus', scientist: 'Ernest Rutherford', description: 'Discovered the dense atomic nucleus through the gold foil experiment.' },
  { year: 1911, title: 'Superconductivity', scientist: 'Heike Kamerlingh Onnes', description: 'Observed zero electrical resistance in mercury at cryogenic temperatures.' },
  { year: 1913, title: 'Bohr Model', scientist: 'Niels Bohr', description: 'Proposed quantized electron orbits for hydrogen and launched atomic theory.' },
  { year: 1932, title: 'The Neutron', scientist: 'James Chadwick', description: 'Confirmed the existence of the neutral nuclear particle and completed atomic structure.' },
  { year: 1932, title: 'Positron Discovery', scientist: 'Carl D. Anderson', description: 'Provided the first physical evidence of antimatter.' },
  { year: 1939, title: 'Stellar Nucleosynthesis', scientist: 'Hans Bethe', description: 'Explained how stars generate energy through nuclear fusion.' },
  { year: 1947, title: 'Transistor', scientist: 'Bardeen, Brattain & Shockley', description: 'Created the first transistor and launched modern electronics.' },
  { year: 1956, title: 'Neutrino', scientist: 'Cowan & Reines', description: 'Provided experimental confirmation of the elusive neutrino particle.' },
  { year: 1964, title: 'Quark Model', scientist: 'Murray Gell-Mann & George Zweig', description: 'Suggested quarks as the fundamental building blocks of hadrons.' },
  { year: 1974, title: 'Charm Quark', scientist: 'Burton Richter & Samuel Ting', description: 'Discovered the J/psi particle and confirmed the charm quark.' },
  { year: 1995, title: 'Bose–Einstein Condensate', scientist: 'Cornell, Wieman & Ketterle', description: 'Created a new state of matter at near absolute zero.' },
  { year: 1995, title: 'Top Quark', scientist: 'Fermilab', description: 'Observed the heaviest quark predicted by the Standard Model.' },
  { year: 1998, title: 'Accelerating Universe', scientist: 'Supernova Cosmology Project', description: 'Discovered cosmic acceleration and implied dark energy exists.' },
  { year: 2000, title: 'Quark–Gluon Plasma', scientist: 'CERN', description: 'Recreated the primordial matter state from the early universe.' },
  { year: 2001, title: 'Neutrino Oscillation', scientist: 'SNO Collaboration', description: 'Showed neutrinos have mass by observing flavor changes.' },
  { year: 2003, title: 'WMAP Observations', scientist: 'NASA', description: 'Measured the cosmic microwave background with unprecedented precision.' },
  { year: 2004, title: 'Graphene Isolation', scientist: 'Geim & Novoselov', description: 'Isolated a single atomic layer of carbon with exceptional electronic properties.' },
  { year: 2008, title: 'Artificial Antimatter', scientist: 'LLNL', description: 'Produced positrons using lasers, advancing antimatter research.' },
  { year: 2012, title: 'Higgs Boson', scientist: 'ATLAS & CMS', description: 'Confirmed the particle that gives mass to elementary particles.' },
  { year: 2015, title: 'Gravitational Waves', scientist: 'LIGO Collaboration', description: 'Detected ripples in spacetime from merging black holes.' },
  { year: 2019, title: 'Black Hole Image', scientist: 'Event Horizon Telescope', description: 'Captured the first direct image of a black hole shadow.' },
  { year: 2023, title: 'Stochastic Gravitational Waves', scientist: 'NANOGrav', description: 'Found evidence of a low-frequency gravitational-wave background.' },
  { year: 2024, title: 'DESI Dark Energy Map', scientist: 'DESI Collaboration', description: 'Released a precise 3D cosmic map supporting dark energy studies.' },
];
