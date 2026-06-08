import ProgressDashboard from '../../components/ProgressDashboard';
import PageTransition from '@/src/components/effects/PageTransition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progress Dashboard | Physics Learning App',
  description: 'Track your lesson completion and quiz mastery over time.',
};

export default function ProgressPage() {
  return (
    <PageTransition>
      <ProgressDashboard />
    </PageTransition>
  );
}
