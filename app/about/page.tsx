import PageTransition from '@/src/components/effects/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8 rounded-[2rem] border border-blue-700 bg-slate-950 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About the Project</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Roadmap & Research Direction</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            This app showcases physics and cosmology through interactive lessons, simulations, and computational models. The development roadmap is designed for a transition from polished learning experiences to research-capable cosmology tools.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Current Focus</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Build reliable interactive modules for mechanics, relativity, and singularity theory.</li>
              <li>• Develop a polished UI for course progression, research references, and learning analytics.</li>
              <li>• Add a reading list with cosmology resources.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Future Roadmap</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Phase 2: migrate computational back end to compiled languages for high-performance astrophysical simulation.</li>
              <li>• Phase 3: add machine learning pipelines for raw cosmological dataset analysis and prediction.</li>
              <li>• Phase 4: create interactive research learning pathways to help more students discover, imagine, and master physics.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
