'use client';

import { useEffect, useMemo, useState } from 'react';
import { Lesson, lessons } from '@/data/lessons';

interface LessonProgress {
  score: number;
  completed: boolean;
}

export default function ProgressDashboard() {
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({});
  const [mounted, setMounted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(80);

  useEffect(() => {
    const saved = window.localStorage.getItem('physics_progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch {
        setProgress({});
      }
    }
    setMounted(true);
  }, []);

  const saveProgress = (updated: Record<string, LessonProgress>) => {
    setProgress(updated);
    window.localStorage.setItem('physics_progress', JSON.stringify(updated));
  };

  const updateLesson = (slug: string, score: number) => {
    const updatedProgress = {
      ...progress,
      [slug]: { score, completed: score >= 80 },
    };
    saveProgress(updatedProgress);
  };

  const totalLessons = lessons.length;
  const completedCount = Object.values(progress).filter((item) => item.completed).length;
  const averageScore = useMemo(() => {
    const entries = Object.values(progress);
    if (entries.length === 0) return 0;
    return Math.round(entries.reduce((sum, item) => sum + item.score, 0) / entries.length);
  }, [progress]);

  const overallCompletion = Math.round((completedCount / totalLessons) * 100);

  if (!mounted) return null;

  return (
    <div className="container mx-auto p-8">
      <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-900 to-sky-500 p-10 text-white shadow-2xl mb-10">
        <h1 className="text-4xl font-bold mb-4">Progress Dashboard</h1>
        <p className="max-w-3xl text-lg text-slate-100">
          Track lesson completion, quiz mastery, and your learning progress in real time. Update scores for each topic and watch your completion percentage grow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Completed Lessons</p>
            <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{completedCount}</p>
            <p className="text-slate-600 dark:text-slate-300">of {totalLessons} lessons</p>
        </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Average Score</p>
            <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{averageScore}%</p>
            <p className="text-slate-600 dark:text-slate-300">across all tracked lessons</p>
        </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Overall Completion</p>
            <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{overallCompletion}%</p>
          <div className="mt-4 h-3 w-full rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${overallCompletion}%` }} />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {lessons.map((lesson: Lesson) => {
          const entry = progress[lesson.slug] ?? { score: 0, completed: false };
          return (
            <div key={lesson.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{lesson.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">{lesson.intro}</p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  <span>{entry.completed ? 'Completed' : 'In progress'}</span>
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-white">{entry.score}%</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Update score for this lesson</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={entry.score}
                    onChange={(e) => updateLesson(lesson.slug, Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={() => updateLesson(lesson.slug, selectedScore)}
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Save {selectedScore}%
                </button>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <label className="text-sm font-medium text-slate-700">Quick score</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={selectedScore}
                  onChange={(e) => setSelectedScore(Math.min(100, Math.max(0, Number(e.target.value))))}
                  className="w-24 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-500">Enter a score and click Save</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
