import Link from 'next/link';
import FallbackImage from '../../../components/FallbackImage';
import YoutubeEmbed from '../../../components/YoutubeEmbed';
import { lessons } from '../../../data/lessons';
import ReadProgressBar from '@/src/components/lesson/ReadProgressBar';
import ConfusedButton from '@/src/components/lesson/ConfusedButton';
import PrintButton from '@/src/components/lesson/PrintButton';
import PageTransition from '@/src/components/effects/PageTransition';

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
        <p className="text-slate-600">The lesson you are looking for does not exist.</p>
        <Link href="/lessons" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
          Back to Lessons
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <ReadProgressBar />
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">{lesson.title}</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">{lesson.intro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrintButton title={lesson.title} />
          <Link href="/lessons" className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-700 transition">
            ← Back to Lessons
          </Link>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <div className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Deep Dive</h2>
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{lesson.fullContent}</p>
          </div>

          <ConfusedButton topic={lesson.title} />

          {lesson.sections.map((section) => (
            <div key={section.heading} className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">{section.heading}</h3>
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          {lesson.videos.length > 0 && (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Video Resources</h3>
              <div className="grid gap-6">
                {lesson.videos.map((video) => (
                  <div key={video.url} className="space-y-3">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{video.title}</h4>
                    <YoutubeEmbed videoId={video.url} title={video.title} source={video.source} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-slate-900 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Get Started with This Topic</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Use the resources below to dive deeper. Read the books, explore the research papers, and try the quiz to reinforce your understanding.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">📚</span> Books
                </h4>
                <div className="space-y-4">
                  {lesson.books.map((book) => (
                    <a
                      key={book.title}
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                    >
                        <p className="font-semibold text-slate-900 dark:text-white">{book.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{book.author}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">📄</span> Research Papers
                </h4>
                <div className="space-y-4">
                  {lesson.papers.map((paper) => (
                    <a
                      key={paper.title}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                    >
                        <p className="font-semibold text-slate-900 dark:text-white">{paper.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{paper.source}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          {lesson.images.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video">
                <FallbackImage
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="p-4 text-sm text-slate-600">{image.alt}</p>
            </div>
          ))}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-700">
              {lesson.relatedTopics.map((topic) => {
                const related = lessons.find((item) => item.slug === topic);
                return (
                  <li key={topic} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
                    {related ? (
                      <Link href={`/lessons/${related.slug}`} className="flex items-center justify-between gap-2 font-semibold text-slate-900 dark:text-white">
                        <span>{related.title}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-300">Explore →</span>
                      </Link>
                    ) : (
                      <span className="font-semibold text-slate-900 dark:text-white">{topic.replace(/-/g, ' ')}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Need a Challenge?</h4>
            <p className="text-slate-700 mb-4">When you're ready, test your knowledge using the quiz tailored to these topics.</p>
            <Link href={lesson.quizLink} className="inline-flex rounded-full bg-green-600 px-5 py-3 text-white hover:bg-green-700 transition">
              Take the Quiz
            </Link>
          </div>
        </aside>
      </div>
      </div>
    </PageTransition>
  );
}
