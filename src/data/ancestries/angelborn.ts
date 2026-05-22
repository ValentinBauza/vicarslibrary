import type { Ancestry } from './types';

export const angelborn: Ancestry = {
  name: 'Angelborn',
  source: 'DC20 RPG 0.10.5 Beta v1',
  specialRules: 'Fallen Angelborn: If you choose to play an Angelborn and go down a darker path, you can choose to be a Fallen Angelborn. This can happen at character creation from evil acts done from your backstory, or this can happen mid-campaign after a large change in your character.\n\nYou gain the following Ancestry Trait:\n• (0) Fallen: You can now spend your Ancestry Points on Fiendborn Traits.',
  defaultTraits: [
    {
      name: 'Radiant Resistance',
      pointCost: 1,
      description: 'You have Resistance (Half) to Radiant damage.'
    },
    {
      name: 'Celestial Magic',
      pointCost: 2,
      description: 'You learn 1 Spell of your choice from the Divine Spell List. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spell\'s total MP cost (before all reductions) still can\'t exceed your Mana Spend Limit.'
    },
    {
      name: 'Healing Touch',
      pointCost: 2,
      description: 'Once per Combat, you can spend 1 AP to touch a creature and Heal it. Make a DC 10 Spell Check. Success: You can restore up to 2 HP to the target. Success (each 5): +1 HP. Failure: You only restore 1 HP.'
    },
    {
      name: 'Divine Glow',
      pointCost: 0,
      description: 'Your body can emit a Bright Light in a 5 Space radius around you at will.'
    }
  ],
  expandedTraits: [
    {
      name: 'Mana Increase',
      pointCost: 1,
      description: 'Your MP maximum increases by 1.'
    },
    {
      name: 'Celestial Clarity',
      pointCost: 1,
      description: 'You have ADV on Saves against being Blinded or Deafened.'
    },
    {
      name: 'Angelic Insight',
      pointCost: 1,
      description: 'Once per Long Rest you can grant yourself ADV on an Insight Check to see if someone is lying.'
    },
    {
      name: 'Gift of the Angels',
      pointCost: 2,
      description: 'Once per Combat you can spend 1 AP and 1 MP and touch a creature to heal them over time. The creature recovers 1 HP at the start of each of their turns for 1 minute (5 Rounds).'
    },
    {
      name: 'Blinding Light',
      pointCost: 1,
      description: 'Once per Combat, you can spend 1 AP to choose a creature within 5 Spaces and make a Spell Check contested by its Physical Save. Success: The target is Blinded until the end of your next turn.'
    },
    {
      name: 'Glide Speed',
      pointCost: 2,
      description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren\'t Incapacitated, you gain the following benefits while in the air:\n\n• Controlled Falling: You suffer no damage from Controlled Falling.\n• Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces.\n• Glide Speed: You can use your movement to glide horizontally.'
    },
    {
      name: 'Pacifist',
      pointCost: -1,
      description: 'Your divine call is to put others before yourself and resist doing harm. You suffer a -1 penalty to all Checks and Saves made during the first round of Combat.'
    },
    {
      name: 'Umbral Weakness',
      pointCost: -1,
      description: 'You have Umbral Vulnerability (1).'
    }
  ]
};
