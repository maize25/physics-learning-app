'use client'

import { useEffect, useState } from 'react';
import PageTransition from '@/src/components/effects/PageTransition';

export default function ModulesPage() {
  const [mass, setMass] = useState(100);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const update = () => {
      const speed = 0.03 + Math.sqrt(mass) * 0.002;
      setAngle((prev) => prev + speed);
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [mass]);

  const orbitSpeed = (0.03 + Math.sqrt(mass) * 0.002).toFixed(3);

  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8 rounded-[2rem] border border-cyan-700 bg-slate-950 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Module Hub</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Physics Chapters for the Next Researcher</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            A curated progression from classical orbital mechanics to cutting-edge cosmology, blending interactive physics with a roadmap toward machine learning-enabled scientific tools.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          <section className="rounded-3xl border border-cyan-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Chapter 1</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Classical Mechanics & Orbits</h2>
              </div>
              <span className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-200">Interactive Module Active</span>
            </div>
            <p className="mt-5 text-slate-300">
              Modeling Newton’s Law of Universal Gravitation and Kepler's Laws of Planetary Motion through a live orbit visualizer.
            </p>
            <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-950 p-5">
              <div className="relative mx-auto h-72 w-72 rounded-full border border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 shadow-xl" />
                <div
                  className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-white shadow-lg"
                  style={{ transform: `rotate(${angle}rad) translateX(10rem) rotate(-${angle}rad)` }}
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Mass slider</span>
                  <span>{mass} kg × 10<sup>21</sup></span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={400}
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
                <div className="rounded-2xl bg-slate-800 p-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">Orbit speed index</p>
                  <p className="mt-1 text-slate-300">The orbit rotation rate is scaled with central mass to illustrate gravitational influence.</p>
                  <p className="mt-3 text-cyan-200">Speed factor: {orbitSpeed}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-yellow-700/40 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Chapter 2</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Relativistic Astrophysics</h2>
              <p className="mt-4 text-slate-300">
                Visualizing spacetime curvature, the Schwarzschild radius (r_s = 2GM/c²), and Event Horizons.
              </p>
              <div className="mt-6 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-100">
                Under Optimization
              </div>
            </div>

            <div className="rounded-3xl border border-violet-700/40 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Chapter 3</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">The JMN Naked Singularity Model</h2>
              <p className="mt-4 text-slate-300">
                Computational comparisons of gravitational collapse: standard black holes versus naked singularities where information escapes the event horizon.
              </p>
              <div className="mt-6 rounded-3xl border border-violet-500/20 bg-violet-500/10 p-4 text-sm text-violet-100">
                Current Core Focus
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
