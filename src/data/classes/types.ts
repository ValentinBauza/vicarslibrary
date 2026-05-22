export interface ClassFeature {
  name: string;
  level: number;
  description: string;
  options?: Array<{
    name: string;
    description: string;
  }>;
}

export interface CharacterClass {
  name: string;
  description: string;
  source: string;
  features: ClassFeature[];
}
