import type { CharacterClass } from './types';

export const wizard: CharacterClass = {
  name: 'Wizard',
  description: 'Wizards learn to master each of the Spell Schools to control them in a structured and efficient way. They utilize sigils on the ground to enhance certain types of magic while they push spells to their limits.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Spell School Initiate',
      level: 1,
      description: 'You completed training in a specialized School of Magic. Choose a Spell School. You gain the following benefits:\n\n• School Magic: You learn 2 Arcane Spells from this Spell School.\n\n• Signature School: When you cast a Spell from the chosen School, you can reduce its MP cost by 1. Its total MP cost before the reduction can\'t exceed your Mana Spend Limit. You can use this Feature once per Long Rest, but regain the ability to use it when you roll for Initiative.'
    },
    {
      name: 'Arcane Sigil',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to choose a Spell School or Spell Tag and create a 1 Space diameter Circle on a surface within a Space you\'re occupying. The Circle is your Arcane Sigil which lasts for 1 minute. You can\'t place more than 1 Arcane Sigil in the same Space.\n\n• Using a Sigil: While within the area of your Arcane Sigil, creatures gain ADV on Checks they make to cast or produce the effects of Spells with the chosen Spell School or Spell Tag.\n\n• Moving a Sigil: You can spend 1 AP to teleport one of your Arcane Sigils that\'s within 10 Spaces to a surface within a Space you\'re occupying, provided the Space doesn\'t already have an Arcane Sigil.\n\nDC Tip: A magical sigil like this radiates the magic of the chosen Spell School making its type of magic easier to detect magic.'
    },
    {
      name: 'Ritual Caster',
      level: 1,
      description: 'You learn 1 Ritual. Additionally, when you encounter a Ritual in a form you can study (such as a ritual book, a scroll, or from an instructor), you can learn it over the course of a Short Rest. This is a Flavor Feature.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. When you learn a new Spell, you can choose any Spell from the Arcane Spell Source. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Prepared Spell',
      level: 2,
      description: 'When you complete a Long Rest, choose 1 Spell you know. The chosen Spell becomes your Prepared Spell until your next Long Rest. Your Prepared Spell gains the following benefits:\n\n• Mana Limit Break: When you cast your Prepared Spell, you can increase your Mana Spend Limit by 1 for the casting. You can use this Feature once per Long Rest, but regain the ability to use it when you roll for Initiative.\n\n• Rehearsed Casting: When creatures Challenge your Spell as part of a Spell Duel, they have DisADV on Checks made to stop your Spell.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Wizard Subclasses: Portal Mage, Witch, or Paragon.',
      options: [
        {
          name: 'Portal Mage',
          description: 'You specialize in teleportation magic and creating portals across space.'
        },
        {
          name: 'Witch',
          description: 'You master curses, hexes, and dark magic drawn from mystical sources.'
        },
        {
          name: 'Paragon',
          description: 'You exemplify the pinnacle of wizardly mastery across all schools of magic.'
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
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Wizard',
      level: 5,
      description: 'You gain the following benefits for your Wizard Class Features:\n\n• Spell School Initiate: You learn 1 additional Arcane Spell from the chosen School.\n\n• Signature School: When you cast a Spell from the chosen School, you can reduce its MP cost by an additional 1.\n\n• Arcane Sigil: When you create a Sigil, you can add the following benefits:\n  - Spell Tag: (X MP) The Sigil gains an additional Spell School or Spell Tag per MP spent.\n  - Area: (X MP) The diameter of the Sigil increases by 1 Space per MP spent.\n\n• Prepared Spell: When you complete a Long Rest, choose 1 additional Spell you know. Both Spells become your Prepared Spells until your next Long Rest.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    }
  ]
};
