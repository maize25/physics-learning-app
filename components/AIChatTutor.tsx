'use client'

import { useMemo, useState } from 'react';

interface Message {
  from: 'student' | 'tutor';
  text: string;
}

const seedMessages: Message[] = [
  { from: 'tutor', text: 'Hi! Ask me a physics question or request a quick explanation.' },
];

const responses = [
  {
    keywords: ['energy', 'work', 'power'],
    reply: 'Work and energy are closely related. Work is force times displacement, and energy is the ability to perform work. If you want, I can show the equations for kinetic and potential energy.',
  },
  {
    keywords: ['force', 'acceleration', 'mass'],
    reply: 'Newton’s second law says F=ma. That means force, mass and acceleration are directly linked. If you double the mass while keeping force constant, acceleration halves.',
  },
  {
    keywords: ['relativity', 'speed of light', 'time dilation', 'spacetime', 'general relativity', 'special relativity'],
    reply: 'Einstein’s relativity explains that space and time are linked, and moving clocks tick more slowly. For special relativity, time dilation is γ = 1/√(1 − v²/c²). General relativity adds gravity as curved spacetime, and it predicts things like light bending around massive objects.',
  },
  {
    keywords: ['wave', 'frequency', 'wavelength'],
    reply: 'A wave’s speed equals frequency times wavelength, v = fλ. Higher frequency waves have shorter wavelengths if the wave speed is constant.',
  },
  {
    keywords: ['solar system', 'planet', 'earth', 'mars', 'jupiter', 'saturn', 'mercury', 'venus', 'uranus', 'neptune'],
    reply: 'The solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. They orbit the Sun with very different periods and sizes, and each planet has unique features like Jupiter’s storm, Saturn’s rings, and Earth’s oceans.',
  },
  {
    keywords: ['universe', 'big bang', 'cosmology', 'dark matter', 'dark energy'],
    reply: 'Cosmology studies the universe at the largest scales. The Big Bang theory says space began expanding about 13.8 billion years ago. Dark matter shapes galaxies through gravity, while dark energy drives accelerated expansion.',
  },
];

function getTutorResponse(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes('black hole') || normalized.includes('blackhole')) {
    if (/(who|when|discover|found|find)/.test(normalized)) {
      return 'A black hole is a region of space where gravity is so strong that nothing can escape past its event horizon. The idea appears in Einstein’s general relativity equations from 1915, and the first exact black hole solution was found by Karl Schwarzschild in 1916. Astronomers found strong observational evidence much later; Cygnus X-1 was identified as a black hole candidate in the early 1970s, and the first image of a black hole shadow was released by the Event Horizon Telescope in 2019.';
    }
    return 'A black hole forms when a massive object collapses under its own gravity so strongly that light cannot escape. It has an event horizon, which is the boundary beyond which nothing can return. Black holes connect gravity, spacetime, and astrophysics, and they are studied through their effect on nearby stars, gas, and light.';
  }

  const match = responses.find((response) => response.keywords.some((keyword) => normalized.includes(keyword)));
  if (match) return match.reply;

  if (normalized.includes('calculate') || normalized.includes('find') || normalized.includes('solve')) {
    return 'Let’s break it down step-by-step. Start by identifying the known values, choose the right formula, and then solve for the unknown.';
  }

  if (/(who|what|when|why|how)/.test(normalized)) {
    return 'That is a great physics question. Try to identify the core concept first, then connect it to the most relevant law or formula, and I can help you from there.';
  }

  return 'Great question! I recommend rewriting the problem in your own words first and checking if you can match it to a known physics law.';
}

export default function AIChatTutor() {
  const [messages, setMessages] = useState<Message[]>(seedMessages);
  const [query, setQuery] = useState('');

  const latestReply = useMemo(() => messages[messages.length - 1]?.from === 'tutor', [messages]);

  const handleSend = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const studentMessage: Message = { from: 'student', text: trimmed };
    const tutorMessage: Message = { from: 'tutor', text: getTutorResponse(trimmed) };
    setMessages((current) => [...current, studentMessage, tutorMessage]);
    setQuery('');
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-500">AI Tutor</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Ask a physics mentor</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            Type a concept or problem and get a friendly guided answer with physics tips and formula reminders.
          </p>
        </div>
        <div className="rounded-3xl bg-indigo-50 px-4 py-3 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-200">
          AI assistant
        </div>
      </div>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={`${message.from}-${index}`}
            className={`rounded-3xl p-4 shadow-sm ${message.from === 'tutor' ? 'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white' : 'ml-auto max-w-[85%] bg-indigo-600 text-white dark:bg-indigo-500'}`}
          >
            <p className="text-sm leading-6">{message.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask about forces, energy, or formulas..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20"
        />
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Send
        </button>
      </div>
      {!latestReply && messages.length > 1 && <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Waiting for your next question.</p>}
    </div>
  );
}
