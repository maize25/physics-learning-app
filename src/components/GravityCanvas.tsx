'use client'
import { useEffect, useRef } from 'react'

export default function GravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2
    }))

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener('mousemove', handleMouse)

    let animId: number
    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      
      ctx.beginPath()
      ctx.arc(cx, cy, 8, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(99,102,241,0.9)'
      ctx.shadowBlur = 20
      ctx.shadowColor = '#6366f1'
      ctx.fill()
      ctx.shadowBlur = 0

      particles.forEach(p => {
        const dx = cx - p.x
        const dy = cy - p.y
        const dist = Math.sqrt(dx*dx + dy*dy) || 0.0001
        
        const mdx = mouse.current.x - p.x
        const mdy = mouse.current.y - p.y
        const mdist = Math.sqrt(mdx*mdx + mdy*mdy) || 0.0001
        
        if (mdist < 100) {
          p.vx += mdx / mdist * 0.3
          p.vy += mdy / mdist * 0.3
        }
        
        p.vx += dx / (dist * dist) * 2
        p.vy += dy / (dist * dist) * 2
        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147,197,253,${p.opacity})`
        ctx.fill()
      })
      
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-2xl border border-gray-700"
      style={{ height: '200px', cursor: 'crosshair' }}
    />
  )
}
