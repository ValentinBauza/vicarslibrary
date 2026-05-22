import type { Ancestry } from './types';

export const gnome: Ancestry = {
  name: 'Gnome',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Small-Sized',
      pointCost: -1,
      description: 'Your Size is considered Small.'
    },
    {
      name: 'Escape Artist',
      pointCost: 2,
      description: 'You have ADV on Checks and Saves to avoid or escape being Grappled or Restrained.'
    },
    {
      name: 'Magnified Vision',
      pointCost: 1,
      description: 'You have ADV on Investigation Checks made on something you\'re holding or touching.'
    },
    {
      name: 'Mental Clarity',
      pointCost: 2,
      description: 'You have ADV on Saves against being Dazed or Stunned.'
    },
    {
      name: 'Strong-Minded',
      pointCost: 1,
      description: 'You gain Psychic Resistance (1).'
    },
    {
      name: 'Predict Weather',
      pointCost: 0,
      description: 'You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don\'t have DisADV on Checks or Saves as a result of naturally occurring weather.'
    }
  ],
  expandedTraits: [
    {
      name: 'Mana Increase',
      pointCost: 1,
      description: 'Your MP maximum increases by 1.'
    },
    {
      name: 'Trapper',
      pointCost: 1,
      description: 'You have ADV on Investigation Checks to spot Traps and on Trickery Checks to Hide Traps.'
    },
    {
      name: 'Lightning Insulation',
      pointCost: 2,
      description: 'You have Lightning Resistance (Half) and can\'t be struck by natural lightning.'
    },
    {
      name: 'Trade Expertise',
      pointCost: 1,
      description: 'Choose a Crafting or Subterfuge Trade. Your Mastery Cap and Mastery Level in the chosen Trade both increase by 1.'
    },
    {
      name: 'Storm Knowledge',
      pointCost: 1,
      description: 'While within rainy, snowy, or stormy environments, you have ADV on Survival Checks. Additionally, you have ADV on Knowledge Checks made to recall information about rain, snow, and storms.'
    },
    {
      name: 'Agility Attribute Decrease',
      pointCost: -1,
      description: 'You decrease your Agility by 1 (to a minimum of -2).'
    },
    {
      name: 'Short-Legged',
      pointCost: -1,
      description: 'Your Speed decreases by 1 Space.'
    }
  ]
};
