import type { Ancestry } from './types';

export const human: Ancestry = {
  name: 'Human',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Attribute Increase',
      pointCost: 2,
      description: 'Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit Cap).'
    },
    {
      name: 'Skill Expertise',
      pointCost: 2,
      description: 'Choose a Skill. Your Mastery Cap and Mastery Level in the chosen Skill both increase by 1. You can only benefit from 1 Feature that increases your Skill Mastery Limit at a time.'
    },
    {
      name: 'Human Resolve',
      pointCost: 1,
      description: 'Your Death\'s Door Threshold value is expanded by 1.'
    },
    {
      name: 'Undying',
      pointCost: 0,
      description: 'You have ADV on Saves against the Doomed Condition.'
    }
  ],
  expandedTraits: [
    {
      name: 'Trade Expertise',
      pointCost: 1,
      description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.'
    },
    {
      name: 'Human Determination',
      pointCost: 1,
      description: 'Once per Combat, you can give yourself ADV on an Attack, Martial, or Spell Check while Bloodied.'
    },
    {
      name: 'Unbreakable',
      pointCost: 1,
      description: 'You have ADV on Death Saves.'
    },
    {
      name: 'Attribute Decrease',
      pointCost: -1,
      description: 'Choose an Attribute. You decrease the chosen Attribute by 1 (to a minimum of -2).'
    }
  ]
};
