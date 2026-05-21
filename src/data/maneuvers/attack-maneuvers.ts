import type { Maneuver } from './types';

export const attackManeuvers: Maneuver[] = [
  {
    name: "Heroic Bash",
    type: "Attack Maneuver",
    cost: "1 AP + 1 SP",
    range: "Weapon or Unarmed Strike",
    description: "The force of your Attack pushes the target away. Make a Melee Martial Attack against the PD of a target within range, and it makes a Might Save against your Save DC. Hit: The target takes the damage of your Weapon or Unarmed Strike. Save Failure: The target is pushed 1 Space away from you. Save Failure (each 5): The target is pushed up to 1 additional Space.",
    enhancements: [
      "Knock Prone: After the result, you can choose to reduce the total distance a target is pushed by 1 Space to knock them Prone instead.",
      "Airborne: When you choose to push them upward into the air, the distance they're pushed is halved.",
      "Increased Distance: (X SP) The distance pushed increases by X Spaces.",
      "Bowling Ball: (1 SP) If the target collides with another creature as part of this movement, the creature it collides with must make a Might Save against your Save DC. Save Failure: The target is knocked Prone. Save Failure (each 5): The target is also pushed 1 Space away from you."
    ],
    tags: []
  },
  {
    name: "Savage Strike",
    type: "Attack Maneuver",
    cost: "1 AP + 1 SP",
    range: "Weapon or Unarmed Strike",
    description: "You cause a creature to bleed with the ferocity and precision of your attack. Make a Martial Attack against the PD of a target within range, and it makes a Repeated Physical Save against your Save DC. Hit: The target takes the damage of your Weapon or Unarmed Strike. Save Failure: The target becomes Impaired or begins Bleeding (your choice) for 1 minute.",
    enhancements: [
      "Improved Bleed: (X SP) On a failed Save, the target gains Bleeding X for the duration.",
      "Improved Impaired: (X SP) On a failed Save, the target gains Impaired X for the duration.",
      "Weakened: (2 SP) On a failed Save, the target is Weakened for the duration."
    ],
    tags: []
  },
  {
    name: "Sunder Strike",
    type: "Attack Maneuver",
    cost: "1 AP + 2 SP",
    range: "Weapon or Unarmed Strike",
    description: "You make a target vulnerable to Physical damage. Make a Martial Attack against the PD of a target within range, and it makes a Physical Save against your Save DC. Hit: The target takes the damage of your Weapon or Unarmed Strike. Save Failure: The target gains Physical Vulnerability (1) for 1 Round.",
    enhancements: [
      "Improved Vulnerability: (2 SP, Repeatable) The Vulnerability increases by 1.",
      "Break DR: (1 SP) On a failed Save, the target doesn't benefit from PDR for the duration.",
      "Break Resistance: (2 SP) On a failed Save, the target doesn't benefit from Physical Resistance for the duration."
    ],
    tags: []
  },
  {
    name: "Swift Strike",
    type: "Attack Maneuver",
    cost: "1 AP + 1 SP",
    range: "Weapon or Unarmed Strike",
    description: "You move around the area, attacking 1 creature you pass along the way. You move a number of Spaces up to your Speed and make a Melee Martial Attack against the PD of 1 target within your Melee Range at any point during this movement. Hit: The target takes the damage of your Weapon or Unarmed Strike.",
    enhancements: [
      "Disengage: (1 SP) This movement doesn't provoke Opportunity Attacks.",
      "Subsequent Strike: (1 AP + 1 SP, Repeatable) You gain additional movement equal to half your Speed and you can target an additional creature using the same Attack Check."
    ],
    tags: []
  },
  {
    name: "Meteor Strike",
    type: "Attack Maneuver",
    cost: "1 AP + 1 SP",
    range: "Weapon or Unarmed Strike",
    description: "A mid-air strike. Your Jump Distance increases by 2, you Jump up to your Jump Distance without spending movement (provided you can move), and make a Melee Martial Attack against a target within range at any point during this Jump or where you land. Reaction: You can spend an additional 1 SP to perform this Maneuver as a Reaction in response to a creature entering a Space within your Jump Distance that's at least 1 Space above the ground.",
    enhancements: [
      "Falling Strike: (1 SP) The creature makes a Physical Save against your Save DC. Save Failure: The creature is knocked Prone.",
      "Slam Down: (1 SP, Requires Falling Strike) On a failed Save, the target doesn't benefit from any ability that prevents it from falling or landing as a result of being knocked Prone in midair until the end of the turn.",
      "Impact Crater: (1 AP + 1 SP) All creatures within a 1 Space aura of where you land must make a Physical Save against your Save DC. Save Failure: The creature falls Prone.",
      "Larger Crater: (2 SP, Repeatable, Requires Impact Crater) The size of the Aura increases by 1."
    ],
    tags: []
  },
  {
    name: "Whirlwind",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "1 Space Aura",
    description: "You attack in a circle around you, attacking everyone within range. Make an Area Martial Attack using a Melee Weapon or Unarmed Strike against the AD of every target within range. Hit: The target takes the damage of your Weapon or Unarmed Strike. Reach Weapon: If you have a Reach Weapon, you can choose to increase the Aura by 1 Space. When you do, you can't Attack targets within 1 Space of you.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Area: (2 SP, Repeatable) The Aura increases by 1 Space.",
      "Vortex: (2 SP, Repeatable) Each target makes a Might Save. Save Failure: The target is pushed up to 1 Space horizontally in a direction of your choice. The target is moved 1 additional Space each time you use this Enhancement."
    ],
    tags: []
  },
  {
    name: "Cleave",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "2 Space Arc (Self)",
    description: "You swing wide to attack targets around you. Make an Area Martial Attack against the AD of every target within range. Hit: The target takes the damage of your Weapon or Unarmed Strike. Reach Weapon: If you have a Reach Weapon, you can extend the Point of Origin 1 Space away from you. The Arc must still be facing away from you.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Area: (2 SP, Repeatable) The Arc increases by 1 Space.",
      "Careful Cleave: (X SP) You can choose X targets in the area to avoid with the Attack.",
      "Sweep: (2 SP) Each target makes an Agility Save. Save Failure: The target is knocked Prone."
    ],
    tags: []
  },
  {
    name: "Pathcarver",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "4 Space Line (Self)",
    description: "You attack every creature in a line. Make an Area Martial Attack with a Melee Weapon or Unarmed Strike against the AD of every target within a 4 Space Line. Hit: The target takes the damage of your Weapon or Unarmed Strike. After Attacking, you can move to any Space within 1 Space of the area without provoking Opportunity Attacks from the targets and without spending your movement. Reach Weapon: If you have a Reach Weapon, you can extend the Point of Origin 1 Space away from you. When you do, the Line must extend in a direction away from you.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Increase Length: (1 SP, Repeatable) The length of the Line increases by 2 Spaces.",
      "Carved Path: (2 SP, Repeatable) Each target makes a Might Save. Save Failure: The target is pushed 1 Space horizontally out of the area in a direction of your choice. The target is moved 1 additional Space each time you use this Enhancement."
    ],
    tags: []
  },
  {
    name: "Piercing Shot",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "Ranged Weapon or Weapon with the Toss or Thrown Property",
    description: "You fire a powerful shot that pierces through creatures in a line. Make an Area Martial Attack against the AD of every target within a 8 Space Line that's Point of Origin is within Range. The Line must extend away from you. Hit: The target takes the damage of your Weapon. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Area: (1 SP, Repeatable) The length of the Line increases by 4 Spaces.",
      "Penetrating Shot: (1 SP) The Attack ignores Cover but is blocked by 6 inches (15 cm) of wood or soft earth (dirt, mud, or sand), or 1 inch (25 mm) of metal or rock."
    ],
    tags: []
  },
  {
    name: "Scattershot",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "Self",
    description: "You unleash a cone of projectiles. Requirements: Ranged Weapon. Make an Area Martial Attack against the AD of every target within a 3 Space Cone. Hit: The target takes the damage of your Weapon.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Area: (2 SP, Repeatable) The length of the Cone increases by 1 Space.",
      "Stagger: (1 SP) Each creature makes a Might Save. Save Failure: The target is unable to take Reactions for 1 Round."
    ],
    tags: []
  },
  {
    name: "Volley",
    type: "Attack Maneuver",
    cost: "2 AP",
    range: "Ranged Weapon",
    description: "You bombard an area with a series of projectiles. Make an Area Martial Attack against the AD of every target within a 3 Space Diameter Sphere that's Point of Origin is within Range. Hit: The target takes the damage of your Weapon. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated.",
    enhancements: [
      "Damage: (2 SP, Repeatable) The damage increases by 1.",
      "Area: (2 SP, Repeatable) The diameter of the Sphere increases by 1 Space.",
      "Rain of Fire: (1 SP) Targets within the area don't gain the benefits of 1/2 Cover against this Attack.",
      "Suppressive Fire: (2 SP) Each creature makes a Charisma Save. Save Failure: The creature becomes Hindered for 1 Round"
    ],
    tags: []
  }
];
