'use client'

import PageTransition from '@/src/components/effects/PageTransition'
import ConstellationMap from '@/src/components/TopicMap/ConstellationMap'

export default function TopicMapPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Topic Constellation Map
        </h1>
        <p className="text-gray-400 mb-8">
          Click any topic to navigate. Connected topics share concepts.
        </p>
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 w-full overflow-x-auto">
          <ConstellationMap />
        </div>
      </div>
    </PageTransition>
  )
}
