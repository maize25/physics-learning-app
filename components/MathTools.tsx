'use client'

import { useState } from 'react';
import { mathLessons } from '../data/mathLessons';

export default function MathTools() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mode, setMode] = useState('lessons');

  const categories = ['All', 'Calculus', 'Algebra', 'Geometry', 'Statistics'];
  const filtered = selectedCategory === 'All' ? mathLessons : mathLessons.filter((l) => l.category === selectedCategory);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500">Mathematics</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Lessons & Tools</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Master calculus, algebra, geometry, and statistics with guided examples.</p>
        </div>
        <div className="rounded-3xl bg-purple-50 px-4 py-3 text-purple-700 dark:bg-purple-900/20 dark:text-purple-200">{filtered.length} lessons</div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-3xl px-5 py-2 text-sm font-semibold transition ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white dark:bg-purple-500'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-purple-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filtered.map((lesson) => (
          <div
            key={lesson.id}
            className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-purple-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-purple-500/50"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{lesson.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{lesson.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                  lesson.difficulty === 'Beginner'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200'
                    : lesson.difficulty === 'Intermediate'
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>
            </div>

            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{lesson.content}</p>

            {lesson.keyFormulas.length > 0 && (
              <div className="rounded-2xl bg-white p-4 dark:bg-slate-950">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Key formulas</p>
                <div className="mt-3 space-y-2">
                  {lesson.keyFormulas.map((formula, idx) => (
                    <p key={idx} className="font-mono text-sm text-slate-900 dark:text-white">
                      {formula}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {lesson.examples.length > 0 && (
              <div className="rounded-2xl bg-white p-4 dark:bg-slate-950">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Examples</p>
                <div className="mt-3 space-y-3">
                  {lesson.examples.map((ex, idx) => (
                    <div key={idx} className="border-l-4 border-purple-400 pl-4">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{ex.problem}</p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">→ {ex.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
