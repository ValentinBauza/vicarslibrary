import type { Talent } from './types';

export const classTalents: Talent[] = [
  // Barbarian
  {
    name: 'Unfathomable Strength',
    category: 'Class',
    className: 'Barbarian',
    requirement: 'Rage, Level 3',
    description: 'Your incredible strength allows you to wield massive weapons with ease and leap great distances.',
    benefits: [
      'Titan Grip: While Raging, you can wield Two-Handed Weapons using only one hand.',
      'Titanic Leap: Your Jump Distance increases by 1.'
    ]
  },

  // Bard
  {
    name: 'Expanded Repertoire',
    category: 'Class',
    className: 'Bard',
    requirement: 'Remarkable Repertoire, Level 3',
    canOnlyGainOnce: true,
    description: 'You can only gain this Talent once.',
    benefits: [
      'You gain 2 Skill Point.',
      'You learn 2 Spells of your choice from any Spell List.',
      'You gain another manner of Magical Expression, allowing you to choose to gain the benefits of either the Auditory or Visual manner each time you cast a Spell.'
    ]
  },
  {
    name: 'Helping Hands',
    category: 'Class',
    className: 'Bard',
    requirement: 'Font of Inspiration, Level 3',
    description: 'Once per Round, when you take the Help Action, you can grant a bonus d8 Help Die to a different creature within range (including yourself) that they can apply to the same type of Check.',
    benefits: []
  },

  // Champion
  {
    name: "Champion's Resolve",
    category: 'Class',
    className: 'Champion',
    requirement: 'Adaptive Tactics, Level 3',
    description: 'When you use a Tactical Die, you gain the following benefit:',
    benefits: [
      'Assault: The Attack deals +1 damage.',
      'Deflect: If the Attack Misses, the Attacker takes 1 damage of a Physical damage type of your choice.'
    ]
  },
  {
    name: 'Disciplined Combatant',
    category: 'Class',
    className: 'Champion',
    requirement: 'Fighting Spirit, Level 3',
    description: 'Once on each of your turns, you can spend 2 SP to gain the benefit of Combat Readiness. Additionally, you can use Second Wind without being Bloodied.',
    benefits: []
  },

  // Cleric
  {
    name: 'Expanded Order',
    category: 'Class',
    className: 'Cleric',
    requirement: 'Cleric Order',
    description: "You gain 2 additional Divine Domains. You can't choose the same option more than once.",
    benefits: []
  },
  {
    name: 'Bountiful Blessings',
    category: 'Class',
    className: 'Cleric',
    requirement: 'Divine Blessing, Level 3',
    description: "When Combat starts, you immediately gain a Blessing of your choice for free. Additionally, you can have 2 Blessings at the same time, but you can't apply both to the same creature at once.",
    benefits: []
  },
  {
    name: 'Divine Cleanse',
    category: 'Class',
    className: 'Cleric',
    requirement: 'Channel Divinity, Level 3',
    description: 'You gain the following benefits:',
    benefits: [
      "Saving Grace: When a creature you can see within 10 Spaces fails a Save, you can spend 1 AP as Reaction to make a Spell Check against the effect's Save DC or the opposing creature's Check. Success: The creature Succeeds their Save instead.",
      'Cleansing Intervention: When a creature benefits from your Lesser Divine Intervention, they\'re cured of 1 of the following afflictions of their choice: Curse, Disease, Poison, Blinded, or Deafened. The Spell Check you made must be higher than the DC of the effect (if there is one) to cure the ailment.'
    ]
  },

  // Commander
  {
    name: 'Seize Momentum',
    category: 'Class',
    className: 'Commander',
    requirement: "Commander's Call, Commanding Aura, Level 3",
    description: "When an ally within your Commanding Aura scores a Heavy Hit, you can use your Commander's Call as a Reaction.",
    benefits: []
  },
  {
    name: 'Coordinated Command',
    category: 'Class',
    className: 'Commander',
    requirement: "Commander's Call, Level 3",
    description: "Once per Round, when you use your Commander's Call, you can spend 1 additional SP to target a second creature within range (including yourself), if they also gain the benefits of the chosen command. You choose who acts first between the targeted creatures.",
    benefits: []
  },

  // Druid
  {
    name: 'Wild Form Expansion',
    category: 'Class',
    className: 'Druid',
    requirement: 'Wild Form, Level 3',
    description: 'You gain the following benefits:',
    benefits: [
      'At the start of each of your turns, you can transform into your True Form or a Wild Form you have access to without spending AP.',
      'When you use Wild Form, you get 2 additional Trait Points to spend. You can use this Feature once per Long Rest, and regain the ability to use it again when you roll for Initiative.'
    ]
  },
  {
    name: "Nature's Vortex",
    category: 'Class',
    className: 'Druid',
    requirement: "Nature's Torrent, Level 3",
    description: 'You gain the following benefits:',
    benefits: [
      "Creatures of your choice are immune to your Nature's Torrent.",
      "When you use Nature's Torrent, you can choose to increase its Diameter by 1 Space and impose DisADV on Attacks made against creatures within the area.",
      "You can spend 2 AP on your turn to use Nature's Torrent without requiring a creature to take Elemental damage. When you do, the Torrent is instead an Aura centered on you and you choose its Elemental damage type."
    ]
  },

  // Hunter
  {
    name: 'Expanded Terrains',
    category: 'Class',
    className: 'Hunter',
    requirement: 'Favored Terrain',
    description: "You gain 2 additional Favored Terrains. You can't choose the same option more than once.",
    benefits: []
  },
  {
    name: 'Pack Leader',
    category: 'Class',
    className: 'Hunter',
    requirement: "Hunter's Mark, Level 3",
    description: 'Creatures of your choice can add a d4 to the first Attack they make on each of their turns against your Marked target.',
    benefits: []
  },
  {
    name: 'Big Game Hunter',
    category: 'Class',
    className: 'Hunter',
    requirement: "Hunter's Mark, Level 3",
    description: 'You gain additional benefits against Marked targets that are Larger:',
    benefits: [
      'Your Martial Attacks deal +1 damage against them.',
      'You have ADV on Saves they force you to make.',
      'You have ADV on Checks you make as part of the Analyze Creature Action.'
    ]
  },

  // Monk
  {
    name: 'Expanded Stances',
    category: 'Class',
    className: 'Monk',
    requirement: 'Monk Stance',
    description: "You gain the following benefits:\n\nYou learn 2 additional Monk Stances. You can't choose the same option more than once.\n\nOnce on each of your turns, you can enter a Monk Stance without spending SP.",
    benefits: []
  },
  {
    name: 'Internal Damage',
    category: 'Class',
    className: 'Monk',
    requirement: '1 or more Monk Features, Level 3',
    description: 'When you make an Unarmed Strike, you can spend SP to cause the target to make a Repeated Physical Save. Failure: They become Impaired for 1 minute. While Impaired this way they take True damage at the start of each of their turns equal to the SP spent.',
    benefits: []
  },
  {
    name: 'Steel Fist',
    category: 'Class',
    className: 'Monk',
    requirement: 'Monk Training, Level 3',
    description: 'You gain the following benefits:',
    benefits: [
      'Impact: Your Unarmed Strikes gain the Impact Property.',
      'Flurry of Blows: Once on each of your turns, when you make a Melee Martial Attack, you can spend 1 SP to immediately make an Unarmed Strike against a creature within range. This Unarmed Strike isn\'t subjected to the Multiple Check Penalty and doesn\'t advance that penalty.'
    ]
  },

  // Rogue
  {
    name: 'Unseen Ambusher',
    category: 'Class',
    className: 'Rogue',
    requirement: 'Debilitating Strike, Level 3',
    description: 'Your mastery over unseen attacks grants you the following benefits:',
    benefits: [
      'Skulker: You have ADV on Stealth Checks made in Combat.',
      'Backstab: Enemies you are Hidden from have DisADV on their Saves against your Debilitating Strikes.'
    ]
  },
  {
    name: 'Sinister Shot',
    category: 'Class',
    className: 'Rogue',
    requirement: 'Cheap Shot, Level 3',
    description: 'Your Cheap Shot deals +1 damage for each additional Condition on the target. Multiple stacks of the same Condition count only once.',
    benefits: []
  },

  // Sorcerer
  {
    name: 'Expanded Meta Magic',
    category: 'Class',
    className: 'Sorcerer',
    requirement: 'Meta Magic',
    description: 'You gain the following benefits:',
    benefits: [
      'Your maximum MP increases by 2.',
      "You gain 2 additional Meta Magic Spell Enhancement. You can't choose the same option more than once."
    ]
  },
  {
    name: 'Greater Innate Power',
    category: 'Class',
    className: 'Sorcerer',
    requirement: 'Innate Power, Level 3',
    description: 'You gain the following benefits:',
    benefits: [
      'Your MP maximum increases by 1.',
      'You gain the benefit of an additional 1 point Focus Property of your choice. You can change Properties whenever you finish a Short or Long Rest.',
      'You gain another Sorcerous Origin of your choice.'
    ]
  },
  {
    name: 'Font of Magic',
    category: 'Class',
    className: 'Sorcerer',
    requirement: 'Meta Magic, Level 3',
    description: 'Your magical vitality grants you the following benefits:',
    benefits: [
      'You can spend 2 Rest Points in place of 1 MP on Meta Magic.',
      'You regain 2 Rest Points when you roll for Initiative.'
    ]
  },

  // Spellblade
  {
    name: 'Expanded Disciplines',
    category: 'Class',
    className: 'Spellblade',
    requirement: 'Spellblade Disciplines',
    description: "You gain 2 additional Spellblade Disciplines. You can't choose the same option more than once.",
    benefits: []
  },
  {
    name: 'Sling-Blade',
    category: 'Class',
    className: 'Spellblade',
    requirement: 'Bound Weapon, Spellstrike, Level 3',
    description: 'You are able to sling magic off your blade to extend the range of your Spells and Attacks in the following ways:',
    benefits: [
      'Distant Strike: The range of your Attacks with Melee Weapons is increased by 2.',
      "Extended Spellstrike: When you use Spellstrike, the range of the Spell changes to match your Weapon's range."
    ]
  },
  {
    name: 'Adaptive Bond',
    category: 'Class',
    className: 'Spellblade',
    requirement: 'Bound Weapon, Level 3',
    description: 'You are able to adapt your Bound Weapon to match the situation. You gain the following benefits:',
    benefits: [
      'At the start of your turn, you can switch your Bound Damage type for free, or you can spend 1 AP do to so during your turn.',
      'After you take Elemental or Mystical damage from an Attack, you can immediately change your Bound Damage type to a damage type dealt by the Attack for free.',
      'You gain Resistance (1) to your Bound Damage'
    ]
  },

  // Warlock
  {
    name: 'Expanded Boon',
    category: 'Class',
    className: 'Warlock',
    requirement: 'Pact Boon',
    description: "You gain 1 additional Pact Boon. You can't choose the same option more than once.",
    benefits: []
  },
  {
    name: 'Pact Bane',
    category: 'Class',
    className: 'Warlock',
    requirement: 'Pact Boon, Level 3',
    description: 'You learn the Bane Spell or a different Spell of your choice from your Spell List if you already know it. Creatures subjected to Bane suffer the following effects based on your chosen Pact Boon:',
    benefits: [
      'Pact Weapon & Spell: When you Hit the creature with your Pact Weapon or Pact Spell, it takes +1 True damage.',
      'Pact Armor: When the creature Misses you with an Attack, it becomes Stunned until the end of their next turn, provided it\'s within 10 Spaces and you\'re wearing your Pact Armor.',
      'Pact Familiar: The creature is considered Flanked while within 1 Space of your Pact Familiar.'
    ]
  },
  {
    name: 'Warlock Subcontract',
    category: 'Class',
    className: 'Warlock',
    requirement: 'Warlock Contract, Level 3',
    description: "You can spend 1 minute to create a Warlock Subcontract with a willing creature within 1 Space, provided it doesn't share your PU (such as a Familiar). While within 10 Spaces of each other, you gain the following benefits:",
    benefits: [
      'Shared Telepathy: You can speak Telepathically with each other.',
      'Extended Bargain: They can use Hasty Bargain. When they do, you gain 1 Temp HP.',
      'Willing Sacrifice: You can spend their HP on your Warlock Features and Talents, provided they are willing.'
    ]
  },

  // Wizard
  {
    name: 'Expanded Spell School',
    category: 'Class',
    className: 'Wizard',
    requirement: 'Spell School Initiate',
    description: "Choose 1 additional Spell School. You can't choose the same School more than once. You learn 2 Arcane Spells from this Spell School, and you can use Signature School once per chosen Spell School.",
    benefits: []
  },
  {
    name: 'Crowned Sigil',
    category: 'Class',
    className: 'Wizard',
    requirement: 'Arcane Sigil Feature, Level 3',
    description: 'When you create an Arcane Sigil, you can bind it to a willing creature within 1 Space. While bound, the Arcane Sigil moves with the creature and grants it a +2 bonus to its AD. A creature can only be bound to one Arcane Sigil at a time. You can spend 1 AP to unbind the Arcane Sigil and place it on the ground within 1 Space of the creature.',
    benefits: []
  },
  {
    name: 'Overly Prepared Spellcaster',
    category: 'Class',
    className: 'Wizard',
    requirement: 'Prepared Spell, Spell School Initiate, Level 3',
    description: 'You gain the following benefits:',
    benefits: [
      'You gain Dazed Resistance.',
      'You can change your Prepared Spell when you complete a Quick or Short Rest.',
      'When you declare a Spell Duel using your Prepared Spell, you gain ADV on your Spell Check.',
      'You can use Signature School on your Prepared Spell, even if it\'s not from the chosen Spell School.',
      'When you use Mana Limit Break, you have ADV on the Check made to cast the Spell.'
    ]
  }
];
