'use client'

import { useEffect, useRef, useState } from 'react';

const experiments = [
  {
    id: 'solar-system',
    title: 'Solar System',
    description: 'Explore the planets of our solar system and watch them orbit the Sun.',
  },
  {
    id: 'orbit',
    title: 'Orbital Motion',
    description: 'Visualize a planet orbiting a star under gravity.',
  },
  {
    id: 'pendulum',
    title: 'Pendulum Swing',
    description: 'See how a pendulum oscillates with a restoring force.',
  },
  {
    id: 'projectile',
    title: 'Projectile Path',
    description: 'Observe a projectile trajectory with gravity acting downward.',
  },
  {
    id: 'wave',
    title: 'Wave Interference',
    description: 'Explore the overlap of two waves and interference patterns.',
  },
  {
    id: 'circuit',
    title: 'AC Oscillator',
    description: 'Watch a simple alternating current waveform change over time.',
  },
  {
    id: 'ray',
    title: 'Light Ray',
    description: 'Trace a light ray through lenses and mirrors.',
  },
];

function useAnimatedCanvas(draw: (ctx: CanvasRenderingContext2D, frame: number, width: number, height: number) => void) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    let frame = 0;
    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      draw(ctx, frame, width, height);
      frame += 1;
      animationFrame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [draw]);

  return canvasRef;
}

function OrbitCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.28;
    const angle = frame * 0.01;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);

    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(cx, cy, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff66';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function PendulumCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const cx = width / 2;
    const top = 32;
    const length = height * 0.55;
    const angle = Math.sin(frame * 0.02) * 0.85;
    const x = cx + length * Math.sin(angle);
    const y = top + length * Math.cos(angle);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, top);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffffcc';
    ctx.font = '14px serif';
    ctx.fillText('pivot', cx - 28, top - 10);
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function ProjectileCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const t = (frame % 200) / 200;
    const x = 40 + t * (width - 80);
    const y = 40 + (1 - (4 * (t - 0.5) ** 2)) * (height - 100);

    ctx.fillStyle = '#ffffff66';
    ctx.fillRect(0, height - 28, width, 2);
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function WaveCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < width; i += 1) {
      const y = height / 2 + Math.sin((i / width) * Math.PI * 3 + frame * 0.08) * 18;
      if (i === 0) ctx.moveTo(i, y);
      else ctx.lineTo(i, y);
    }
    ctx.stroke();

    ctx.strokeStyle = '#f472b6';
    ctx.beginPath();
    for (let i = 0; i < width; i += 1) {
      const y = height / 2 + Math.sin((i / width) * Math.PI * 4 + frame * 0.1) * 12;
      if (i === 0) ctx.moveTo(i, y);
      else ctx.lineTo(i, y);
    }
    ctx.stroke();
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function CircuitCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const t = Math.sin(frame * 0.08);
    const x1 = width * 0.2;
    const x2 = width * 0.8;
    const y = height / 2;

    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(width * 0.4, y);
    ctx.lineTo(width * 0.4, y - 40);
    ctx.lineTo(width * 0.6, y + 40);
    ctx.lineTo(width * 0.6, y);
    ctx.lineTo(x2, y);
    ctx.stroke();

    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(x2 + 18, y - 16, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.45, y - 10);
    ctx.lineTo(width * 0.5, y + t * 20);
    ctx.lineTo(width * 0.55, y - 10);
    ctx.stroke();
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function RayCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const offset = Math.sin(frame * 0.05) * 16;
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(width * 0.35, height * 0.2, width * 0.08, height * 0.6);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, height * 0.75);
    ctx.lineTo(width * 0.35, height * 0.45);
    ctx.lineTo(width - 20, height * 0.45 + offset);
    ctx.stroke();
  });

  return <canvas ref={canvasRef} className="h-48 w-full rounded-3xl bg-slate-950" width={320} height={220} />;
}

function SolarSystemCard() {
  const canvasRef = useAnimatedCanvas((ctx, frame, width, height) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const sunRadius = 18;
    const planets = [
      { name: 'Mercury', radius: 4, orbit: 50, speed: 0.035, color: '#c3c3c3' },
      { name: 'Venus', radius: 6, orbit: 72, speed: 0.025, color: '#e4c17b' },
      { name: 'Earth', radius: 7, orbit: 98, speed: 0.02, color: '#6495ed' },
      { name: 'Mars', radius: 5, orbit: 120, speed: 0.017, color: '#d96c42' },
      { name: 'Jupiter', radius: 10, orbit: 150, speed: 0.012, color: '#d4a15d' },
      { name: 'Saturn', radius: 9, orbit: 180, speed: 0.009, color: '#d8c07b' },
      { name: 'Uranus', radius: 8, orbit: 210, speed: 0.006, color: '#7fd1e0' },
      { name: 'Neptune', radius: 8, orbit: 240, speed: 0.005, color: '#4d6dfc' },
    ];

    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
    ctx.fill();

    planets.forEach((planet, index) => {
      const angle = frame * planet.speed + index * 0.8;
      const x = centerX + Math.cos(angle) * planet.orbit;
      const y = centerY + Math.sin(angle) * planet.orbit;

      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, planet.orbit, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = planet.color;
      ctx.beginPath();
      ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f8fafc';
      ctx.font = '10px system-ui';
      ctx.fillText(planet.name, x + planet.radius + 4, y + 4);
    });
  });

  return <canvas ref={canvasRef} className="h-56 w-full rounded-3xl bg-slate-950" width={480} height={280} />;
}

const renderer = {
  'solar-system': SolarSystemCard,
  orbit: OrbitCard,
  pendulum: PendulumCard,
  projectile: ProjectileCard,
  wave: WaveCard,
  circuit: CircuitCard,
  ray: RayCard,
};

export default function SimulationsGrid() {
  const [activeId, setActiveId] = useState('orbit');

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Simulations</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Interactive physics labs</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Toggle between live experiments and learn how formulas map to motion.</p>
        </div>
        <div className="rounded-3xl bg-sky-50 px-4 py-3 text-sky-700 dark:bg-sky-900/20 dark:text-sky-200">Six experiments</div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-4">
          {experiments.map((experiment) => {
            const Active = renderer[experiment.id as keyof typeof renderer];
            return (
              <button
                key={experiment.id}
                type="button"
                onClick={() => setActiveId(experiment.id)}
                className={`w-full rounded-3xl border px-5 py-4 text-left transition ${
                  activeId === experiment.id ? 'border-sky-400 bg-sky-50 text-slate-900 dark:border-sky-500 dark:bg-slate-900/80 dark:text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{experiment.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{experiment.description}</p>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{activeId === experiment.id ? 'Active' : 'View'}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-4 dark:border-slate-700">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live preview</p>
              <h3 className="text-xl font-semibold text-white">{experiments.find((exp) => exp.id === activeId)?.title}</h3>
            </div>
            <div className="rounded-2xl bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
              animated
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 p-2">
            {(() => {
              const Active = renderer[activeId as keyof typeof renderer];
              return <Active />;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
