export interface Spell {
  name: string;
  source: string;
  school: string;
  tags: string[];
  cost: string;
  range: string;
  duration: string;
  description: string;
  enhancements?: string[];
}
