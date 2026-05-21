export interface Condition {
  name: string;
  description: string;
  stackable?: boolean;
}

export const conditions: Record<string, Condition> = {
  "Bleeding": {
    name: "Bleeding",
    description: "You take X True damage at the start of each of your turns.\n\nEnding Bleeding: All stacks of the Condition end when you're subjected to an effect that restores your HP. Alternatively, a creature can attempt to remove 1 or more stacks of the Condition by taking the Medicine Action.",
    stackable: true
  },
  "Blinded": {
    name: "Blinded",
    description: "You are subjected to the following effects:\n• You can't see (see 'Unseen' for more information).\n• All terrain is considered Difficult Terrain for you unless you're guided by another creature."
  },
  "Burning": {
    name: "Burning",
    description: "You take X Fire damage at the start of each of your turns.\n\nEnding Burning: All stacks of the Condition end when you're doused by at least 1 gallon (4 liters) of water or fully immersed in water. Alternatively, a creature within 1 Space can spend 1 AP to remove 1 stack of the Condition.",
    stackable: true
  },
  "Charmed": {
    name: "Charmed",
    description: "You are subjected to the following effects:\n• Your Charmer has ADV on Charisma Checks made against you.\n• You can't target your Charmer with harmful Attacks or effects."
  },
  "Dazed": {
    name: "Dazed",
    description: "You have DisADV X on Mental Checks.",
    stackable: true
  },
  "Deafened": {
    name: "Deafened",
    description: "You are subjected to the following effects:\n• You can't hear (see the Unheard section for more information)."
  },
  "Disoriented": {
    name: "Disoriented",
    description: "You have DisADV X on Mental Saves.",
    stackable: true
  },
  "Doomed": {
    name: "Doomed",
    description: "You are subjected to the following effects:\n• Your current and maximum HP is reduced by the value of X.\n• When an effect restores your HP, you regain X less HP than normal.\n\nEnding Doomed: All stacks of the Condition end when you complete a Long Rest.",
    stackable: true
  },
  "Exhaustion": {
    name: "Exhaustion",
    description: "You are subjected to the following effects:\n• You gain a penalty equal to X on all Checks and Saves you make.\n• Your Speed and Save DC is reduced by X.\n\nDeath: You immediately die if you reach 6 stacks of Exhaustion.",
    stackable: true
  },
  "Exposed": {
    name: "Exposed",
    description: "Attacks against you have ADV X.",
    stackable: true
  },
  "Frightened": {
    name: "Frightened",
    description: "You are subjected to the following effects:\n• You can't willingly move closer to the source.\n• You have DisADV on all Checks made against the source."
  },
  "Hindered": {
    name: "Hindered",
    description: "You have DisADV X on Attacks.",
    stackable: true
  },
  "Immobilized": {
    name: "Immobilized",
    description: "You can't move and you have DisADV on Agility Saves."
  },
  "Impaired": {
    name: "Impaired",
    description: "You have DisADV X on Physical Checks.",
    stackable: true
  },
  "Incapacitated": {
    name: "Incapacitated",
    description: "You are subjected to the following effects:\n• You can't move or speak.\n• You can't spend Actions Points or use Minor Actions."
  },
  "Intimidated": {
    name: "Intimidated",
    description: "You have DisADV on all Checks made against the source."
  },
  "Invisible": {
    name: "Invisible",
    description: "Creatures can't see you unless they have the ability to see the Invisible (see 'Unseen' for more information)."
  },
  "Paralyzed": {
    name: "Paralyzed",
    description: "You are subjected to the following effects:\n• You're Incapacitated.\n• You automatically fail Physical Saves (except against Poisons and Diseases).\n• Attacks against you have ADV.\n• Attacks made within 1 Space are considered Critical Hits."
  },
  "Petrified": {
    name: "Petrified",
    description: "You and your mundane belongings are turned into a inanimate substance (often stone). While Petrified, you count as both an object and a creature, and you're subjected to the following effects:\n• You're not aware of your surroundings.\n• You're 10 times heavier than normal.\n• You're Incapacitated.\n• You automatically fail Physical Saves.\n• Attacks against you have ADV.\n• You gain Bludgeoning Vulnerability (Double) and Resistance (Half) to all other damage.\n• Curses, Diseases, Poisons, or Conditions afflicting you are suspended (unless it imposed the Petrified Condition), and you're immune to gaining new ones."
  },
  "Restrained": {
    name: "Restrained",
    description: "You are subjected to the following effects:\n• You're Immobilized.\n• Your Attacks have DisADV.\n• Attacks against you have ADV."
  },
  "Slowed": {
    name: "Slowed",
    description: "Every 1 Space you move costs an extra X Spaces of movement.",
    stackable: true
  },
  "Stunned": {
    name: "Stunned",
    description: "Your current and maximum AP is reduced by X. While you're Stunned 4 or higher, you are subjected to the following effects:\n• You're Incapacitated.\n• Attacks against you have ADV.\n• You automatically fail Physical Saves (except against Poisons and Diseases).",
    stackable: true
  },
  "Surprised": {
    name: "Surprised",
    description: "Your current and maximum AP is reduced by 2."
  },
  "Taunted": {
    name: "Taunted",
    description: "You have DisADV on Attacks against targets other than the source."
  },
  "Terrified": {
    name: "Terrified",
    description: "You are subjected to the following effects:\n• You must spend your turns trying to move as far away as you can from the source as possible.\n• The only Action you can take is the Move Action to try to run away, or the Dodge Action if you are prevented from moving or there's nowhere farther to move."
  },
  "Tethered": {
    name: "Tethered",
    description: "You are Tethered to a creature or Space. While Tethered, you can't move farther than the specified Spaces from the location of your Tether."
  },
  "Unconscious": {
    name: "Unconscious",
    description: "When you become Unconscious, you immediately drop whatever you are holding and fall Prone. While Unconscious, you're subjected to the following effects:\n• You're Incapacitated.\n• You're not aware of your surroundings.\n• You automatically fail Physical Saves (except against Poisons and Diseases).\n• Attacks against you have ADV.\n• Attacks made within 1 Space are considered Critical Hits."
  },
  "Weakened": {
    name: "Weakened",
    description: "You have DisADV X on Physical Saves.",
    stackable: true
  }
};

// List of condition names for matching in text
export const conditionNames = Object.keys(conditions);
