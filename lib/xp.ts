export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  QUIZ_PERFECT: 100,
  QUIZ_GREAT: 75,
  QUIZ_PASS: 50,
  DAILY_CHALLENGE: 150,
  FLASHCARD_SESSION: 30,
  SIMULATION_VIEW: 20,
  FIRST_VISIT_TODAY: 10,
  STREAK_5_DAYS: 200,
  STREAK_30_DAYS: 1000,
};

export const LEVELS = [
  { name: 'Curious Beginner', icon: '🌱', minXP: 0 },
  { name: 'Science Student', icon: '📚', minXP: 500 },
  { name: 'Physics Enthusiast', icon: '⚡', minXP: 1500 },
  { name: 'Lab Researcher', icon: '🔬', minXP: 3000 },
  { name: 'Quantum Explorer', icon: '🌀', minXP: 6000 },
  { name: 'Relativity Master', icon: '🌌', minXP: 10000 },
  { name: 'Einstein Mode', icon: '🧠', minXP: 20000 },
];

export function getCurrentLevel(xp: number) {
  return [...LEVELS].reverse().find((l) => xp >= l.minXP) || LEVELS[0];
}

export function addXP(amount: number, reason: string) {
  const current = JSON.parse(localStorage.getItem('physics_xp') || '{"total":0,"history":[]}');
  current.total += amount;
  current.history.push({ amount, reason, date: new Date().toISOString() });
  localStorage.setItem('physics_xp', JSON.stringify(current));
  return current.total;
}

export function getXP() {
  return JSON.parse(localStorage.getItem('physics_xp') || '{"total":0,"history":[]}');
}
