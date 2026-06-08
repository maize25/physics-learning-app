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
          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            <GradientText>Physics Atlas</GradientText>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Discover physics, astronomy, and mathematics with immersive lessons, simulations, and guided learning paths designed for curious minds.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="/lessons" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 px-6 py-4 text-lg font-semibold text-slate-950 dark:text-white shadow-xl transition hover:bg-slate-100 dark:hover:bg-slate-800">
              Start Learning
            </a>
            <a href="/simulations" className="inline-flex items-center justify-center rounded-full border border-white/30 dark:border-white/20 bg-white/10 dark:bg-white/5 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/20 dark:hover:bg-white/10">
              Explore Simulations
            </a>
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
