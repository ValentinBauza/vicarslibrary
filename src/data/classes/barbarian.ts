import type { CharacterClass } from './types';

export const barbarian: CharacterClass = {
  name: 'Barbarian',
  description: 'Barbarians charge into battle with reckless abandon, ignoring their own safety as they brush off damage and deal even more in return. They trade defense for more offense and let out blood-crazed battle cries. Their power comes from a surge of strength called Rage.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Rage',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to enter a Rage for 1 minute. While Raging:\n\n• You deal +1 d4 damage on Martial Attacks made using Unarmed Strikes or Melee Weapons.\n• You have ADV on Might Saves.\n• Your PD decreases by 5.\n• You gain Resistance (Half) to Elemental and Physical damage.\n\nEnding Early: Your Rage ends early if you fall Unconscious, die, or you choose to end it for free on your turn.'
    },
    {
      name: 'Berserker',
      level: 1,
      description: 'Your primal savagery grants you the following benefits:\n\n• Charge: When you make a Melee Martial Attack on your turn, you can move up to 2 Spaces immediately before making the Attack.\n• Berserker Defense: While you aren\'t wearing Armor, you gain +2 AD.\n• Fast Movement: You gain +1 Speed.\n• Mighty Leap: You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling.'
    },
    {
      name: 'Shatter Force',
      level: 1,
      description: 'When you Hit a structure or mundane object with a Melee Attack, it\'s considered a Critical Hit. This is a Flavor Feature.'
    },
    {
      name: 'Battlecry',
      level: 2,
      description: 'You can spend 1 AP and 1 SP to release a shout. Until the start of your next turn, you and creatures within 5 Spaces that can see or hear you are subjected to the effects of your shout. A creature can only benefit from the same type of shout once at a time.',
      options: [
        {
          name: 'Fortitude Shout',
          description: 'Each creature gains Resistance (1) against the source of Physical or Elemental damage.'
        },
        {
          name: 'Fury Shout',
          description: 'Each creature deals +1 damage on their next Attack against a target.'
        },
        {
          name: 'Urgent Shout',
          description: 'Each creature gains +1 Speed until the start of your next turn.'
        }
      ]
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Martial Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Barbarian Subclasses: Elemental Fury, Spirit Guardian, or Paragon.',
      options: [
        {
          name: 'Elemental Fury',
          description: 'You surround yourself with the elements (such as fire, lightning, water, etc.) to overwhelm your foes.'
        },
        {
          name: 'Spirit Guardian',
          description: 'You channel the power of your ancestors to protect and guide you.'
        },
        {
          name: 'Paragon',
          description: 'You embody the ultimate warrior, pushing your physical capabilities to their limits.'
        }
      ]
    },
    {
      name: 'Talent',
      level: 4,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 4,
      description: 'You gain the benefits of the Martial Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Barbarian',
      level: 5,
      description: 'You gain the following benefits for your Barbarian Class Features:\n\n• Rage: You can immediately enter a Rage for free as a Reaction upon rolling for Initiative.\n• Berserker: Charge now grants 3 Spaces of movement. The movement granted by your Charge ignores Difficult Terrain.\n• Battlecry: The range of Battlecry increases to 10 Spaces. When you use Battlecry you can spend additional SP to enhance the effect (Enhanced Fortitude Shout: They gain Resistance (Half) instead. Enhanced Fury Shout: The additional damage increases by 1. Enhanced Urgent Shout: The speed gained is increased by 2 per SP spent).'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Martial Path.'
    }
  ]
};
