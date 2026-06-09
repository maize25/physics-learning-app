'use client'
import Link from 'next/link'

const resources = [
  {
    title: 'The Story of Collapsing Stars',
    description: 'The foundational text for understanding gravitational collapse and the mathematical possibility of naked singularities beyond the standard event horizon model.',
    url: 'https://www.google.com/search?q=The+Story+of+Collapsing+Stars',
  },
  {
    title: 'Event Horizon Telescope (EHT) Milky Way Observations',
    author: 'EHT Collaboration',
    description: 'Data processing and imaging of the ultracompact object at the center of our galaxy.',
    url: 'https://eventhorizontelescope.org/',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    description: 'The classic primer on cosmology, black holes, and the nature of time itself.',
    url: 'https://www.google.com/search?q=A+Brief+History+of+Time+Stephen+Hawking',
  },
  {
    title: 'The Elegant Universe',
    author: 'Brian Greene',
    description: 'Exploring the transition from general relativity to string theory and multidimensional physics.',
    url: 'https://www.google.com/search?q=The+Elegant+Universe+Brian+Greene',
  },
]

export default function CosmologyReadingList() {
  return (
    <div className="rounded-[2rem] border border-cyan-700 bg-slate-950 p-8 shadow-2xl">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Cosmology Reading List</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Research & Resources</h2>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            {resource.author && <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{resource.author}</p>}
            <h3 className="mt-3 text-2xl font-semibold text-white">{resource.title}</h3>
            <p className="mt-4 text-slate-300">{resource.description}</p>
            <a
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-white"
            >
              Open reference →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
