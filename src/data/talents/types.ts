export interface Talent {
  name: string;
  category: 'General' | 'Class';
  className?: string; // For class talents
  requirement?: string;
  canOnlyGainOnce?: boolean;
  description: string;
  benefits?: string[];
}
