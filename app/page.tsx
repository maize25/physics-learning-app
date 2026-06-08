'use client';

import CosmologyReadingList from '../src/components/CosmologyReadingList';
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
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-violet-500 blur-3xl mix-blend-screen" />
          <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-cyan-400 blur-3xl mix-blend-screen" />
        </div>
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Physics Atlas</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Computational Cosmology & Physics Engine
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            A scholar’s toolkit for gravitational dynamics, relativistic collapse, and computational cosmology in a modern web experience.
          </p>
          <div className="mt-10 rounded-[2rem] border border-cyan-500/20 bg-slate-900/80 p-8 shadow-inner backdrop-blur-xl">
            <p className="text-xl italic text-slate-100">“The most incomprehensible thing about the universe is that it is comprehensible.”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.35em] text-cyan-300">– Albert Einstein</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="/modules" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-4 text-lg font-semibold text-slate-950 shadow-xl transition hover:bg-cyan-400">
              View Modules
            </a>
            <a href="/cosmology-resources" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20">
              Cosmology Reading List
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
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Chapter 1</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Classical Mechanics & Orbits</h3>
            <p className="mt-3 text-slate-300">Modeling Newton’s Law of Universal Gravitation and Kepler's Laws of Planetary Motion.</p>
            <span className="mt-5 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Interactive Module Active</span>
          </div>
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Chapter 2</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Relativistic Astrophysics</h3>
            <p className="mt-3 text-slate-300">Visualizing spacetime curvature, the Schwarzschild radius, and event horizons.</p>
            <span className="mt-5 inline-flex rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200">Under Optimization</span>
          </div>
          <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Chapter 3</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">The JMN Naked Singularity Model</h3>
            <p className="mt-3 text-slate-300">Computational comparisons of gravitational collapse: standard black holes vs. naked singularities where information escapes the event horizon.</p>
            <span className="mt-5 inline-flex rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200">Current Core Focus</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <CosmologyReadingList />
      </div>

      <section className="mt-10 rounded-[2rem] border border-cyan-700 bg-slate-950/95 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Current Status & Future Goals</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Research direction built for interview review</h2>
          </div>
          <a href="/about" className="inline-flex items-center justify-center rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
            Full roadmap page
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Current status</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Interactive modules for mechanics, orbital dynamics, and relativistic astrophysics.</li>
              <li>• JMN naked singularity model included as the core comparative research concept.</li>
              <li>• Embedded reading list, quote-driven narrative, and polished academic UI.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Future goals</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Migrate compute workflows toward compiled numerical back ends for research-grade performance.</li>
              <li>• Add machine learning analysis to process cosmological datasets and live observatory results.</li>
              <li>• Grow the platform into an interview-ready portfolio for physics research and academic presentation.</li>
            </ul>
          </div>
        </div>
      </section>

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
