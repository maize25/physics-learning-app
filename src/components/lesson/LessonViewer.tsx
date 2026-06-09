'use client'

import { useState } from 'react'
import GradientText from '@/src/components/ui/GradientText'
import BookmarkButton from './BookmarkButton'
import PrintButton from './PrintButton'
import FocusModeButton from './FocusModeButton'
import ConfusedButton from './ConfusedButton'

export default function LessonViewer({ lesson }: { lesson: any }) {
  const [activePage, setActivePage] = useState(0)
  const totalPages = lesson.chapters.length
  const page = Math.max(0, Math.min(activePage, totalPages - 1))
  const chapter = lesson.chapters[page]
  const progress = totalPages ? Math.round(((page + 1) / totalPages) * 100) : 0

  const handleShare = async () => {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: lesson.title, url })
      else await navigator.clipboard.writeText(url)
      alert('Link copied or shared')
    } catch (e) {
      alert('Unable to share')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-white"><GradientText>{lesson.title}</GradientText></h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-200">{lesson.difficulty}</span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-200">{lesson.estimatedMinutes} min</span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-200">Subject: Physics</span>
        </div>
        <p className="mt-4 text-slate-300">{lesson.intro}</p>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <BookmarkButton title={lesson.title} subject="physics" />
        <PrintButton title={lesson.title} />
        <FocusModeButton />
        <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 text-sm">🔗 Share</button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2.2fr_1fr]">
        <main className="space-y-8">
          <section className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Lesson book</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{`Page ${page + 1} of ${totalPages}`}</h2>
                <p className="mt-2 text-slate-300 max-w-2xl">{chapter.title}</p>
              </div>
              <div className="space-y-2 text-right">
                <div className="text-sm text-slate-400">Progress</div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-cyan-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
                <div className="text-xs text-slate-400">{progress}% complete</div>
              </div>
            </div>

            <article className="mt-8">
              <h3 className="text-3xl font-semibold text-white">{chapter.title}</h3>
              <div className="mt-6 prose prose-invert max-w-none text-slate-300">
                {chapter.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {chapter.imageUrl && (
                <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-inner">
                  <img src={chapter.imageUrl} alt={chapter.imageCaption || chapter.title} className="w-full object-cover" />
                  {chapter.imageCaption && <p className="px-5 py-4 text-sm text-slate-400">{chapter.imageCaption}</p>}
                </div>
              )}

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-blue-800/30 bg-blue-950/30 p-6">
                  <h4 className="font-semibold text-white">What to remember</h4>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-300">
                    {chapter.content.split('. ').slice(0, 4).map((sentence: string, index: number) => (
                      <li key={index}>{sentence.trim().replace(/\n/g, ' ')}.</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                  <h4 className="font-semibold text-white">Your next step</h4>
                  <p className="mt-3 text-slate-300">Review this page, then move to the next chapter when you are ready. Use the sidebar to jump between specific topics in this lesson.</p>
                </div>
              </div>
            </article>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setActivePage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ← Previous page
              </button>
              <button
                type="button"
                onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                className="rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next page →
              </button>
            </div>
          </section>

          {lesson.sections?.length ? (
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Additional insight</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {lesson.sections.map((section: any) => (
                  <div key={section.heading} className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
                    <h4 className="font-semibold text-cyan-300">{section.heading}</h4>
                    <p className="mt-3 text-slate-300">{section.content}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {lesson.videos?.length ? (
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-2xl font-semibold text-white">Video companions</h3>
              <div className="mt-5 grid gap-6 xl:grid-cols-2">
                {lesson.videos.map((video: any) => (
                  <div key={video.title} className="overflow-hidden rounded-3xl border border-slate-800 bg-black">
                    <div className="aspect-video">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white">{video.title}</h4>
                      <p className="mt-2 text-sm text-slate-300">Source: {video.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="rounded-xl border border-indigo-900 bg-gray-950 p-6">
            <h3 className="text-2xl font-semibold text-cyan-200">Key Formulas</h3>
            <div className="mt-4 grid gap-4">
              {lesson.keyFormulas.map((formula: string, index: number) => (
                <div key={index} className="rounded-xl border border-indigo-900 p-4 bg-gray-900">
                  <div className="text-2xl font-mono text-cyan-300">{formula}</div>
                  <div className="mt-2 text-sm text-slate-300">Variable definitions and notes.</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-purple-800 bg-purple-950/30 p-4">
            <h3 className="font-semibold text-white">💡 Fun Fact</h3>
            <p className="mt-2 text-slate-300">{lesson.funFact}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Related Topics</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {lesson.relatedTopics.map((topic: string) => (
                <a key={topic} href={`/lessons/${topic}`} className="block rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">{topic.replace(/-/g, ' ')}</a>
              ))}
            </div>
          </div>
        </main>

        <aside className="space-y-6 sticky top-24">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h4 className="font-semibold text-white mb-2">Contents</h4>
            <nav className="space-y-2">
              {lesson.chapters.map((chapterItem: any, index: number) => (
                <button
                  key={chapterItem.title}
                  type="button"
                  onClick={() => setActivePage(index)}
                  className={`w-full text-left rounded-xl px-3 py-2 text-sm transition ${index === page ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {`Page ${index + 1}: ${chapterItem.title}`}
                </button>
              ))}
            </nav>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h4 className="font-semibold text-white">Estimated time</h4>
            <p className="text-slate-300">{lesson.estimatedMinutes} minutes</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h4 className="font-semibold text-white">Quick links</h4>
            <a href="/lessons" className="block mt-2 text-slate-300">← Back to Lessons</a>
            <a href={lesson.quizLink || '/quizzes'} className="block mt-2 text-slate-300">Take Quiz</a>
          </div>

          {lesson.books?.length ? (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <h4 className="font-semibold text-white">Recommended reading</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                {lesson.books.map((book: any) => (
                  <li key={book.title}>
                    <a href={book.link} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-white">
                      {book.title}
                    </a>
                    <div className="text-xs text-slate-500">{book.author}</div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  )
}
