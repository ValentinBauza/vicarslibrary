import type { Ancestry } from './types';

export const dwarf: Ancestry = {
  name: 'Dwarf',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Tough',
      pointCost: 1,
      description: 'Your HP maximum increases by 1.'
    },
    {
      name: 'Toxic Fortitude',
      pointCost: 2,
      description: 'You have Poison Resistance (Half) and ADV on Saves against being Poisoned.'
    },
    {
      name: 'Physically Sturdy',
      pointCost: 2,
      description: 'You have ADV on Saves against being Impaired, Deafened, or Petrified.'
    },
    {
      name: 'Iron Stomach',
      pointCost: 0,
      description: 'You have ADV on Saves against effects that come from consuming food or liquids.'
    }
  ],
  expandedTraits: [
    {
      name: 'Thick-Skinned',
      pointCost: 1,
      description: 'While you aren\'t wearing Armor, you gain +1 AD.'
    },
    {
      name: 'Natural Combatant',
      pointCost: 1,
      description: 'You gain Combat Training with Heavy Armor and All Shields.'
    },
    {
      name: 'Stone Blood',
      pointCost: 1,
      description: 'You have ADV on Saves against Bleeding. Additionally, you can spend 1 AP to end the Bleeding Condition on yourself.'
    },
    {
      name: 'Minor Tremorsense',
      pointCost: 1,
      description: 'You have Tremorsense 3 Spaces.'
    },
    {
      name: 'Stubborn',
      pointCost: 2,
      description: 'You have ADV on Saves against being Taunted and against being forcibly moved.'
    },
    {
      name: 'Trade Expertise',
      pointCost: 1,
      description: 'Choose a Crafting or Services Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.'
    },
    {
      name: 'Earthen Knowledge',
      pointCost: 1,
      description: 'While within mountainous and subterranean environments, you have ADV on Survival Checks. Additionally, you have ADV on Knowledge Checks made to recall information about rocks, soil, crystals, and gems.'
    },
    {
      name: 'Charisma Attribute Decrease',
      pointCost: -1,
      description: 'You decrease your Charisma by 1 (to a minimum of -2).'
    },
    {
      name: 'Short-Legged',
      pointCost: -1,
      description: 'Your Speed decreases by 1 Space.'
    }
  ]
};
