'use client';

import GravityCanvas from '../src/components/GravityCanvas';
import LiveTelemetry from '../src/components/LiveTelemetry';
import CosmologyReadingList from '../src/components/CosmologyReadingList';
import PageTransition from '../src/components/effects/PageTransition';

const cards = [
  { title: 'Lessons', description: 'Interactive physics and astronomy lessons.', href: '/lessons', icon: '📘', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Computational Labs', description: 'Run animated physics labs and solar system models.', href: '/simulations', icon: '🪐', color: 'from-sky-500 to-cyan-500' },
  { title: 'Research AI Agent', description: 'Ask an AI mentor for physics support.', href: '/tutor', icon: '💬', color: 'from-emerald-500 to-lime-500' },
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
          <div className="mt-6">
            <GravityCanvas />
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
            <h2 className="mt-3 text-3xl font-bold text-white">An open source physics learning platform built by a self-taught developer</h2>
          </div>
          <a href="/about" className="inline-flex items-center justify-center rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
            Full roadmap page
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Current Status</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Interactive lessons covering mechanics, waves, thermodynamics and modern physics</li>
              <li>• Mathematical tools and formula references</li>
              <li>• Quiz system with progress tracking</li>
              <li>• Computational physics visualizations in development</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Future Goals</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Build real-time physics simulations using WebGL for better performance</li>
              <li>• Add machine learning tools to analyze physics datasets</li>
              <li>• Expand content to university level with deeper theoretical coverage</li>
              <li>• Open source the project for other students</li>
            </ul>
          </div>
        </div>
      </section>

      <LiveTelemetry />

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

      <section className="mt-12 mb-8">
        <div className="mb-6">
          <p className="text-cyan-400 text-sm uppercase tracking-widest font-medium">Study Resources</p>
          <h2 className="text-3xl font-bold text-white mt-1">Course Reference Library</h2>
          <p className="text-gray-400 mt-2">
            Structured learning paths with lessons, readings and exercises for each topic
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: 'Classical Mechanics',
              icon: '⚙️',
              color: 'from-blue-600 to-blue-800',
              hoverClass: 'group-hover:border-blue-500/70',
              topics: ["Newton's Laws", 'Kinematics', 'Energy & Work', 'Momentum', 'Circular Motion', 'Gravitation'],
              lessons: 6,
              exercises: 24,
              href: '/lessons',
            },
            {
              title: 'Waves & Optics',
              icon: '〰️',
              color: 'from-cyan-600 to-cyan-800',
              hoverClass: 'group-hover:border-cyan-500/70',
              topics: ['Wave Properties', 'Sound & Doppler', 'Light & Reflection', 'Refraction', 'Wave Interference', 'Polarization'],
              lessons: 6,
              exercises: 18,
              href: '/lessons',
            },
            {
              title: 'Electricity & Magnetism',
              icon: '⚡',
              color: 'from-purple-600 to-purple-800',
              hoverClass: 'group-hover:border-purple-500/70',
              topics: ['Electric Charge', 'Electric Fields', 'Circuits & Ohm\'s Law', 'Capacitors', 'Magnetic Fields', 'Electromagnetic Induction'],
              lessons: 6,
              exercises: 20,
              href: '/lessons',
            },
            {
              title: 'Modern Physics',
              icon: '⚛️',
              color: 'from-pink-600 to-pink-800',
              hoverClass: 'group-hover:border-pink-500/70',
              topics: ['Special Relativity', 'Quantum Mechanics', 'Photoelectric Effect', 'Nuclear Physics', 'Particle Physics', 'Cosmology'],
              lessons: 6,
              exercises: 16,
              href: '/lessons',
            },
            {
              title: 'Mathematics',
              icon: '∑',
              color: 'from-green-600 to-green-800',
              hoverClass: 'group-hover:border-emerald-500/70',
              topics: ['Limits & Calculus', 'Differentiation', 'Integration', 'Differential Equations', 'Linear Algebra', 'Statistics'],
              lessons: 8,
              exercises: 32,
              href: '/mathematics',
            },
            {
              title: 'Computational Physics',
              icon: '💻',
              color: 'from-orange-600 to-orange-800',
              hoverClass: 'group-hover:border-orange-500/70',
              topics: ['Python for Physics', 'Simulations', 'Data Analysis', 'Numerical Methods', 'Visualization', 'Machine Learning'],
              lessons: 4,
              exercises: 12,
              href: '/simulations',
            },
          ].map((section) => (
            <a
              key={section.title}
              href={section.href}
              className={`group rounded-2xl border border-gray-700 bg-gray-900 p-6 transition hover:-translate-y-1 hover:shadow-2xl ${section.hoverClass}`}
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${section.color}`}>
                <span className="text-2xl">{section.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-gray-400 text-sm">
                <span>{section.lessons} lessons</span>
                <span>{section.exercises} exercises</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-cyan-300 text-sm font-semibold">
                <span>Start learning</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
