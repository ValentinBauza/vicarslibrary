import type { Spell } from './types';

export const invocationSpells: Spell[] = [
  {
    name: "Cleanse",
    source: "Divine, Primal",
    school: "Invocation",
    tags: ["Cleansing"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "Choose a creature within range that's subjected to 1 of the following Conditions: Dazed, Hindered, Impaired, Intimidated, Slowed, Stunned, or Taunted. Choose 1 of those Conditions and Make a Spell Check against its Save DC. If it doesn't have a Save DC, the GM assigns one. Success: 1 stack of the Condition ends on the creature. DC Tip: If the effect is applied continuously to the target (such as Slowed as a result of moving through Difficulty Terrain) this Spell has no effect on the Condition.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Additional Cleanse: (1 MP, Repeatable) You can end 1 stack of an additional Condition from the list or an additional stack of a previously chosen Condition.",
      "Moderate Cleanse: (1 MP) The following Conditions are added to the list: Blinded, Charmed, Disoriented, Doomed, Frightened, Restrained, or Weakened.",
      "Major Cleanse: (3 MP) The following Conditions are added to the list: Exhaustion, Paralyzed, Petrified, Terrified, or Unconscious."
    ]
  },
  {
    name: "Close Wounds",
    source: "Arcane, Divine, Primal",
    school: "Invocation",
    tags: ["Cleansing", "Healing", "Time"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You accelerate the natural healing process of a target within range. Make a DC 15 Spell Check. Failure: The target can spend up to 1 Rest Point, regaining HP equal to the Rest Points Spent. Success: The target can spend up to 2 Rest Points. Success (each 5): The target can spend 1 additional Rest Point.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Increased Healing: (1 AP, Repeatable) The target can spend +2 additional Rest Points.",
      "Repeat Save: (1 AP) The target can make a Repeated Save against an effect they're subjected to."
    ]
  },
  {
    name: "Heal",
    source: "Divine",
    school: "Invocation",
    tags: ["Healing"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You heal a creature within range. Make a DC 15 Spell Check. Failure: The target regains 2 HP. Success: The target regains 3 HP. Success (Each 5): The target regains +1 HP. Critical Success: The target regains +2 HP.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Increased Healing: (1 MP, Repeatable) 1 target of your choice regains 2 additional HP.",
      "Chain Heal: (1 MP, Repeatable) Choose 1 additional targets within 3 Spaces of the original target. The additional targets regain 2 HP. If you use this Enhancement multiple times, you choose an additional target within 3 Spaces of a previously chosen target."
    ]
  },
  {
    name: "Death Ward",
    source: "Divine",
    school: "Invocation",
    tags: ["Cleansing", "Death", "Embolden", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 Minutes",
    description: "You ward a creature within range against death. Make a DC 15 Spell Check. Failure: The next time the target takes damage that would reduce it to 0 HP, it gains 3 Temp HP before taking the damage and the Spell ends. Success: The target gains 4 Temp HP instead. Success (Each 5): +1 Temp HP. If a creature is already on 0 HP or lower when this Spell is cast on it, the Spell activates when it next take damage instead.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Duration: (1 MP, Repeatable, Sustained) The duration is increased by 1 step (10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Additional Temp HP: (1 MP, Repeatable) The target gains an additional 3 Temp HP.",
      "Doomed Protection: (1 MP, Repeatable) Up to 2 stacks of Doomed ends on the creature."
    ]
  },
  {
    name: "Divine Protection",
    source: "Divine",
    school: "Invocation",
    tags: ["Death", "Ward"],
    cost: "1 AP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "You magically transfer damage from an ally to yourself. Trigger: A target you can see within range is Hit by an Attack. Reaction: The damage of the Attack is shared between you and the target. The damage you take bypasses any Damage Reduction you have.",
    enhancements: [
      "Targets: (1 AP, Repeatable) You target 1 additional creature within range that's also targeted by the same Attack.",
      "Resistance: (1 AP or 2 AP) The target gains Resistance (Half) to the damage taken from the Attack. If you spend 2 AP to use this Enhancement you also gain Resistance (Half) to any damage you take from using this Spell. The cost of this Enhancement doubles if you take the Targets Enhancement.",
      "Forbearance: (1 MP) If the damage taken reduces the target below their Death's Door Threshold, they avoid dying for 1 Round. If their HP is restored to higher before the duration ends, they avoid dying. The cost of this Enhancement increases to 2 MP if you take the Targets Enhancement."
    ]
  },
  {
    name: "Healing Wave",
    source: "Primal",
    school: "Invocation",
    tags: ["Healing", "Cleansing"],
    cost: "2 AP + 1 MP",
    range: "Self",
    duration: "Instantaneous",
    description: "You release a wave of healing energy in a 3 Space Aura. Make a DC 20 Spell Check. Failure: Each creature of your choice in the area regains 1 HP. Success: Each creature of your choice regains 2 HP. Success (Each 5): +1 HP.",
    enhancements: [
      "Area: (1 MP, Repeatable) The radius of the Aura increases by 2 Spaces.",
      "Increased Healing: (X MP) The targets regain +X HP.",
      "Protection: (1 MP, Repeatable) The next Attack made against each target within 1 Round has DisADV. You can use this Enhancement a maximum of two times. If you use this Enhancement twice, all Attacks made against each target within 1 Round have DisADV.",
      "Rejuvenation: (1 MP, Requires Aura of Healing) When a creature spends Rest Points on Aura of Healing, they can repeat a Save against an effect they're subjected to."
    ]
  },
  {
    name: "Illuminate",
    source: "Divine, Primal",
    school: "Invocation",
    tags: ["Blinded", "Exposed", "Light", "Sense"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You attempt to illuminate every creature within a 3 Space diameter Sphere within range. Make a Spell Check contested by the Repeated Charisma Save of each target in the area. Save Failure: For the duration, the creature emits a 1 Space radius of Dim Light and can't benefit from being Concealed (such as being Invisible).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The Sphere's diameter is increased by 1 Space.",
      "Duration: (1 MP) The duration increases by 1 minute.",
      "Expose: (2 MP) On a failed Save, the target becomes Exposed for the duration.",
      "Blinded: (4 MP) On a failed Save, the target becomes Blinded for the duration."
    ]
  },
  {
    name: "Life Transfer",
    source: "Arcane, Divine",
    school: "Invocation",
    tags: ["Blood", "Cleansing", "Healing"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You sacrifice your own health to heal a creature within range. Make a DC 15 Spell Check. Failure: You spend 1 Rest Point or HP and the target regains an equal amount of HP. Success: You can spend up to 2 Rest Points or HP and the target regains an equal amount of HP. Success (each 5): You can spend up to 1 more Rest Point or HP.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Increased Transfer: (X AP) You spend X additional Rest Points or HP and the target regains an equal amount of HP.",
      "Affliction: (1 MP, Repeatable) Choose a Basic Disease, Basic Curse, or Basic Poison affecting the target, if it is willing the affliction ends on the target and you become affected by the affliction."
    ]
  },
  {
    name: "Light",
    source: "Arcane, Divine, Primal",
    school: "Invocation",
    tags: ["Blinded", "Light"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "10 Minutes (Sustained)",
    description: "You cause Bright Light to shine in a 2 Space diameter Sphere within range and Dim Light a further 1 Spaces. Relocate: When you Sustain this Spell or by spending 1 AP, you can move the Sphere up to 5 Spaces to another Space within range. Attach: When you cast the Spell, you can attach it to an object or creature within range. If you do, the target sheds Bright Light in a 1 Space Aura (and Dim Light 1 Space beyond that) and you can no longer use Relocate. If the target isn't willing, make a Spell Check against the target's Agility Save. Check Success: The target becomes the source of the light. Blind: You can spend 1 AP and 3 MP to end the spell and make a Spell Check against the Physical Save of each target in the area. Check Success: The target is Blinded for 1 Round.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 min -> 1 hour -> 8 hour -> Long Rest). You no longer need to Sustain the Spell and can end the spell for free at any time.",
      "Intensify: (1 MP) Light created by this Spell is considered Sunlight."
    ]
  },
  {
    name: "Luminous Burst",
    source: "Divine",
    school: "Invocation",
    tags: ["Exposed", "Light", "Radiant", "Tethered"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a flash of brilliant light in a 1 Space Aura. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Radiant damage. Spell Passive: Illuminate - The Light level of the area increases by 1 until the end of the turn. DC Tip: Magical effects such as Illuminate don't stack with themselves. You can only increase the light level by 1 with the Illuminate effect.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Aura's radius increases by X Spaces.",
      "Expose: (2 MP) Each target makes a Physical Save. Save Failure: The target is Exposed for 1 Round.",
      "Divine Chains: (1 MP) Each target makes a Repeated Intelligence Save. Save Failure: The target is Tethered to the area for 1 minute.",
      "Punishing Chains: (X MP, Requires Divine Chains) Creatures Tethered by Divine Chains take X Radiant damage at the start of each of their turns."
    ]
  },
  {
    name: "Mass Heal",
    source: "Divine",
    school: "Invocation",
    tags: ["Healing", "Ward"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You heal creatures within a 4 Space diameter Sphere within range. Make a DC 20 Spell Check. Failure: Each creature of your choice in the area regains 1 HP. Success: Each creature of your choice regains 2 HP. Success (Each 5): Each creature regains +1 HP.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The diameter of the Sphere increases by 2 Spaces.",
      "Increased Healing: (X MP) Each target regains +X HP.",
      "Protection: (1 MP, Repeatable) The next Attack made against each target within 1 Round has DisADV. You can use this Enhancement a maximum of two times. If you use this Enhancement twice, all Attacks made against each target within 1 Round have DisADV."
    ]
  },
  {
    name: "Radiant Bolt",
    source: "Divine",
    school: "Invocation",
    tags: ["Blinded", "Exposed", "Light", "Radiant"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of light that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Radiant damage. Spell Passive: Illuminate - The Light level in the target's Space increases by 1 until the end of the turn. DC Tip: Magical effects such as Illuminate don't stack with themselves. You can only increase the light level by 1 with the Illuminate effect.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Expose: (1 MP) The target makes a Physical Save. Save Failure: The target is Exposed and emits a 1 Space Aura of Bright Light for 1 Round.",
      "Blinding: (2 MP) The target makes a Physical Save. Save Failure: The target is Blinded for 1 Round."
    ]
  },
  {
    name: "Regenerate",
    source: "Primal",
    school: "Invocation",
    tags: ["Cleansing", "Healing"],
    cost: "1 AP + 1 MP",
    range: "5 Spaces",
    duration: "1 Round",
    description: "You heal a creature within range. Make a DC 15 Spell Check. Failure: The target regains 2 HP. Success: The target regains 2 HP immediately and 2 HP at the start of each of your turns for the duration. Success (Each 5): It regains +1 HP immediately.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Increased Healing: (X MP) The target regains +X HP immediately and +X HP at the start of each of your turns.",
      "Duration: (X MP) The duration of the Spell increases by X Rounds. When you choose this Enhancement, all other Enhancements (except Range) is doubled. The cost of this Enhancement increases to 2 MP for each additional Round.",
      "Repeat Save: (1 MP) The target can immediately make a Repeated Save against an effect it's subjected to. If used with the Duration Enhancement, the target can make this benefit again at the start of each of your turns for the duration."
    ]
  },
  {
    name: "Revivify",
    source: "Divine, Primal",
    school: "Invocation",
    tags: ["Cleansing", "Resurrection", "Spirit"],
    cost: "1 AP + 2 MP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "You attempt to bring a creature back to life. Choose the corpse of a creature that died a maximum of 1 Round ago within range. Make a DC 10 Spell Check. Success: The creature comes back to life with 0 HP (on Death's Door). Success (each 5): They come back with +1 HP. This spell can't return to life a creature that has died of old age nor can it restore any missing body parts. Any afflictions or conditions affecting the creature when it died remain when its brought back to life.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 1 Space. You can use this Enhancement a maximum of two times.",
      "Duration: (X MP) The maximum period of time a corpse has been dead that you can target increases by X Rounds.",
      "Rejuvenated: (X MP) The creature comes back to life with X less levels of Exhaustion."
    ]
  },
  {
    name: "Solar Beam",
    source: "Divine, Primal",
    school: "Invocation",
    tags: ["Blinded", "Burning", "Light", "Radiant"],
    cost: "2 AP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "You store a radiant power within yourself for the duration. You gain 1 Charge plus another Charge each time you Sustained this Spell (up to a maximum of 4 Charges). Sunlight: Once on each of your turns while in an area of Sunlight, you can spend 1 AP to gain a Charge. Spell Attack: You can spend 1 AP to release all stored Charges and make an Area Spell Attack against the AD of every target within an 8 Space Line. If you release 4 Charges, you make the Attack with ADV. Hit: The target takes 1 Radiant damage per Charge. Spell Passive: Light Beacon - For the duration of the Spell, the Light Level of any Space you occupy increases by 1. DC Tip: Magical effects such as Illuminate don't stack with themselves. You can only increase the light level by 1 with the Illuminate effect.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 AP, Repeatable) The length of the Line increases by 4 Spaces.",
      "Burning Radiance: (X MP) Each target makes a Repeated Physical Save. Save Failure: The target begins Burning X for 1 minute. Burning damage caused by this Enhancement deals Radiant damage.",
      "Blinding: (4 MP) Each target makes a Physical Save. Save Failure: The target is Blinded for 1 Round."
    ]
  },
  {
    name: "Spirit Link",
    source: "Divine",
    school: "Invocation",
    tags: ["Blood", "Communication", "Curse", "Spirit", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Make a Spell Check against the Repeated Charisma Save of 2 creatures within range that don't share their HP. Check Success: If both targets fail the Save, they're Linked for the duration. DC Tip: A creature can choose to fail a Save if it wants. Linked: While within 10 Spaces of each other, whenever one Linked creature regains or loses HP, the amount is shared with the other Linked creature. Example: You target yourself and an enemy, they fail the Save and you choose to fail making you Linked. When the enemy drinks a healing potion to heal for 1 HP, you instead heal for 1 HP each, splitting the healing between you.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Extended Link: (1 MP, Repeatable) The maximum range of the Link increases by 5 Spaces.",
      "Lion's Heart: (1 MP) While within range of the link, each target gains Resistance to Charmed, Taunted, Disoriented, Frightened, and Terrified).",
      "Shared Mind: (1 MP) While within range of the Link, the target can communicate telepathically with each other.",
      "Transference: (3 MP) Instead of sharing HP regained or lost while Linked, choose 1 target to receive all the changes in HP.",
      "Profane: (5 MP) Instead of sharing loses of HP while Linked, both creatures lose the full amount of HP."
    ]
  },
  {
    name: "Sunburst",
    source: "Divine, Primal",
    school: "Invocation",
    tags: ["Blinded", "Exposed", "Light", "Radiant"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a flash of brilliant radiance in a 6 Space tall, 3 Space diameter Cylinder within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Radiant damage. Spell Passive: Illuminate - The Light level of the area increases by 1 until the end of the turn. DC Tip: Magical effects such as Illuminate don't stack with themselves. You can only increase the light level by 1 with the Illuminate effect.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the Height by 2 Spaces.",
      "Expose: (2 MP) Each target makes a Physical Save. Save Failure: The target is Exposed for 1 Round.",
      "Blinding: (4 MP) Each target makes a Physical Save. Save Failure: The target is Blinded for 1 Round.",
      "Radiant Beam: (X MP, Sustained) The duration of the Spell becomes 1 minute. Celestial light (sun, moon or star light) fills the area for the duration. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Might Save against your Save DC. Save Failure: The target takes X Radiant damage.",
      "Moving Beam: (1 MP, Requires Radiant Beam) When you Sustain this Spell or by spending 1 AP, you can move the area up to 5 Spaces to another Space within range."
    ]
  },

];
