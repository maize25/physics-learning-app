import type { Metadata } from 'next';
import GlossaryExplorer from '../../components/GlossaryExplorer';
import PageTransition from '@/src/components/effects/PageTransition';
import ReadProgressBar from '@/src/components/lesson/ReadProgressBar';

export const metadata: Metadata = {
  title: 'Physics Glossary | 50 Essential Terms',
  description: 'An alphabetical physics glossary of foundational terms for students and learners.',
};

export default function GlossaryPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <ReadProgressBar />
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">Physics Glossary</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Master the foundational vocabulary of physical science with 50 essential terms, examples, and concept links.
          </p>
        </div>

        <GlossaryExplorer />
      </div>
    </PageTransition>
  );
}
