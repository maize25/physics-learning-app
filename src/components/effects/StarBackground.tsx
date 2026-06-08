'use client';

import React from 'react';

export default function StarBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
      bright: Math.random() > 0.95,
    }));

    let animId: number;
    let hidden = false;

    const handleVisibilityChange = () => {
      hidden = document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    function draw() {
      if (!ctx || !canvas) return;
      if (hidden) {
        animId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.opacity += star.speed * (Math.random() > 0.5 ? 1 : -1);
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.bright ? star.size * 1.5 : star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.bright ? '180,220,255' : '255,255,255'},${star.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
