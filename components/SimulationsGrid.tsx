"use client"

import React, { useEffect, useRef, useState } from 'react'

function useRAF(draw: (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let mounted = true
    let raf = 0

    const resize = () => {
      const ratio = devicePixelRatio || 1
      canvas.width = Math.floor(canvas.clientWidth * ratio)
      canvas.height = Math.floor(canvas.clientHeight * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = (t: number) => {
      if (!mounted) return
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      draw(ctx, w / (devicePixelRatio || 1), h / (devicePixelRatio || 1), t / 1000)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      mounted = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [draw])
  return ref
}

function SolarSystemSim() {
  const [speed, setSpeed] = useState(1)
  const [selected, setSelected] = useState<string | null>(null)

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.fillStyle = '#071025'
    ctx.fillRect(0, 0, w, h)

    const cx = w / 2
    const cy = h / 2

    // Sun
    ctx.fillStyle = '#ffcc33'
    ctx.beginPath()
    ctx.arc(cx, cy, 18, 0, Math.PI * 2)
    ctx.fill()

    const planets = [
      { name: 'Mercury', r: 4, orbit: 40, speed: 4.8, color: '#c3c3c3', mass: 0.33, dist: 57.9 },
      { name: 'Venus', r: 6, orbit: 60, speed: 3.5, color: '#e4c17b', mass: 4.87, dist: 108.2 },
      { name: 'Earth', r: 7, orbit: 82, speed: 3.0, color: '#5fb3ff', mass: 5.97, dist: 149.6 },
      { name: 'Mars', r: 5, orbit: 102, speed: 2.4, color: '#d96c42', mass: 0.642, dist: 227.9 },
    ]

    planets.forEach((p, i) => {
      const ang = t * 0.5 * speed * (p.speed / 3) + i
      const x = cx + Math.cos(ang) * p.orbit
      const y = cy + Math.sin(ang) * p.orbit

      // orbit path
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.beginPath()
      ctx.arc(cx, cy, p.orbit, 0, Math.PI * 2)
      ctx.stroke()

      // planet
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(x, y, p.r, 0, Math.PI * 2)
      ctx.fill()

      // label always visible
      ctx.fillStyle = '#e6eef6'
      ctx.font = '12px system-ui'
      ctx.fillText(p.name, x + p.r + 6, y + 4)

      // clicked highlight
      if (selected === p.name) {
        ctx.strokeStyle = 'rgba(96,165,250,0.9)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, p.r + 6, 0, Math.PI * 2)
        ctx.stroke()
      }
    })
  }

  const ref = useRAF(draw)

  // click handling
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) * (devicePixelRatio || 1)
      const y = (e.clientY - rect.top) * (devicePixelRatio || 1)
      const w = canvas.width / (devicePixelRatio || 1)
      const h = canvas.height / (devicePixelRatio || 1)
      const cx = w / 2
      const cy = h / 2
      const planets = [
        { name: 'Mercury', r: 4, orbit: 40 },
        { name: 'Venus', r: 6, orbit: 60 },
        { name: 'Earth', r: 7, orbit: 82 },
        { name: 'Mars', r: 5, orbit: 102 },
      ]
      for (let i = 0; i < planets.length; i++) {
        const p = planets[i]
        const ang = performance.now() / 1000 * 0.5 * speed * ( ( [4.8,3.5,3.0,2.4][i] ) / 3 ) + i
        const px = cx + Math.cos(ang) * p.orbit
        const py = cy + Math.sin(ang) * p.orbit
        const dx = x - px
        const dy = y - py
        if (Math.sqrt(dx * dx + dy * dy) < p.r + 6) {
          setSelected(p.name)
          return
        }
      }
      setSelected(null)
    }
    canvas.addEventListener('click', onClick)
    return () => canvas.removeEventListener('click', onClick)
  }, [ref, speed])

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
      <h3 className="text-white font-semibold">Solar System</h3>
      <p className="text-slate-300 text-sm">Planets orbit the Sun. Click a planet for details.</p>
      <div className="mt-3 h-52 w-full">
        <canvas ref={ref} className="w-full h-full rounded-xl" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <label className="text-slate-300 text-sm">Speed</label>
        <input className="w-full" type="range" min="0.2" max="3" step="0.1" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      </div>
      {selected && (
        <div className="mt-3 rounded-lg bg-slate-800 p-2 text-sm text-slate-200">
          <strong>{selected}</strong> — mass and distance (approx.) shown here.
        </div>
      )}
    </div>
  )
}

function OrbitSim() {
  const [ecc, setEcc] = useState(0.4)
  const [showVec, setShowVec] = useState(true)

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.fillStyle = '#071025'
    ctx.fillRect(0, 0, w, h)

    const cx = w / 2
    const cy = h / 2
    // ellipse parameters
    const a = Math.min(w, h) * 0.28
    const b = a * Math.sqrt(1 - ecc * ecc)
    const focalDist = a * ecc

    // draw ellipse
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'
    ctx.beginPath()
    for (let i = 0; i <= 360; i++) {
      const rad = (i * Math.PI) / 180
      const x = cx + a * Math.cos(rad)
      const y = cy + b * Math.sin(rad)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.stroke()

    // true anomaly with non-uniform speed (approximate)
    const period = 10
    const mean = ((t % period) / period) * 2 * Math.PI
    // solve ecc anomaly via simple iteration (approx)
    let E = mean
    for (let i = 0; i < 6; i++) E = mean + ecc * Math.sin(E)
    const theta = 2 * Math.atan2(Math.sqrt(1 + ecc) * Math.sin(E / 2), Math.sqrt(1 - ecc) * Math.cos(E / 2))

    const r = (a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(theta))
    const x = cx + r * Math.cos(theta)
    const y = cy + (b / a) * r * Math.sin(theta)

    // draw central star at focus (left focus)
    ctx.fillStyle = '#ffd479'
    ctx.beginPath()
    ctx.arc(cx - focalDist, cy, 8, 0, Math.PI * 2)
    ctx.fill()

    // planet
    ctx.fillStyle = '#7dd3fc'
    ctx.beginPath()
    ctx.arc(x, y, 8, 0, Math.PI * 2)
    ctx.fill()

    // velocity vector (approx tangent)
    if (showVec) {
      const eps = 0.01
      const theta2 = theta + eps
      const r2 = (a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(theta2))
      const x2 = cx + r2 * Math.cos(theta2)
      const y2 = cy + (b / a) * r2 * Math.sin(theta2)
      ctx.strokeStyle = '#34d399'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // label and notice
    ctx.fillStyle = '#e6eef6'
    ctx.font = '12px system-ui'
    ctx.fillText('Notice: planet moves faster when closer to star — Kepler\'s 2nd Law', 10, 18)
  }

  const ref = useRAF(draw)
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
      <h3 className="text-white font-semibold">Orbital Motion</h3>
      <p className="text-slate-300 text-sm">Elliptical orbit demonstrating Kepler's 2nd Law.</p>
      <div className="mt-3 h-52 w-full">
        <canvas ref={ref} className="w-full h-full rounded-xl" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="text-slate-300 text-sm">Eccentricity: {ecc.toFixed(2)}</label>
          <input type="range" min="0" max="0.9" step="0.01" value={ecc} onChange={(e) => setEcc(Number(e.target.value))} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-slate-300 text-sm">Velocity Vector</label>
          <input type="checkbox" checked={showVec} onChange={(e) => setShowVec(e.target.checked)} />
        </div>
      </div>
    </div>
  )
}

function PendulumSim() {
  const [length, setLength] = useState(1)
  const g = 9.81

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.fillStyle = '#071025'
    ctx.fillRect(0, 0, w, h)

    const cx = w / 2
    const top = 30
    const Lpx = Math.min(w, h) * 0.18 * length

    const omega = Math.sqrt(g / (Lpx / 60))
    const angle = Math.sin(t * 1.5) * 0.6 // simple motion

    const x = cx + Math.sin(angle) * Lpx
    const y = top + Math.cos(angle) * Lpx

    // rod
    ctx.strokeStyle = '#60a5fa'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(cx, top)
    ctx.lineTo(x, y)
    ctx.stroke()

    // bob
    ctx.fillStyle = '#fb7185'
    ctx.beginPath()
    ctx.arc(x, y, 12, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#e6eef6'
    ctx.font = '12px system-ui'
    const period = 2 * Math.PI * Math.sqrt((Lpx / 60) / g)
    ctx.fillText(`T = 2π√(L/g) = ${period.toFixed(2)} s`, 10, 18)
    ctx.fillText(`Angle: ${(angle * (180 / Math.PI)).toFixed(1)}°`, 10, 34)
  }

  const ref = useRAF(draw)
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
      <h3 className="text-white font-semibold">Pendulum</h3>
      <p className="text-slate-300 text-sm">Length affects period; formula updates live.</p>
      <div className="mt-3 h-52 w-full">
        <canvas ref={ref} className="w-full h-full rounded-xl" />
      </div>
      <div className="mt-3">
        <label className="text-slate-300 text-sm">Length: {length.toFixed(2)} m</label>
        <input type="range" min="0.5" max="3" step="0.01" value={length} onChange={(e) => setLength(Number(e.target.value))} />
      </div>
    </div>
  )
}

function ProjectileSim() {
  const [angle, setAngle] = useState(45)
  const [speed, setSpeed] = useState(40)
  const g = 9.81

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.fillStyle = '#071025'
    ctx.fillRect(0, 0, w, h)

    const rad = (angle * Math.PI) / 180
    const vx = speed * Math.cos(rad)
    const vy = speed * Math.sin(rad)
    const totalT = (2 * vy) / g

    // scale to canvas
    const scale = (w - 80) / (vx * totalT || 1)

    ctx.strokeStyle = '#60a5fa'
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let tt = 0; tt <= totalT; tt += 0.02) {
      const x = vx * tt
      const y = vy * tt - 0.5 * g * tt * tt
      const cx = 40 + x * scale
      const cy = h - 40 - y * scale
      if (tt === 0) ctx.moveTo(cx, cy)
      else ctx.lineTo(cx, cy)
    }
    ctx.stroke()

    const hmax = (vy * vy) / (2 * g)
    const range = (2 * vx * vy) / g
    ctx.fillStyle = '#e6eef6'
    ctx.font = '12px system-ui'
    ctx.fillText(`Max height: ${hmax.toFixed(2)} m`, 10, 18)
    ctx.fillText(`Range: ${range.toFixed(2)} m`, 10, 34)
  }

  const ref = useRAF(draw)
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
      <h3 className="text-white font-semibold">Projectile Path</h3>
      <p className="text-slate-300 text-sm">Launch a projectile and view its full parabolic arc.</p>
      <div className="mt-3 h-52 w-full">
        <canvas ref={ref} className="w-full h-full rounded-xl" />
      </div>
      <div className="mt-3 grid gap-2">
        <label className="text-slate-300 text-sm">Angle: {angle}°</label>
        <input type="range" min="0" max="90" value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
        <label className="text-slate-300 text-sm">Velocity: {speed} m/s</label>
        <input type="range" min="1" max="120" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      </div>
    </div>
  )
}

function WaveSim() {
  const [freq, setFreq] = useState(3)
  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    ctx.fillStyle = '#071025'
    ctx.fillRect(0, 0, w, h)
    const cx = w / 2
    const cy = h / 2

    // two sources
    const srcA = { x: cx - 80, y: cy }
    const srcB = { x: cx + 80, y: cy }

    const img = ctx.createImageData(w, h)
    const data = img.data
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dxA = x - srcA.x
        const dyA = y - srcA.y
        const dA = Math.hypot(dxA, dyA)
        const dxB = x - srcB.x
        const dyB = y - srcB.y
        const dB = Math.hypot(dxB, dyB)
        const phase = (dA - dB) * 0.02 * freq + t * 2
        const val = Math.cos(phase)
        const idx = (y * w + x) * 4
        const bright = Math.floor(120 + 120 * val)
        data[idx] = bright
        data[idx + 1] = bright
        data[idx + 2] = bright
        data[idx + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)

    ctx.fillStyle = 'rgba(0,0,0,0.6)'
    ctx.fillRect(0, 0, 80, 36)
    ctx.fillStyle = '#e6eef6'
    ctx.font = '12px system-ui'
    ctx.fillText('Bright = constructive', 6, 16)
    ctx.fillText('Dark = destructive', 6, 30)
  }

  const ref = useRAF(draw)
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
      <h3 className="text-white font-semibold">Wave Interference</h3>
      <p className="text-slate-300 text-sm">Two wave sources produce constructive and destructive interference.</p>
      <div className="mt-3 h-52 w-full">
        <canvas ref={ref} className="w-full h-full rounded-xl" />
      </div>
      <div className="mt-3">
        <label className="text-slate-300 text-sm">Frequency: {freq}</label>
        <input type="range" min="1" max="8" value={freq} onChange={(e) => setFreq(Number(e.target.value))} />
      </div>
    </div>
  )
}

export default function SimulationsGrid() {
  const sims = [
    { id: 'solar', title: 'Solar System', comp: SolarSystemSim },
    { id: 'orbit', title: 'Orbital Motion', comp: OrbitSim },
    { id: 'pendulum', title: 'Pendulum', comp: PendulumSim },
    { id: 'projectile', title: 'Projectile Path', comp: ProjectileSim },
    { id: 'wave', title: 'Wave Interference', comp: WaveSim },
  ]
  const [active, setActive] = useState('solar')

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Simulations</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Interactive physics labs</h2>
          <p className="mt-2 max-w-2xl text-slate-300">Five live experiments demonstrating mechanics and wave phenomena.</p>
        </div>
        <div className="rounded-3xl bg-slate-800 px-4 py-3 text-slate-200">5 experiments</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-3">
          {sims.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full text-left rounded-2xl px-4 py-3 transition ${active === s.id ? 'bg-slate-800 border border-cyan-500 text-white' : 'bg-slate-900 border border-gray-700 text-slate-300 hover:bg-slate-800'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                </div>
                <div className="text-sm text-slate-400">{active === s.id ? 'Active' : 'View'}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-gray-700 bg-slate-950 p-4">
            {(() => {
              const Sim = sims.find((x) => x.id === active)!.comp
              return <Sim />
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
