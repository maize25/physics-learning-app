'use client';

import dynamic from 'next/dynamic';
import PageTransition from '@/src/components/effects/PageTransition';
import QuizHistoryPanel from '../../src/components/quiz/QuizHistoryPanel';
import MistakePanel from '../../src/components/quiz/MistakePanel';

const QuizPlayer = dynamic(() => import('../../components/QuizPlayer'), {
  ssr: false,
});

export default function Quizzes() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Quizzes</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <QuizPlayer />
        </div>

        <QuizHistoryPanel />
        <MistakePanel />
      </div>
    </PageTransition>
  );
}
