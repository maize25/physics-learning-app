import Timeline from '../../components/Timeline';
import PageTransition from '@/src/components/effects/PageTransition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physics Timeline | Discoveries from 1900 to 2024',
  description: 'A historical timeline of major physics discoveries from quantum theory to gravitational waves.',
};

export default function TimelinePage() {
  return (
    <PageTransition>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">Physics Discovery Timeline</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore the major breakthroughs that shaped 20th and 21st century physics, from Planck and Einstein to gravitational waves and dark energy.
            </p>
          </div>
          <Timeline />
        </div>
      </div>
    </PageTransition>
  );
}
