import type { Spell } from './types';

export const transmutationSpells: Spell[] = [
  {
    name: "Cold Imbued",
    source: "Arcane, Primal",
    school: "Transmutation",
    tags: ["Cold", "Slowed", "Strike", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Cold damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Cold damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Slowing Strikes: (1 MP) For the duration, 1 target of an Attack affected by this Spell makes a Might Save against your Save DC. Save Failure: The target is Slowed for 1 round.",
      "Chilling Strikes: (1 MP) For the duration, 1 target of an Attack affected by this Spell makes a Might Save against your Save DC. Save Failure: The target can't take Reactions for 1 round."
    ]
  },
  {
    name: "Enhance Ability",
    source: "Divine, Primal",
    school: "Transmutation",
    tags: ["Embolden"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You bolster the Physical or Mental (your choice) Checks and Saves of a creature within range for the duration. Make a DC 15 Spell Check. Failure: The target adds a d4 to Checks and Saves of the chosen Attribute category. Success: The target adds a d6 to Checks and Saves of the chosen Attribute category. Success (10): The target adds a d8 instead.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration is increased by 1 step (1 min -> 10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Full Enhance: (1 MP) You bolster all the target's Attributes. The cost of this Enhancement increases to 2 MP if you use the Targets Enhancement.",
      "Greater Enhance: (1 MP, Repeatable) The size of the die granted increases by 1 step (d4 -> d6 -> d8 -> d10 -> d12)."
    ]
  },
  {
    name: "Fire Imbued",
    source: "Arcane, Primal",
    school: "Transmutation",
    tags: ["Burning", "Fire", "Strike", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Fire damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Fire damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Flame Lash: (1 MP) The range of Attacks affected by this Spell increases by 1 Space for Melee Attacks, or by 5 Spaces for Ranged Attacks.",
      "Burning Strikes: (X MP) For the duration, 1 target of an Attack affected by this Spell makes a Repeated Physical Save against your Save DC. Save Failure: The target is Burning X for 1 minute."
    ]
  },
  {
    name: "Invisibility",
    source: "Arcane, Divine",
    school: "Transmutation",
    tags: ["Illusion", "Invisible", "Shadow"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You magically cloak a target within range for the duration. Make a DC 15 Spell Check. Failure: The target is Invisible. Success: The target is Invisible and can immediately take the Hide Action for free. The Spell ends early if the target takes any Action or Reaction beside the Move, Dodge, Hide, or Search Actions. DC Tip: Being invisible makes you Unseen, but if you want to be fully hidden from a creature you need to take the Hide Action to also become Unheard.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 minute -> 10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Mass Invisibility: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Greater Invisibility: (3 MP) Choose 1 target. The Spell no longer ends early when the target takes any Action or Reaction."
    ]
  },
  {
    name: "Lightning Imbued",
    source: "Arcane, Primal",
    school: "Transmutation",
    tags: ["Lightning", "Strike", "Trap", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Lightning damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Lightning damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Chain Lightning: (X MP) For the duration, when you make an Attack affected by this Spell, you can choose 1 additional target within 3 Spaces of the original target using the same Martial Attack for the additional target. Hit: The Target takes X Lightning damage.",
      "Static Strike: (X MP) For the duration, 1 target of an Attack affected by this Spell makes a Physical Save against your Save DC. Save Failure: For the next round, the first time the target willingly moves or takes a Reaction it takes X Lightning damage."
    ]
  },
  {
    name: "Poison Imbued",
    source: "Arcane, Primal",
    school: "Transmutation",
    tags: ["Ailment", "Impaired", "Poison", "Strike", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Poison damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Poison damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Impairing Strikes: (2 MP) For the duration, 1 target of an Attack affected by this Spell makes a Might Save against your Save DC. Save Failure: The target is Impaired for 1 round.",
      "Poisoned Strikes: (X MP) For the duration, 1 target of an Attack affected by this Spell makes a Repeated Might Save against your Save DC. Save Failure: The target is Poisoned for 1 minute. Creatures Poisoned by this Spell take X Poison damage at the start of each of their turns. This Poison can be removed by any effect that ends a Basic Poison. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Poison from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Basic Poison on a success."
    ]
  },
  {
    name: "Primal Hide",
    source: "Primal",
    school: "Transmutation",
    tags: ["Embolden", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Hour",
    description: "You harden the skin of a creature within range. The target gains +2 PD for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 hour -> 8 hours -> until Long Rest).",
      "Armored: (1 MP) The target gain an additional +1 PD.",
      "Heavily Protected: (1 MP) The target gains EDR."
    ]
  },
  {
    name: "Psychic Imbued",
    source: "Arcane, Divine",
    school: "Transmutation",
    tags: ["Dazed", "Deafened", "Psychic", "Strike", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Psychic damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Psychic damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Dazing Strikes: (1 MP) For the duration, 1 target of an Attack affected by this Spell makes an Intelligence Save against your Save DC. Save Failure: The target is Dazed for 1 round.",
      "Silencing Strikes: (1 MP) For the duration, 1 target of an Attack affected by this Spell makes a Charisma Save against your Save DC. Failure: The target is Deafened and can't speak for 1 round."
    ]
  },
  {
    name: "Quicksand",
    source: "Primal",
    school: "Transmutation",
    tags: ["Earth", "Hindered", "Illusion", "Slowed", "Tethered"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You turn 3 Space diameter Sphere of ground within range into quicksand for the duration. Creatures in the area are Slowed 2. Spell Cast: When you cast the Spell, make a Spell Check against the Might Save of each target in the area. Check Success: The target is Hindered for the duration or until it leaves the area.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Grasping Sand: (1 MP) Creatures Hindered by this Spell are also Tethered to the area. A creature can spend 1 AP to make a Repeated Might Save. Save Success: The target is no longer Tethered to the area.",
      "False Appearance: (1 MP) The Spell lasts for 1 hour and the area appears as normal terrain. A creature can discern a Space has been altered with a successful Nature Check against your Save DC."
    ]
  },
  {
    name: "Radiant Imbued",
    source: "Divine",
    school: "Transmutation",
    tags: ["Light", "Radiant", "Strike", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Radiant damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Radiant damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Illuminating Strikes: (1 MP) For the duration, 1 target of an Attack affected by this Spell makes a Physical Save against your Save DC. Save Failure: The target emits light in a 1 Space Aura and can't benefit from 1/2 Cover or being Invisible.",
      "Guiding Strikes: (2 MP) For the duration, 1 target of an Attack affected by this Spell makes a Physical Save against your Save DC. Save Failure: Attacks made against the target add a d4 to the Check for 1 round."
    ]
  },
  {
    name: "Shadowbind",
    source: "Arcane, Divine",
    school: "Transmutation",
    tags: ["Doomed", "Immobilized", "Shadow", "Tethered"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You bind a creature using its shadow. Make a Spell Check against the Repeated Charisma Save of a creature within range. Check Success: The target becomes Tethered 1 to their Space.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Immobilize: (1 MP) The target becomes Immobilized instead.",
      "Doomed: (X MP) Whenever the target fails a Save against this Spell (including the initial Save) they become Doomed X.",
      "Choke: (2 MP) The target can't breathe for the duration."
    ]
  },
  {
    name: "Umbral Imbued",
    source: "Arcane, Divine",
    school: "Transmutation",
    tags: ["Blood", "Doomed", "Healing", "Strike", "Umbral", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute (Sustained)",
    description: "For the duration, you deal +1 Umbral damage on Martial Attacks.",
    enhancements: [
      "Range: (1 AP) The range becomes 5 Spaces, allowing you to target other creatures with the Spell.",
      "Damage: (2 MP, Repeatable) Attacks affected by this Spell deal +1 Umbral damage for the duration.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell.",
      "Targets: (1 AP + X MP) You target X additional creatures of your choice within 5 Spaces that you can see. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Dooming Strikes: (X MP) For the duration, 1 target of an Attack affected by this Spell makes a Charisma Save against your Save DC. Save Failure: The target is Doomed X for 1 round.",
      "Draining Strikes: (X MP) For the duration, when you deal damage to a target with an Attack affected by this Spell, you can spend up to X Rest Points, regaining HP equal to the Rest Points Spent."
    ]
  },
  {
    name: "Alter Size",
    source: "Arcane, Divine",
    school: "Transmutation",
    tags: ["Embolden", "Enfeeble", "Metamorphosis"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You alter the size of an object that is not being held or carried or a creature within range, making it larger or smaller for the duration. Object: Make a DC 10 Spell Check. Success: You make the object Larger or Smaller. Larger: The object's size increases by 1 and its weight is multiplied by 4. If there isn't enough space, it increases to the maximum possible size in the available space. Smaller: The object's size decreases by 1 and its weight is divided by 4. Creature: Make a Spell Check contested by the target's Repeated Might Save. Contest Success: They become 1 size Larger or Smaller (your choice). Everything they are wearing and carrying changes size with them. Any item no longer held or carried by the creature returns to normal size at the end of that turn. Larger: The target's size increases by 1 and their weight is multiplied by 4. If there isn't enough space, it increases to the maximum possible size in the available space. Smaller: The target's size decreases by 1 and their weight is divided by 4.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration is increased by 1 step (10 min -> 1 hour -> 8 hour -> until Long Rest). You no longer need to Sustain the Spell and you can end it at any time for free.",
      "Greater Alteration: (2 MP, Repeatable) The target's Size increases or decreases by 1 more step (e.g Medium -> Large -> Huge)."
    ]
  },
  {
    name: "Blessing of Earth",
    source: "Primal",
    school: "Transmutation",
    tags: ["Earth", "Embolden", "Motion", "Sense"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 Minutes (Sustained)",
    description: "You grant a creature with range Tremorsense 3 Spaces and a Burrow Speed equal to half their Speed for the duration. Spell Cast: When you cast the Spell, make a DC 15 Spell Check. Success: The target can immediately move in any direction up to their Speed, provided they move underground. Burrow Speed: You can move through sand, dirt, mud, and snow, but not through solid ice or rock. When you do, you leave a collapsed tunnel behind you. DC Tip: A creature that requires air to breath will need to hold their breath or begin Suffocating while Burrowing underground.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target X additional creatures within range.",
      "Earth Walk: (1 MP) When the target walks along the ground, they can choose to leave behind Difficult Terrain in their path.",
      "Greater Blessing: (2 MP) The Tremorsense increases by 2 Spaces, the Burrow Speed increases to equal their Speed, and they can breathe underground."
    ]
  },
  {
    name: "Blessing of Water",
    source: "Primal",
    school: "Transmutation",
    tags: ["Embolden", "Metamorphosis", "Motion", "Water"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 minutes",
    description: "You grant a creature with range a Swim Speed, the ability to breathe underwater, and Tremorsense 5 Spaces while underwater for the duration. Spell Cast: When you cast the Spell, make a DC 15 Spell Check. Success: The target can immediately move in any direction up to their Speed, provided they're moving in water.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target 2 additional creatures within range per X MP.",
      "Water Walk: (1 MP) The target can walk on water as if it were solid ground and can stop doing so anytime during their use either their Speed or Swim Speed for this movement.",
      "Greater Blessing: (1 MP) At the start of each of the target's turns they gain movement equal to their speed that can only be used on swimming."
    ]
  },
  {
    name: "Chaos Bolt",
    source: "Arcane",
    school: "Transmutation",
    tags: ["Chaos"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You hurl a bolt of volatile energy at a creature within range. Roll a d12 to determine the bolt's damage type. Make a Ranged Spell Attack against the PD of a target within range while they make an Intelligence Save. Hit: The target takes 2 damage of the rolled damage type. Save Failure: The target is subjected to the effects of the Save Failure column based on the result rolled. D12 DAMAGE SAVE FAILURE: 1 Bludgeoning - The target is pushed 1 Space away. Failure (each 5): The target is pushed 1 additional Space. 2 Piercing - The target can't take Reactions for 1 round. 3 Slashing - The target begins Bleeding for 1 minute. 4 Cold - The target is Slowed for 1 round. 5 Corrosive - The target is Hindered for 1 round. 6 Fire - The target begins Burning for 1 minute. 7 Lightning - The target is Stunned until the start of their turn. 8 Poison - The target is Impaired for 1 round. 9 Psychic - The target is Dazed for 1 round. 10 Radiant - Attacks made against the target add a d4 to the check for 1 round. 11 Umbral - The target is Doomed for 1 round. 12 True - The target is Exposed for 1 round. Spell Passive: Wild Magic Surge - When you Critically Fail or Critically Succeed on a Check made to cast this Spell, you roll on the Wild Magic Table.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (1 AP, Repeatable) The damage increases by 1 for 1 target of your choice.",
      "Unstable Surge: (2 MP, Repeatable) Choose 1 additional target within 5 Spaces of the original target using the same Spell Attack for all targets. You roll the damage type (and condition) again for each new target. If you use this Enhancement multiple times, you choose an additional target within 5 Spaces of the previously chosen target."
    ]
  },
  {
    name: "Chaos Torrent",
    source: "Arcane",
    school: "Transmutation",
    tags: ["Chaos", "Enfeeble"],
    cost: "2 AP + 1 MP",
    range: "Self",
    duration: "Instantaneous",
    description: "A spiraling surge of warped energy erupts from you in an 8 Space Line. Make a Spell Check against the Intelligence Save of each target in the area. Check Success: The target roll a d6 on the table below. D6 EFFECT: 1 The target can't take Reactions until the end of its next turn. 2 The target is Slowed 2 for 1 Round. 3 The target immediately makes a Melee Martial Attack as a Reaction against a random creature within its Melee range. 4 The target is teleported a d4 Spaces in a random direction. 5 The target is Weakened for 1 Round. 6 The target is Disoriented for 1 Round.",
    enhancements: [
      "Remote: (1 MP) The range becomes 5 Spaces, with the origin of the Line becoming the chosen Space.",
      "Length: (1 AP, Repeatable) The length of the Line increases by 4 Spaces.",
      "Width: (X MP) The width of the Line increases by X Spaces.",
      "Chaos Surge: (2 MP) Each target rolls twice and suffers both effects. If a target rolls the same number twice, it rolls again until it gets two different results."
    ]
  },

];
