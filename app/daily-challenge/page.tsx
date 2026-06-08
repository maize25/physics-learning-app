'use client';

import PageWrapper from '../../components/PageWrapper';
import DailyChallenge from '../../components/DailyChallenge';
import PageTransition from '@/src/components/effects/PageTransition';

export default function DailyChallengePage() {
  return (
    <PageTransition>
      <PageWrapper>
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-10 shadow-xl dark:border-slate-700 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-500">Daily boost</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Solve today’s physics challenge</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Build a streak and earn bonus XP by answering a fresh physics question every day.
            </p>
          </div>
        </div>

        <DailyChallenge />
      </section>
    </PageWrapper>
    </PageTransition>
  );
}
