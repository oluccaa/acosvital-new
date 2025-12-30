export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specs: string[];
}

export enum SteelType {
  CARBON = 'Carbono',
  STAINLESS = 'Inox',
  ALUMINUM = 'Alumínio'
}

export enum ShapeType {
  SHEET = 'Chapa',
  TUBE_ROUND = 'Tubo Redondo',
  TUBE_SQUARE = 'Tubo Quadrado',
  BEAM = 'Viga I/U'
}

export interface CalculationResult {
  weight: number; // in kg
  shape: ShapeType;
  material: SteelType;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
