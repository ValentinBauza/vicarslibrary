import type { CharacterClass } from './types';

export const spellblade: CharacterClass = {
  name: 'Spellblade',
  description: 'Spellblades combine their combat prowess with their ability to harness and channel magic into weapons. They can form a magical bond with a weapon to imbue it with magic, call it back to them, and more. They learn a wide range of disciplines depending on their unique schools of spellcasting and martial prowess.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Bound Weapon',
      level: 1,
      description: 'During a Quick Rest, you can magically bond with 1 Weapon and choose an Elemental or Mystical damage type to become your Bound Damage type. This bond lasts until you end it for free or use this feature again. Your Bound Weapon gains the following properties:\n\n• Smite: When you make a Martial Attack with the Weapon, you can spend 1 or more SP to deal +1 Bound Damage per SP spent. When you do, you also gain the benefits of 1 Martial Enhancement of your choice for free.\n• Somatic Weapon: You can use your Bound Weapon to perform the Somatic Components of a Spell.\n• Illuminate: You can cause the Weapon to emit a 5 Spaces of Bright Light (you choose the light\'s color and appearance). You can extinguish, produce, or adjust the level of this illumination at any time for free.\n• Recall: While the Weapon is within 20 Spaces and isn\'t being held or secured, you can call your Bound Weapon back to you for free, causing it to fly to you. If you don\'t have a free hand when you call it, or you choose not to grab it, it falls in your Space at your feet.\n\nEnding Early: Your bond with the Weapon ends early if you use this Feature again, or you choose to end it for free.'
    },
    {
      name: 'Spellblade Disciplines',
      level: 1,
      description: 'You learn 2 Spellblade Disciplines from the list below:',
      options: [
        {
          name: 'Magus',
          description: 'Your Maximum MP increases by 1. You learn 1 additional Spell.'
        },
        {
          name: 'Warrior',
          description: 'You gain Heavy Armor and Heavy Shield Training. You learn 1 Maneuver.'
        },
        {
          name: 'Acolyte',
          description: 'You can spend 1 AP and 1 MP to produce 1 of the following effects: Heal (gain a pool of HP which you can distribute to creatures of your choice within 5 Spaces), Curse (attempt to remove 1 Basic Poison or Basic Disease from a creature of your choice within 1 Space of you).'
        },
        {
          name: 'Hex Warrior',
          description: 'You can spend 1 AP and 1 MP to Curse a creature within 10 Spaces for 1 minute. While Cursed in this way, the target can\'t regain HP, becomes Dazed or Impaired (your choice), and takes 1 Umbral damage at the start of each of their turns.'
        },
        {
          name: 'Spell Breaker',
          description: 'You can initiate a Spell Duel as the Challenger without spending MP using a Weapon you\'re wielding, provided the Caster or a target is within your Weapon\'s range or you\'re in a Space between them. You can also spend 1 or more SP to gain a +1 bonus on your Check per SP spent (you can still spend MP as normal to gain +2 on your Check per MP spent per MP spent).'
        }
      ]
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. Choose 2 Spell Schools. When you learn a new Spell, you can choose any Spell from the chosen Spell Schools and you can have Weapon or Ward Spell Tags. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Spellstrike',
      level: 2,
      description: 'Once on each of your turns when you make a Martial Attack, you can also cast a Spell as part of the same Action, spending 1 AP less than normal.\n\nConverged Action: When you do, the Spell can only target 1 creature who must be a target of the Attack, and the range of the Attack can\'t exceed the range of the Spell. If the Spell requires a Check, it uses your Attack Check instead of a Spell Check. Any Saves the Spell forces the target to make are made against your Save DC.\n\nHarmonic Strike: The Martial Attack and Spell from a Spellstrike are treated as 1 Attack, and can benefit from Martial Enhancements and Spell Enhancements. The Spell doesn\'t require Somatic Components.'
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
      description: 'Choose one of the following Spellblade Subclasses: Paladin, Rune Knight, or Paragon.',
      options: [
        {
          name: 'Paladin',
          description: 'You swear oaths and channel divine power through your weapon.'
        },
        {
          name: 'Rune Knight',
          description: 'You inscribe magical runes on your weapon to unlock elemental powers.'
        },
        {
          name: 'Paragon',
          description: 'You perfect the balance between martial skill and magical prowess.'
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
      name: 'Expert Spellblade',
      level: 5,
      description: 'You gain the following benefits for your Spellblade Class Features:\n\n• Bound Weapon: Your Bound Damage now ignores Resistance to its damage type.\n\n• Spellblade Discipline: You gain 1 Additional Spellblade Discipline. The following Disciplines are changed in the following ways:\n  - Acolyte: You can spend additional MP to increase the healing by 2 for each additional MP spent.\n  - Hex Warrior: You can spend additional MP to increase the damage by 1 for each additional MP spent.\n  - Spell Warder: When you gain the Resistance from Spell Warder, you can spend 1 MP to gain Resistance (Half) to the damage type instead.\n\n• Spellstrike: The Spell you cast as part of Spellstrike can target multiple creatures or an Area, provided at least one of the Spell targets is also a target of the Martial Attack.'
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
