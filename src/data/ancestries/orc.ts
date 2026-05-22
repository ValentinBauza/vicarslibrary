import type { Ancestry } from './types';

export const orc: Ancestry = {
  name: 'Orc',
  source: 'DC20 RPG 0.10.5 Beta v1',
  defaultTraits: [
    {
      name: 'Cursed Mind',
      pointCost: -1,
      description: 'You gain Psychic Vulnerability (1).'
    },
    {
      name: 'Orc Rush',
      pointCost: 2,
      description: 'Once per Combat when you willingly move toward an enemy, you can spend 1 AP to gain Temp HP equal to your Prime Modifier.'
    },
    {
      name: 'Brutal Strikes',
      pointCost: 2,
      description: 'You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike.'
    },
    {
      name: 'Tough',
      pointCost: 1,
      description: 'Your HP maximum increases by 1.'
    },
    {
      name: 'Orcish Resolve',
      pointCost: 1,
      description: 'You gain 1 additional AP while on Death\'s Door.'
    },
    {
      name: 'Already Cursed',
      pointCost: 0,
      description: 'You have ADV on Saves against Curses.'
    }
  ],
  expandedTraits: [
    {
      name: 'Intimidating Shout',
      pointCost: 2,
      description: 'Once per Combat, you can spend 1 AP to let out an Intimidating Shout. All creatures within 5 Spaces that can hear you must make a Charisma Save contested by your Check. Failure: A target is Hindered on the next Attack Check or Spell Attack it makes before the start of your next turn.'
    },
    {
      name: 'Ore Once',
      pointCost: 1,
      description: 'Once per Combat, you can use your Minor Action to move, as long as that movement is towards an enemy.'
    },
    {
      name: 'Finishing Blow',
      pointCost: 1,
      description: 'You deal +1 damage to creatures who are Well-Bloodied.'
    },
    {
      name: 'Imposing Presence',
      pointCost: 1,
      description: 'Once per Combat when a creature makes an Attack against you, you can force them to make a Charisma Save. Save Failure: They must choose a new target for the Attack. If there are no other targets, then the Attack is wasted.'
    },
    {
      name: 'Provocation',
      pointCost: -1,
      description: 'You have DisADV on Checks and Saves against being Taunted.'
    },
    {
      name: 'Reckless',
      pointCost: -1,
      description: 'Your PD decreases by 1.'
    }
  ]
};
