import type { Spell } from './types';

export const enchantmentSpells: Spell[] = [
  {
    name: "Charm",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Charmed", "Communication", "Emotions", "Thoughts"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Choose a creature that can see or hear you within range. Make a Spell Check against the target's Charisma Save. The Save is Repeated if the target is hostile. Check Success: The target is Charmed by you for the duration or until it takes damage or makes a Save. When the Condition ends, the creature realizes that you used magic to influence its mood and may become hostile toward you (if they weren't already).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 min -> 10 min -> 1 hour -> 8 hour -> Long Rest).",
      "Clear Suspicion: (1 MP) The target doesn't realize that magic was used on them when the Condition ends.",
      "Mass Charm: (1 AP + 1 MP): You instead target each creature of your choice within range that can see or hear you. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The Action Point cost of this Enhancement can't be paid for with MP."
    ]
  },
  {
    name: "Confusion",
    source: "Arcane, Primal",
    school: "Enchantment",
    tags: ["Chaos", "Emotions", "Madness", "Thoughts"],
    cost: "1 AP + 2 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Choose a creature within range. Make a Spell Check against the target's Repeated Intelligence Save. Check Success: The creature is Confused for the duration. The target can also Repeat the Intelligence Save whenever they take damage. Confused: You can't take Reactions and must roll a d8 at the start of each of your turns to determine your behavior for that turn. 1-2: You spend all of your AP moving in a random direction. 3-4: You waste your AP this turn performing useless activities (such as babbling incoherently, repeatedly attempting to act but failing or remaining motionless). 5-6: You use all your AP on Attacks or Actions to facilitate Attacks (such as moving to a target), Attacking random targets as determined by the GM. If you can't Attack, you waste all your AP this turn. 7-8: You act normally.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) Choose 1 additional target within range for each 2 MP spent on this enhancement. The cost of this Enhancement can't be paid for with MP.",
      "Deep Confusion: (2 MP) The target's Intelligence Save is not Repeated at the end of each of its turns, though it can still repeat the Save whenever it takes damage. The cost of this Enhancement increases to 4 MP if used with the Targets Enhancement."
    ]
  },
  {
    name: "Command",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Communication", "Emotion", "Motion", "Thoughts"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You speak a command to a creature within range that can hear you. Make a Spell Check against the target's Charisma Save. Save Failure: The target immediately takes a 1 AP Action of your choice for free and loses 1 AP if they have any available. If the Action targets a creature or object, you choose the target. The creature can't willingly fail their Check or spend their own resources (AP, SP, or MP) to modify the Action it takes. The Spell has no effect if the target is unable to perform the Action (such as commanding an Immobilized creature to Attack itself, or if the Action will be directly harmful to itself (such as Attacking itself or moving for the purpose of provoking Opportunity Attacks).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Perfect Command: (1 MP) The Spell no longer fails if the commanded Actions are directly harmful to the target.",
      "Memory Block: (1 MP) The target has no recollection of any Actions made as a result of this Spell.",
      "Multiple Commands: (2 MP, Repeatable) The target takes up to 1 additional Action of your choice for free. Actions taken as part of this Spell subjected to the Multiple Check Penalty. The target loses 1 additional AP if they are able.",
      "Extended Command: (2 MP, Repeatable) A taken Action can cost up to 1 additional AP. If used with Multiple Commands you increase the cost of only one taken Action. The target loses 1 additional AP if they are able."
    ]
  },
  {
    name: "Fear",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Emotions", "Frightened", "Motion", "Psychic", "Terrified"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You instill fear in a creature within range that can see or hear you. Make a Spell Check against the target's Repeated Charisma Save. Check Success: The target is Frightened by you for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 minute -> 10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Clear Suspicion: (1 MP) The target doesn't realize that magic was used on them when the Condition ends.",
      "Mass Charm: (1 AP + 1 MP): You instead target each creature of your choice within range that can see or hear you. Only you can telepathically perceive answers from the targets."
    ]
  },
  {
    name: "Hex",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Curse", "Enfeeble"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Make a Spell Check against the Repeated Charisma Save of a target within range. Check Success: The target is Cursed for the duration. While Cursed this way, it gains Vulnerability (1) to a damage type of your choice. The Curse can be removed by any effect that ends a Basic Curse.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Expanded: (1 MP) The target becomes Vulnerable to a category of damage (Physical, Elemental or Mystical) of your choice instead of 1 damage type.",
      "Break Resistance: (1 MP) While Cursed by this Spell, the target doesn't benefit from Resistance to the damage types they're Vulnerable to for the duration.",
      "Improved Vulnerability: (2 MP, Repeatable) The Vulnerability increases by 1."
    ]
  },
  {
    name: "Message",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Communication", "Thoughts"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You send a brief telepathic message to a creature within range. The creature hears the message in their mind and can immediately respond telepathically. The message and response can take the form of a thought, a mental image or a verbal message of up to 20 words long. This Spell doesn't require Verbal Components.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Group Message: (1 AP + 1 MP) You can target every creature of your choice within range. Only you can telepathically perceive answers from the targets.",
      "Sending: (3 MP) You can target any creature you've touched previously, provided they're on the same plane of existence as you. The word count of your message and the target answer can be up to 40 words long."
    ]
  },
  {
    name: "Mockery",
    source: "Arcane",
    school: "Enchantment",
    tags: ["Blinded", "Deafened", "Emotions", "Taunted"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Trigger: A target within range fails a Check. Reaction: Make a Spell Check against the target's Repeated Charisma Save. Save Failure: The target is Taunted by you for the duration.",
    enhancements: [
      "Animal Vision: (1 MP) While Taunted by this Spell, the target can't willingly move away from you.",
      "Blinding Rage: (2 MP) While Taunted by this Spell, the target is Blinded and Deafened to all creatures except you."
    ]
  },
  {
    name: "Mind Blast",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Dazed", "Psychic", "Sense"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a blast of psychic energy that projects in a 3 Space Cone. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Psychic damage. Spell Passive: Untraceable - Damage from this Spell leaves no visible trace on any affected creatures or the surrounding environment.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Dazed: (1 MP) Each target makes an Intelligence Save. Save Failure: The target is Dazed for 1 Round.",
      "Psionic Trail: (1 MP) Each target makes an Intelligence Save. Save Failure: For the next 10 minutes, you know the target's exact location while it's within 10 Spaces of you."
    ]
  },
  {
    name: "Psi Bolt",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Dazed", "Intimidated", "Psychic", "Thoughts"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of vibrant psychic energy that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Psychic damage.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Dazed: (1 AP) The target makes an Intelligence Save. Save Failure: The target is Dazed for 1 Round.",
      "Intimidate: (1 AP) The target makes a Mental Save. Save Failure: The target is Intimidated by you for 1 Round.",
      "Crushing Silence: (1 AP) The target makes an Intelligence Save. Save Failure: The target can't speak verbally or communicate telepathically for 1 Round."
    ]
  },
  {
    name: "Psychic Wave",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Enfeeble", "Motion", "Psychic"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a blast of psychic energy that envelops a 2 Space Arc. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Psychic damage.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The radius of the area increases by X Spaces.",
      "Aura: (1 MP) The area becomes an Aura instead.",
      "Discombobulate: (1 MP) Each Target makes a Mental save. Save Failure: The target subtracts a d4 on every Check it makes for 1 round.",
      "Knockback: (1 MP, Repeatable) Each target makes a Might Save against your Save DC. Save Failure: The target is pushed 1 Space away from you. Failure (each 5): The target is pushed 1 additional Space."
    ]
  },
  {
    name: "Planar Protection",
    source: "Divine",
    school: "Enchantment",
    tags: ["Cleansing", "Embolden", "Thoughts", "Ward"],
    cost: "1 AP + 1 MP",
    range: "5 Spaces",
    duration: "1 Hour",
    description: "You ward a creature within range against Planar influence. The target gains MDR and Resistance to one of the following Conditions for the duration: Charmed, Taunted, Intimidated. If the target is already affected by the resisted Condition, make a Spell Check against the Save DC of the Condition. Success: The chosen Condition immediately ends on the target.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Mystic Resistance: (1 MP) The target gains Mystical Resistance (Half) for the duration instead of MDR.",
      "Major Protection: (1 MP) The target gains Resistance against the following additional Conditions: Doomed, Frightened, and Terrified.",
      "Full Protection: (1 MP) The target has Resistance against all listed Conditions.",
      "Mental Barrier: (1 MP) The target's thoughts can't be read against your will for the duration.",
      "Manipulation Protection: (3 MP) The target gains ADV on all Mental Saves for the duration."
    ]
  },
  {
    name: "Shatter Reality",
    source: "Arcane, Divine",
    school: "Enchantment",
    tags: ["Chaos", "Dazed", "Madness", "Psychic"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You violently distort the perception of reality in a 3 Space Sphere within range. Make an Area Spell Attack against the AD of every creature in the area. Hit: The target takes 1 Psychic damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Dazed: (1 MP) Each target makes an Intelligence Save. Failure: The target is Dazed for 1 Round.",
      "Distorted Perception: (2 MP) Each target makes a Repeated Charisma Save against your Save DC. Save Failure: The target rolls a d4 to determine the Distortion Effect that alters its body perception for 1 minute. D4 DISTORTION EFFECT: 1 It sees body twist. It's Immobilized. 2 Its senses collapse inward. It's Blinded. 3 Its mind fractures. It's Stunned and can't take Reactions. 4 It becomes confused. At the start of each of its turns, it must spend 1 AP to move up to its Speed in a random direction."
    ]
  },
  {
    name: "Slumber",
    source: "Arcane",
    school: "Enchantment",
    tags: ["Emotions", "Enfeeble", "Incapacitated", "Unconscious"],
    cost: "1 AP + 2 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You attempt to cause a state of magical slumber in a creature of your choice within range. Make a Spell Check contested by the target's Repeated Intelligence Save. Check Success: The target is Incapacitated for the duration or until it takes damage, makes a Save against an effect not caused by this Spell, or another creature spends 1 AP to shake or slap it out of it, removing the Condition. When the Condition ends, the target realizes that magic was used on them to induce their state of slumber.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Clear Suspicion: (1 MP) On a Success, the target doesn't realize that magic was used on them when the Condition ends.",
      "Lethargy: (1 MP) When the the Condition ends, the target makes a Might Save against your Save DC. Failure: The target has DisADV on all Checks for 1 round.",
      "Sleep: (1 MP) On a Success, the target is Unconscious instead.",
      "Targets: (1 AP + X MP) You can target 1 additional creature within range for each 2 MP spent on this Enhancement. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP."
    ]
  },

];
