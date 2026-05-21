import type { Spell } from './types';

export const divinationSpells: Spell[] = [
  {
    name: "Bless",
    source: "Divine",
    school: "Divination",
    tags: ["Embolden"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "A creature of your choice within range gains 1 of the blessings from the list below for the duration. Make a DC 15 Spell Check. Failure: The blessing is a d4. Success: The blessing is a d6. Success (10): The Blessing is a d8. Blessings: Attacks: The target adds the die to its Attack Checks for the duration. Saves: The target adds the die to its Saves for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You increase the number of targets by X. The AP cost of this Enhancement can't be paid for with MP.",
      "Full Bless: (1 MP) The target benefits from both Blessings. The cost of this Enhancement increases to 2 MP if you use the Targets Enhancement.",
      "Greater Bless: (1 MP, Repeatable) The size of the die granted increases by 1 step (d4 -> d6 -> d8 -> d10 -> d12)."
    ]
  },
  {
    name: "Danger Sense",
    source: "Arcane, Primal",
    school: "Divination",
    tags: ["Embolden", "Emotions", "Knowledge", "Sense", "Surprised", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Hour",
    description: "You grant a creature within range supernatural foresight for the duration. Make a DC 15 Spell Check. Failure: The target can't be Surprised. Success: The target also has ADV on Initiative Checks. Success (5): The target also adds a d8 to Initiative Checks.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration is increased by 1 step (1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Sense Bloodlust: (1 MP) The target can sense if creatures within 10 Spaces are Hostile towards them."
    ]
  },
  {
    name: "Detect Magic",
    source: "Arcane, Divine, Primal",
    school: "Divination",
    tags: ["Antimagic", "Knowledge", "Sense"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Minute",
    description: "You can sense the presence of magic in a 3 Space Aura for the duration. The Aura is blocked by 6 inches (15 cm) of wood or earth (rock, dirt, mud, or sand), or 1 inch (2.5 cm) of metal. Make a DC 15 Spell Check. Failure: You learn if magic is present within the area. Success: You also learn the location of sources of magical effects in the area and you can use the Examine Action. Examine: When you Sustain this Spell, or by spending 1 AP, you can examine the source of a magical effect in the area. Make a Spell Check against the effect's Save DC (or the Caster's Save DC if the effect's creator if it doesn't have a DC). Success: You learn the effect's School of Magic, Spell Tags (if any), and the amount of MP used to produce the effect. Success (5): You learn the effect's name and exactly how it works.",
    enhancements: [
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 minute -> 10 minutes -> 1 hour -> 8 hours -> until Long Rest).",
      "Area: (1 MP, Repeatable) The Aura increases by 3 Spaces.",
      "Reactive Analysis: (1 MP) For the duration, you have ADV on Spell Checks made as the Challenger of a Spell Duel.",
      "Magical Forensics: (1 MP) When you succeed with the Examine Actions, you learn the effect's magical signature, which is unique to the caster that produced the effect. Whenever you use the Examine Action again on an effect of the same magical signature, you recognize it as being from the same caster."
    ]
  },
  {
    name: "Empowered Sight",
    source: "Arcane, Primal, Divine",
    school: "Divination",
    tags: ["Embolden", "Sense"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Hour",
    description: "You empower the eyesight of a creature within range for the duration. The target gains Darkvision 10 Spaces.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step. (1 hour -> 8 hours -> until Long Rest)",
      "See Invisibility: (1 MP) The target can see Invisible creatures within 10 Spaces.",
      "Piercing Sight: (2 MP) The target can see through up to 6 inches (15 cm) of wood or earth (rock, dirt, mud, or sand), or 1 inch (2.5 cm) of metal within 10 Spaces.",
      "True Sight: (4 MP) The target also gain Truesight 10 Spaces."
    ]
  },
  {
    name: "Foresight",
    source: "Arcane, Primal",
    school: "Divination",
    tags: ["Time", "Embolden"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You grant a creature within range supernatural reflexes for the duration. Attacks made against the target's PD have DisADV for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Avoidance: (1 MP) The target has ADV on Agility Saves for the duration.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Predictive Attacks: (2 MP) The target has ADV on Attack Checks for the duration."
    ]
  },
  {
    name: "Locate Target",
    source: "Arcane, Divine",
    school: "Divination",
    tags: ["Knowledge", "Planes", "Sense"],
    cost: "1 AP + 1 MP",
    range: "1 Mile (1.6 km)",
    duration: "1 Round",
    description: "Describe or name a location, object, or creature and make a Spell Check against the DC listed in the table below. Failure: You learn if the target is within range but can't name the same target with this Spell until you complete a Long Rest. Success: You learn if the target is within range and the direction of the target if it's within range. If the target is a creature, you also learn if it's alive. Success (10): You also learn the distance to the target if it's within range.",
    enhancements: [
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 round -> 1 minute -> 1 hour -> 8 hours -> until Long Rest).",
      "Range: (1 MP, Repeatable) The range increases by 1 step (1 mile -> 10 miles -> 100 miles -> same plane of existence -> any plane of existence). If you increase the range to any plane of existence, you learn which plane of existence the target is on but not its location on that plane."
    ]
  },
  {
    name: "Scrying",
    source: "Divine",
    school: "Divination",
    tags: ["Knowledge", "Sense", "Communication"],
    cost: "1 AP + 1 MP",
    range: "Plane of Existence",
    duration: "1 Minute (Sustained)",
    description: "Describe or name a creature and make a Spell Check against the target's Charisma Save. You gain bonuses on your Spell Check as determined by the table below. The bonuses can stack but you can only benefit from each one once. The target becomes aware that they're being scried upon, but not that you are the scryer. Check Success: You conjure an invisible sensor within 2 Spaces of the target, provided it's on the same plane of existence. You can see the target through the sensor which hovers motionlessly and follows them when they move.",
    enhancements: [
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (1 minute -> 10 minutes -> 1 hour -> 8 hours -> until Long Rest).",
      "Sound: (1 MP) You hear the target through the sensor.",
      "Obscured Scrying: (1 MP) The target is no longer aware that they're being scried upon (even if you fail the Check).",
      "Extraplanar: (3 MP) The range of the Spell becomes any plane of existence."
    ]
  },

];
