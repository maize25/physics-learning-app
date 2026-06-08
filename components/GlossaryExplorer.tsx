'use client';

import { useMemo, useState } from 'react';
import { glossaryData } from '../data/glossary';

const difficultyForIndex = (index: number) => {
  if (index < 17) return 'Beginner';
  if (index < 34) return 'Intermediate';
  return 'Advanced';
};

export default function GlossaryExplorer() {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const sortedGlossary = useMemo(
    () => [...glossaryData].sort((a, b) => a.term.localeCompare(b.term)),
    []
  );

  const filteredGlossary = useMemo(
    () =>
      sortedGlossary.filter((item, index) => {
        const matchesSearch = [item.term, item.definition, item.example, ...item.relatedConcepts]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesDifficulty = difficulty === 'All' || difficultyForIndex(index) === difficulty;
        return matchesSearch && matchesDifficulty;
      }),
    [difficulty, search, sortedGlossary]
  );

  return (
    <>
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search glossary terms..."
          className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-4 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
        />
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="rounded-3xl border border-slate-300 bg-white px-5 py-4 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
        >
          <option value="All">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredGlossary.map((item, index) => (
          <div
            key={item.term}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-950"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300">{item.term}</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {difficultyForIndex(index)}
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">{item.definition}</p>

            <button
              type="button"
              onClick={() => setExpandedTerm(expandedTerm === item.term ? null : item.term)}
              className="mt-6 inline-flex items-center justify-between w-full rounded-2xl bg-blue-50 px-5 py-3 text-left text-sm font-semibold text-blue-700 transition hover:bg-blue-100 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800"
            >
              <span>{expandedTerm === item.term ? 'Hide details' : 'View details'}</span>
              <span>{expandedTerm === item.term ? '−' : '+'}</span>
            </button>

            {expandedTerm === item.term && (
              <div className="mt-5 space-y-4 rounded-3xl bg-slate-50 p-5 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Example</p>
                  <p className="mt-2 italic">{item.example}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Related Concepts</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.relatedConcepts.map((concept) => (
                      <span key={concept} className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
