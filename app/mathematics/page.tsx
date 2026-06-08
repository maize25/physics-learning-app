'use client'

import { useState } from 'react';
import GradientText from '../../src/components/ui/GradientText';
import PageTransition from '@/src/components/effects/PageTransition';
import PageWrapper from '../../components/PageWrapper';
import PracticeProblem from '../../components/PracticeProblem';
import ProblemTimer from '../../src/components/quiz/ProblemTimer';
import DifficultyFilter from '../../src/components/quiz/DifficultyFilter';

type TabId = 'calculus' | 'algebra' | 'geometry' | 'statistics';
type Difficulty = 'all' | 'beginner' | 'intermediate' | 'advanced';

type PracticeProblemDef = {
  problem: string;
  hint: string;
  answer: string;
  alternativeExample: string;
  tolerance?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
};

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type LessonDetail = {
  id: string;
  title: string;
  difficulty: string;
  description: string;
  time: string;
  theory: string[];
  concepts: { name: string; explanation: string; example: string }[];
  formulas: { formula: string; explanation: string }[];
  examples: { title: string; problem: string; steps: string[]; answer: string }[];
  practice: PracticeProblemDef[];
  quiz: QuizQuestion[];
  related: { title: string; note: string }[];
};

const tabs: { id: TabId; label: string; description: string }[] = [
  { id: 'calculus', label: 'Calculus', description: 'Limits, derivatives, integrals, differential equations, and multivariable calculus.' },
  { id: 'algebra', label: 'Algebra', description: 'Polynomials, systems, matrices, abstract algebra, and vector spaces.' },
  { id: 'geometry', label: 'Geometry', description: 'Coordinate geometry, Euclidean proofs, 3D vectors, and transformations.' },
  { id: 'statistics', label: 'Statistics', description: 'Probability, distributions, descriptive statistics, and Bayesian reasoning.' },
];

const limitsLesson: LessonDetail = {
  id: 'limits-continuity',
  title: 'Limits & Continuity',
  difficulty: 'Beginner',
  description: 'Build a deep understanding of limits and continuity so you can analyze why functions behave the way they do and prepare for derivatives.',
  time: '⏱ 20 min read',
  theory: [
    'A limit describes how a function behaves as its input approaches a specific value, even if the function is not defined at that point. This idea was developed in the 19th century by Augustin-Louis Cauchy and Karl Weierstrass as mathematicians formalized calculus rigorously.',
    'Intuitively, the limit is the value the function approaches. For example, as x approaches 2 for the function (x^2 - 4)/(x - 2), the outputs get closer to 4 even though the function is undefined at x = 2. This distinction is the heart of limit-based reasoning.',
    'Left-hand and right-hand limits examine behavior from each side of a point. A function has a two-sided limit only when both one-sided limits match. This makes the limit concept precise and avoids incorrect conclusions based on one-sided behavior alone.',
    'Continuity ties limits to the actual function value: f is continuous at a when the limit as x approaches a equals f(a). If that equality breaks, the function has a discontinuity. Continuity is essential in calculus because many theorems, including the Intermediate Value Theorem, assume it.',
    'There are several types of discontinuities. A removable discontinuity is a “hole” in the graph that can be fixed by redefining a point. A jump discontinuity occurs when the graph leaps between two values. An infinite discontinuity appears when values grow without bound near a point.',
  ],
  concepts: [
    {
      name: 'Limit notation and intuition',
      explanation: 'Limit notation like lim(x→a) f(x) captures the idea of approaching a. It does not require the function value at a, only the values near a. This allows calculus to reason about instantaneous behavior.',
      example: 'For f(x) = (x^2 - 4)/(x - 2), the limit as x→2 exists even though f(2) is undefined. The values approach 4 from both sides.',
    },
    {
      name: 'One-sided limits',
      explanation: 'A left-hand limit checks values as x approaches a from below, while a right-hand limit checks values from above. Both must agree for a two-sided limit to exist.',
      example: 'For f(x)=|x|/x, the left-hand limit at 0 is -1 and the right-hand limit is 1, so the two-sided limit does not exist.',
    },
    {
      name: 'Continuity condition',
      explanation: 'Continuity at a point requires three conditions: the function exists at the point, the limit exists, and they are equal. This concept is what makes calculus the study of smooth transitions.',
      example: 'If f(x)=x^2 for x≠2 and f(2)=4, then f is continuous at 2 because the limit equals the function value.',
    },
  ],
  formulas: [
    { formula: 'lim(x→a) f(x) = L', explanation: 'The limit of f(x) as x approaches a equals L. Intuitive definition of approaching a value.' },
    { formula: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)', explanation: "L'Hopital's Rule: When limit gives 0/0 or ∞/∞, differentiate numerator and denominator." },
  ],
  examples: [
    {
      title: 'Example 1: Factoring to find a limit',
      problem: 'Find lim(x→2) (x²-4)/(x-2)',
      steps: [
        'Step 1: Direct substitution gives 0/0 (indeterminate)',
        'Step 2: Factor numerator: x²-4 = (x-2)(x+2)',
        'Step 3: Cancel common factor: [(x-2)(x+2)]/(x-2) = x+2',
        'Step 4: Now substitute: lim = 2+2 = 4',
        'Step 5: Answer = 4',
      ],
      answer: '4',
    },
    {
      title: 'Example 2: L\'Hopital\'s Rule',
      problem: 'Find lim(x→0) sin(x)/x',
      steps: [
        'Step 1: Direct substitution gives 0/0',
        'Step 2: Apply L\'Hopital\'s Rule: differentiate top and bottom',
        'Step 3: d/dx[sin(x)] = cos(x), d/dx[x] = 1',
        'Step 4: New limit = lim(x→0) cos(x)/1 = cos(0)/1 = 1',
        'Step 5: Answer = 1',
      ],
      answer: '1',
    },
    {
      title: 'Example 3: Checking Continuity',
      problem: 'Is f(x) = 1/x continuous at x=0?',
      steps: [
        'Step 1: Check if f(0) exists: f(0) = 1/0 is undefined',
        'Step 2: Since f(0) is undefined, continuity fails at the first condition',
        'Step 3: No need to check limit because function value doesn\'t exist',
        'Step 4: Type of discontinuity: infinite discontinuity (vertical asymptote)',
        'Step 5: Answer = No, f(x) = 1/x is NOT continuous at x=0',
      ],
      answer: 'No',
    },
  ],
  practice: [
    {
      problem: 'Find lim(x→2) (x²-4)/(x-2)',
      hint: 'Factor the numerator as (x-2)(x+2), then cancel the common factor.',
      answer: '4',
      alternativeExample: 'Similar: lim(x→1) (x²-1)/(x-1) = lim(x→1) (x+1) = 2',
      difficulty: 'beginner',
    },
    {
      problem: 'Find lim(x→0) sin(x)/x using L\'Hopital\'s Rule',
      hint: 'Differentiate numerator and denominator separately: d/dx[sin(x)] = cos(x), d/dx[x] = 1',
      answer: '1',
      alternativeExample: 'Related: lim(x→0) sin(2x)/(2x) = 1 (same principle)',
      difficulty: 'intermediate',
    },
    {
      problem: 'What type of discontinuity does f(x) = 1/x have at x=0?',
      hint: 'Think about what happens to values as x approaches 0 from both sides.',
      answer: 'infinite',
      alternativeExample: 'Comparison: f(x) = (x-1)/(x-1) has a REMOVABLE discontinuity at x=1',
      difficulty: 'beginner',
    },
  ],
  quiz: [
    {
      question: 'What is lim(x→3) (x²-9)/(x-3)?',
      options: ['3', '6', '9', 'undefined'],
      answer: '6',
      explanation: 'Factor: (x²-9)/(x-3) = (x-3)(x+3)/(x-3) = x+3 = 3+3 = 6',
    },
    {
      question: 'Which condition makes f(x) continuous at x=a?',
      options: ['f(a) exists', 'lim exists', 'both equal each other', 'all three conditions'],
      answer: 'all three conditions',
      explanation: 'Continuity requires: (1) f(a) exists, (2) lim(x→a) f(x) exists, (3) lim = f(a)',
    },
    {
      question: 'What is lim(x→∞) 1/x?',
      options: ['1', '0', '∞', 'undefined'],
      answer: '0',
      explanation: 'As x grows large, 1/x becomes increasingly small, approaching 0.',
    },
    {
      question: 'L\'Hopital\'s rule applies when the limit gives:',
      options: ['0/1', '1/0', '0/0', '1/1'],
      answer: '0/0',
      explanation: 'L\'Hopital\'s Rule works for indeterminate forms 0/0 and ∞/∞.',
    },
    {
      question: 'What type of discontinuity does f(x) = 1/x have at x=0?',
      options: ['Removable', 'Jump', 'Infinite', 'None'],
      answer: 'Infinite',
      explanation: 'The function values grow unbounded as x→0, creating a vertical asymptote (infinite discontinuity).',
    },
  ],
  related: [
    { title: 'Differentiation Basics', note: 'Limits are the foundation for derivatives' },
    { title: 'Integration Fundamentals', note: 'Limits define Riemann sums' },
    { title: 'Differential Equations', note: 'Uses limit concepts for approximation' },
  ],
};

const algebraPolynomialLesson: LessonDetail = {
  id: 'polynomial-equations',
  title: 'Polynomial Equations & Factoring',
  difficulty: 'Beginner',
  description: 'Master polynomial operations and factoring techniques essential for solving equations and simplifying expressions.',
  time: '⏱ 18 min read',
  theory: [
    'Polynomials are algebraic expressions with one or more terms, each combining variables and constants through multiplication. They appear everywhere: trajectory calculations, economic models, and computer graphics.',
    'The degree of a polynomial is the highest power of its variable. Degree determines behavior: linear (degree 1) is a line, quadratic (degree 2) is a parabola, cubic (degree 3) shows inflection.',
    'Factoring is the reverse of expanding. When we factor, we express a polynomial as a product of simpler terms. This reveals the roots (zeros) of the polynomial and simplifies calculations.',
    'Common factoring techniques include grouping, using the difference of squares, sum and difference of cubes, and trinomial factoring. Each technique applies to specific polynomial forms.',
    'The Rational Root Theorem states that any rational root of a polynomial with integer coefficients is of the form ±(factor of constant)/(factor of leading coefficient). This helps find integer solutions efficiently.',
  ],
  concepts: [
    {
      name: 'Polynomial structure and degree',
      explanation: 'Each term in a polynomial is a constant multiplied by variables raised to non-negative integer powers. The degree tells us the highest power present.',
      example: 'In 3x⁴ - 2x² + 5x - 7, the degree is 4 (highest power), and there are four terms.',
    },
    {
      name: 'Difference of squares and sum/difference of cubes',
      explanation: 'These special forms factor as products: a²-b² = (a-b)(a+b), a³+b³ = (a+b)(a²-ab+b²), a³-b³ = (a-b)(a²+ab+b²)',
      example: 'x² - 9 = (x-3)(x+3); x³ - 8 = (x-2)(x² + 2x + 4)',
    },
    {
      name: 'Trinomial factoring',
      explanation: 'Quadratic trinomials ax² + bx + c factor as (px+q)(rx+s) where pr=a, qs=c, and ps+qr=b. This process finds two numbers that multiply to ac and add to b.',
      example: 'x² + 5x + 6 = (x+2)(x+3); 2x² + 7x + 3 = (2x+1)(x+3)',
    },
  ],
  formulas: [
    { formula: 'a² - b² = (a-b)(a+b)', explanation: 'Difference of squares: key pattern for factoring.' },
    { formula: 'a³ ± b³ = (a ± b)(a² ∓ ab + b²)', explanation: 'Sum and difference of cubes factorization.' },
  ],
  examples: [
    {
      title: 'Example 1: Factoring by grouping',
      problem: 'Factor: x³ + 2x² + 3x + 6',
      steps: [
        'Step 1: Group first two and last two terms: (x³ + 2x²) + (3x + 6)',
        'Step 2: Factor each group: x²(x + 2) + 3(x + 2)',
        'Step 3: Factor out common binomial (x+2): (x+2)(x²+3)',
        'Step 4: Check if x²+3 factors further: it does not (no real roots)',
        'Step 5: Final answer = (x+2)(x²+3)',
      ],
      answer: '(x+2)(x²+3)',
    },
    {
      title: 'Example 2: Difference of squares',
      problem: 'Factor: 9x⁴ - 16',
      steps: [
        'Step 1: Recognize as difference of squares: (3x²)² - 4²',
        'Step 2: Apply a²-b² = (a-b)(a+b): (3x²-4)(3x²+4)',
        'Step 3: Check if 3x²-4 factors further: Yes! It\'s also a difference of squares',
        'Step 4: 3x²-4 = (√3x)²-2² (but √3 is irrational, so we stop)',
        'Step 5: Final answer = (3x²-4)(3x²+4)',
      ],
      answer: '(3x²-4)(3x²+4)',
    },
    {
      title: 'Example 3: Trinomial factoring',
      problem: 'Factor: 6x² + 11x + 3',
      steps: [
        'Step 1: ac = 6(3) = 18, b = 11. Find two numbers that multiply to 18 and add to 11: 9 and 2',
        'Step 2: Rewrite: 6x² + 9x + 2x + 3',
        'Step 3: Group and factor: 3x(2x+3) + 1(2x+3)',
        'Step 4: Factor out (2x+3): (2x+3)(3x+1)',
        'Step 5: Verify: (2x+3)(3x+1) = 6x² + 2x + 9x + 3 = 6x² + 11x + 3 ✓',
      ],
      answer: '(2x+3)(3x+1)',
    },
  ],
  practice: [
    {
      problem: 'Factor: x² - 16',
      hint: 'This is a difference of squares: a² - b² where a = x and b = 4.',
      answer: '(x-4)(x+4)',
      alternativeExample: 'Related: 9x² - 25 = (3x-5)(3x+5)',
      difficulty: 'beginner',
    },
    {
      problem: 'Factor: x² + 7x + 12',
      hint: 'Find two numbers that multiply to 12 and add to 7. Try 3 and 4.',
      answer: '(x+3)(x+4)',
      alternativeExample: 'Similar: x² + 8x + 12 = (x+2)(x+6)',
      difficulty: 'beginner',
    },
    {
      problem: 'Factor: 2x³ - 16',
      hint: 'First factor out the greatest common factor: 2(x³ - 8). Then x³-8 is a difference of cubes.',
      answer: '2(x-2)(x²+2x+4)',
      alternativeExample: 'Related: x³ + 27 = (x+3)(x²-3x+9)',
      difficulty: 'intermediate',
    },
  ],
  quiz: [
    {
      question: 'Which is the correct factorization of x² - 25?',
      options: ['(x-5)(x-5)', '(x-5)(x+5)', '(x+5)(x+5)', 'Cannot factor'],
      answer: '(x-5)(x+5)',
      explanation: 'x² - 25 = x² - 5² is difference of squares: (x-5)(x+5)',
    },
    {
      question: 'Factor x² + 6x + 9',
      options: ['(x+3)(x+3)', '(x-3)(x+3)', '(x+2)(x+3)', '(x+1)(x+9)'],
      answer: '(x+3)(x+3)',
      explanation: 'This is a perfect square trinomial: (x+3)²',
    },
    {
      question: 'What is the first step in factoring x³ - 27?',
      options: ['Use quadratic formula', 'Recognize as difference of cubes', 'Complete the square', 'Factor out x'],
      answer: 'Recognize as difference of cubes',
      explanation: 'x³ - 27 = x³ - 3³, which factors as (x-3)(x²+3x+9)',
    },
    {
      question: 'When can you use the difference of squares formula?',
      options: ['Never', 'When you have a² on one side and b² on the other', 'Only with positive numbers', 'Only in calculus'],
      answer: 'When you have a² on one side and b² on the other',
      explanation: 'The difference of squares applies specifically to expressions like a²-b².',
    },
    {
      question: 'Factor by grouping: ab + 3a + 2b + 6',
      options: ['(a+2)(b+3)', '(a+3)(b+2)', '(a+b)(3+6)', 'Cannot factor'],
      answer: '(a+2)(b+3)',
      explanation: 'Group as (ab+3a) + (2b+6) = a(b+3) + 2(b+3) = (a+2)(b+3)',
    },
  ],
  related: [
    { title: 'Linear Systems & Matrices', note: 'Uses polynomial factoring' },
    { title: 'Complex Numbers', note: 'Handles irreducible polynomials' },
    { title: 'Abstract Algebra', note: 'Studies polynomial rings' },
  ],
};

const geometryCoordinateLesson: LessonDetail = {
  id: 'coordinate-geometry',
  title: 'Coordinate Geometry & Conic Sections',
  difficulty: 'Intermediate',
  description: 'Explore the bridge between algebra and geometry through coordinate systems and conic sections.',
  time: '⏱ 22 min read',
  theory: [
    'Coordinate geometry, developed by René Descartes in the 17th century, connects algebra and geometry by representing points as ordered pairs (x,y). This revolution allowed geometric problems to be solved algebraically.',
    'Distance between two points uses the Pythagorean theorem: d = √[(x₂-x₁)² + (y₂-y₁)²]. The midpoint between them is ((x₁+x₂)/2, (y₁+y₂)/2).',
    'Conic sections are curves formed by intersecting a plane with a cone. They include circles, ellipses, parabolas, and hyperbolas. Each has a unique algebraic equation and geometric properties.',
    'A circle is the set of points equidistant from a center. Its equation is (x-h)² + (y-k)² = r², where (h,k) is the center and r is the radius.',
    'Parabolas appear in physics (projectile motion), engineering (antenna design), and optimization. The general form y = ax² + bx + c has vertex, focus, and directrix with specific geometric significance.',
  ],
  concepts: [
    {
      name: 'Distance formula and midpoint',
      explanation: 'The distance formula extends the Pythagorean theorem to any two points. The midpoint averages the coordinates.',
      example: 'Distance from (1,2) to (4,6): d = √[(4-1)² + (6-2)²] = √[9+16] = 5',
    },
    {
      name: 'Circle equations',
      explanation: 'Standard form (x-h)² + (y-k)² = r² describes all points at distance r from center (h,k). Expanding gives general form x² + y² + Dx + E + F = 0.',
      example: 'Circle with center (2,3) and radius 5: (x-2)² + (y-3)² = 25',
    },
    {
      name: 'Parabola: focus and directrix',
      explanation: 'A parabola is the locus of points equidistant from a focus point and a directrix line. This definition yields y = ax² + bx + c.',
      example: 'y = x² has focus at (0, 1/4) and directrix y = -1/4',
    },
  ],
  formulas: [
    { formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]', explanation: 'Distance between points (x₁,y₁) and (x₂,y₂)' },
    { formula: '(x-h)² + (y-k)² = r²', explanation: 'Circle with center (h,k) and radius r' },
    { formula: 'y = ax² + bx + c', explanation: 'Standard form of a parabola' },
  ],
  examples: [
    {
      title: 'Example 1: Finding distance',
      problem: 'Find distance between (-1,3) and (2,-1)',
      steps: [
        'Step 1: Identify points: (x₁,y₁) = (-1,3), (x₂,y₂) = (2,-1)',
        'Step 2: Calculate differences: x₂-x₁ = 2-(-1) = 3, y₂-y₁ = -1-3 = -4',
        'Step 3: Square the differences: 3² = 9, (-4)² = 16',
        'Step 4: Add: 9 + 16 = 25',
        'Step 5: Take square root: √25 = 5',
      ],
      answer: '5',
    },
    {
      title: 'Example 2: Circle equation',
      problem: 'Write equation of circle with center (3,-2) and radius 4',
      steps: [
        'Step 1: Use standard form (x-h)² + (y-k)² = r²',
        'Step 2: Substitute h=3, k=-2, r=4',
        'Step 3: (x-3)² + (y-(-2))² = 4²',
        'Step 4: Simplify: (x-3)² + (y+2)² = 16',
        'Step 5: Verify point (7,-2) is on circle: (7-3)² + (-2+2)² = 16 + 0 = 16 ✓',
      ],
      answer: '(x-3)²+(y+2)²=16',
    },
    {
      title: 'Example 3: Parabola vertex',
      problem: 'Find vertex of y = 2x² - 8x + 3',
      steps: [
        'Step 1: Use vertex formula x = -b/(2a) where a=2, b=-8',
        'Step 2: x = -(-8)/(2·2) = 8/4 = 2',
        'Step 3: Substitute x=2: y = 2(2)² - 8(2) + 3 = 8 - 16 + 3 = -5',
        'Step 4: Vertex is at (2, -5)',
        'Step 5: Since a=2>0, parabola opens upward, so vertex is a minimum',
      ],
      answer: '(2,-5)',
    },
  ],
  practice: [
    {
      problem: 'Find distance from (0,0) to (3,4)',
      hint: 'Use formula: d = √[(3-0)² + (4-0)²] = √[9+16]',
      answer: '5',
      alternativeExample: 'Similar: distance from (1,1) to (4,5) = √[9+16] = 5',
      difficulty: 'beginner',
    },
    {
      problem: 'What is the radius of circle (x-1)² + (y+3)² = 25?',
      hint: 'In form (x-h)² + (y-k)² = r², the radius r = √25',
      answer: '5',
      alternativeExample: 'Compare: (x+2)² + y² = 49 has radius 7',
      difficulty: 'beginner',
    },
    {
      problem: 'Find vertex of parabola y = x² + 4x + 5',
      hint: 'Use x = -b/(2a) = -4/(2·1) = -2, then find y-value',
      answer: '(-2,1)',
      alternativeExample: 'Related: y = x² - 6x + 8 has vertex at (3,-1)',
      difficulty: 'intermediate',
    },
  ],
  quiz: [
    {
      question: 'What is the distance from (0,0) to (3,4)?',
      options: ['5', '7', '12', '√7'],
      answer: '5',
      explanation: 'd = √[3² + 4²] = √[9+16] = √25 = 5',
    },
    {
      question: 'Circle (x+1)² + (y-2)² = 9 has center and radius:',
      options: ['Center (1,-2), r=9', 'Center (-1,2), r=3', 'Center (1,2), r=3', 'Center (-1,2), r=9'],
      answer: 'Center (-1,2), r=3',
      explanation: 'Rewrite as (x-(-1))² + (y-2)² = 3². So center is (-1,2) and r=3.',
    },
    {
      question: 'For parabola y = -2x² + 4x - 1, the x-coordinate of vertex is:',
      options: ['1', '-1', '2', '-2'],
      answer: '1',
      explanation: 'x = -b/(2a) = -4/(2·(-2)) = -4/(-4) = 1',
    },
    {
      question: 'What shape do points equidistant from a point and a line form?',
      options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
      answer: 'Parabola',
      explanation: 'A parabola is defined as the set of points equidistant from a focus (point) and directrix (line).',
    },
    {
      question: 'What is midpoint of (2,4) and (8,10)?',
      options: ['(5,7)', '(10,14)', '(3,3)', '(6,6)'],
      answer: '(5,7)',
      explanation: 'Midpoint = ((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5,7)',
    },
  ],
  related: [
    { title: 'Trigonometric Functions & Identities', note: 'Uses polar coordinates' },
    { title: 'Vectors in 3D Space', note: 'Extends to three dimensions' },
    { title: 'Transformations & Symmetry', note: 'Geometric transformations' },
  ],
};

const statisticsProbabilityLesson: LessonDetail = {
  id: 'probability-distributions',
  title: 'Probability Distributions',
  difficulty: 'Intermediate',
  description: 'Understand how probabilities are distributed across outcomes and master the fundamental distributions in statistics.',
  time: '⏱ 25 min read',
  theory: [
    'A probability distribution describes how probability is allocated across possible outcomes. It\'s fundamental to statistics, machine learning, and quantitative decision-making.',
    'Discrete distributions assign probabilities to specific values (like number of heads in coin flips). Continuous distributions describe probability over ranges (like heights of people).',
    'The binomial distribution models experiments with two outcomes repeated n times. It answers questions like "What\'s the probability of exactly 5 heads in 10 coin flips?"',
    'The normal distribution, bell-shaped and symmetric, appears everywhere from test scores to measurement errors. The Central Limit Theorem explains why: averages of any distribution approach normality.',
    'The Poisson distribution models rare events occurring in fixed time intervals, like number of emails received per hour or earthquakes per year. It\'s crucial in reliability engineering and traffic modeling.',
  ],
  concepts: [
    {
      name: 'Mean and variance of distributions',
      explanation: 'The mean (expected value) is the center of the distribution. The variance measures spread. For normal distribution: mean determines location, variance determines width.',
      example: 'Normal distribution with mean 100 and variance 15 centers at 100 with most data between 85 and 115.',
    },
    {
      name: 'Binomial distribution parameters',
      explanation: 'Binomial(n,p) has n trials and success probability p per trial. Number of successes follows binomial distribution. Mean = np, Variance = np(1-p).',
      example: 'Flipping coin 10 times (n=10, p=0.5): expected heads = 5, variance = 2.5',
    },
    {
      name: 'Z-scores and standardization',
      explanation: 'Z-score = (value - mean)/standard deviation. It tells how many standard deviations a value is from the mean. Z-scores allow comparison across different distributions.',
      example: 'Score of 85 with mean 75 and SD 5: Z = (85-75)/5 = 2 (2 standard deviations above mean)',
    },
  ],
  formulas: [
    { formula: 'P(X=k) = C(n,k)·p^k·(1-p)^(n-k)', explanation: 'Binomial probability: k successes in n trials with probability p each' },
    { formula: 'Z = (X - μ)/σ', explanation: 'Z-score: standardized distance from mean' },
    { formula: 'μ = np, σ² = np(1-p)', explanation: 'Mean and variance of binomial distribution' },
  ],
  examples: [
    {
      title: 'Example 1: Binomial probability',
      problem: 'Probability of exactly 3 heads in 5 coin flips',
      steps: [
        'Step 1: Identify n=5, k=3, p=0.5 (fair coin)',
        'Step 2: Calculate C(5,3) = 5!/(3!·2!) = 10',
        'Step 3: P(X=3) = C(5,3)·(0.5)³·(0.5)²',
        'Step 4: = 10·(0.125)·(0.25) = 10·0.03125 = 0.3125',
        'Step 5: Probability = 0.3125 or 31.25%',
      ],
      answer: '0.3125',
    },
    {
      title: 'Example 2: Z-score calculation',
      problem: 'Student scores 78 on test with mean 70, SD 8. Find Z-score.',
      steps: [
        'Step 1: Use Z = (X - μ)/σ',
        'Step 2: X = 78, μ = 70, σ = 8',
        'Step 3: Z = (78 - 70)/8 = 8/8 = 1',
        'Step 4: Student scored 1 standard deviation above mean',
        'Step 5: This corresponds to approximately 84th percentile',
      ],
      answer: '1',
    },
    {
      title: 'Example 3: Normal distribution probability',
      problem: 'IQ scores: mean 100, SD 15. What % score above 115?',
      steps: [
        'Step 1: Calculate Z-score for 115: Z = (115-100)/15 = 1',
        'Step 2: Find P(Z > 1) from standard normal table',
        'Step 3: P(Z < 1) ≈ 0.8413',
        'Step 4: P(Z > 1) = 1 - 0.8413 = 0.1587',
        'Step 5: Approximately 15.87% score above 115',
      ],
      answer: '15.87%',
    },
  ],
  practice: [
    {
      problem: 'Probability of 2 heads in 4 coin flips',
      hint: 'Use binomial: C(4,2)·(0.5)²·(0.5)² where C(4,2) = 6',
      answer: '0.375',
      alternativeExample: 'Similar: Probability of 3 heads in 4 flips = 0.25',
      difficulty: 'intermediate',
    },
    {
      problem: 'Test scores have mean 85, SD 10. What is Z-score for 105?',
      hint: 'Z = (105 - 85)/10 = 20/10',
      answer: '2',
      alternativeExample: 'Related: Score of 65 has Z-score (65-85)/10 = -2',
      difficulty: 'intermediate',
    },
    {
      problem: 'What does Z-score of 0 mean?',
      hint: 'Think about what Z=0 represents: (value - mean)/SD = 0',
      answer: 'value equals the mean',
      alternativeExample: 'Z = -1 means "one SD below the mean"',
      difficulty: 'beginner',
    },
  ],
  quiz: [
    {
      question: 'In a binomial distribution with n=10, p=0.5, what is the mean?',
      options: ['2', '5', '10', '0.5'],
      answer: '5',
      explanation: 'Mean of binomial = np = 10·0.5 = 5',
    },
    {
      question: 'What is a Z-score of -2?',
      options: ['2 std dev above mean', '2 std dev below mean', 'negative probability', 'standard error'],
      answer: '2 std dev below mean',
      explanation: 'Negative Z means below the mean. |Z|=2 means 2 standard deviations away.',
    },
    {
      question: 'Which distribution models number of successes in fixed trials?',
      options: ['Normal', 'Binomial', 'Poisson', 'Uniform'],
      answer: 'Binomial',
      explanation: 'Binomial distribution: fixed number of independent trials, each with probability p of success.',
    },
    {
      question: 'What % of data falls within 1 SD in normal distribution?',
      options: ['68%', '95%', '99.7%', '50%'],
      answer: '68%',
      explanation: 'In normal distribution: 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD.',
    },
    {
      question: 'Probability of 5 heads in 5 flips:',
      options: ['1/32', '10/32', '5/32', '1/2'],
      answer: '1/32',
      explanation: 'C(5,5)·(0.5)⁵·(0.5)⁰ = 1·(1/32)·1 = 1/32',
    },
  ],
  related: [
    { title: 'Hypothesis Testing', note: 'Uses distributions for testing' },
    { title: 'Descriptive Statistics', note: 'Foundations of analysis' },
    { title: 'Bayesian Statistics', note: 'Builds on probability' },
  ],
};

export default function MathematicsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('calculus');
  const [selectedLesson, setSelectedLesson] = useState<LessonDetail | null>(limitsLesson);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const lessons: Record<TabId, LessonDetail[]> = {
    calculus: [limitsLesson],
    algebra: [algebraPolynomialLesson],
    geometry: [geometryCoordinateLesson],
    statistics: [statisticsProbabilityLesson],
  };

  const filteredPracticeProblems = selectedLesson?.practice.filter((problem) =>
    difficulty === 'all' || problem.difficulty === difficulty
  ) ?? [];

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    setSelectedLesson(lessons[tab][0]);
    resetQuiz();
  };

  const handleSelectLesson = (lesson: LessonDetail) => {
    setSelectedLesson(lesson);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setQuizComplete(false);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setQuizScore(quizScore + 1);
    }
    if (currentQuestionIndex < (selectedLesson?.quiz.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuizAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <PageTransition>
      <PageWrapper>
        <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">
          <GradientText>Mathematics Hub</GradientText>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Deep dive into mathematics from fundamentals to advanced topics</p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Description */}
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">{tabs.find((t) => t.id === activeTab)?.description}</p>
        </div>

        {/* Lesson Selection */}
        {activeTab === 'calculus' && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {lessons.calculus.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedLesson?.id === lesson.id
                    ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.difficulty}</p>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'algebra' && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {lessons.algebra.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedLesson?.id === lesson.id
                    ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.difficulty}</p>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'geometry' && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {lessons.geometry.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedLesson?.id === lesson.id
                    ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.difficulty}</p>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'statistics' && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {lessons.statistics.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedLesson?.id === lesson.id
                    ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.difficulty}</p>
              </button>
            ))}
          </div>
        )}

        {selectedLesson && (
          <div className="space-y-8">
            {/* Lesson Header */}
            <div className="border-b pb-6">
              <h2 className="text-3xl font-bold mb-2">{selectedLesson.title}</h2>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">{selectedLesson.difficulty}</span>
                <span className="text-gray-600 dark:text-gray-400">{selectedLesson.time}</span>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedLesson.description}</p>
            </div>

            {/* Theory Section */}
            <section>
              <h3 className="text-2xl font-bold mb-4">📚 Theory</h3>
              <div className="space-y-3">
                {selectedLesson.theory.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Concepts */}
            <section>
              <h3 className="text-2xl font-bold mb-4">💡 Key Concepts</h3>
              <div className="space-y-4">
                {selectedLesson.concepts.map((concept, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">{concept.name}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{concept.explanation}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">Example: {concept.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Formulas */}
            <section>
              <h3 className="text-2xl font-bold mb-4">📐 Key Formulas</h3>
              <div className="grid gap-4">
                {selectedLesson.formulas.map((f, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border border-purple-300 dark:border-purple-700">
                    <div className="font-mono font-semibold text-lg mb-2 text-purple-900 dark:text-purple-300">{f.formula}</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{f.explanation}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Examples */}
            <section>
              <h3 className="text-2xl font-bold mb-4">📖 Worked Examples</h3>
              <div className="space-y-6">
                {selectedLesson.examples.map((example, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-lg mb-2">{example.title}</h4>
                    <p className="font-medium text-blue-600 dark:text-blue-400 mb-4">Problem: {example.problem}</p>
                    <div className="space-y-2">
                      {example.steps.map((step, stepIdx) => (
                        <p key={stepIdx} className="text-sm text-gray-700 dark:text-gray-300">
                          {step}
                        </p>
                      ))}
                    </div>
                    <p className="mt-4 font-semibold text-green-600 dark:text-green-400">Answer: {example.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practice Problems */}
            <section>
              <h3 className="text-2xl font-bold mb-4">✏️ Practice Problems</h3>
              <ProblemTimer />
              <DifficultyFilter active={difficulty} onChange={setDifficulty} />
              {filteredPracticeProblems.length === 0 ? (
                <p className="text-sm text-gray-400">No practice problems match this difficulty.</p>
              ) : (
                <div className="space-y-4">
                  {filteredPracticeProblems.map((problem, idx) => (
                    <PracticeProblem
                      key={idx}
                      problem={problem.problem}
                      hint={problem.hint}
                      answer={problem.answer}
                      alternativeExample={problem.alternativeExample}
                      tolerance={problem.tolerance}
                      difficulty={problem.difficulty}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Quiz Section */}
            <section>
              <h3 className="text-2xl font-bold mb-4">🎯 Mini Quiz</h3>
              {quizComplete ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">Quiz Complete!</p>
                  <p className="text-xl mb-4">
                    Score: <span className="font-bold text-green-600 dark:text-green-400">{quizScore}/{selectedLesson.quiz.length}</span>
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                    Question {currentQuestionIndex + 1} of {selectedLesson.quiz.length}
                  </p>
                  {selectedLesson.quiz[currentQuestionIndex] && (
                    <div className="space-y-4">
                      <p className="font-semibold text-lg">{selectedLesson.quiz[currentQuestionIndex].question}</p>
                      <div className="space-y-2">
                        {selectedLesson.quiz[currentQuestionIndex].options.map((option, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => {
                              setQuizAnswered(true);
                              handleQuizAnswer(option === selectedLesson.quiz[currentQuestionIndex].answer);
                            }}
                            disabled={quizAnswered}
                            className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                              quizAnswered
                                ? option === selectedLesson.quiz[currentQuestionIndex].answer
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                  : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                : 'border-gray-300 dark:border-gray-600 hover:border-blue-500'
                            } ${quizAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {quizAnswered && (
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-700 dark:text-blue-300">{selectedLesson.quiz[currentQuestionIndex].explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </section>

            {/* Related Lessons */}
            <section>
              <h3 className="text-2xl font-bold mb-4">→ Up Next</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedLesson.related.map((related, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
                    <h4 className="font-semibold mb-2">{related.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{related.note}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
        </div>
      </PageWrapper>
    </PageTransition>
  );
}