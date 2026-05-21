import type { Spell } from './types';

export const nullificationSpells: Spell[] = [
  {
    name: "Arcane Shield",
    source: "Arcane",
    school: "Nullification",
    tags: ["Ward"],
    cost: "1 AP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "You create a barrier of magic to protect yourself or another creature nearby. Trigger: When a target you can see within range (including yourself) is targeted by an Attack against its AD. Reaction: You grant the target a +5 bonus to its AD against this Attack.",
    enhancements: [
      "Multiple Targets: (1 AP, Repeatable) You target 1 additional creature within range that's also targeted by the same Attack.",
      "Arcane Absorption: (1 MP, Repeatable) Immediately after the Attack, you gain 2 Temp HP. The Temp HP increases by 2 each time you use this Enhancement."
    ]
  },
  {
    name: "Bane",
    source: "Divine",
    school: "Nullification",
    tags: ["Curse", "Enfeeble"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You attempt to impose 1 of the Curses below on a creature of your choice within range. Make a Spell Check against the target's Repeated Charisma Save. Save Failure: The target is Cursed for the duration. The Curse can be removed by any effect that ends a Basic Curse. Curses: Attacks: The target subtracts a d6 from its Attack Checks for the duration. Saves: The target subtracts a d6 from its Saves (except against this Spell) for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Full Enfeeble: (1 MP) You Curse all of the target's Attributes. The cost of this Enhancement increases to 2 MP if you use the Targets Enhancement.",
      "Greater Enfeeble: (1 MP, Repeatable) The size of the die increases by 1 step (d6 -> d8 -> d10 -> d12)."
    ]
  },
  {
    name: "Corpse Explosion",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Ailment", "Death", "Enfeeble", "Umbral"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "Trigger: A target within range you can see dies. Reaction: The target's corpse explodes, make an Area Spell Attack against the AD of each target within 1 Space of the corpse. Hit: The target takes 1 Umbral Damage.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Disease Cloud: (X MP) A cloud forms in a 3 Space diameter Sphere centered on the corpse for 1 minute. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Repeated Might Save against your Save DC. Save Failure: The target is Diseased for 1 minute. Creatures Diseased by this Spell have their current and maximum HP reduced by X at the start of each of their turns. The creature's HP returns to normal after taking a Rest. This Disease can be removed by any effect that ends a Basic Disease. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Disease from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Disease on a success.",
      "Creeping Death: (2 MP) Requires Disease Cloud. Creatures Diseased by this Spell can't regain HP. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Disease from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Disease on a success."
    ]
  },
  {
    name: "Darkness",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Shadow", "Slowed"],
    cost: "2 AP + 1 MP",
    range: "5 Spaces",
    duration: "10 Minutes (Sustained)",
    description: "You create a 4 Space Sphere of Magical Darkness within range. Relocate: When you Sustain this Spell, or by spending 1 AP, you can move the Sphere up to 5 Spaces to another Space within range. Attach: When you cast the Spell, you can attach it to an object or creature within range. If you do, the target sheds Bright Light in a 1 Space Aura and Dim Light 1 Space beyond that) and you can no longer use Relocate. If the target is not willing, make a Spell Check against the target's Agility Save. Check Success: The target becomes the source of the Darkness.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The diameter of the Sphere increases by 2 Spaces.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 min -> 1 hour -> Long Rest).",
      "Light Eater: (1 AP) Mundane light sources within the area are extinguished.",
      "Grasping Gloom: (1 MP) When a creature enters the area for the first time on its turn or starts its turn there, it makes an Agility Save against your Save DC. Save Failure: The target is Slowed for 1 round."
    ]
  },
  {
    name: "Death",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Curse", "Death", "Doomed", "Exhaustion"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You doom a creature within range. Make a Spell Check against the target's Repeated Might Save. Check Success: The target is Doomed 2. When you Sustain the Spell, it loses it loses all stacks of Doomed gained from this Spell. Death: If the number of Doomed stacks on a creature affected by this Spell is equal to or exceeds their current maximum HP, it immediately dies. Example: A creature has 10 max HP. When they reach Doomed 5, their max HP has been reduced to 5, at which point they die.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Duration: (1 MP, Repeatable, Sustained) The duration is increased by 1 step (10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Additional Temp HP: (1 MP, Repeatable) The target gains an additional 3 Temp HP.",
      "Doomed Protection: (1 MP, Repeatable) Up to 2 stacks of Doomed ends on the creature."
    ]
  },
  {
    name: "Death Bolt",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Curse", "Doomed", "Umbral"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of negative energy that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target you can see within range. Hit: The target takes 1 Umbral damage.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Doom: (X AP) The target makes a Repeated Charisma Save. Failure: The target is Doomed X.",
      "Call of the Grave: (1 MP) You add a d12 to your Attack Check if the target is Bloodied.",
      "Wither: (X MP) The target makes a Repeated Charisma Save. Failure: The target is Cursed for the duration. Creatures Cursed by this Spell take X Umbral damage at the start of each of their turns. This Curse can be removed by any effect that ends a Basic Curse."
    ]
  },
  {
    name: "Disintegrating Beam",
    source: "Arcane",
    school: "Nullification",
    tags: ["Death", "Enfeeble", "True", "Weakened"],
    cost: "2 AP + 2 MP",
    range: "Self",
    duration: "Instantaneous",
    description: "You create an 8 Space Line of pure destructive energy. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 2 True Damage. The additional damage from Critical Hits and Heavy Hits or higher is doubled.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The length of the Line increases by 6 Spaces.",
      "Weaken: (2 MP) Each target makes a Physical save. Save Failure: They're Weakened for 1 Round.",
      "Disintegrating: (4 MP, Repeatable) Each target makes a Repeated Physical save. Save Failure: They gain Vulnerability (1) to all damage for 1 Round."
    ]
  },
  {
    name: "Disintegrate",
    source: "Arcane",
    school: "Nullification",
    tags: ["Death", "Enfeeble", "True", "Weakened"],
    cost: "1 AP + 2 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of pure destructive energy. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 2 True Damage. The additional damage from Critical Hits and Heavy Hits or higher is doubled.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Weaken: (1 MP) The target makes a Physical save. Save Failure: They're Weakened for 1 Round.",
      "Disintegrating: (2 MP, Repeatable) The target makes a Physical save. Save Failure: They gain Vulnerability (1) to all damage for 1 Round."
    ]
  },
  {
    name: "Dispel Magic",
    source: "Arcane",
    school: "Nullification",
    tags: ["Antimagic", "Cleansing"],
    cost: "1 AP + X MP (minimum of 1)",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You attempt to permanently dispel a MP Effect within range or temporarily dispel a Magic Item within range (Artifacts are immune to this Spell). MP Effect: Make a Spell Check against the Save DC of the creature that produced the MP Effect. Your Check gains a bonus equal to twice the MP you spent on this Spell, and the Save DC gains a bonus equal to twice the MP the creature spent to produce the MP Effect. Check Success: The MP Effect ends. DC Tip: Monsters that produce an MP Effect are considered to be spending MP up to half their level, rounded up (what their Mana Spend Limit would be). If it's an MP Effect not produced by a creature, the GM determines the DC. Magic Item: Make a Spell Check against the Save DC of the creature that created the Magic Item. Your Check gains a bonus equal to twice the MP you spent on this Spell, and the Save DC gains a bonus equal to twice the item's Magic Power value. Check Success: The Magic Item becomes mundane for 24 hours. DC Tip: When determining the Save DC of the item's creator, if a PC must be at level 5 to have a Mana Spend Limit that allows them to cast a 3 MP Spell, a PC must be at level 3 to have a Mana Spend Limit that allows them to cast a 3 MP Spell, a 3 MP Spell. A PC at level 17 (½ their level, round up) + Prime Modifier (4)). If a Magic Item is not produced by an MP Effect with enough MP to match the item's Magic Power value. An item with a Magic Power of 3 is equivalent to a 3 MP Spell. Consider what level a PC must be to produce that item (minimum level 5), then determine their Save DC at that level to produce that item (minimum level 17 (½ their level, round up) + Prime Modifier (4)).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Full Bane: (2 MP) The target also subtract the same die from its Saves. The cost of this Enhancement increases to 4 MP if you use the Targets Enhancement.",
      "Greater Bane: (1 MP, Repeatable) The size of the die increases by 1 step (d6 -> d8 -> d10 -> d12)."
    ]
  },
  {
    name: "Enfeeble",
    source: "Divine, Primal",
    school: "Nullification",
    tags: ["Curse", "Enfeeble"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You attempt to Curse the Physical or Mental (your choice) Checks and Saves of a creature of your choice within range for the duration. Make a Spell Check against the target's Repeated Charisma Save. Save Failure: The target is Cursed for the duration. While Cursed in this way, the target subtracts a d6 from Checks and Saves (except against this Spell) of the chosen Attribute category. The Curse can be removed by any effect that ends a Basic Curse.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Full Enfeeble: (1 MP) You Curse all of the target's Attributes. The cost of this Enhancement increases to 2 MP if you use the Targets Enhancement.",
      "Greater Enfeeble: (1 MP, Repeatable) The size of the die increases by 1 step (d6 -> d8 -> d10 -> d12)."
    ]
  },
  {
    name: "Muffle",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Communication", "Deafened", "Disoriented", "Sound"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You create a 3 Space diameter Sphere within range. No sound can pass from the outside to the inside of the area or vice-versa (becoming Unheard). Relocate: When you Sustain this Spell or by spending 1 AP, you can move the area up to 5 Spaces within range.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Silence: (1 MP) The area becomes silent, no sound can be heard or produced in it. All creatures in the area are Deafened and Verbal Components can't be performed in it.",
      "Disorient: (2 MP) Requires Silence. When a creature enters the area for the first time on its turn or starts its turn there, they make a Repeated Intelligence Save against your Save DC. Save Failure: The target is Disoriented until it leaves the area."
    ]
  },
  {
    name: "Sanctuary",
    source: "Divine",
    school: "Nullification",
    tags: ["Embolden", "Spirit", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Choose a creature within range. Attacks are made with DisADV against the target. The target gains no benefit from this Spell for 1 Round if it makes an Attack, targets another creature with a Check, or forces a creature to make a Save.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Save Resistance: (1 MP) The target gains ADV on Saves.",
      "Possession Protection: (1 MP) The target can't be possessed. If it's already possessed, it can repeat its Save against the possession at the start of each of its turns. Beta Note: This Enhancement applies to ghosts, spirits, and other creatures of the sort.",
      "Enforced Peace: (1 MP) When a creature makes an Attack against the target, it makes an Intelligence Save against your Save DC. Save Failure: The creature can't perform the Attack (it still spends the resources used on the Attack). This Save doesn't prevent the target from benefitting from this Spell for 1 Round."
    ]
  },
  {
    name: "Sphere of Death",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Death", "Doomed", "Exhaustion", "Shadow", "Umbral"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a burst of shadow magic that envelops a 3 Space diameter Sphere within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Umbral damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Doom: (X MP) Each target makes a Repeated Charisma Save. Failure: The target is Doomed X.",
      "Death Cascade: (X MP, Repeatable) If you kill a target with this Spell, it explodes. Each target within 1 Space of the exploding creature makes a Agility Save. Save Failure: The target takes X Umbral damage. Damage from this Enhancement also triggers Death Cascade.",
      "Exhaustion: (3 MP) Each target makes a Might Save. Save Failure: The target gains Exhaustion."
    ]
  },
  {
    name: "Umbral Burst",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Death", "Doomed", "Shadow", "Umbral"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a burst of shadow magic that envelops a 1 Space Aura. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Umbral damage.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Doom: (X MP) Each target makes a Repeated Charisma Save. Failure: The target is Doomed X.",
      "Heal Undead: (1 MP) Undead creatures in the area are immune to the damage from this Spell and regain an amount of HP equal to the damage of this Spell."
    ]
  },
  {
    name: "Umbral Wave",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Doomed", "Shadow", "Umbral", "Undead"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a burst of shadow magic that envelops a 3 Space Cone. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Umbral damage.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Doom: (X MP) Each target makes a Repeated Charisma Save. Failure: The target is Doomed X.",
      "Heal Undead: (1 MP) Undead creatures in the area are immune to the damage from this Spell and regain an amount of HP equal to the damage of this Spell."
    ]
  },
  {
    name: "Vampiric Touch",
    source: "Arcane, Divine",
    school: "Nullification",
    tags: ["Blood", "Doomed", "Healing", "Slowed", "Umbral"],
    cost: "1 AP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "Make a Melee Spell Attack against the PD of a creature in range. Hit: The target takes 1 Umbral damage and you can spend 1 Rest Point to regain 1 HP.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 1 Space. You can use this Enhancement a maximum of two times.",
      "Leeching Grab: (1 AP) The target makes a Might Save against your Save DC. Save Failure: The target is Grappled by you for 1 round.",
      "Doomed: (1 AP, Repeatable) The target makes a Repeated Charisma Save against your Save DC. Save Failure: The target is Doomed for 1 minute.",
      "Life Drain: (X MP) The damage increases by X and you regain X HP on a Hit (you regain this HP without spending Rest Points)."
    ]
  },
  {
    name: "Wild Guard",
    source: "Primal",
    school: "Nullification",
    tags: ["Motion", "Ward"],
    cost: "1 AP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "You manipulate nature to protect yourself or another creature nearby. Trigger: When a target you can see within range (including yourself) is targeted by an Attack against their PD. Reaction: You grant the target a +5 bonus to its PD against this Attack.",
    enhancements: [
      "Grapple: (1 AP) If the Attacker is within 1 Space of you, they make a Physical Save. Save Failure: The Attacker becomes Grappled by you once the Attack is resolved.",
      "Nature's Intervention: (1 MP) After the Attack is resolved, the target immediately moves 2 Space for free without provoking Opportunity Attacks."
    ]
  },
  {
    name: "Zone of Peace",
    source: "Divine",
    school: "Nullification",
    tags: ["Emotions", "Tethered", "Ward"],
    cost: "2 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "You create a 3 Space diameter Sphere centered on yourself where violence is prohibited within range for the duration. Attacks made by or against creatures in the area are Hindered.",
    enhancements: [
      "Range: (1 MP) When you create the Sphere, you can center it on a Space within 5 Spaces instead.",
      "Area: (1 MP, Repeatable) The diameter of the Sphere increases by 1 Space.",
      "Tethered: (1 MP) When you cast the spell, make a Spell Check against the Repeated Intelligence Save of creatures of your choice within the area. Check Success: The target is Tethered to the area for the duration.",
      "Enforced Peace: (2 MP) When a creature makes an Attack affected by this Spell, it makes an Intelligence Save against your Save DC. Save Failure: The creature can't perform the Attack (it still spends the resources used on the Attack).",
      "Restraining Order: (2 MP) Requires Enforced Peace. If a creature fails the Save against Enforced Peace, it can't Attack for 1 round."
    ]
  }

];
