export interface LessonDetail {
  title: string;
  slug: string;
  intro: string;
  fullContent: string;
  examples: string[];
  quizLink: string;
  sections: Array<{ heading: string; content: string }>;
  images: Array<{ src: string; alt: string }>;
  videos: Array<{ title: string; url: string; source: string }>;
  books: Array<{ title: string; author: string; link: string }>;
  papers: Array<{ title: string; link: string; source: string }>;
  relatedTopics: string[];
}

export const lessons: LessonDetail[] = [
  {
    title: "Introduction to Astronomy",
    slug: "astronomy",
    intro: "Astronomy is the scientific study of celestial objects and phenomena beyond Earth.",
    fullContent: `Astronomy is one of the oldest sciences, with observations dating back thousands of years. From ancient civilizations tracking the stars to modern telescopes peering into the far reaches of the universe, astronomy has fundamentally changed our understanding of our place in the cosmos. Modern astronomy encompasses several key areas: observational astronomy using telescopes and instruments, theoretical astronomy explaining celestial phenomena through physics, planetary science studying planets and moons, stellar astronomy understanding stars, extragalactic astronomy studying galaxies, and cosmology studying the universe's origin and evolution.`,
    examples: [
      "The solar system contains 8 planets orbiting the Sun.",
      "Stars are born in giant clouds of gas and dust called nebulae.",
      "Galaxies contain billions of stars and are arranged in a cosmic web.",
      "The universe is expanding and accelerating over time.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "What is Astronomy?",
        content: "Astronomy studies everything beyond Earth, including stars, planets, galaxies, nebulae, and the large-scale structure of the cosmos. It combines observation and modeling to answer questions about where the universe came from and how it changes."
      },
      {
        heading: "Observational Techniques",
        content: "Astronomers use optical telescopes to study visible light, radio arrays to detect wavelengths from molecules, and X-ray satellites to examine hot gas near black holes. Modern observatories like Hubble and James Webb reveal ancient galaxies and stellar nurseries."
      },
      {
        heading: "The Scale of the Universe",
        content: "Distances in astronomy are enormous: we measure them in astronomical units, light years, and parsecs. The nearest star beyond the Sun is 4.24 light years away, while the observable universe spans nearly 94 billion light years."
      },
      {
        heading: "Practical Study Path",
        content: "Start with the solar system, learn stellar evolution, then move on to galaxies and cosmology. Practice by identifying constellations, tracking lunar phases, and using online planetarium tools."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Hubble_2005-01-barred-spiral-galaxy-NGC1300.jpg", alt: "Barred spiral galaxy NGC 1300" },
    ],
    videos: [
      { title: "An Introduction to Astronomy", url: "https://www.youtube.com/embed/N7kVx7YcW6I", source: "PBS Space Time" },
    ],
    books: [
      { title: "Cosmos", author: "Carl Sagan", link: "https://archive.org/details/cosmos00saga" },
      { title: "Astronomy: A Self-Teaching Guide", author: "Dinah L. Moche", link: "https://archive.org/details/astronomy-self-teaching-guide" },
    ],
    papers: [
      { title: "The Expansion of the Universe", link: "https://www.nature.com/articles/49533", source: "Nature" },
      { title: "Measuring the Hubble Constant", link: "https://arxiv.org/abs/1908.01283", source: "arXiv" },
    ],
    relatedTopics: ["astrophysics", "cosmology", "telescopes"],
  },
  {
    title: "Introduction to Astrophysics",
    slug: "astrophysics",
    intro: "Astrophysics applies physics principles to understand celestial objects and cosmic phenomena.",
    fullContent: `Astrophysics combines astronomy with physics to explain how stars work, how galaxies form, and what happens to matter under extreme conditions. Key ideas include stellar fusion, gravity, radiation, and the lifecycle of stars. Astrophysicists analyze light using spectroscopy to determine composition, temperature, and motion. They also study gravitational waves from colliding black holes and neutron stars.`,
    examples: [
      "The Sun converts 600 million tons of hydrogen to helium every second.",
      "Neutron stars can weigh as much as a mountain in a teaspoon of material.",
      "Quasars are among the brightest objects in the universe.",
      "Pulsars emit precise radio pulses from rotating neutron stars.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "Stellar Physics",
        content: "At the heart of astrophysics is the study of stars. Nuclear fusion converts hydrogen into helium, releasing energy that balances gravitational collapse. The life of a star depends on its mass: massive stars become supernovae and leave behind neutron stars or black holes."
      },
      {
        heading: "Radiation and Spectroscopy",
        content: "Spectroscopy splits light into a spectrum. The absorption and emission lines tell us what elements are present and how fast an object is moving. This is how we know the chemistry of distant stars and galaxies."
      },
      {
        heading: "Gravity in Astrophysics",
        content: "Gravity shapes everything in the cosmos, from planetary orbits to galaxy clusters. Einstein's theory of general relativity explains gravity as the curvature of spacetime, which is essential for understanding black holes and the expanding universe."
      },
      {
        heading: "Observing Extreme Objects",
        content: "Astrophysicists study supernovae, neutron stars, and black holes using X-rays, gamma rays, and gravitational wave detectors. These observations reveal the behavior of matter under conditions impossible to recreate on Earth."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Chandra_-_Crab_Nebula.jpg", alt: "The Crab Nebula in X-ray light" },
    ],
    videos: [
      { title: "What is Astrophysics?", url: "https://www.youtube.com/embed/H3ZfQc5-5jU", source: "Kurzgesagt" },
    ],
    books: [
      { title: "The Elegant Universe", author: "Brian Greene", link: "https://archive.org/details/elegantuniverse0000gree" },
      { title: "Introduction to Modern Astrophysics", author: "Carroll & Ostlie", link: "https://archive.org/details/introductiontomodernastrophysics" },
    ],
    papers: [
      { title: "A Brief History of Spectroscopy", link: "https://arxiv.org/abs/1507.03003", source: "arXiv" },
      { title: "Gravitational Waves from Merging Black Holes", link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102", source: "Physical Review Letters" },
    ],
    relatedTopics: ["black-holes", "stars", "radiation"],
  },
  {
    title: "Cosmology & The Universe",
    slug: "cosmology",
    intro: "Cosmology is the study of the origin, evolution, and structure of the entire universe.",
    fullContent: `Cosmology seeks to answer humanity's biggest questions: Where did the universe come from? How did it evolve? What is its ultimate fate? The Big Bang theory describes the universe beginning 13.8 billion years ago in a hot, dense state. Observations of the cosmic microwave background and galaxy redshift show that space itself is expanding and accelerating. Dark matter and dark energy are key components that shape the universe's behavior.`,
    examples: [
      "The observable universe is about 93 billion light years across.",
      "Cosmic microwave background radiation is the afterglow of the Big Bang.",
      "Galaxies are arranged in a cosmic web of filaments and voids.",
      "Dark energy causes accelerated expansion.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "The Big Bang and Early Universe",
        content: "The Big Bang model explains the formation of the first atoms and the cosmic microwave background. Within seconds, the universe cooled enough for protons and neutrons to form, and within minutes, helium nuclei appeared."
      },
      {
        heading: "Dark Matter and Dark Energy",
        content: "Dark matter provides the gravitational scaffolding for galaxies, while dark energy drives the accelerating expansion of space. Together they account for 95% of the universe's total energy budget."
      },
      {
        heading: "Cosmic Structure",
        content: "Galaxies are not randomly distributed: they form clusters, filaments, and walls separated by immense voids. This structure developed from tiny density fluctuations in the early universe."
      },
      {
        heading: "Future of the Universe",
        content: "Cosmologists study possible futures: continued acceleration, a Big Freeze, or rare scenarios like a Big Rip. Observations of supernovae and the CMB help refine these models."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Cosmic_Microwave_Background_-_WMAP.jpg", alt: "Cosmic microwave background map" },
    ],
    videos: [
      { title: "What is Cosmology?", url: "https://www.youtube.com/embed/hlF3OU1QKNU", source: "PBS Space Time" },
    ],
    books: [
      { title: "A Brief History of Time", author: "Stephen Hawking", link: "https://archive.org/details/brevhistoryof00hawk" },
      { title: "The First Three Minutes", author: "Steven Weinberg", link: "https://archive.org/details/firstthreeminut00wein" },
    ],
    papers: [
      { title: "Planck 2018 Results", link: "https://arxiv.org/abs/1807.06209", source: "arXiv" },
      { title: "Discovery of Accelerated Expansion", link: "https://arxiv.org/abs/astro-ph/9805201", source: "arXiv" },
    ],
    relatedTopics: ["big-bang", "dark-matter", "dark-energy"],
  },
  {
    title: "Black Holes & Gravity",
    slug: "black-holes",
    intro: "Black holes are among the most extreme objects in the universe, where gravity becomes so strong that nothing can escape.",
    fullContent: `Black holes form when massive stars run out of fuel and collapse under their own weight. The center becomes a region of spacetime so warped that light cannot escape from within the event horizon. Black hole physics connects gravity, quantum mechanics, and thermodynamics. Observations of black hole mergers, accretion disks, and shadows have transformed them from theoretical curiosities into real, observable objects.`,
    examples: [
      "The first image of a black hole's shadow was captured in 2019.",
      "A black hole with 4 million solar masses lies at the center of the Milky Way.",
      "Hawking radiation predicts black holes slowly evaporate over time.",
      "LIGO detects gravitational waves from black hole mergers.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "How Black Holes Form",
        content: "Black holes begin as massive stars that explode as supernovae. When the core has insufficient pressure to resist gravity, it collapses to a point of immense density."
      },
      {
        heading: "Event Horizon and Singularity",
        content: "The event horizon is the boundary beyond which nothing can return. At the center lies the singularity, where current physics predicts infinite density and our equations break down."
      },
      {
        heading: "Detecting Black Holes",
        content: "Astronomers detect black holes by observing orbiting stars, X-ray emissions from hot gas, and gravitational waves. The Event Horizon Telescope captured the first image of a black hole's shadow in galaxy M87."
      },
      {
        heading: "Black Hole Research Directions",
        content: "Current research seeks to unify quantum mechanics and gravity, understand information loss, and study how black holes influence galaxy formation. New gravitational wave detectors will reveal more mergers."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg", alt: "M87 black hole image" },
    ],
    videos: [
      { title: "Understanding Black Holes", url: "https://www.youtube.com/embed/zUyH3XhpLTo", source: "PBS Space Time" },
    ],
    books: [
      { title: "Black Hole Blues", author: "Simone Seibold", link: "https://archive.org/details/blackholeblues00sieb" },
      { title: "The Black Hole War", author: "Leonard Susskind", link: "https://archive.org/details/blackholewarcrea0000suss" },
    ],
    papers: [
      { title: "First Image of a Black Hole", link: "https://iopscience.iop.org/article/10.3847/2041-8213/ab0ec7", source: "The Astrophysical Journal Letters" },
      { title: "Hawking Radiation", link: "https://projecteuclid.org/euclid.cmp/1103899181", source: "Communications in Mathematical Physics" },
    ],
    relatedTopics: ["gravity", "event-horizon", "general-relativity"],
  },
  {
    title: "Dark Matter & Dark Energy",
    slug: "dark-matter",
    intro: "Most of the universe is invisible. Dark matter and dark energy make up 95% of all matter and energy.",
    fullContent: `Dark matter and dark energy are the two great mysteries of modern cosmology. Together they dominate the universe, but they do not interact with light in the way ordinary matter does. Dark matter reveals itself through gravitational effects on galaxies and clusters, while dark energy drives the accelerated expansion of space. Understanding these components is one of the biggest goals of 21st century physics.`,
    examples: [
      "Galaxy rotation curves reveal extra unseen mass.",
      "Gravitational lensing maps dark matter around galaxy clusters.",
      "The universe's expansion is accelerating thanks to dark energy.",
      "Experiments like LUX-ZEPLIN search for dark matter particles underground.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "Evidence for Dark Matter",
        content: "Measurements of galactic rotation and gravitational lensing show there is more mass than visible stars can account for. This missing mass is called dark matter, and it forms a halo around galaxies."
      },
      {
        heading: "Candidates and Experiments",
        content: "Scientists search for WIMPs, axions, and other weakly interacting particles. Experiments such as XENONnT and PandaX are designed to detect rare collisions between dark matter and atomic nuclei."
      },
      {
        heading: "What is Dark Energy?",
        content: "Dark energy acts like a negative pressure that pushes space apart. It is often modeled as a cosmological constant or a dynamic field that permeates the vacuum."
      },
      {
        heading: "Implications for the Cosmos",
        content: "Dark matter shapes galaxy formation while dark energy determines the ultimate fate of the universe. If dark energy remains constant, the universe will keep expanding and cooling."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dark_matter_halo.jpg", alt: "Dark matter halo simulation" },
    ],
    videos: [
      { title: "What is Dark Matter?", url: "https://www.youtube.com/embed/UV5Kd4RExWI", source: "Veritasium" },
    ],
    books: [
      { title: "The 4 Percent Universe", author: "Richard Panek", link: "https://archive.org/details/4percentuniverse00pane" },
      { title: "Dark Matter and the Dinosaurs", author: "Lisa Randall", link: "https://archive.org/details/darkmatterdinosa0000rand" },
    ],
    papers: [
      { title: "Dark Energy Survey Results", link: "https://www.darkenergysurvey.org/", source: "DES" },
      { title: "Evidence for Dark Matter", link: "https://arxiv.org/abs/astro-ph/9512139", source: "arXiv" },
    ],
    relatedTopics: ["cosmology", "galaxy-formation", "particle-physics"],
  },
  {
    title: "Famous Scientists & Their Discoveries",
    slug: "famous-scientists",
    intro: "Throughout history, brilliant minds have revolutionized our understanding of physics and the cosmos.",
    fullContent: `The story of physics is shaped by scientists who made bold discoveries and dramatic breakthroughs. From Einstein's relativity to Hawking's black hole insights, their work helps us understand both the cosmos and the quantum. Studying these scientists teaches not only scientific facts, but also how physicists think, question assumptions, and innovate under uncertainty.`,
    examples: [
      "Einstein predicted gravitational waves years before they were detected.",
      "Hawking showed that black holes emit radiation.",
      "Feynman created diagrams that revolutionized particle physics.",
      "Sagan inspired millions through science communication.",
    ],
    quizLink: "/quizzes",
    sections: [
      {
        heading: "Einstein and Relativity",
        content: "Einstein changed physics with special relativity in 1905 and general relativity in 1915. His equations explain how time and space are linked and predict the bending of light by mass."
      },
      {
        heading: "Hawking, Black Holes, and Information",
        content: "Stephen Hawking combined general relativity with quantum field theory to show that black holes emit radiation. His work led to the black hole information paradox, a key puzzle in modern physics."
      },
      {
        heading: "Feynman Diagrams and Quantum Electrodynamics",
        content: "Richard Feynman introduced diagrams that make particle interactions easier to compute. His contributions to quantum electrodynamics remain central to particle physics."
      },
      {
        heading: "Science Communication",
        content: "Carl Sagan and others made science accessible with books, TV, and public outreach. Great communicators help new generations understand and appreciate scientific discovery."
      },
    ],
    images: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg", alt: "Albert Einstein portrait" },
    ],
    videos: [
      { title: "The Power of Famous Scientists", url: "https://www.youtube.com/embed/9mzRXhKBDmQ", source: "Science Channel" },
    ],
    books: [
      { title: "The Black Hole War", author: "Leonard Susskind", link: "https://archive.org/details/blackholewarcrea0000suss" },
      { title: "Surely You're Joking, Mr. Feynman!", author: "Richard Feynman", link: "https://archive.org/details/surelyyourejokin00feyn" },
    ],
    papers: [
      { title: "Einstein's 1916 Paper on Gravitation", link: "https://einsteinpapers.press.princeton.edu/vol6-trans/154", source: "Princeton" },
      { title: "Hawking Radiation Discovery", link: "https://projecteuclid.org/euclid.cmp/1103899181", source: "Communications in Mathematical Physics" },
    ],
    relatedTopics: ["relativity", "quantum-physics", "science-history"],
  },
];
