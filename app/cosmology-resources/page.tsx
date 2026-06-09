import PageTransition from '@/src/components/effects/PageTransition';

const books = [
  {
    title: 'The Story of Collapsing Stars',
    author: 'Gravitational Physics',
    description:
      'A deep exploration of gravitational collapse, black hole formation, and the mathematical framework behind naked singularities.',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    description: 'The classic primer on cosmology, black holes, and the nature of time itself.',
  },
  {
    title: 'The Elegant Universe',
    author: 'Brian Greene',
    description: 'Exploring the transition from general relativity to string theory and multidimensional physics.',
  },
];

export default function CosmologyResourcesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8 rounded-[2rem] border border-cyan-700 bg-slate-950 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Cosmology Resources</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Recommended Reading for Modern Cosmology</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Recommended books for studying modern physics, cosmology and astrophysics
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {books.map((book) => (
            <div key={book.title} className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{book.author}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{book.title}</h2>
              <p className="mt-4 text-slate-300">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
