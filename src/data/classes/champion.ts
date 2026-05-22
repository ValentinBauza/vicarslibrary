import type { CharacterClass } from './types';

export const champion: CharacterClass = {
  name: 'Champion',
  description: 'Champions are weapon and armor specialists that push themselves to the limit in combat. They are able to master a wide variety of weapon types and learn their enemies as they fight them.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Master-at-Arms',
      level: 1,
      description: 'Your training in warfare has granted you the following benefits:\n\n• Weapon Master: At the start of each of your turns, you can freely swap any Weapon you\'re currently wielding in each hand for any other Weapon without provoking Opportunity Attacks.\n• Maneuver Master: You learn 1 Maneuver of your choice. Once per Round when you perform a Maneuver, you can reduce its SP cost by 1.'
    },
    {
      name: 'Fighting Spirit',
      level: 1,
      description: 'You stand ready for Combat at any moment, granting you the following benefits:\n\n• Combat Readiness: At the start of your first turn in Combat, you gain one of the following benefits:\n  - Fortify: You gain the benefits of the Dodge Action and ADV on the next Save you make until the end of Combat.\n  - Advance: You gain the benefits of the Move Action and ADV on the next Martial Attack or Physical Check you make until the end of Combat.\n\n• Second Wind: Once per Combat when you start your turn Bloodied, you can regain 2 HP and 2 SP.'
    },
    {
      name: 'Know Your Enemy',
      level: 1,
      description: 'You can spend 1 minute observing or interacting with a creature out of Combat (or spend 1 AP in Combat) to learn information about its physical capabilities compared to your own. Choose one of the following stats to assess: Might, Agility, PD, AD, and HP. Make a DC 10 Knowledge or Insight Check (your choice). Success: You learn if the chosen stat is higher, lower, or the same as yours. This is a Flavor Feature.'
    },
    {
      name: 'Adaptive Tactics',
      level: 2,
      description: 'When you roll for Initiative, and at the end of each of your turns, you gain a d8 Tactical Die if you don\'t already have one. You can spend a Tactical Die to gain one of the following Tactics:\n\n• Assault: When you make a Martial Attack, you can add the die to the Attack\'s result.\n• Deflect: When you are Attacked, you can subtract the die from the Attack\'s result.'
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
      description: 'Choose one of the following Champion Subclasses: Hero, Sentinel, or Paragon.',
      options: [
        {
          name: 'Hero',
          description: 'You embody the warrior spirit, refusing to yield in battle.'
        },
        {
          name: 'Sentinel',
          description: 'You are a stalwart protector, defending your allies with unwavering resolve.'
        },
        {
          name: 'Paragon',
          description: 'You represent the pinnacle of martial excellence and tactical mastery.'
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
      name: 'Expert Champion',
      level: 5,
      description: 'You gain the following benefits for your Champion Class Features:\n\n• Master-at-Arms: You learn 2 additional Maneuvers of your choice.\n• Fighting Spirit: When you gain the benefits of Second Wind, you regain an additional 2 HP and 2 SP.\n• Adaptive Tactics: Your Tactical Die is now a d10.'
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
