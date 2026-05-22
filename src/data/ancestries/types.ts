export interface AncestryTrait {
  name: string;
  pointCost: number;
  description: string;
}

export interface Ancestry {
  name: string;
  description?: string;
  source: string;
  specialRules?: string;
  defaultTraits: AncestryTrait[];
  expandedTraits: AncestryTrait[];
}
