import type { Ancestry } from './types';

export const giantborn: Ancestry = {
  name: 'Giantborn',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Tough',
      pointCost: 1,
      description: 'Your HP maximum increases by 1.'
    },
    {
      name: 'Powerful Build',
      pointCost: 2,
      description: 'You increase by 1 Size, but you occupy the Space of a creature 1 Size smaller.'
    },
    {
      name: 'Unstoppable',
      pointCost: 1,
      description: 'You have ADV on Saves against being Slowed or Stunned.'
    },
    {
      name: 'Giant\'s Resolve',
      pointCost: 1,
      description: 'While on Death\'s Door, you reduce all damage taken by 1.'
    },
    {
      name: 'Unyielding Movement',
      pointCost: 0,
      description: 'You\'re immune to being Slowed 2 (or higher).'
    }
  ],
  expandedTraits: [
    {
      name: 'Giant\'s Fortitude',
      pointCost: 2,
      description: '(requires Giant\'s Resolve) You also gain the benefits of your Giant\'s Resolve Trait while Well-Bloodied.'
    },
    {
      name: 'Strong Body',
      pointCost: 2,
      description: 'Once per Combat when you take damage from an Attack, you can reduce the damage taken by an amount equal to your Might or Agility (your choice).'
    },
    {
      name: 'Mighty Hurl',
      pointCost: 1,
      description: 'You throw creatures 1 Space farther than normal, and objects (including Weapons) 5 Spaces farther than normal.'
    },
    {
      name: 'Titanic Toss',
      pointCost: 1,
      description: 'You have ADV on Checks made to throw creatures. Additionally, you don\'t have DisADV as a result of making an Attack with a Weapon with the Toss or Thrown Property at Long Range.'
    },
    {
      name: 'Mighty Leap',
      pointCost: 1,
      description: 'You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.'
    },
    {
      name: 'Brute',
      pointCost: 1,
      description: 'Once per Combat, you can take the Shove or Grapple Action as a Minor Action.'
    },
    {
      name: 'Heavy Riser',
      pointCost: -1,
      description: 'You have to spend 4 Spaces of movement to stand up from Prone.'
    },
    {
      name: 'Clumsiness',
      pointCost: -1,
      description: 'You have DisADV on Agility Checks.'
    },
    {
      name: 'Intelligence Attribute Decrease',
      pointCost: -1,
      description: 'You decrease your Intelligence by 1 (to a minimum of -2).'
    }
  ]
};
