'use client'

import { useEffect, useState } from 'react'
import GradientText from '@/src/components/ui/GradientText'
import BookmarkButton from './BookmarkButton'
import PrintButton from './PrintButton'
import FocusModeButton from './FocusModeButton'
import ConfusedButton from './ConfusedButton'

export default function LessonViewer({ lesson }: { lesson: any }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    document.querySelectorAll('[data-chapter]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
        <BookmarkButton title={lesson.title} subject={'physics'} />
        <PrintButton title={lesson.title} />
        <FocusModeButton />
        <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 text-sm">🔗 Share</button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <main className="space-y-8">
          {lesson.chapters.map((ch: any, idx: number) => (
            <article key={ch.title} data-chapter data-index={idx} id={`chapter-${idx}`} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-semibold text-white">{`Chapter ${idx + 1}: ${ch.title}`}</h2>
              <div className="mt-4 prose prose-invert max-w-none text-slate-300">
                {ch.content.split('\n\n').map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {ch.imageUrl && (
                <div className="mt-4">
                  <img src={ch.imageUrl} alt={ch.imageCaption || ch.title} className="w-full rounded-xl object-cover max-h-96" />
                  {ch.imageCaption && <p className="mt-2 text-sm text-gray-400">{ch.imageCaption}</p>}
                </div>
              )}

              <div className="mt-4 rounded-xl border border-blue-800/30 bg-blue-950/30 p-4">
                <h4 className="font-semibold text-white">Key points</h4>
                <ul className="mt-2 text-slate-300 list-disc list-inside">
                  {/* simple heuristic: split content into sentences for takeaways */}
                  {ch.content.split('. ').slice(0, 4).map((s: string, i: number) => (
                    <li key={i}>{s.trim().replace(/\n/g, ' ')}.</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <ConfusedButton topic={lesson.title} />
                <a href={lesson.quizLink || '/quizzes'} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-700 text-white">Practice Problems →</a>
              </div>
            </article>
          ))}

          <div className="rounded-xl border border-indigo-900 bg-gray-950 p-6">
            <h3 className="text-2xl font-semibold text-cyan-200">Key Formulas</h3>
            <div className="mt-4 grid gap-4">
              {lesson.keyFormulas.map((f: string, i: number) => (
                <div key={i} className="rounded-xl border border-indigo-900 p-4 bg-gray-900">
                  <div className="text-2xl font-mono text-cyan-300">{f}</div>
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
              {lesson.relatedTopics.map((rt: string) => (
                <a key={rt} href={`/lessons/${rt}`} className="block rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">{rt.replace(/-/g, ' ')}</a>
              ))}
            </div>
          </div>
        </main>

        <aside className="space-y-6 sticky top-24">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h4 className="font-semibold text-white mb-2">Chapters</h4>
            <nav className="space-y-2">
              {lesson.chapters.map((ch: any, i: number) => (
                <a
                  key={ch.title}
                  href={`#chapter-${i}`}
                  className={`block rounded px-3 py-2 text-sm ${active === i ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {`Chapter ${i + 1}: ${ch.title}`}
                </a>
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
        </aside>
      </div>
    </div>
  )
}
