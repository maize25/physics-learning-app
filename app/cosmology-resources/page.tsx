import Link from 'next/link';
import PageTransition from '@/src/components/effects/PageTransition';

const learningPaths = [
  {
    title: 'Theory & Cosmology',
    description: 'Start with foundational lessons in physics, gravity, and the evolving universe.',
    href: '/lessons/newtons-laws',
  },
  {
    title: 'Solar System',
    description: 'Explore the planets, their motions, and the missions that reveal our neighborhood.',
    href: '/lessons/mercury-planet',
  },
  {
    title: 'Scientists',
    description: 'Read biographies and scientific stories from Newton, Curie, Sagan, and more.',
    href: '/lessons/isaac-newton',
  },
];

const resources = [
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    link: 'https://en.wikipedia.org/wiki/A_Brief_History_of_Time',
    description: 'An accessible guide to black holes, cosmology, and the nature of time, with timeless explanations of modern physics.',
  },
  {
    title: 'Cosmology',
    author: 'Steven Weinberg',
    link: 'https://www.worldcat.org/title/cosmology/oclc/17970914',
    description: 'A rigorous introduction to modern cosmology written by one of the Nobel laureates who shaped the field.',
  },
  {
    title: 'The First Three Minutes',
    author: 'Steven Weinberg',
    link: 'https://en.wikipedia.org/wiki/The_First_Three_Minutes',
    description: 'A detailed narrative of the early universe and the first moments after the Big Bang.',
  },
  {
    title: 'Introduction to Cosmology',
    author: 'Barbara Ryden',
    link: 'https://www.cambridge.org/core/books/introduction-to-cosmology/7F938C8B40D39B74DA1359693DF0F6AD',
    description: 'A modern undergraduate textbook with observational evidence, cosmic expansion, and dark energy.',
  },
];

const references = [
  {
    title: 'Discovery of cosmic acceleration using Type Ia supernovae',
    source: 'Riess et al., 1998',
    link: 'https://ui.adsabs.harvard.edu/abs/1998AJ....116.1009R/abstract',
  },
  {
    title: 'Planck 2018 results: Cosmological parameters',
    source: 'Planck Collaboration',
    link: 'https://arxiv.org/abs/1807.06209',
  },
  {
    title: 'The Cosmic Microwave Background radiation',
    source: 'NASA / WMAP',
    link: 'https://map.gsfc.nasa.gov/',
  },
  {
    title: 'Dark matter and dark energy review',
    source: 'Particle Data Group',
    link: 'https://pdg.lbl.gov/',
  },
];

export default function CosmologyResourcesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8 rounded-[2rem] border border-cyan-700 bg-slate-950 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Cosmology Reference Library</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Modern cosmology resources and research references</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            A curated library of books, papers, and real resources for students who want to explore dark energy, black holes, early universe physics, and observational cosmology.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {resources.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.author}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex text-cyan-300 hover:text-white">
                  View resource ↗
                </a>
                <Link href="/lessons" className="inline-flex rounded-full bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500 text-sm">
                  Start learning ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <div key={path.title} className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white">{path.title}</h3>
              <p className="mt-3 text-slate-300">{path.description}</p>
              <Link href={path.href} className="mt-5 inline-flex rounded-full bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500 text-sm">
                Start learning {path.title}
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white">Key cosmology references</h2>
          <p className="mt-3 text-slate-300">These papers and datasets are widely cited in modern cosmology and support the lessons on dark matter, inflation, and the expanding universe.</p>
          <ul className="mt-6 space-y-4 text-slate-300">
            {references.map((ref) => (
              <li key={ref.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="font-semibold text-white">{ref.title}</p>
                <p className="text-sm text-slate-400">{ref.source}</p>
                <a href={ref.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-cyan-300 hover:text-white">
                  Read the paper ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
