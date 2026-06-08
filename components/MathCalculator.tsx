'use client';

import { useState } from 'react';
import { mathLessons } from '../data/mathLessons';

interface QuizQuestion {
  topic: string;
  question: string;
  correctAnswer: number;
  expectedSteps: string[];
  userAnswer?: number;
}

export default function MathCalculator() {
  const [activeTab, setActiveTab] = useState<'topics' | 'calculator' | 'quiz'>('topics');
  const [selectedTopic, setSelectedTopic] = useState(mathLessons[0]);
  const [calculatorInput, setCalculatorInput] = useState('');
  const [calculatorResult, setCalculatorResult] = useState<number | string>('');
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Generate sample quiz questions based on the topic
  const generateQuizQuestions = (topic: typeof mathLessons[0]): QuizQuestion[] => {
    const questionTemplates = [
      {
        question: `Verify this calculation from ${topic.title}: d/dx[x²] = ?`,
        answer: 2,
        steps: ['Apply power rule: d/dx[x^n] = n*x^(n-1)', 'n=2, so 2*x^(2-1) = 2x', 'Evaluate at x=1: 2'],
      },
      {
        question: `Calculate using ${topic.title} concepts: ∫₀¹ x² dx = ?`,
        answer: 0.333,
        steps: ['Find antiderivative: ∫x² dx = x³/3', 'Evaluate from 0 to 1: [1³/3 - 0³/3]', 'Result: 1/3 ≈ 0.333'],
      },
    ];
    return questionTemplates.map((q) => ({
      topic: topic.title,
      question: q.question,
      correctAnswer: q.answer,
      expectedSteps: q.steps,
    }));
  };

  const handleCalculate = () => {
    try {
      // Evaluate mathematical expression safely
      const result = Function('"use strict"; return (' + calculatorInput + ')')();
      setCalculatorResult(result);
    } catch (err) {
      setCalculatorResult('Invalid expression');
    }
  };

  const handleStartQuiz = (topic: typeof mathLessons[0]) => {
    const questions = generateQuizQuestions(topic);
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setActiveTab('quiz');
  };

  const handleSubmitAnswer = (answer: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);

    const isCorrect = Math.abs(answer - quizQuestions[currentQuestionIndex].correctAnswer) < 0.01;
    if (isCorrect) {
      setQuizScore(quizScore + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const categories = Array.from(new Set(mathLessons.map((l) => l.category)));
  const topicsInCategory = mathLessons.filter((l) => l.category === selectedTopic.category);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      {/* Tab Navigation */}
      <div className="mb-8 flex gap-3 border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('topics')}
          className={`px-4 py-3 font-semibold transition ${
            activeTab === 'topics'
              ? 'border-b-2 border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-400'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          📚 Topics
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`px-4 py-3 font-semibold transition ${
            activeTab === 'calculator'
              ? 'border-b-2 border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-400'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          🔧 Calculator
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-3 font-semibold transition ${
            activeTab === 'quiz'
              ? 'border-b-2 border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-400'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          ✏️ Quiz
        </button>
      </div>

      {/* Topics Tab */}
      {activeTab === 'topics' && (
        <div className="space-y-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setSelectedTopic(mathLessons.find((l) => l.category === cat) || mathLessons[0])
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedTopic.category === cat
                    ? 'bg-purple-600 text-white dark:bg-purple-500'
                    : 'border border-slate-300 bg-slate-50 text-slate-700 hover:border-purple-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Topics in category */}
          <div className="grid gap-4">
            {topicsInCategory.map((topic) => (
              <div
                key={topic.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{topic.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{topic.description}</p>
                    {topic.subcategory && (
                      <p className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                        {topic.subcategory}
                      </p>
                    )}
                  </div>
                  <span
                    className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                      topic.difficulty === 'Beginner'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                        : topic.difficulty === 'Intermediate'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                    }`}
                  >
                    {topic.difficulty}
                  </span>
                </div>

                <p className="mb-4 leading-6 text-slate-700 dark:text-slate-300">{topic.content}</p>

                {/* Key Formulas */}
                {topic.keyFormulas.length > 0 && (
                  <div className="mb-4 rounded-xl bg-white p-3 dark:bg-slate-950">
                    <p className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-600 dark:text-slate-400">
                      📐 Key Formulas
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {topic.keyFormulas.slice(0, 4).map((formula, idx) => (
                        <p
                          key={idx}
                          className="font-mono rounded bg-purple-50 px-2 py-1 text-xs text-slate-900 dark:bg-purple-900/20 dark:text-purple-200"
                        >
                          {formula}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Examples */}
                {topic.examples.length > 0 && (
                  <div className="mb-4 space-y-2">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-600 dark:text-slate-400">
                      ✓ Problem Examples
                    </p>
                    {topic.examples.slice(0, 2).map((ex, idx) => (
                      <div key={idx} className="rounded-lg border-l-4 border-purple-400 bg-purple-50 px-3 py-2 dark:border-purple-600 dark:bg-purple-900/20">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">Q: {ex.problem}</p>
                        <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">A: {ex.solution}</p>
                        <p className="mt-1 text-xs italic text-slate-600 dark:text-slate-400">{ex.explanation.substring(0, 100)}...</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Applications */}
                {topic.practicalApplications.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-600 dark:text-slate-400">
                      💡 Real-World Applications
                    </p>
                    <ul className="grid gap-1 text-xs text-slate-700 dark:text-slate-300">
                      {topic.practicalApplications.slice(0, 3).map((app, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">→</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => handleStartQuiz(topic)}
                  className="inline-flex rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                >
                  ✏️ Take Quiz
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calculator Tab */}
      {activeTab === 'calculator' && (
        <div className="mx-auto max-w-md space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:from-purple-900/20 dark:to-pink-900/20">
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              Enter mathematical expressions like: 2*3+4, sqrt(16), Math.sin(1), etc.
            </p>
            <input
              type="text"
              value={calculatorInput}
              onChange={(e) => setCalculatorInput(e.target.value)}
              placeholder="e.g., 2*x^2 + 3*x - 5 where x=2"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
            />
            <button
              onClick={handleCalculate}
              className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
            >
              Calculate
            </button>
          </div>

          {calculatorResult !== '' && (
            <div className="rounded-xl border border-purple-300 bg-purple-50 p-4 dark:border-purple-600 dark:bg-purple-900/30">
              <p className="text-sm text-slate-600 dark:text-slate-400">Result:</p>
              <p className="mt-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
                {typeof calculatorResult === 'number' ? calculatorResult.toFixed(4) : calculatorResult}
              </p>
            </div>
          )}

          {/* Quick formula reference */}
          <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-900">
            <p className="mb-2 text-xs uppercase font-semibold text-slate-600 dark:text-slate-400">Quick Reference</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div>Math.sqrt(x) - Square root</div>
              <div>Math.pow(x,y) - Power</div>
              <div>Math.sin(x) - Sine</div>
              <div>Math.cos(x) - Cosine</div>
              <div>Math.tan(x) - Tangent</div>
              <div>Math.exp(x) - e^x</div>
              <div>Math.log(x) - ln(x)</div>
              <div>Math.abs(x) - Absolute</div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Tab */}
      {activeTab === 'quiz' && (
        <div>
          {!showResults && quizQuestions.length > 0 ? (
            <div className="mx-auto max-w-2xl space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </p>
                <div className="h-2 w-32 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-purple-600 dark:bg-purple-500 transition-all"
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/30">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {quizQuestions[currentQuestionIndex].question}
                </p>

                {/* Show steps reference */}
                <div className="mt-4 space-y-2 rounded-lg bg-white p-4 dark:bg-slate-950">
                  <p className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400">Expected steps:</p>
                  {quizQuestions[currentQuestionIndex].expectedSteps.map((step, idx) => (
                    <p key={idx} className="text-xs text-slate-700 dark:text-slate-300">
                      {idx + 1}. {step}
                    </p>
                  ))}
                </div>
              </div>

              {/* Answer input */}
              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Enter your answer"
                  step="0.001"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const answer = parseFloat((e.target as HTMLInputElement).value);
                      if (!isNaN(answer)) {
                        handleSubmitAnswer(answer);
                      }
                    }
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
                />
                <button
                  onClick={() => {
                    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                    const answer = parseFloat(input?.value || '0');
                    if (!isNaN(answer)) {
                      handleSubmitAnswer(answer);
                    }
                  }}
                  className="w-full rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                >
                  Submit Answer
                </button>
              </div>
            </div>
          ) : showResults && quizQuestions.length > 0 ? (
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-8 dark:from-purple-900/30 dark:to-pink-900/30">
                <p className="text-sm text-slate-600 dark:text-slate-400">Your Score</p>
                <p className="mt-2 text-5xl font-bold text-purple-600 dark:text-purple-400">
                  {quizScore}/{quizQuestions.length}
                </p>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
                  {Math.round((quizScore / quizQuestions.length) * 100)}% Correct
                </p>
              </div>

              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestionIndex(0);
                }}
                className="inline-flex rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-slate-600 dark:text-slate-400">Select a topic from the Topics tab to start a quiz</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
