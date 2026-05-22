import type { CharacterClass } from './types';

export const sorcerer: CharacterClass = {
  name: 'Sorcerer',
  description: 'Sorcerers tap into the raw magic in their own bodies as a conduit to harness, manipulate, and sculpt magic with wild resolve. They can overload themselves and even cast Spells without Mana, pushing the limits of magic and their own bodies.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Innate Power',
      level: 1,
      description: 'Choose a Sorcerous Origin that grants you a benefit: Intuitive Magic, Resilient Magic, or Unstable Magic. Additionally, you gain the following benefits:\n\n• Your Maximum MP increases by 1.\n• You gain the benefit of a 1 point Focus Property of your choice. You can change the Property when you complete a Long Rest.'
    },
    {
      name: 'Sorcerous Origins',
      level: 1,
      description: 'Choose your source of power:',
      options: [
        {
          name: 'Intuitive Magic',
          description: 'You learn 2 Spells of your choice from your Spell List.'
        },
        {
          name: 'Resilient Magic',
          description: 'You gain Dazed Resistance.'
        },
        {
          name: 'Unstable Magic',
          description: 'When you Critically Succeed or Fail on a Spell Attack or Spell Check, roll on the Wild Magic Table. If it\'s a Critical Success you roll with ADV, if it\'s a Critical Failure you roll with DisADV. The effect lasts until the end of your next turn, unless stated otherwise. When you roll on the Wild Magic Table in this way, you gain ADV on the next Spell Attack or Spell Check you make before the end of your next turn.'
        }
      ]
    },
    {
      name: 'Overload Magic',
      level: 1,
      description: 'You can spend 1 AP + 1 MP in Combat to channel raw magical energy for 1 minute, or until you become Incapacitated, die, or choose to end it early at any time for free. For the duration, your magic is overloaded and you\'re subjected to the following effects:\n\n• You gain +5 to all Spell Attacks and Spell Checks you make.\n• You must immediately make an Attribute Save (your choice) against your Save DC upon using this Feature, and again at the start of each of your turns. Failure: You gain Exhaustion. You lose any Exhaustion gained in this way when you complete a Short Rest.'
    },
    {
      name: 'Sorcery',
      level: 1,
      description: 'You learn the Sorcery Spell. This is a Flavor Feature.'
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. You choose 1 Spell Source (Arcane, Divine, or Primal). When you learn a new Spell, you can choose any Spell from the chosen Spell Source. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Meta Magic',
      level: 2,
      description: 'You gain 2 unique Spell Enhancements from the list below. You can only use 1 of these Spell Enhancements per Spell you cast. MP spent on these Spell Enhancements don\'t count against your Mana Spend Limit.\n\n• Careful Spell: (1 MP) When you Cast a Spell that targets an area (such as a Line, Cone, or Sphere), you can choose to exclude creatures of your choice from the Spell\'s damage and effects.\n• Distant Spell: (1 MP) When you cast a Spell, you can increase its range by 2 Spaces if it has a range of 1 Space or by 10 Spaces if its range is greater than 1 Space.\n• Quickened Spell: (1 MP) You can reduce a Spell by 1 (minimum of 1 AP).\n• Subtle Spell: (1 MP) You can cast the Spell without requiring any Somatic and Verbal Components.\n• Transmuted Spell: (1 MP) When you cast a Spell that deals damage, you can change its damage type to one of your choice (except True damage).\n• Vicious Spell: (1 MP) When you cast a Spell that forces a creature to make a Save to resist its effects, 1 target of your choice has DisADV on its first Save against the Spell.\n\nOnce per Long Rest, you can use 1 of these unique Spell Enhancements without spending MP. You regain the ability to do so again when you roll for Initiative.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Spellcaster Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Sorcerer Subclasses: Angelic, Draconic, or Paragon.',
      options: [
        {
          name: 'Angelic',
          description: 'You channel celestial power, bringing light and healing to your allies.'
        },
        {
          name: 'Draconic',
          description: 'You harness the raw elemental power of dragons in your bloodline.'
        },
        {
          name: 'Paragon',
          description: 'You master the full potential of sorcerous magic and wild power.'
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
      description: 'You gain the benefits of the Spellcaster Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Sorcerer',
      level: 5,
      description: 'You gain the following benefits for your Sorcerer Class Features:\n\n• Innate Power: Your Maximum MP increases by 1. You gain the benefit of an additional 1 point Focus Property of your choice. You can change either or both Properties whenever you finish a Long Rest.\n\n• Overload Magic: You no longer need to make an Attribute Save upon using Overload, but you still need to make a Save at the start of each of your turns while Overloaded.\n\n• Meta Magic: You learn 1 additional Meta Magic option of your choice. You can now use 2 Meta Magic Spell Enhancements at a time, provided you don\'t use the same option more than once.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Spellcaster Path.'
    }
  ]
};
