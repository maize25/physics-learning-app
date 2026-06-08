export interface BadgeEntry {
  id: string;
  name: string;
  icon: string;
  description: string;
  conditionKey: string;
}

export const badges: BadgeEntry[] = [
  { id: 'first_lesson', name: 'First Steps', icon: '📖', description: 'Complete your first lesson', conditionKey: 'lessonsCompleted' },
  { id: 'quiz_master', name: 'Quiz Master', icon: '🎯', description: 'Score 100% on any quiz', conditionKey: 'perfectQuizzes' },
  { id: 'streak_7', name: '7 Day Streak', icon: '🔥', description: 'Solve daily challenge 7 days in a row', conditionKey: 'streak' },
  { id: 'sim_explorer', name: 'Simulation Explorer', icon: '🔬', description: 'Try all 6 simulations', conditionKey: 'simsViewed' },
  { id: 'flash_champ', name: 'Flashcard Champion', icon: '🃏', description: 'Master 50 flashcards', conditionKey: 'cardsMastered' },
  { id: 'daily_30', name: 'Daily Solver', icon: '⚡', description: 'Solve 30 daily challenges', conditionKey: 'totalSolved' },
  { id: 'night_owl', name: 'Night Owl', icon: '🦉', description: 'Use the app after midnight', conditionKey: 'midnightVisit' },
  { id: 'speed_reader', name: 'Speed Reader', icon: '⚡', description: 'Complete a lesson in under 5 minutes', conditionKey: 'fastLesson' },
  { id: 'perfect_week', name: 'Perfect Week', icon: '👑', description: 'Daily challenge 7 days in a row', conditionKey: 'streak' },
  { id: 'formula_expert', name: 'Formula Expert', icon: '📐', description: 'View all formula categories', conditionKey: 'formulasViewed' },
];
