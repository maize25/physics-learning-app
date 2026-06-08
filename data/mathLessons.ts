export interface MathLesson {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  content: string;
  keyFormulas: string[];
  concepts: string[];
  examples: { problem: string; solution: string; explanation: string }[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  practicalApplications: string[];
  derivation?: string;
}

export interface MathBook {
  id: string;
  title: string;
  author: string;
  description: string;
  topics: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  link: string;
}

export const mathLessons: MathLesson[] = [
  // CALCULUS - DIFFERENTIATION
  {
    id: 'differentiation-basics',
    title: 'Differentiation Basics',
    category: 'Calculus',
    subcategory: 'Differentiation',
    description: 'Fundamental concepts and rules of derivatives.',
    content: 'Differentiation is the process of finding the rate of change of a function. The derivative measures how a function changes at each point. It is essential for optimization, motion analysis, and understanding function behavior.',
    keyFormulas: [
      'Definition: f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
      'Power Rule: d/dx[x^n] = nx^(n-1)',
      'Product Rule: d/dx[f·g] = f\'g + fg\'',
      'Quotient Rule: d/dx[f/g] = (f\'g - fg\')/g²',
      'Chain Rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)',
    ],
    concepts: [
      'Instantaneous rate of change',
      'Slope of tangent line',
      'Critical points and extrema',
      'Concavity and inflection points',
      'First and second derivative tests',
    ],
    examples: [
      {
        problem: 'Find the derivative of f(x) = x³ + 2x² - 5x + 3',
        solution: 'f\'(x) = 3x² + 4x - 5',
        explanation: 'Use the power rule on each term: d/dx[x³] = 3x², d/dx[2x²] = 4x, d/dx[-5x] = -5, d/dx[3] = 0',
      },
      {
        problem: 'Find the derivative of f(x) = (x² + 1)(x³ - 2)',
        solution: 'f\'(x) = 2x(x³ - 2) + (x² + 1)(3x²) = 5x⁴ + 3x² - 4x',
        explanation: 'Use the product rule: f\' = 2x·(x³ - 2) + (x² + 1)·3x²',
      },
      {
        problem: 'Find critical points of f(x) = x³ - 3x² + 2',
        solution: 'f\'(x) = 3x² - 6x = 3x(x - 2) = 0, so x = 0 and x = 2',
        explanation: 'Critical points occur where f\'(x) = 0. Here at x = 0 (local max) and x = 2 (local min)',
      },
    ],
    difficulty: 'Beginner',
    practicalApplications: [
      'Optimization problems in engineering',
      'Motion analysis in physics',
      'Economics: marginal cost and revenue',
      'Machine learning: gradient descent',
    ],
  },

  {
    id: 'advanced-derivatives',
    title: 'Advanced Differentiation Techniques',
    category: 'Calculus',
    subcategory: 'Differentiation',
    description: 'Implicit differentiation, logarithmic derivatives, and advanced rules.',
    content: 'Advanced differentiation techniques allow us to find derivatives of complex functions including implicit functions and functions defined logarithmically.',
    keyFormulas: [
      'Implicit Differentiation: dy/dx (when y is implicit in f(x,y)=0)',
      'Logarithmic Derivative: d/dx[ln(u)] = u\'/u',
      'Exponential: d/dx[e^u] = e^u · u\'',
      'Logarithmic: d/dx[log_a(u)] = (u\')/(u·ln(a))',
      'Inverse Function: dy/dx = 1/(dx/dy)',
      'Trigonometric: d/dx[sin(u)] = cos(u)·u\', d/dx[cos(u)] = -sin(u)·u\'',
    ],
    concepts: [
      'Implicit differentiation',
      'Related rates problems',
      'Logarithmic differentiation',
      'Derivatives of inverse functions',
      'Trigonometric and inverse trigonometric derivatives',
    ],
    examples: [
      {
        problem: 'Find dy/dx for x² + y² = 25 (implicit differentiation)',
        solution: '2x + 2y(dy/dx) = 0, so dy/dx = -x/y',
        explanation: 'Differentiate both sides with respect to x. The y term requires the chain rule.',
      },
      {
        problem: 'Find d/dx[x^x]',
        solution: 'd/dx[x^x] = x^x(ln(x) + 1)',
        explanation: 'Use logarithmic differentiation: Let y = x^x, ln(y) = x·ln(x), then differentiate implicitly.',
      },
      {
        problem: 'Find dy/dx for x·e^y = sin(x) + y',
        solution: 'e^y + x·e^y(dy/dx) = cos(x) + dy/dx, so dy/dx = (cos(x) - e^y)/(x·e^y - 1)',
        explanation: 'Use implicit differentiation on both sides of the equation.',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Related rates problems in physics',
      'Curve analysis and sketching',
      'Solving differential equations',
      'Parametric equations analysis',
    ],
  },

  // CALCULUS - INTEGRATION
  {
    id: 'integration-basics',
    title: 'Integration Fundamentals',
    category: 'Calculus',
    subcategory: 'Integration',
    description: 'Introduction to antiderivatives and indefinite integrals.',
    content: 'Integration is the reverse of differentiation. It finds the original function from its derivative (antiderivative) and calculates accumulated quantities (area, volume, etc.).',
    keyFormulas: [
      '∫x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)',
      '∫e^x dx = e^x + C',
      '∫1/x dx = ln|x| + C',
      '∫sin(x) dx = -cos(x) + C',
      '∫cos(x) dx = sin(x) + C',
      '∫a^x dx = a^x/ln(a) + C',
    ],
    concepts: [
      'Antiderivatives',
      'Constants of integration',
      'Basic integration rules',
      'Indefinite and definite integrals',
      'The fundamental theorem of calculus',
    ],
    examples: [
      {
        problem: '∫(3x² + 4x - 2) dx',
        solution: 'x³ + 2x² - 2x + C',
        explanation: 'Apply power rule to each term: ∫3x² dx = x³, ∫4x dx = 2x², ∫-2 dx = -2x',
      },
      {
        problem: '∫(e^x + 1/x + cos(x)) dx',
        solution: 'e^x + ln|x| + sin(x) + C',
        explanation: 'Integrate each term separately using standard formulas.',
      },
      {
        problem: '∫₀^2 (2x + 1) dx (definite integral)',
        solution: '[x² + x]₀^2 = (4 + 2) - (0) = 6',
        explanation: 'Find antiderivative: F(x) = x² + x, then evaluate F(2) - F(0)',
      },
    ],
    difficulty: 'Beginner',
    practicalApplications: [
      'Finding area under curves',
      'Calculating displacement from velocity',
      'Volume calculations',
      'Work and energy calculations',
    ],
  },

  {
    id: 'integration-techniques',
    title: 'Advanced Integration Techniques',
    category: 'Calculus',
    subcategory: 'Integration',
    description: 'Substitution, integration by parts, partial fractions, and more.',
    content: 'Advanced integration techniques handle complex integrals through systematic methods like u-substitution, integration by parts, and partial fraction decomposition.',
    keyFormulas: [
      'U-Substitution: ∫f(g(x))g\'(x)dx = ∫f(u)du where u = g(x)',
      'Integration by Parts: ∫u dv = uv - ∫v du',
      'Partial Fractions: (rational function) = (sum of simpler fractions)',
      'Trigonometric Substitution: x = a·sin(θ), x = a·tan(θ), x = a·sec(θ)',
      'Reduction Formula: ∫sin^n(x)dx, ∫cos^n(x)dx, ∫x^n·e^x dx',
    ],
    concepts: [
      'U-substitution and change of variables',
      'Integration by parts (LIATE rule)',
      'Partial fraction decomposition',
      'Trigonometric integrals',
      'Trigonometric substitution',
      'Improper integrals',
    ],
    examples: [
      {
        problem: '∫x·e^x dx (integration by parts)',
        solution: 'x·e^x - e^x + C = e^x(x - 1) + C',
        explanation: 'Let u = x, dv = e^x dx. Then du = dx, v = e^x. Apply: uv - ∫v du',
      },
      {
        problem: '∫(2x + 3)/(x² - 1) dx (partial fractions)',
        solution: 'ln|x - 1| + 2ln|x + 1| + C',
        explanation: 'Decompose: (2x + 3)/(x² - 1) = 1/(x-1) + 1/(x+1), then integrate each term',
      },
      {
        problem: '∫√(1 - x²) dx (trigonometric substitution)',
        solution: '(x√(1-x²) + arcsin(x))/2 + C',
        explanation: 'Let x = sin(θ), dx = cos(θ)dθ. Then ∫cos²(θ)dθ, use cos²(θ) = (1 + cos(2θ))/2',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'Complex area and volume calculations',
      'Probability and statistics',
      'Signal processing and Fourier analysis',
      'Solving differential equations',
    ],
  },

  {
    id: 'definite-integrals-applications',
    title: 'Definite Integrals & Applications',
    category: 'Calculus',
    subcategory: 'Integration',
    description: 'Applications of definite integrals to area, volume, and arc length.',
    content: 'Definite integrals calculate accumulated quantities. They find areas under curves, volumes of solids, arc lengths, work done, and surface areas.',
    keyFormulas: [
      'Area: A = ∫ₐ^b f(x) dx',
      'Area between curves: A = ∫ₐ^b |f(x) - g(x)| dx',
      'Volume (disk method): V = π ∫ₐ^b [R(x)]² dx',
      'Volume (shell method): V = 2π ∫ₐ^b x·f(x) dx',
      'Arc Length: L = ∫ₐ^b √(1 + [f\'(x)]²) dx',
      'Surface Area: S = 2π ∫ₐ^b f(x)√(1 + [f\'(x)]²) dx',
    ],
    concepts: [
      'Area under and between curves',
      'Volume of revolution (disk and shell methods)',
      'Arc length calculations',
      'Surface area of rotation',
      'Work and force integrals',
      'Fluid pressure integrals',
    ],
    examples: [
      {
        problem: 'Find area under f(x) = x² from x = 0 to x = 3',
        solution: 'A = ∫₀³ x² dx = [x³/3]₀³ = 9 - 0 = 9',
        explanation: 'Use the power rule for integration, then evaluate at bounds.',
      },
      {
        problem: 'Find volume when f(x) = √x is rotated around x-axis from x = 0 to x = 4',
        solution: 'V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π[x²/2]₀⁴ = 8π',
        explanation: 'Use disk method: V = π ∫ₐ^b [R(x)]² dx where R(x) = √x',
      },
      {
        problem: 'Find area between y = x² and y = x from x = 0 to x = 1',
        solution: 'A = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6',
        explanation: 'Subtract lower curve from upper: A = ∫₀¹ |f(x) - g(x)| dx',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Engineering: calculating volumes and surface areas',
      'Physics: work, energy, and pressure calculations',
      'Economics: accruing quantities over time',
      'Medicine: dosage calculations',
    ],
  },

  // ALGEBRA
  {
    id: 'polynomial-equations',
    title: 'Polynomial Equations & Factoring',
    category: 'Algebra',
    subcategory: 'Advanced Algebra',
    description: 'Solving polynomial equations and advanced factoring techniques.',
    content: 'Polynomial equations form the basis of algebra. Understanding factoring, roots, and the Rational Root Theorem helps solve complex algebraic problems.',
    keyFormulas: [
      'Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a',
      'Sum of Roots: x₁ + x₂ = -b/a (Vieta\'s formulas)',
      'Product of Roots: x₁·x₂ = c/a',
      'Factor Theorem: (x - r) is a factor iff f(r) = 0',
      'Rational Root Theorem: p/q where p divides constant term, q divides leading coefficient',
      'Polynomial Long Division and Synthetic Division',
    ],
    concepts: [
      'Factoring polynomials',
      'Roots and zeros',
      'Vieta\'s formulas',
      'Rational Root Theorem',
      'Synthetic division',
      'Remainder theorem',
    ],
    examples: [
      {
        problem: 'Solve 2x² - 7x + 3 = 0',
        solution: 'x = 3 or x = 1/2',
        explanation: 'Using quadratic formula: x = (7 ± √(49-24))/4 = (7 ± 5)/4',
      },
      {
        problem: 'Factor x³ - 6x² + 11x - 6',
        solution: '(x - 1)(x - 2)(x - 3)',
        explanation: 'Use Rational Root Theorem: possible roots are ±1, ±2, ±3, ±6. Test x = 1, then divide.',
      },
      {
        problem: 'Find sum and product of roots of 3x² + 5x - 2 = 0',
        solution: 'Sum = -5/3, Product = -2/3',
        explanation: 'By Vieta\'s formulas: sum = -b/a = -5/3, product = c/a = -2/3',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Engineering calculations',
      'Physics equations',
      'Economics and cost analysis',
      'Signal processing',
    ],
  },

  {
    id: 'linear-systems-advanced',
    title: 'Linear Systems & Matrices',
    category: 'Algebra',
    subcategory: 'Linear Algebra',
    description: 'Matrix operations, determinants, eigenvalues, and system solving.',
    content: 'Linear algebra is the mathematics of vectors and matrices. It is fundamental to computer graphics, machine learning, and solving systems of equations.',
    keyFormulas: [
      '2×2 Determinant: det = ad - bc',
      '3×3 Determinant: Rule of Sarrus or cofactor expansion',
      'Inverse Matrix: A⁻¹ = (1/det(A)) · adj(A)',
      'Eigenvalue Equation: det(A - λI) = 0',
      'System Ax = b solved by: x = A⁻¹b',
      'Rank-Nullity Theorem: rank(A) + nullity(A) = n',
    ],
    concepts: [
      'Matrix addition and multiplication',
      'Determinants',
      'Matrix inversion',
      'Eigenvalues and eigenvectors',
      'Row reduction and Gaussian elimination',
      'Rank and nullity',
      'Vector spaces',
    ],
    examples: [
      {
        problem: 'Find determinant of [1 2; 3 4]',
        solution: 'det = 1(4) - 2(3) = -2',
        explanation: 'For 2×2 matrix [[a,b],[c,d]], det = ad - bc',
      },
      {
        problem: 'Solve: 2x + y = 5, x - y = 1',
        solution: 'x = 2, y = 1',
        explanation: 'Using matrix form: [2 1; 1 -1][x; y] = [5; 1]. Solve using elimination or matrix inversion.',
      },
      {
        problem: 'Find eigenvalues of [2 1; 1 2]',
        solution: 'λ₁ = 3, λ₂ = 1',
        explanation: 'Solve det([2-λ 1; 1 2-λ]) = (2-λ)² - 1 = λ² - 4λ + 3 = 0',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'Computer graphics and 3D transformations',
      'Machine learning and neural networks',
      'Circuit analysis',
      'Structural analysis in engineering',
      'Data compression and image processing',
    ],
  },

  {
    id: 'sequences-series',
    title: 'Sequences & Series',
    category: 'Algebra',
    subcategory: 'Sequences & Series',
    description: 'Arithmetic and geometric sequences, convergence, and series sums.',
    content: 'Sequences are ordered lists of numbers. Series are sums of sequences. Understanding convergence and series formulas is crucial for analysis and applications.',
    keyFormulas: [
      'Arithmetic Sequence: aₙ = a₁ + (n-1)d',
      'Geometric Sequence: aₙ = a₁·r^(n-1)',
      'Arithmetic Series Sum: Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2',
      'Geometric Series Sum: Sₙ = a₁(1 - r^n)/(1 - r) (r ≠ 1)',
      'Infinite Geometric Series: S = a₁/(1 - r) (|r| < 1)',
      'Harmonic Series: Σ(1/n) diverges',
    ],
    concepts: [
      'Arithmetic and geometric progressions',
      'Convergence and divergence',
      'Series tests (comparison, ratio, root)',
      'Power series',
      'Taylor and Maclaurin series',
      'Infinite series',
    ],
    examples: [
      {
        problem: 'Find the sum of arithmetic sequence: 2, 5, 8, 11, ..., 38',
        solution: 'S = 13(2 + 38)/2 = 13(40)/2 = 260',
        explanation: 'First find n using aₙ = a₁ + (n-1)d: 38 = 2 + (n-1)3, so n = 13. Then Sₙ = n(a₁ + aₙ)/2',
      },
      {
        problem: 'Sum of infinite geometric series: 1 + 1/2 + 1/4 + 1/8 + ...',
        solution: 'S = 1/(1 - 1/2) = 2',
        explanation: 'With a₁ = 1 and r = 1/2, use S = a₁/(1-r) since |r| < 1 for convergence.',
      },
      {
        problem: 'Find the 10th term of: 3, 6, 12, 24, ...',
        solution: 'a₁₀ = 3 · 2^(10-1) = 3 · 512 = 1536',
        explanation: 'Geometric sequence with a₁ = 3 and r = 2. Use aₙ = a₁·r^(n-1)',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Finance: compound interest and annuities',
      'Population models',
      'Signal processing and analysis',
      'Physics: harmonic motion',
      'Engineering: system response analysis',
    ],
  },

  // TRIGONOMETRY
  {
    id: 'trigonometric-functions',
    title: 'Trigonometric Functions & Identities',
    category: 'Trigonometry',
    subcategory: 'Trigonometry',
    description: 'Sine, cosine, tangent and advanced trigonometric identities.',
    content: 'Trigonometric functions relate angles to sides in triangles and model periodic phenomena. Trigonometric identities reveal deep relationships between these functions.',
    keyFormulas: [
      'Pythagorean: sin²θ + cos²θ = 1',
      'Angle Sum: sin(α ± β) = sin α cos β ± cos α sin β',
      'Double Angle: sin(2θ) = 2sin θ cos θ, cos(2θ) = cos²θ - sin²θ',
      'Half Angle: sin(θ/2) = ±√((1 - cos θ)/2)',
      'Product-to-Sum: sin α sin β = [cos(α-β) - cos(α+β)]/2',
      'Law of Sines: a/sin A = b/sin B = c/sin C',
      'Law of Cosines: c² = a² + b² - 2ab cos C',
    ],
    concepts: [
      'Unit circle and radian measure',
      'Periodic functions',
      'Amplitude, frequency, phase shift',
      'Inverse trigonometric functions',
      'Solving trigonometric equations',
      'Triangle solving',
    ],
    examples: [
      {
        problem: 'Find sin(75°)',
        solution: 'sin(75°) = sin(45° + 30°) = sin(45°)cos(30°) + cos(45°)sin(30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4',
        explanation: 'Use angle addition formula: sin(α + β) = sin α cos β + cos α sin β',
      },
      {
        problem: 'Simplify: (sin θ - cos θ)² + 2sin θ cos θ',
        solution: 'sin²θ - 2sin θ cos θ + cos²θ + 2sin θ cos θ = sin²θ + cos²θ = 1',
        explanation: 'Expand the square, use Pythagorean identity.',
      },
      {
        problem: 'In triangle ABC: a = 5, b = 7, angle C = 60°. Find c.',
        solution: 'c² = 25 + 49 - 2(5)(7)cos(60°) = 74 - 70(1/2) = 39, so c = √39 ≈ 6.24',
        explanation: 'Use Law of Cosines: c² = a² + b² - 2ab cos C',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Surveying and navigation',
      'Wave analysis and oscillations',
      'AC circuit analysis',
      'Structural engineering',
      'Graphics and animation',
    ],
  },

  // GEOMETRY
  {
    id: 'coordinate-geometry',
    title: 'Coordinate Geometry & Conic Sections',
    category: 'Geometry',
    subcategory: 'Coordinate Geometry',
    description: 'Distance, midpoint, lines, circles, parabolas, ellipses, and hyperbolas.',
    content: 'Coordinate geometry combines algebra and geometry. Conic sections—circles, ellipses, parabolas, and hyperbolas—have important applications in physics and engineering.',
    keyFormulas: [
      'Distance Formula: d = √((x₂-x₁)² + (y₂-y₁)²)',
      'Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
      'Line Equation: y - y₁ = m(x - x₁) or Ax + By + C = 0',
      'Circle: (x - h)² + (y - k)² = r²',
      'Parabola: y² = 4px (vertex origin) or (x-h)² = 4p(y-k)',
      'Ellipse: x²/a² + y²/b² = 1',
      'Hyperbola: x²/a² - y²/b² = 1',
    ],
    concepts: [
      'Coordinate systems',
      'Distance and midpoint',
      'Slope and line equations',
      'Conic sections and their properties',
      'Eccentricity',
      'Polar coordinates',
      'Parametric equations',
    ],
    examples: [
      {
        problem: 'Find distance between points (3, 4) and (-1, 2)',
        solution: 'd = √((−1−3)² + (2−4)²) = √(16 + 4) = √20 = 2√5 ≈ 4.47',
        explanation: 'Apply distance formula: d = √((x₂-x₁)² + (y₂-y₁)²)',
      },
      {
        problem: 'Find the equation of circle with center (2, -3) and radius 5',
        solution: '(x - 2)² + (y + 3)² = 25',
        explanation: 'Use circle equation: (x - h)² + (y - k)² = r² where (h,k) is center and r is radius',
      },
      {
        problem: 'Identify conic: x² + 4y² - 2x + 16y + 13 = 0',
        solution: 'This is an ellipse: (x-1)²/4 + (y+2)² = 1',
        explanation: 'Complete the square: (x²-2x) + 4(y²+4y) = -13, leading to ellipse form',
      },
    ],
    difficulty: 'Intermediate',
    practicalApplications: [
      'Satellite orbits and planetary paths',
      'Parabolic mirrors and antennas',
      'CAD and computer graphics',
      'Navigation and GPS',
      'Projectile motion',
    ],
  },

  // STATISTICS & PROBABILITY
  {
    id: 'probability-distributions',
    title: 'Probability Distributions',
    category: 'Statistics',
    subcategory: 'Probability & Statistics',
    description: 'Normal, binomial, Poisson distributions and their applications.',
    content: 'Probability distributions describe how random variables behave. The normal distribution is the most important, appearing everywhere in nature. Other distributions model specific phenomena.',
    keyFormulas: [
      'Mean (Expected Value): μ = E[X] = Σ x·P(x)',
      'Variance: σ² = E[X²] - (E[X])²',
      'Standard Deviation: σ = √(σ²)',
      'Normal Distribution: f(x) = (1/(σ√(2π)))·e^(-(x-μ)²/(2σ²))',
      'Binomial: P(X=k) = C(n,k)·p^k·(1-p)^(n-k)',
      'Poisson: P(X=k) = (e^(-λ)·λ^k)/k!',
      'Z-score: Z = (X - μ)/σ',
    ],
    concepts: [
      'Probability basics',
      'Random variables',
      'Expected value and variance',
      'Normal distribution and z-scores',
      'Binomial and Poisson distributions',
      'Confidence intervals',
      'Hypothesis testing',
    ],
    examples: [
      {
        problem: 'If X ~ N(100, 15²), find P(X < 115)',
        solution: 'Z = (115 - 100)/15 = 1. P(Z < 1) ≈ 0.8413 or 84.13%',
        explanation: 'Convert to z-score and use standard normal table.',
      },
      {
        problem: 'Coin flipped 5 times. What is P(exactly 3 heads)?',
        solution: 'P(X=3) = C(5,3)·(0.5)³·(0.5)² = 10·(0.5)⁵ = 10/32 = 5/16 ≈ 0.3125',
        explanation: 'Use binomial distribution with n=5, k=3, p=0.5',
      },
      {
        problem: 'Average calls per hour is 4. Find P(exactly 2 calls in an hour)',
        solution: 'P(X=2) = (e^(-4)·4²)/2! = (0.0183·16)/2 ≈ 0.1465 or 14.65%',
        explanation: 'Use Poisson distribution with λ=4 and k=2',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'Quality control and manufacturing',
      'Medical research and clinical trials',
      'Finance and risk analysis',
      'Market research and surveys',
      'Machine learning and AI',
    ],
  },

  {
    id: 'hypothesis-testing',
    title: 'Hypothesis Testing & Statistical Inference',
    category: 'Statistics',
    subcategory: 'Probability & Statistics',
    description: 'T-tests, chi-square tests, p-values, and confidence intervals.',
    content: 'Hypothesis testing is a fundamental tool in statistics. It allows us to make informed decisions about populations based on sample data.',
    keyFormulas: [
      'T-statistic: t = (X̄ - μ)/(s/√n)',
      'Chi-Square: χ² = Σ(O - E)²/E',
      'Confidence Interval: X̄ ± z(α/2)·(σ/√n)',
      'P-value: probability of observing test statistic under null hypothesis',
      'Type I Error (α): rejecting true null hypothesis',
      'Type II Error (β): failing to reject false null hypothesis',
      'Power: 1 - β = probability of correctly rejecting false null',
    ],
    concepts: [
      'Null and alternative hypotheses',
      'Significance level (α)',
      'P-value interpretation',
      'Type I and Type II errors',
      'One-tailed and two-tailed tests',
      'Confidence intervals',
      'Effect size',
    ],
    examples: [
      {
        problem: 'Sample mean = 52, population mean = 50, s = 4, n = 25. Test H₀: μ = 50 at α = 0.05',
        solution: 't = (52 - 50)/(4/√25) = 2/(0.8) = 2.5. Critical value ≈ 2.064. Reject H₀.',
        explanation: 'Calculate t-statistic and compare to critical value for df = 24 at two-tailed α = 0.05',
      },
      {
        problem: '95% Confidence interval for mean when X̄ = 100, σ = 10, n = 100',
        solution: '100 ± 1.96(10/√100) = 100 ± 1.96 = [98.04, 101.96]',
        explanation: 'Use z-critical value 1.96 for 95% confidence: X̄ ± z(σ/√n)',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'Clinical trials and drug efficacy',
      'A/B testing in software',
      'Quality assurance',
      'Market research',
      'Academic research validation',
    ],
  },

  // NUMBER THEORY
  {
    id: 'number-theory-basics',
    title: 'Number Theory Fundamentals',
    category: 'Number Theory',
    subcategory: 'Number Theory',
    description: 'Primes, divisibility, modular arithmetic, and Fermat\'s Little Theorem.',
    content: 'Number theory studies properties of integers. Despite its pure mathematical nature, it has crucial applications in cryptography and computer science.',
    keyFormulas: [
      'Divisibility: a|b if b = ka for some integer k',
      'Prime: number divisible only by 1 and itself',
      'GCD (Euclidean Algorithm): gcd(a,b) = gcd(b, a mod b)',
      'Modular Arithmetic: a ≡ b (mod n) if n|(a-b)',
      'Fermat\'s Little Theorem: if p is prime and gcd(a,p)=1, then a^(p-1) ≡ 1 (mod p)',
      'Euler\'s Theorem: a^φ(n) ≡ 1 (mod n) if gcd(a,n)=1',
      'Chinese Remainder Theorem: solutions to simultaneous congruences',
    ],
    concepts: [
      'Prime numbers and factorization',
      'Divisibility rules',
      'Greatest Common Divisor (GCD)',
      'Least Common Multiple (LCM)',
      'Modular arithmetic',
      'Congruences',
      'Fermat\'s and Euler\'s theorems',
    ],
    examples: [
      {
        problem: 'Find gcd(48, 18) using Euclidean Algorithm',
        solution: 'gcd(48,18) → gcd(18,12) → gcd(12,6) → gcd(6,0) = 6',
        explanation: 'Apply gcd(a,b) = gcd(b, a mod b) repeatedly: 48=2·18+12, 18=1·12+6, 12=2·6+0',
      },
      {
        problem: 'Find 3^100 mod 7',
        solution: 'By Fermat\'s Little Theorem: 3^6 ≡ 1 (mod 7). So 3^100 = 3^(16·6+4) ≡ 3^4 ≡ 81 ≡ 4 (mod 7)',
        explanation: 'Since 7 is prime and gcd(3,7)=1, we have 3^(7-1) = 3^6 ≡ 1 (mod 7)',
      },
      {
        problem: 'Is 221 prime?',
        solution: '221 = 13 × 17, so 221 is composite',
        explanation: 'Check divisibility by primes up to √221 ≈ 14.9',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'Cryptography and RSA encryption',
      'Hash functions',
      'Random number generation',
      'Coding theory',
      'Computer networking',
    ],
  },

  // COMPLEX ANALYSIS
  {
    id: 'complex-numbers-advanced',
    title: 'Complex Numbers & De Moivre\'s Theorem',
    category: 'Complex Analysis',
    subcategory: 'Complex Numbers',
    description: 'Complex plane, polar form, De Moivre\'s theorem, and applications.',
    content: 'Complex numbers extend real numbers with the imaginary unit. De Moivre\'s theorem connects powers and roots of complex numbers to trigonometry.',
    keyFormulas: [
      'Complex Number: z = a + bi',
      'Magnitude: |z| = √(a² + b²)',
      'Polar Form: z = r(cos θ + i sin θ) = r·e^(iθ)',
      'De Moivre\'s Theorem: z^n = r^n(cos(nθ) + i sin(nθ))',
      'nth Root: ⁿ√z = ⁿ√r(cos((θ + 2πk)/n) + i sin((θ + 2πk)/n))',
      'Euler\'s Formula: e^(iθ) = cos(θ) + i sin(θ)',
      'Complex Conjugate: z̄ = a - bi',
    ],
    concepts: [
      'Argand diagram',
      'Rectangular and polar forms',
      'De Moivre\'s theorem',
      'Roots of complex numbers',
      'Powers of complex numbers',
      'Applications to trigonometry',
    ],
    examples: [
      {
        problem: 'Convert 3 + 4i to polar form',
        solution: 'r = |3 + 4i| = 5, θ = arctan(4/3) ≈ 53.13°, so z = 5(cos(53.13°) + i·sin(53.13°))',
        explanation: 'r = √(a²+b²), θ = arctan(b/a) in appropriate quadrant',
      },
      {
        problem: 'Find (1 + i)^8',
        solution: 'Convert to polar: 1+i = √2·e^(iπ/4). Then (√2)^8·e^(i·8π/4) = 16e^(i·2π) = 16',
        explanation: 'Use De Moivre: z^n = r^n·e^(i·nθ), where 1+i has r=√2 and θ=π/4',
      },
      {
        problem: 'Find all cube roots of 8',
        solution: '2, 2e^(i·2π/3) = -1 + i√3, 2e^(i·4π/3) = -1 - i√3',
        explanation: 'Use ⁿ√z = ⁿ√r·e^(i(θ+2πk)/n) for k=0,1,2 with r=8, θ=0',
      },
    ],
    difficulty: 'Advanced',
    practicalApplications: [
      'AC circuit analysis',
      'Quantum mechanics',
      'Signal processing',
      'Control systems',
      'Fluid dynamics',
    ],
  },
];

export const mathBooks: MathBook[] = [
  {
    id: 'calculus-stewart',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    description: 'Comprehensive calculus textbook covering limits, derivatives, integrals, and series with applications.',
    topics: 'Calculus, Derivatives, Integrals, Series, Applications',
    difficulty: 'Intermediate',
    link: 'https://www.stewartcalculus.com/',
  },
  {
    id: 'linear-algebra-axler',
    title: 'Linear Algebra Done Right',
    author: 'Sheldon Axler',
    description: 'Clear, conceptual introduction to linear algebra focusing on understanding over computation.',
    topics: 'Linear Algebra, Vector Spaces, Eigenvalues, Applications',
    difficulty: 'Advanced',
    link: 'https://linear.axler.net/',
  },
  {
    id: 'precalculus-stewart',
    title: 'Precalculus: Mathematics for Calculus',
    author: 'James Stewart',
    description: 'Foundation course covering algebra, trigonometry, and functions needed for calculus.',
    topics: 'Algebra, Trigonometry, Functions, Sequences',
    difficulty: 'Beginner',
    link: 'https://www.stewartcalculus.com/',
  },
  {
    id: 'discrete-math-rosen',
    title: 'Discrete Mathematics and Its Applications',
    author: 'Kenneth Rosen',
    description: 'Comprehensive discrete mathematics covering logic, sets, graphs, and algorithms.',
    topics: 'Discrete Math, Logic, Graphs, Combinatorics, Algorithms',
    difficulty: 'Intermediate',
    link: 'https://www.mheducation.com/highered/',
  },
  {
    id: 'real-analysis-rudin',
    title: 'Principles of Mathematical Analysis',
    author: 'Walter Rudin',
    description: 'Rigorous real analysis text covering limits, continuity, derivatives, and integrals.',
    topics: 'Real Analysis, Proofs, Convergence, Integration',
    difficulty: 'Advanced',
    link: 'https://www.mheducation.com/highered/',
  },
  {
    id: 'statistics-wasserman',
    title: 'All of Statistics',
    author: 'Larry Wasserman',
    description: 'Modern statistics covering probability, inference, regression, and machine learning.',
    topics: 'Statistics, Probability, Inference, Machine Learning',
    difficulty: 'Advanced',
    link: 'https://www.springer.com/',
  },
];
