import type { Maneuver } from './types';

export const defenseManeuvers: Maneuver[] = [
  {
    name: "Parry",
    type: "Defense Maneuver",
    cost: "1 AP",
    range: "Self (or 1 Space if wielding a Melee Weapon or Shield)",
    description: "You deflect an attack. Trigger: A target you can see within range (including yourself) is targeted by an Attack against its PD. Reaction: You grant the target a +5 bonus to its PD against this Attack.",
    enhancements: [
      "Alert: (1 SP) The Attacker's next Attack this turn against the target has DisADV.",
      "Disarm: (1 SP) If the Attacker is within 1 Space of you or the target, they make a Physical Save. Save Failure: The target drops the Weapon used for the Attack in a random direction once the Attack is resolved. Save Failure (5): You gain possession of the Weapon, provided you have a free hand to hold it."
    ],
    tags: []
  },
  {
    name: "Brace",
    type: "Defense Maneuver",
    cost: "1 AP",
    range: "Self (or 1 Space if wielding a Shield)",
    description: "You stand firm against an attack. Trigger: A target you can see within range (including yourself) is targeted by an Attack against its AD. Reaction: You grant the target a +5 bonus to its AD against this Attack.",
    enhancements: [
      "Targets: (1 AP, Repeatable) You can target 1 additional creature within range that's also targeted by the same Attack.",
      "Grapple: (1 SP) If the Attacker is within 1 Space of you, they make a Physical Save. Save Failure: The Attacker becomes Grappled by you once the Attack is resolved."
    ],
    tags: []
  },
  {
    name: "Side Step",
    type: "Defense Maneuver",
    cost: "1 AP",
    range: "Self",
    description: "You avoid an enemy attack by quick repositioning. Trigger: You're targeted by an Attack. Reaction: You impose DisADV on the Attack against you. You can move 1 Space after the Attack, provided you stay within range of the Attack.",
    enhancements: [
      "Evasion: (1 SP) You gain ADV on any Saves imposed by the Attack.",
      "Disengage: (1 SP) Movement made as part of this Maneuver doesn't provoke Opportunity Attacks.",
      "Slip Away: (1 SP) You can move up to your Speed instead of 1 Space and you no longer need to stay in range of the Attack."
    ],
    tags: []
  },
  {
    name: "Protect",
    type: "Defense Maneuver",
    cost: "1 AP",
    range: "1 Space",
    description: "You take damage for a nearby ally. Trigger: A target you can see within range is Hit by an Attack. Reaction: The damage of the Attack is shared between you and the target. The damage you take bypasses any Damage Reduction you have.",
    enhancements: [
      "Reprise: (1 AP, Repeatable) You can target 1 additional creature within range that's also targeted by the same Attack.",
      "Taunt: (1 SP) The attacker makes a Charisma Save. Save Failure: They're Taunted by you for 1 Round.",
      "Heroic Protect: (2 SP) The Attack made against your target is made against you instead. You take all of the damage and effects instead of them, and if the Attack is accompanied by a Save (as with a Dynamic Attack Save), you make the Save instead of the target. If you were also originally a target of the Attack, you resolve both separately.",
      "Resistance: (1 SP) You gain Resistance (Half) to any damage you take from using this Maneuver. The cost of this Enhancement increases by 1 SP if you use the Heroic Protect Enhancement."
    ],
    tags: []
  },
  {
    name: "Endure",
    type: "Defense Maneuver",
    cost: "1 AP + 1 SP",
    range: "Self (or 1 Space if wielding a Shield)",
    description: "You push through an attack. Trigger: A target you can see within range (including yourself) is Hit by an Attack. Reaction: The target takes 1 less damage from the Attack.",
    enhancements: [
      "Heroic Endure: (X SP) The target takes X less damage from the Attack.",
      "Steadfast: (1 SP) The target isn't Vulnerable to damage from the Attack.",
      "Repel: (X SP) After the Attack, if the Attacker is within 1 Space of you or the target, they make a Might Save against your Save DC. Save Failure: They are pushed X Spaces away. Save Failure (each 5): +1 Space pushed."
    ],
    tags: []
  }
];
