import { lessons } from '../../../data/lessons';
import PageTransition from '@/src/components/effects/PageTransition';
import LessonViewer from '@/src/components/lesson/LessonViewer';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export default async function LessonDetail({ params }: Props) {
  const { slug } = await params;
  const lesson = lessons.find((item) => item.slug === slug);

  if (!lesson) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Lesson not found</h1>
      </div>
    );
  }

  return (
    <PageTransition>
      <LessonViewer lesson={lesson} />
    </PageTransition>
  );
}
