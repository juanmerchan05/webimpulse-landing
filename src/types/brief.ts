export interface ColorToken {
  name: string;
  role: string;
  percentage: string;
  hex: string;
  tailwindClass: string;
  description: string;
  psychology: string;
  wcagContrast: string;
}

export interface TypeToken {
  family: string;
  category: 'Display / Titulares' | 'Cuerpo / Lectura';
  weights: string;
  googleFont: string;
  cssRule: string;
  idealFor: string;
  whyChosen: string;
}

export interface TonePrinciple {
  trait: string;
  description: string;
  doExample: string;
  dontExample: string;
}

export interface ObjectionResponse {
  objection: string;
  rootFear: string;
  designStrategy: string;
  copySolution: string;
}
