import type { Ancestry } from './types';

export const elf: Ancestry = {
  name: 'Elf',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Elven Will',
      pointCost: 1,
      description: 'You have ADV on Checks and Saves against being Charmed and put to Sleep.'
    },
    {
      name: 'Nimble',
      pointCost: 2,
      description: 'When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action.'
    },
    {
      name: 'Agile Explorer',
      pointCost: 2,
      description: 'You\'re not affected by Difficult Terrain.'
    },
    {
      name: 'Discerning Sight',
      pointCost: 0,
      description: 'You have ADV on Checks and Saves made to discern through visual illusions.'
    }
  ],
  expandedTraits: [
    {
      name: 'Quick Reactions',
      pointCost: 1,
      description: 'While you aren\'t wearing Armor, you gain +1 PD.'
    },
    {
      name: 'Peerless Sight',
      pointCost: 1,
      description: 'You don\'t have DisADV as a result of making an Attack with a Weapon at Long Range.'
    },
    {
      name: 'Climb Speed',
      pointCost: 1,
      description: 'You gain a Climb Speed equal to your Movement Speed.'
    },
    {
      name: 'Speed Increase',
      pointCost: 2,
      description: 'Your Speed increases by 1 Space.'
    },
    {
      name: 'Trade Expertise',
      pointCost: 1,
      description: 'Choose a Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1. You can only benefit from 1 Feature that increases your Trade Mastery Limit at a time.'
    },
    {
      name: 'Plant Knowledge',
      pointCost: 1,
      description: 'While within forests, jungles, and swamps, you have ADV on Survival Checks. Additionally, you have ADV on Nature Checks made to recall information about plants.'
    },
    {
      name: 'Brittle',
      pointCost: -1,
      description: 'Your AD decreases by 1.'
    },
    {
      name: 'Frail',
      pointCost: -1,
      description: 'Your HP maximum decreases by 2.'
    },
    {
      name: 'Might Attribute Decrease',
      pointCost: -1,
      description: 'You decrease your Might by 1 (to a minimum of -2).'
    }
  ]
};
