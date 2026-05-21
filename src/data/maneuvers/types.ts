export interface Maneuver {
  name: string;
  type: string;
  cost: string;
  range: string;
  description: string;
  enhancements?: string[];
  tags?: string[];
}
