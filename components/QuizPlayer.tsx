'use client';

import { useEffect, useState } from "react";

const quizTopics = {
  blackHoles: {
    name: "Black Holes",
    questions: [
      {
        question: "What is a black hole?",
        options: [
          "A star that has run out of fuel",
          "A region of spacetime where gravity is so strong that nothing can escape",
          "A type of galaxy",
          "A planet with no atmosphere",
        ],
        answer: 1,
        hint: "Think about extreme gravity and escape...",
        explanation: "A black hole is a region where gravity becomes so intense that not even light can escape once it crosses the event horizon boundary.",
        conceptLink: "General Relativity - Spacetime Curvature"
      },
      {
        question: "Who first predicted the existence of black holes?",
        options: ["Albert Einstein", "John Michell", "Stephen Hawking", "Carl Sagan"],
        answer: 0,
        hint: "Think of the scientist who developed relativity...",
        explanation: "Albert Einstein's theory of General Relativity mathematically predicted black holes in 1915, though Michell considered them theoretically in 1783.",
        conceptLink: "Einstein's General Relativity Theory"
      },
      {
        question: "What is the event horizon?",
        options: [
          "The surface of a star",
          "The boundary where nothing can escape a black hole",
          "A type of galaxy",
          "The center of the galaxy",
        ],
        answer: 1,
        hint: "Think about the boundary of no return...",
        explanation: "The event horizon is the spherical boundary around a black hole beyond which nothing, not even light, can escape.",
        conceptLink: "Event Horizon and Point of No Return"
      },
      {
        question: "What is Hawking radiation?",
        options: [
          "Energy emitted by a black hole",
          "Sound from a black hole",
          "Light produced by stars",
          "Radio waves from space",
        ],
        answer: 0,
        hint: "Stephen Hawking proved black holes aren't completely black...",
        explanation: "Hawking radiation is the thermal radiation emitted by black holes due to quantum effects near the event horizon. This was revolutionary!",
        conceptLink: "Quantum Effects Near Event Horizons"
      },
      {
        question: "How were black hole mergers first detected?",
        options: ["With optical telescopes", "With LIGO gravitational waves", "With radio antennas", "With neutrino detectors"],
        answer: 1,
        hint: "Think about Einstein's prediction that was confirmed in 2015...",
        explanation: "LIGO detected gravitational waves in 2015 from two colliding black holes, confirming Einstein's century-old prediction.",
        conceptLink: "Gravitational Waves and LIGO Detection"
      },
    ]
  },
  darkMatter: {
    name: "Dark Matter",
    questions: [
      {
        question: "What is dark matter?",
        options: [
          "Visible matter that emits light",
          "Invisible matter that does not emit light",
          "Dark energy",
          "Black holes",
        ],
        answer: 1,
        hint: "Think about what can't be seen but affects gravity...",
        explanation: "Dark matter is invisible matter that doesn't emit, absorb, or reflect light, but exerts gravitational effects on visible matter.",
        conceptLink: "Detecting Invisible Matter Through Gravity"
      },
      {
        question: "What percentage of the universe is dark matter?",
        options: ["5%", "27%", "50%", "70%"],
        answer: 1,
        hint: "It's less than dark energy but much more than visible matter...",
        explanation: "Dark matter comprises approximately 27% of the universe's mass-energy content. Only 5% is regular matter.",
        conceptLink: "Composition of the Universe"
      },
      {
        question: "How is dark matter detected?",
        options: ["Directly seen by telescopes", "By its gravitational effects", "By sound", "By heat"],
        answer: 1,
        hint: "We can't see it, but we can observe how it affects visible objects...",
        explanation: "Dark matter is detected indirectly through gravitational lensing and by observing that galaxies rotate faster than expected.",
        conceptLink: "Gravitational Lensing and Rotation Curves"
      },
      {
        question: "What is a WIMP in dark matter research?",
        options: ["Weakly Interacting Massive Particle", "Wave Interaction Mass Phenomenon", "Wide Inertial Medium Particle", "Wavelength In Mass Particle"],
        answer: 0,
        hint: "It's an acronym for a kind of particle scientists search for...",
        explanation: "WIMPs are theoretical particles that rarely interact with normal matter. They pass through Earth constantly but are hard to detect.",
        conceptLink: "Particle Candidates for Dark Matter"
      },
      {
        question: "Has dark matter been directly observed?",
        options: ["Yes, many times", "No, not yet", "Only in laboratories", "Only in our solar system"],
        answer: 1,
        hint: "Despite decades of experiments, we still haven't detected it...",
        explanation: "Dark matter has never been directly observed. Its true nature remains one of physics' greatest mysteries.",
        conceptLink: "Unsolved Problems in Dark Matter Physics"
      },
    ]
  },
  astronomy: {
    name: "Astronomy Basics",
    questions: [
      {
        question: "What is the closest planet to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: 2,
        hint: "It's the smallest planet and closest to the Sun...",
        explanation: "Mercury is the closest planet to the Sun. It orbits very quickly, completing one orbit in only 88 Earth days.",
        conceptLink: "The Planetary System"
      },
      {
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        answer: 1,
        hint: "Pluto was reclassified in 2006...",
        explanation: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
        conceptLink: "Our Solar System Structure"
      },
      {
        question: "What is a light year?",
        options: ["A year of light", "Distance light travels in one year", "The time it takes light to circle Earth", "Brightness level"],
        answer: 1,
        hint: "It's a measurement of distance, not time...",
        explanation: "A light year is the distance light travels in one year - about 9.46 trillion kilometers.",
        conceptLink: "Measuring Cosmic Distances"
      },
      {
        question: "What is the Milky Way?",
        options: ["A star", "Our galaxy containing billions of stars", "A planet", "A nebula"],
        answer: 1,
        hint: "It's the large spiral structure we live in...",
        explanation: "The Milky Way is our home galaxy containing about 100-200 billion stars.",
        conceptLink: "Our Galactic Home"
      },
      {
        question: "What causes Earth's seasons?",
        options: ["Distance to the Sun", "The tilt of Earth's axis", "Moon phases", "Solar flares"],
        answer: 1,
        hint: "The Northern Hemisphere has winter when tilted away from the Sun...",
        explanation: "Earth's axis is tilted 23.5 degrees causing seasons when tilted toward or away from the Sun.",
        conceptLink: "Earth's Axial Tilt and Orbital Mechanics"
      },
    ]
  },
  classicalMechanics: {
    name: "Classical Mechanics",
    questions: [
      {
        question: "Which quantity is conserved when no external torque acts on a system?",
        options: ["Linear momentum", "Angular momentum", "Energy", "Electrical charge"],
        answer: 1,
        hint: "This conservation law controls spinning systems.",
        explanation: "Angular momentum is conserved in the absence of external torque, which is why skaters spin faster when they pull in their arms.",
        conceptLink: "Rotational Motion and Conservation Laws",
        questionType: "Multiple Choice",
      },
      {
        question: "What is the acceleration of a 10 kg mass under a 20 N force?",
        options: ["0.5 m/s²", "2 m/s²", "10 m/s²", "20 m/s²"],
        answer: 1,
        hint: "Use F = ma.",
        explanation: "Acceleration = Force / Mass = 20 N / 10 kg = 2 m/s².",
        conceptLink: "Newton's Second Law",
        questionType: "Multiple Choice",
      },
      {
        question: "True or false: momentum is a vector quantity.",
        options: ["True", "False"],
        answer: 0,
        hint: "Momentum depends on both speed and direction.",
        explanation: "Momentum is a vector because it has both magnitude and direction.",
        conceptLink: "Momentum and Vectors",
        questionType: "True/False",
      },
      {
        question: "What is the gravitational force between two 1 kg masses separated by 1 m?",
        options: ["6.67×10⁻¹¹ N", "6.67×10⁻⁵ N", "9.8 N", "1 N"],
        answer: 0,
        hint: "Use Newton's law of gravitation: F = G m1 m2 / r².",
        explanation: "Using G ≈ 6.67×10⁻¹¹ N·m²/kg² gives a force of 6.67×10⁻¹¹ newtons.",
        conceptLink: "Newtonian Gravity",
        questionType: "Multiple Choice",
      },
      {
        question: "If a car doubles its speed, its kinetic energy changes by what factor?",
        options: ["1/2", "2", "4", "8"],
        answer: 2,
        hint: "Kinetic energy scales with the square of speed.",
        explanation: "Kinetic energy is proportional to v², so doubling speed multiplies energy by 4.",
        conceptLink: "Kinetic Energy and Work",
        questionType: "Multiple Choice",
      },
    ]
  },
  wavesOptics: {
    name: "Waves & Optics",
    questions: [
      {
        question: "What is the relationship between wave speed, frequency, and wavelength?",
        options: ["v = f + λ", "v = f / λ", "v = f λ", "v = λ / f"],
        answer: 2,
        hint: "Multiply frequency by wavelength.",
        explanation: "Wave speed is the product of frequency and wavelength: v = f λ.",
        conceptLink: "Wave Equation",
        questionType: "Multiple Choice",
      },
      {
        question: "True or false: the angle of incidence equals the angle of reflection.",
        options: ["True", "False"],
        answer: 0,
        hint: "This is a basic law of reflection.",
        explanation: "For reflection from a flat mirror, the incident angle equals the reflected angle.",
        conceptLink: "Law of Reflection",
        questionType: "True/False",
      },
      {
        question: "A light ray enters glass from air. Does it bend towards or away from the normal?",
        options: ["Towards the normal", "Away from the normal", "It does not bend", "It splits into two rays"],
        answer: 0,
        hint: "Glass is denser than air.",
        explanation: "When light slows down entering a denser medium like glass, it bends toward the normal.",
        conceptLink: "Snell's Law and Refraction",
        questionType: "Multiple Choice",
      },
      {
        question: "What phenomenon produces the colorful bands seen in soap bubbles?",
        options: ["Reflection", "Refraction", "Interference", "Diffraction"],
        answer: 2,
        hint: "Thin film thickness matters.",
        explanation: "Thin-film interference causes the rainbow colors in soap bubbles by constructive and destructive wave overlap.",
        conceptLink: "Thin Film Interference",
        questionType: "Multiple Choice",
      },
      {
        question: "Waves passing through a narrow opening spread out; this is called what?",
        options: ["Refraction", "Diffraction", "Dispersion", "Polarization"],
        answer: 1,
        hint: "It happens when the opening is about the size of the wavelength.",
        explanation: "Diffraction occurs when waves bend around obstacles or openings and spread into the shadow region.",
        conceptLink: "Diffraction Patterns",
        questionType: "Multiple Choice",
      },
    ]
  },
  electricityMagnetism: {
    name: "Electricity & Magnetism",
    questions: [
      {
        question: "What is the direction of the force on a positive charge moving through a magnetic field?",
        options: ["Along the velocity", "Opposite the velocity", "Perpendicular to both velocity and magnetic field", "Zero"],
        answer: 2,
        hint: "Use the right-hand rule for charges.",
        explanation: "Magnetic force on a moving charge is perpendicular to both velocity and magnetic field: F = q v × B.",
        conceptLink: "Magnetic Forces on Charges",
        questionType: "Multiple Choice",
      },
      {
        question: "True or false: a stationary charge feels a magnetic force in a uniform magnetic field.",
        options: ["True", "False"],
        answer: 1,
        hint: "The magnetic force depends on motion.",
        explanation: "A stationary charge does not experience a magnetic force because F = q v × B and v = 0.",
        conceptLink: "Magnetic Force Law",
        questionType: "True/False",
      },
      {
        question: "Which equation is one of Maxwell's equations relating a changing magnetic field to induced electric field?",
        options: ["∇·E = ρ/ε0", "∇×E = -∂B/∂t", "∇·B = 0", "∇×B = μ0 J"],
        answer: 1,
        hint: "Faraday's law is the changing magnetic flux law.",
        explanation: "Faraday's law in differential form is ∇×E = -∂B/∂t, showing a changing magnetic field induces an electric field.",
        conceptLink: "Faraday's Law",
        questionType: "Multiple Choice",
      },
      {
        question: "What happens to the current in a circuit when the resistance doubles and voltage stays constant?",
        options: ["It doubles", "It halves", "It remains the same", "It becomes zero"],
        answer: 1,
        hint: "Use Ohm's law V = IR.",
        explanation: "If resistance doubles with constant voltage, current halves.",
        conceptLink: "Ohm's Law",
        questionType: "Multiple Choice",
      },
      {
        question: "What do transformers change in an AC circuit?",
        options: ["Voltage and current", "Resistance", "Charge", "Frequency"],
        answer: 0,
        hint: "They use magnetic coupling between coils.",
        explanation: "Transformers change the voltage and current of alternating current while conserving power (neglecting losses).",
        conceptLink: "Transformer Operation",
        questionType: "Multiple Choice",
      },
    ]
  },
  famousScientists: {
    name: "Famous Scientists",
    questions: [
      {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Carl Sagan"],
        answer: 1,
        hint: "This physicist revolutionized physics in the early 1900s...",
        explanation: "Albert Einstein developed both special relativity (1905) and general relativity (1915).",
        conceptLink: "Einstein's Revolutionary Theories"
      },
      {
        question: "Who wrote 'A Brief History of Time'?",
        options: ["Brian Greene", "Stephen Hawking", "Richard Feynman", "Neil deGrasse Tyson"],
        answer: 1,
        hint: "This physicist made cosmology accessible to the public...",
        explanation: "Stephen Hawking wrote this bestseller to explain complex cosmology to general audiences.",
        conceptLink: "Science Communication and Black Holes"
      },
      {
        question: "Who popularized science on television?",
        options: ["Albert Einstein", "Carl Sagan", "Richard Feynman", "Marie Curie"],
        answer: 1,
        hint: "This astronomer hosted a famous TV series about the cosmos...",
        explanation: "Carl Sagan hosted 'Cosmos' in 1980 and inspired millions to love science.",
        conceptLink: "Science Education and Public Engagement"
      },
      {
        question: "Who invented Feynman diagrams?",
        options: ["Albert Einstein", "Richard Feynman", "Steven Weinberg", "Paul Dirac"],
        answer: 1,
        hint: "These visual diagrams help understand particle interactions...",
        explanation: "Richard Feynman created visual diagrams to represent particle interactions in quantum mechanics.",
        conceptLink: "Quantum Electrodynamics and Visual Methods"
      },
      {
        question: "Who first proposed the expanding universe?",
        options: ["Albert Einstein", "Edwin Hubble", "Georges Lemaître", "All of the above"],
        answer: 3,
        hint: "Multiple scientists contributed to this realization...",
        explanation: "Lemaître theorized expansion, Hubble observed it, and Einstein initially resisted the idea.",
        conceptLink: "Discovery of an Expanding Universe"
      },
    ]
  },
};

type TopicKey = keyof typeof quizTopics;

interface QuestionData {
  question: string;
  options: string[];
  answer: number;
  hint: string;
  explanation: string;
  conceptLink: string;
  questionType?: string;
}

export default function QuizPlayer() {
  const [topic, setTopic] = useState<TopicKey>("blackHoles");
  const [numQuestions, setNumQuestions] = useState(5);
  const [timeLimit, setTimeLimit] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const topicData = quizTopics[topic];
  const questionsToUse = topicData.questions.slice(0, Math.min(numQuestions, topicData.questions.length));
  const currentQuestion = questionsToUse[current] as QuestionData;

  const startQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowHint(false);
    setQuizStarted(true);
    setTimeLeft(timeLimit > 0 ? timeLimit : 0);
  };

  const chooseOption = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);

    if (index === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 >= questionsToUse.length) {
      setFinished(true);
      setQuizStarted(false);
    } else {
      setCurrent((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowHint(false);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowHint(false);
    setTimeLeft(0);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('physics-quiz-settings');
    if (!stored) return;

    try {
      const settings = JSON.parse(stored);
      setTopic(settings.topic ?? 'blackHoles');
      setNumQuestions(settings.numQuestions ?? 5);
      setTimeLimit(settings.timeLimit ?? 0);
    } catch {
      // ignore invalid storage data
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(
      'physics-quiz-settings',
      JSON.stringify({ topic, numQuestions, timeLimit })
    );
  }, [topic, numQuestions, timeLimit]);

  useEffect(() => {
    if (!quizStarted || timeLimit === 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setFinished(true);
          setQuizStarted(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [quizStarted, timeLimit]);

  const timeDisplay = timeLeft > 0 ? `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}` : null;

  if (!quizStarted && !finished) {
    return (
      <div className="rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6">Quiz Setup</h2>
        
        <div className="bg-slate-700 rounded-lg p-6 mb-6 space-y-4">
          <div>
            <label className="block text-lg font-semibold text-white mb-3">Select Topic:</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value as TopicKey)}
              className="w-full rounded-lg bg-slate-600 text-white px-4 py-3 border border-slate-500"
            >
              {(Object.entries(quizTopics) as [TopicKey, any][]).map(([key, data]) => (
                <option key={key} value={key}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-white mb-3">Number of Questions:</label>
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              className="w-full rounded-lg bg-slate-600 text-white px-4 py-3 border border-slate-500"
            >
              <option value={3}>3 Questions</option>
              <option value={5}>5 Questions</option>
              <option value={10}>All Available Questions</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-white mb-3">Time Limit:</label>
            <select
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
              className="w-full rounded-lg bg-slate-600 text-white px-4 py-3 border border-slate-500"
            >
              <option value={0}>No Time Limit</option>
              <option value={30}>30 Seconds</option>
              <option value={60}>60 Seconds</option>
              <option value={90}>90 Seconds</option>
            </select>
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 text-lg transition"
        >
          ▶️ Start Quiz
        </button>
      </div>
    );
  }

  if (quizStarted && !finished && currentQuestion) {
    const progressPercent = ((current + 1) / questionsToUse.length) * 100;

    return (
      <div className="space-y-6">
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4 text-white text-sm">
            <span>Question {current + 1} of {questionsToUse.length}</span>
            <span>Score: {score}/{questionsToUse.length}</span>
            <span>Type: {currentQuestion.questionType ?? 'Multiple Choice'}</span>
            {timeDisplay && <span>Time left: {timeDisplay}</span>}
          </div>

          <h3 className="text-2xl font-bold text-white mb-8">{currentQuestion.question}</h3>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => chooseOption(index)}
                disabled={answered}
                className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition text-left ${
                  !answered
                    ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    : index === currentQuestion.answer
                    ? 'bg-green-600 text-white border border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-600 text-white border border-red-500'
                    : 'bg-slate-700 text-slate-400 border border-slate-600'
                }`}
              >
                {index === currentQuestion.answer && answered && '✓ '}
                {index === selectedAnswer && index !== currentQuestion.answer && answered && '✗ '}
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <div className="space-y-4">
              {selectedAnswer !== currentQuestion.answer && !showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="w-full px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-bold transition"
                >
                  💡 Show Hint
                </button>
              )}

              {showHint && (
                <div className="bg-blue-950 rounded-lg p-4 border border-blue-500">
                  <p className="text-yellow-300 font-bold mb-2">Hint: {currentQuestion.hint}</p>
                  <p className="text-white mb-2">{currentQuestion.explanation}</p>
                  <p className="text-blue-300"><strong>Concept:</strong> {currentQuestion.conceptLink}</p>
                </div>
              )}

              {selectedAnswer === currentQuestion.answer && (
                <div className="bg-green-950 rounded-lg p-4 border border-green-500">
                  <p className="text-green-300 font-bold mb-2">✓ Correct!</p>
                  <p className="text-white mb-2">{currentQuestion.explanation}</p>
                  <p className="text-blue-300"><strong>Concept:</strong> {currentQuestion.conceptLink}</p>
                </div>
              )}

              <button
                onClick={nextQuestion}
                className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition text-lg"
              >
                {current + 1 >= questionsToUse.length ? 'Finish Quiz →' : 'Next Question →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questionsToUse.length) * 100);
    let message = "📚 Keep learning!";
    if (percentage === 100) message = "🌟 Perfect Score! Outstanding!";
    else if (percentage >= 80) message = "🎉 Excellent work!";
    else if (percentage >= 60) message = "👍 Good effort! Keep practicing!";
    else if (percentage >= 40) message = "💪 Nice try! Review and try again!";

    return (
      <div className="rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete! 🎓</h2>
        <div className="bg-slate-700 rounded-lg p-8 mb-6">
          <div className="text-7xl font-bold text-blue-400 mb-4">{score}/{questionsToUse.length}</div>
          <div className="text-3xl font-bold text-white mb-4">{percentage}%</div>
          <div className="text-xl text-slate-200">{message}</div>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold transition text-lg"
        >
          🔄 Try Another Quiz
        </button>
      </div>
    );
  }

  return null;
}
