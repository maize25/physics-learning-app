"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import GradientText from "../../src/components/ui/GradientText";
import PageTransition from "../../src/components/effects/PageTransition";
import { Lesson, lessons } from "@/data/lessons";
import { calcReadTime } from "@/src/utils/readTime";

const tabs = [
  { id: "all", label: "All Lessons" },
  { id: "theory", label: "Theory & Cosmology" },
  { id: "solar", label: "Solar System" },
  { id: "scientists", label: "Scientists" },
];

const topicLabels: Record<string, string> = {
  mechanics: "Classical Mechanics",
  "waves-optics": "Waves & Optics",
  "electricity-magnetism": "Electricity & Magnetism",
  "modern-physics": "Modern Physics",
};

const topicDescriptions: Record<string, string> = {
  mechanics: "Lessons that cover Newtonian motion, gravitation, energy, and momentum.",
  "waves-optics": "Explore wave propagation, light behavior, interference, and optics fundamentals.",
  "electricity-magnetism": "Study electric fields, magnetic fields, circuits, and electromagnetic effects.",
  "modern-physics": "Discover relativity, quantum mechanics, and thermodynamics in modern physics contexts.",
};

function filterLessons(tabId: string, topicId?: string) {
  let filtered = lessons;
  if (tabId === "theory") filtered = lessons.filter((lesson) => lesson.category === "Theory & Cosmology");
  if (tabId === "solar") filtered = lessons.filter((lesson) => lesson.category === "Solar System");
  if (tabId === "scientists") filtered = lessons.filter((lesson) => lesson.category === "Scientists");
  if (topicId) filtered = filtered.filter((lesson) => lesson.tags?.includes(topicId));
  return filtered;
}

export default function Lessons() {
  const [activeTab, setActiveTab] = useState("all");
  const [queryTabState, setQueryTabState] = useState<string | undefined>(undefined);
  const [queryTopicState, setQueryTopicState] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    const qt = sp.get("tab") || "all";
    const qtopic = sp.get("topic") || undefined;
    setQueryTabState(qt);
    setQueryTopicState(qtopic);
    if (qt && qt !== activeTab) setActiveTab(qt);
  }, []);

  const filteredLessons = useMemo(() => filterLessons(activeTab, queryTopicState), [activeTab, queryTopicState]);

  const currentTopicLabel = queryTopicState ? topicLabels[queryTopicState as keyof typeof topicLabels] : undefined;
  const currentTopicDescription = queryTopicState ? topicDescriptions[queryTopicState as keyof typeof topicDescriptions] : undefined;

  return (
    <PageTransition>
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">
            <GradientText>Interactive Physics Lessons</GradientText>
          </h1>
          <p className="text-gray-300 mb-6 max-w-3xl">
            Comprehensive lessons on astronomy, astrophysics, and physics. Read detailed explanations and test your knowledge with quizzes.
          </p>

          {currentTopicLabel ? (
            <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-6 text-slate-200 mb-6">
              <h2 className="text-2xl font-semibold text-white">Topic: {currentTopicLabel}</h2>
              <p className="mt-3 text-gray-300">{currentTopicDescription}</p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {filteredLessons.length === 0 ? (
          <div className="rounded-3xl border border-gray-700 bg-gray-900 p-8 text-gray-300">No lessons available in this category yet.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredLessons.map((lesson: Lesson) => (
              <div
                key={lesson.slug}
                className="rounded-3xl border border-gray-700 bg-gray-900 p-6 shadow-xl transition glow-card hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {lesson.category ? (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{lesson.category}</span>
                  ) : null}
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">{lesson.difficulty}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-white">{lesson.title}</h2>
                <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">⏱️ {calcReadTime(lesson.estimatedMinutes)}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-400">Overview</h3>
                    <p className="text-gray-300">{lesson.intro}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-400">What You’ll Learn</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                      {lesson.examples?.map((example: string, exampleIndex: number) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <Link href={`/lessons/${lesson.slug}`} className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 text-sm">📚 Learn More</Link>
                    {lesson.quizLink ? (
                      <Link href={lesson.quizLink} className="inline-flex rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 text-sm">✓ Take Quiz</Link>
                    ) : (
                      <span className="inline-flex rounded-full bg-green-800/30 px-4 py-2 text-green-200 text-sm">✓ Take Quiz</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
