import type { CharacterClass } from './types';

export const warlock: CharacterClass = {
  name: 'Warlock',
  description: 'Warlocks make a pact with a powerful entity that grants them magic. Their body and soul are a part of this contract and as such, they can tap into their own life force to enhance and amplify their magic and capabilities as well as their patron\'s. They also choose a type of pact they make that grants more powers.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Warlock Contract',
      level: 1,
      description: 'You have a binding agreement with your patron that allows you to make sacrifices in exchange for boons.\n\n• Hasty Bargain: Once per turn when you make a Check, you can spend 1 HP to gain ADV on the Check.\n\n• Desperate Bargain: Once per Combat, you can spend 1 AP to regain an amount of HP equal to your Prime Modifier. When you do, you become Exposed until the end of your next turn.'
    },
    {
      name: 'Pact Boon',
      level: 1,
      description: 'You gain a Pact Boon from your Patron. Choose 1 of the following options: Weapon, Armor, Spell, or Familiar.'
    },
    {
      name: 'Pact Weapon',
      level: 1,
      description: 'You can choose a Weapon in your possession and bond with it, making it your Pact Weapon. You can only have 1 Pact Weapon at a time. If the Weapon has the Ammo property, it manifests its own Ammo when you load it. You gain the following benefits while wielding the Weapon:\n\n• Weapon Training: You\'re considered to have Combat Training with your Pact Weapon.\n• Maneuvers: You learn 2 Attack Maneuvers of your choice.\n• Spell Focus: Your Pact Weapon also counts as a Spell Focus with a 1 point Focus Property. If the Weapon has the Two-Handed Weapon Property, it instead has two 1 point Focus Properties (your choice). You can change the chosen Focus Properties when you complete a Quick Rest.\n\nPocket Dimension: Using a Minor Action, you can dismiss the Weapon into a pocket dimension, summon it from that pocket dimension, or summon it from anywhere on the same plane of existence. If you don\'t have a free hand when you summon it, or you choose not to grab it, it appears in your Space at your feet.\n\nNew Pact Weapon: Over the course of a Quick Rest, you can touch a Weapon in your possession, bond with it, and make it your new Pact Weapon, ending your bond with your previous Pact Weapon.'
    },
    {
      name: 'Pact Armor',
      level: 1,
      description: 'You can choose an Armor in your possession and bond with it, making it your Pact Armor. You can only have 1 Pact Armor at a time. You gain the following benefits while wearing the Armor:\n\n• Armor Training: You\'re considered to have Training with your Pact Armor.\n• Maneuvers: You learn 2 Defense Maneuvers of your choice.\n• Mystical Armor: You gain +1 AD and MDR.\n\nPocket Dimension: Using a Minor Action, you can dismiss the Armor into a pocket dimension, summon it from that pocket dimension, or summon it from anywhere on the same plane of existence. If you aren\'t able to wear the Armor when you summon it, or you choose not to wear it, it appears in your Space at your feet.\n\nNew Pact Armor: Over the course of a Quick Rest, you can touch an Armor in your possession, bond with it, and make it your new Pact Armor, ending your bond with your previous Pact Armor.'
    },
    {
      name: 'Pact Spell',
      level: 1,
      description: 'Choose a Spell you know. The chosen Spell becomes your Pact Spell. When you cast your Pact Spell, you gain the following benefits:\n\n• Death\'s Toll: If the Spell deals damage, it deals an extra +1 damage to Bloodied targets.\n• Range Increase: If the Spell\'s range is 1, it increases by 1 Space, otherwise it increases by 5 Spaces.\n• Patron\'s Favor: Once per Round, you can grant yourself ADV on any Check you make to cast your Pact Spell.\n\nChoosing a New Pact Spell: When you complete a Long Rest, you can choose a different Spell you know. When you do, the new Spell becomes your new Pact Spell. You can only have 1 Pact Spell at a time.'
    },
    {
      name: 'Pact Familiar',
      level: 1,
      description: 'You learn the Call Familiar Spell. When you cast the Spell, your Familiar gains 3 additional Familiar Traits of your choice for free (you can\'t choose Negative Traits). This is a Flavor Feature.'
    },
    {
      name: 'Beseech Patron',
      level: 1,
      description: 'During a Long Rest, while sleeping or meditating, you can access an Inner Sanctum within your mind. Its appearance is influenced by your psyche and is unique to each Warlock. While inside your Inner Sanctum, you can attempt to contact your Patron.\n\nIf they choose to respond, they enter your mind and you might possibly be able to see or hear them. While connected to your Patron in this way, you\'re aware of your surroundings, but you can\'t take actions. Your Patron chooses when to end the connection, or you can make a Mental Save against your own Save DC to force the connection to end.\n\nYour Inner Sanctum can look different depending on your Patron. It could be in a foggy blackness, a blinding bright light, a flaming or emitting a blinding light. Your Patron has full control over your dream state and can shape the environment, spawn landscapes, objects, creatures, and more. This is a Flavor Feature.'
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. Choose 3 Spell Schools. When you learn a new Spell, you can choose any Spell from the chosen Spell Schools. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Life Tap',
      level: 2,
      description: 'When you produce an MP Effect, you can spend HP in place of MP. The total amount of HP and MP you can exceed your Mana Spend Limit. You can use this Feature once per Long Rest, and regain the ability to use it again when you roll for Initiative.'
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
      description: 'Choose one of the following Warlock Subclasses: Eldritch, Fey, or Paragon.',
      options: [
        {
          name: 'Eldritch',
          description: 'Your patron grants you otherworldly powers from beyond mortal understanding.'
        },
        {
          name: 'Fey',
          description: 'Your patron bestows upon you the whimsical and deceptive magic of the Fey.'
        },
        {
          name: 'Paragon',
          description: 'You master the full potential of your pact and patron\'s gifts.'
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
      name: 'Expert Warlock',
      level: 5,
      description: 'You gain the following benefits for your Warlock Class Features:\n\n• Warlock Contract: Your maximum HP increases by 2.\n\n• Pact Boon:\n  - Pact Weapon: Your Pact Weapon gains an additional 1 point Weapon Property. You can change the chosen Weapon Property when you complete a Quick Rest. You learn 1 Attack Maneuver. You can spend MP on Martial Enhancements and Maneuver performed with your Pact Weapon. When you do, you gain 2 SP worth of Enhancements per MP spent.\n  - Pact Armor: Your Pact Armor gains an additional 1 point Armor Property. You can change the chosen Armor Property when you complete a Quick Rest. You learn 1 Defense Maneuver. You can spend MP on Defense Maneuvers. When you do, you gain 2 SP worth of Enhancements per MP spent.\n  - Pact Spell: You learn 2 Spells of your choice from any Spell Source. Choose a Spell you know to also become your Pact Spell, granting the benefits of your Pact Spell to both. You can change either or both of your Pact Spells when you complete a Long Rest.\n  - Pact Familiar: When you cast the Call Familiar Spell, your Familiar gains an additional 3 points worth of Familiar or Beast Traits (you can\'t choose Negative Traits) for free.\n\n• Life Tap: When you use Life Tap, you gain ADV on the Check made to produce the effect.'
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
