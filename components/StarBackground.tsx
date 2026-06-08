'use client'

import { useEffect, useRef, useState } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  offset: number
  baseX: number
  baseY: number
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    starsRef.current = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseX: 0,
      baseY: 0,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      offset: Math.random() * Math.PI * 2,
    }))
    starsRef.current.forEach((s) => {
      s.baseX = s.x
      s.baseY = s.y
    })

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    let frame = 0
    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const maxOpacity = document.documentElement.classList.contains('dark') ? 1 : 0.3
      starsRef.current.forEach((star) => {
        const dx = mouseRef.current.x - star.baseX
        const dy = mouseRef.current.y - star.baseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const drift = Math.max(0, 1 - dist / 200) * 8
        star.x = star.baseX + (dx / (dist || 1)) * drift
        star.y = star.baseY + (dy / (dist || 1)) * drift
        const opacity = ((Math.sin(frame * star.speed + star.offset) + 1) / 2) * maxOpacity
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${opacity})`
        ctx.fill()
      })
      frame++
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />
  )
}
