'use client'

import PageTransition from '@/src/components/effects/PageTransition'
import ConstellationMap from '@/src/components/TopicMap/ConstellationMap'

export default function TopicMapPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-3">Topic Constellation Map</h1>
          <p className="text-slate-300 mb-4">
            Explore how physics topics connect visually. The map is designed to help you see dependencies and navigate from basic concepts to advanced ideas.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-white">How to use this page</h2>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
                <li>Click a topic node to jump directly to that lesson or section.</li>
                <li>Look for connected clusters to understand which skills are prerequisites.</li>
                <li>Use the recommended study order below if you want a guided path.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Why it helps</h2>
              <p className="mt-3 text-slate-300">
                The constellation view shows related topics in one place, so you can build a study plan that avoids gaps and keeps the big picture in view.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl p-4 overflow-x-auto">
            <ConstellationMap />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-inner">
              <h2 className="text-2xl font-semibold text-white">Recommended Study Order</h2>
              <ol className="mt-4 list-decimal list-inside space-y-3 text-slate-300">
                <li><span className="font-medium text-white">Start with fundamentals:</span> Learn Newton's laws before moving into forces and motion.</li>
                <li><span className="font-medium text-white">Build orbital intuition:</span> Follow with gravitation and orbital mechanics.</li>
                <li><span className="font-medium text-white">Add modern physics:</span> Study relativity and quantum concepts after mechanics.</li>
                <li><span className="font-medium text-white">Study energy flow:</span> Finish with thermodynamics and its connection to real systems.</li>
              </ol>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-inner">
              <h2 className="text-2xl font-semibold text-white">Study tips</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
                <li>Review the map after completing each lesson to reinforce connections.</li>
                <li>Use flashcards and quizzes alongside the map for active recall.</li>
                <li>Return to earlier topics if a later lesson references them often.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </PageTransition>
  )
}
