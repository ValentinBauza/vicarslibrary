import type { Ancestry } from './types';

export const halfling: Ancestry = {
  name: 'Halfling',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Small-Sized',
      pointCost: -1,
      description: 'Your Size is considered Small.'
    },
    {
      name: 'Elusive',
      pointCost: 2,
      description: 'When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action.'
    },
    {
      name: 'Halfling Bravery',
      pointCost: 2,
      description: 'You have ADV on Saves against being Frightened, Intimidated, or Terrified.'
    },
    {
      name: 'Halfling Endurance',
      pointCost: 1,
      description: 'You have Exhaustion Resistance.'
    },
    {
      name: 'Deft Footwork',
      pointCost: 1,
      description: 'You can move through the space of a hostile creature 1 size larger than you as if it were Difficult Terrain.'
    },
    {
      name: 'Beast Whisperer',
      pointCost: 0,
      description: 'You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You don\'t have a special ability to understand them in return.'
    }
  ],
  expandedTraits: [
    {
      name: 'Beast Insight',
      pointCost: 1,
      description: 'You can understand Beasts in a limited manner. You can understand the meaning of their noises and behaviors, though they have no special ability to understand you in return.'
    },
    {
      name: 'Burst of Bravery',
      pointCost: 1,
      description: 'Once per Combat, you can end the Frightened, Intimidated, or Terrified Condition on yourself for free at any time.'
    },
    {
      name: 'Trade Expertise',
      pointCost: 1,
      description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.'
    },
    {
      name: 'Critter Knowledge',
      pointCost: 1,
      description: 'You have ADV on Nature, Survival, and Animal Checks involving Small size creatures and smaller.'
    },
    {
      name: 'Brittle',
      pointCost: -1,
      description: 'Your AD decreases by 1.'
    },
    {
      name: 'Intelligence Attribute Decrease',
      pointCost: -1,
      description: 'You decrease your Intelligence by 1 (to a minimum of -2).'
    },
    {
      name: 'Short-Legged',
      pointCost: -1,
      description: 'Your Speed decreases by 1 Space.'
    }
  ]
};
