import type { CharacterClass } from './types';

export const bard: CharacterClass = {
  name: 'Bard',
  description: 'Bards utilize artistic expression through various forms to connect with the emotions and heart of magic. They are remarkably flexible and adaptable spellcasters, capable of tapping into a wide array of magical abilities with the appropriate artistic expression.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Font of Inspiration',
      level: 1,
      description: 'You are an ever-present source of aid for your allies. You gain the following benefits:\n\n• Ranged Help Attack: The range of your Help Action when aiding an Attack increases to 10 Spaces.\n• Help Reaction: When a creature you can see makes a Check, you can take the Help Action to aid them with their Check, provided you\'re within range to do so.'
    },
    {
      name: 'Remarkable Repertoire',
      level: 1,
      description: 'You\'ve picked up a few tricks along your travels, granting you the following benefits:\n\n• Jack of All Trades: You gain 2 Skill Points.\n• Magical Secrets: You learn any 2 Spells of your choice from any Spell List.\n• Magical Expression: You learn to express your art in a unique manner, granting you the ability to alter how you cast Spells. Choose the manner of your expression: Visual or Auditory.\n  - Visual: Through acrobatics, dancing, juggling, painting, drawing, or miming, you can ignore the Verbal Components of a Spell you cast, but you must provide a Somatic Component instead.\n  - Auditory: Through singing, playing music, poetry, comedy, or storytelling, you can ignore the Somatic Components of a Spell you cast, but you must provide a Verbal Component instead.'
    },
    {
      name: 'Crowd Pleaser',
      level: 1,
      description: 'When you spend at least 5 minutes performing an Artistry Trade for one or more people who are actively watching or listening to your performance, you can make an Artistry Trade Check Contested by the targets\' Charisma Save. Success: You gain ADV on Charisma Checks against the target for 1 hour or until you become hostile. Creatures have ADV on the Save if they\'re considered hostile toward you. This is a Flavor Feature.'
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. When you learn a new Spell, you can choose any Spell from the Enchantment Spell School or with the following Spell Tags: Embolden, Enfeeble, Healing, Illusion, or Sound. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Bardic Performance',
      level: 2,
      description: 'You can spend 1 AP and 1 MP to start a performance that grants you a 10 Space Aura for 1 minute. Choose 1 of the performances below. While creatures of your choice are within your Aura (and can see or hear you) they benefit from your performance. A creature can only benefit from one instance of each performance at a time.',
      options: [
        {
          name: 'Battle Ballad',
          description: 'The chosen creatures gain a d4 bonus to the first Martial Attack Check they make on each of their turns.'
        },
        {
          name: 'Fast Tempo',
          description: 'The chosen creatures gain +1 Speed.'
        },
        {
          name: 'Inspiring',
          description: 'The chosen creatures gain 1 Temp HP at the start of each of their turns.'
        },
        {
          name: 'Emotional',
          description: 'Choose 1 of the following Conditions: Charmed, Frightened, Intimidated, or Taunted. The chosen creatures have Resistance against the chosen Condition. If a target is effected by the chosen Condition at the start of its turn, it can immediately attempt to end the Condition on itself by Repeating its Save.'
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
      description: 'You gain the benefits of the Spellcaster Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Bard Subclasses: Eloquence, Jester, or Paragon.',
      options: [
        {
          name: 'Eloquence',
          description: 'You master the art of persuasion and charm through your words.'
        },
        {
          name: 'Jester',
          description: 'You use humor and mockery to distract and confound your enemies.'
        },
        {
          name: 'Paragon',
          description: 'You inspire others to greatness through your exemplary performances.'
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
      name: 'Expert Bard',
      level: 5,
      description: 'You gain the following benefits for your Bard Class Features:\n\n• Font of Inspiration: Your Help Die now starts at a d10.\n• Remarkable Repertoire: You gain 2 Skill Points and learn any 2 Spells of your choice from any Spell List.\n• Bardic Performance: You can change your performance at the start of each of your turns for free. When you start your Bardic Performance you can spend an additional 2 MP to improve the performances in the following ways:\n  - Battle Ballad: The size of the die increases to a d8.\n  - Fast Tempo: The Speed increases by 2.\n  - Inspiring: The Temp HP increases by 1.\n  - Emotional: The chosen creatures have Resistance against all of the listed Conditions.'
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
