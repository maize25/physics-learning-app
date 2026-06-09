'use client';

import Link from 'next/link';
import GradientText from '../../src/components/ui/GradientText';
import PageTransition from '../../src/components/effects/PageTransition';
import { Lesson, lessons } from '@/data/lessons';
import { calcReadTime } from '@/src/utils/readTime';

export default function Lessons() {
  return (
    <PageTransition>
      <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-white">
        <GradientText>Interactive Physics Lessons</GradientText>
      </h1>
      <p className="text-gray-300 mb-8 max-w-3xl">
        Comprehensive lessons on astronomy, astrophysics, and physics. Read detailed explanations and test your knowledge with quizzes.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {lessons.map((lesson: Lesson) => (
          <div
            key={lesson.slug}
            className="rounded-3xl border border-gray-700 bg-gray-900 p-6 shadow-xl transition glow-card hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">{lesson.title}</h2>
            <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">⏱️ {calcReadTime(lesson.intro)}</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-400">Overview</h3>
                <p className="text-gray-300">{lesson.intro}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400">What You’ll Learn</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {lesson.examples?.map((example: string, exampleIndex: number) => (
                    <li key={exampleIndex}>{example}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Link
                  href={`/lessons/${lesson.slug}`}
                  className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 text-sm"
                >
                  📚 Learn More
                </Link>
                {lesson.quizLink ? (
                  <Link
                    href={lesson.quizLink}
                    className="inline-flex rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 text-sm"
                  >
                    ✓ Take Quiz
                  </Link>
                ) : (
                  <span className="inline-flex rounded-full bg-green-800/30 px-4 py-2 text-green-200 text-sm">✓ Take Quiz</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageTransition>
  );
}
