"use client"
import { JSX, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Topic {
  id: string
  label: string
  x: number
  y: number
  subject: string
  route: string
  description: string
}

const topics: Topic[] = [
  { id: 'kinematics', label: 'Kinematics', x: 120, y: 80, subject: 'mechanics', route: '/lessons', description: 'Start here — motion basics' },
  { id: 'newtons-laws', label: "Newton's Laws", x: 280, y: 80, subject: 'mechanics', route: '/lessons', description: 'Forces and motion' },
  { id: 'momentum', label: 'Momentum', x: 440, y: 60, subject: 'mechanics', route: '/lessons', description: 'Conservation of momentum' },
  { id: 'energy', label: 'Energy & Work', x: 380, y: 170, subject: 'mechanics', route: '/lessons', description: 'Work, energy, power' },
  { id: 'circular-motion', label: 'Circular Motion', x: 200, y: 200, subject: 'mechanics', route: '/lessons', description: 'Centripetal forces' },
  { id: 'waves', label: 'Waves', x: 600, y: 80, subject: 'waves', route: '/lessons', description: 'Wave properties' },
  { id: 'sound', label: 'Sound', x: 700, y: 160, subject: 'waves', route: '/lessons', description: 'Doppler, resonance' },
  { id: 'light', label: 'Light & Optics', x: 780, y: 80, subject: 'waves', route: '/lessons', description: 'Reflection, refraction' },
  { id: 'electric-charge', label: 'Electric Charge', x: 580, y: 260, subject: 'electricity', route: '/lessons', description: "Coulomb's law" },
  { id: 'circuits', label: 'Circuits', x: 700, y: 340, subject: 'electricity', route: '/lessons', description: "Kirchhoff's laws" },
  { id: 'magnetism', label: 'Magnetism', x: 820, y: 260, subject: 'electricity', route: '/lessons', description: 'Magnetic fields' },
  { id: 'thermodynamics', label: 'Thermodynamics', x: 460, y: 360, subject: 'thermo', route: '/lessons', description: 'Laws of thermodynamics' },
  { id: 'quantum', label: 'Quantum Physics', x: 750, y: 440, subject: 'modern', route: '/lessons', description: 'Modern physics' },
  { id: 'limits', label: 'Limits', x: 100, y: 380, subject: 'calculus', route: '/mathematics', description: 'Foundation of calculus' },
  { id: 'differentiation', label: 'Differentiation', x: 240, y: 420, subject: 'calculus', route: '/mathematics', description: 'Derivatives' },
  { id: 'integration', label: 'Integration', x: 360, y: 460, subject: 'calculus', route: '/mathematics', description: 'Integrals' },
  { id: 'algebra', label: 'Algebra', x: 100, y: 280, subject: 'math', route: '/mathematics', description: 'Start here for math' },
  { id: 'trigonometry', label: 'Trigonometry', x: 220, y: 320, subject: 'math', route: '/mathematics', description: 'Sin, cos, tan' },
]

const connections: [string, string][] = [
  ['kinematics', 'newtons-laws'],
  ['newtons-laws', 'momentum'],
  ['newtons-laws', 'energy'],
  ['newtons-laws', 'circular-motion'],
  ['momentum', 'energy'],
  ['waves', 'sound'],
  ['waves', 'light'],
  ['electric-charge', 'circuits'],
  ['electric-charge', 'magnetism'],
  ['circuits', 'magnetism'],
  ['energy', 'thermodynamics'],
  ['integration', 'thermodynamics'],
  ['limits', 'differentiation'],
  ['differentiation', 'integration'],
  ['algebra', 'trigonometry'],
  ['trigonometry', 'limits'],
  ['algebra', 'limits'],
]

const subjectColors: Record<string, string> = {
  mechanics: '#3b82f6',
  waves: '#06b6d4',
  electricity: '#a855f7',
  calculus: '#22c55e',
  thermo: '#f97316',
  modern: '#ec4899',
  math: '#eab308',
}

export default function ConstellationMap(): JSX.Element {
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const router = useRouter()

  const getTopicById = (id: string): Topic | undefined => topics.find(t => t.id === id)

  return (
    <div className="relative w-full" style={{ minHeight: '580px' }}>
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Get Started with This Topic</h2>
          <p className="text-gray-300">Hover a topic to preview it. Click to open the lesson. Follow the lines to see what to study first.</p>
        </div>

        <div className="relative w-full rounded-2xl border border-gray-700 bg-gray-900/40 overflow-hidden" style={{ minHeight: '500px' }}>
          <svg viewBox="0 0 900 550" width="100%" height="100%" style={{ minHeight: '500px' }}>
            {connections.map(([fromId, toId]) => {
              const from = getTopicById(fromId)
              const to = getTopicById(toId)
              if (!from || !to) return null
              const stroke = subjectColors[from.subject] || '#ffffff'
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={stroke}
                  strokeWidth={1.5}
                  opacity={0.6}
                />
              )
            })}

            {topics.map((topic) => (
              <g
                key={topic.id}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push(topic.route)}
                onMouseEnter={() => {
                  setHovered(topic.id)
                  setTooltipPos({ x: topic.x, y: topic.y })
                }}
                onMouseLeave={() => setHovered(null)}
              >
                <circle
                  cx={topic.x}
                  cy={topic.y}
                  r={hovered === topic.id ? 14 : 10}
                  fill={subjectColors[topic.subject] || '#6b7280'}
                  opacity={hovered === topic.id ? 1 : 0.85}
                />
                <text
                  x={topic.x}
                  y={topic.y + 22}
                  textAnchor="middle"
                  fill="white"
                  fontSize={10}
                  opacity={0.9}
                >
                  {topic.label}
                </text>
              </g>
            ))}
          </svg>

          {hovered && (() => {
            const t = getTopicById(hovered)
            if (!t) return null
            return (
              <div
                className="absolute z-50 bg-gray-900 border border-gray-700 rounded-xl p-3 shadow-xl text-sm pointer-events-none"
                style={{
                  left: `${(tooltipPos.x / 900) * 100}%`,
                  top: `${(tooltipPos.y / 550) * 100}%`,
                  transform: 'translate(-50%, -120%)',
                  minWidth: '160px',
                }}
              >
                <p className="text-white font-semibold">{t.label}</p>
                <p className="text-gray-400 text-xs mt-1">{t.description}</p>
                <p className="text-blue-400 text-xs mt-2">Click to open →</p>
              </div>
            )
          })()}
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {Object.entries(subjectColors).map(([key, color]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-gray-400 text-xs">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
