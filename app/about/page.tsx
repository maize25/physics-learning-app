import PageTransition from '@/src/components/effects/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8 rounded-[2rem] border border-blue-700 bg-slate-950 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About the Developer</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Project Roadmap & Interview Focus</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            This platform is currently running on standard web frameworks (JavaScript/Python backend). The Phase 2 roadmap includes migrating to compiled languages and utilizing deep learning algorithms to process raw astrophysical datasets, aiming to assist in live cosmological research.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Why this project</h2>
            <p className="mt-4 text-slate-300">
              The app is designed as a research-minded education tool that bridges physics fundamentals with future lab workflows. It highlights the transition from classical mechanics to modern cosmology while signalling a move toward AI-driven scientific computation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Phase 2 ambitions</h2>
            <p className="mt-4 text-slate-300">
              Next steps include compiled-language performance improvements, machine learning models for astrophysical simulation, and live dataset processing to support research-grade cosmology visualizations and predictive analysis.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
