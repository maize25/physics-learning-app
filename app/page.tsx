'use client';

import GradientText from '../src/components/ui/GradientText';
import PageTransition from '../src/components/effects/PageTransition';

const cards = [
  { title: 'Lessons', description: 'Interactive physics and astronomy lessons.', href: '/lessons', icon: '📘', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Simulations', description: 'Run animated physics labs and solar system models.', href: '/simulations', icon: '🪐', color: 'from-sky-500 to-cyan-500' },
  { title: 'Tutor', description: 'Ask an AI mentor for physics support.', href: '/tutor', icon: '💬', color: 'from-emerald-500 to-lime-500' },
  { title: 'Glossary', description: 'Explore essential physics terms and examples.', href: '/glossary', icon: '📚', color: 'from-orange-500 to-amber-500' },
  { title: 'Timeline', description: 'Major physics discoveries from the modern era.', href: '/timeline', icon: '🕰️', color: 'from-yellow-500 to-orange-400' },
  { title: 'Search', description: 'Find lessons, quotes, books, and glossary entries instantly.', href: '/search', icon: '🔍', color: 'from-cyan-500 to-sky-500' },
  { title: 'Progress', description: 'Track lesson completion and learning streaks.', href: '/progress', icon: '📈', color: 'from-fuchsia-500 to-pink-500' },
  { title: 'Quotes', description: 'Daily inspiration from scientists and innovators.', href: '/quotes', icon: '💡', color: 'from-indigo-500 to-violet-500' },
  { title: 'Mathematics', description: 'Math lessons and formulas to support physics learning.', href: '/mathematics', icon: '∑', color: 'from-red-500 to-rose-500' },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl mix-blend-screen" />
          <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl mix-blend-screen" />
        </div>
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Physics Atlas</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            “If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.”
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Explore a physics platform built to connect classical mechanics, relativity, quantum theory, and cosmology with AI-ready learning paths.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="/modules" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 px-6 py-4 text-lg font-semibold text-slate-950 dark:text-white shadow-xl transition hover:bg-slate-100 dark:hover:bg-slate-800">
              View Modules
            </a>
            <a href="/cosmology-resources" className="inline-flex items-center justify-center rounded-full border border-white/30 dark:border-white/20 bg-white/10 dark:bg-white/5 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20 dark:hover:bg-white/10">
              Cosmology Resources
            </a>
          </div>
        </div>
      </section>

      <div className="mt-10 rounded-[2rem] bg-slate-950 p-8 shadow-2xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Course Modules</p>
            <h2 className="mt-3 text-3xl font-bold text-white">A roadmap from orbits to naked singularities</h2>
          </div>
          <a href="/modules" className="inline-flex items-center justify-center rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
            Open the Module Hub
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module 1</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Classical Mechanics & Orbits</h3>
            <p className="mt-3 text-slate-300">Newton’s gravitation, Kepler’s planetary motion, and an interactive orbit visualizer that shows mass changing orbital speed.</p>
            <span className="mt-5 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Live visualizer</span>
          </div>
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module 2</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Relativistic Astrophysics</h3>
            <p className="mt-3 text-slate-300">Spacetime curvature, Schwarzschild radius, and event horizons.</p>
            <div className="mt-5 rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              Module Locked: Awaiting Machine Learning Integration.
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module 3</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Quantum & String Theory Frontier</h3>
            <p className="mt-3 text-slate-300">Wave-particle duality, entanglement, and string dimensions.</p>
            <div className="mt-5 rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              Under Construction - Theoretical Phase.
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module 4</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Computational Cosmology</h3>
            <p className="mt-3 text-slate-300">JMN naked singularity model versus standard black holes and information escape.</p>
            <div className="mt-5 rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              Module Locked: Awaiting Machine Learning Integration.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group overflow-hidden rounded-[2rem] border-l-4 bg-slate-950 p-6 text-white shadow-xl transition glow-card hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${card.color}`}>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-slate-300">{card.description}</p>
          </a>
        ))}
      </div>
      </div>
    </PageTransition>
  );
}
