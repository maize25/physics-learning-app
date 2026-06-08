export interface ConstantEntry {
  name: string;
  symbol: string;
  value: number | string;
  unit: string;
  category: string;
}

export const constants: ConstantEntry[] = [
  { name: 'Speed of Light', symbol: 'c', value: 2.998e8, unit: 'm/s', category: 'Electromagnetic' },
  { name: 'Planck Constant', symbol: 'h', value: 6.626e-34, unit: 'J·s', category: 'Quantum' },
  { name: 'Gravitational Constant', symbol: 'G', value: 6.674e-11, unit: 'N·m²/kg²', category: 'Gravitational' },
  { name: 'Boltzmann Constant', symbol: 'k_B', value: 1.381e-23, unit: 'J/K', category: 'Thermodynamic' },
  { name: 'Avogadro Number', symbol: 'N_A', value: 6.022e23, unit: 'mol⁻¹', category: 'Chemical' },
  { name: 'Elementary Charge', symbol: 'e', value: 1.602e-19, unit: 'C', category: 'Electromagnetic' },
  { name: 'Electron Mass', symbol: 'm_e', value: 9.109e-31, unit: 'kg', category: 'Particle' },
  { name: 'Proton Mass', symbol: 'm_p', value: 1.673e-27, unit: 'kg', category: 'Particle' },
  { name: 'Neutron Mass', symbol: 'm_n', value: 1.675e-27, unit: 'kg', category: 'Particle' },
  { name: 'Fine Structure Constant', symbol: 'α', value: 7.297e-3, unit: 'dimensionless', category: 'Electromagnetic' },
  { name: 'Permittivity of Free Space', symbol: 'ε₀', value: 8.854e-12, unit: 'F/m', category: 'Electromagnetic' },
  { name: 'Permeability of Free Space', symbol: 'μ₀', value: 1.257e-6, unit: 'T·m/A', category: 'Electromagnetic' },
  { name: 'Stefan-Boltzmann Constant', symbol: 'σ', value: 5.67e-8, unit: 'W/m²K⁴', category: 'Thermodynamic' },
  { name: 'Rydberg Constant', symbol: 'R∞', value: 1.097e7, unit: 'm⁻¹', category: 'Atomic' },
  { name: 'Bohr Radius', symbol: 'a₀', value: 5.292e-11, unit: 'm', category: 'Atomic' },
  { name: 'Gas Constant', symbol: 'R', value: 8.314, unit: 'J/(mol·K)', category: 'Thermodynamic' },
  { name: 'Faraday Constant', symbol: 'F', value: 96485, unit: 'C/mol', category: 'Electromagnetic' },
  { name: 'Atmospheric Pressure', symbol: 'atm', value: 101325, unit: 'Pa', category: 'Mechanical' },
  { name: 'Earth Gravity', symbol: 'g', value: 9.807, unit: 'm/s²', category: 'Gravitational' },
  { name: 'Earth Mass', symbol: 'M_E', value: 5.972e24, unit: 'kg', category: 'Gravitational' },
];
