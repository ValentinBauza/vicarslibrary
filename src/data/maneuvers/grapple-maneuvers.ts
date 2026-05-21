import type { Maneuver } from './types';

export const grappleManeuvers: Maneuver[] = [
  {
    name: "Slam",
    type: "Grapple Maneuver",
    cost: "1 AP",
    range: "Melee",
    description: "You slam a Grappled creature. Make a Melee Martial Attack against the target's AD. Hit: The target takes 1 Bludgeoning damage.",
    enhancements: [
      "Finishing Slam: (1 SP) You deal 2 additional damage. The Grapple ends.",
      "Stunned: (2 SP, Repeatable) The target makes a Physical Save. Save Failure: They are Stunned for 1 Round. You can use this Enhancement a maximum of two times.",
      "Wall Rake: (X SP) You slam 1 Grappled creature into a wall within 1 Space and move up to X Spaces parallel to the wall, ending your movement within 1 Space of the wall. The target makes a Repeated Might Save against your Save DC. Save Failure: They gain Bleeding X from the wall, where X is the number of Spaces you moved."
    ],
    tags: []
  },
  {
    name: "Restrain",
    type: "Grapple Maneuver",
    cost: "1 AP + 1 SP",
    range: "Melee",
    description: "You restrain a grappled target. You make a Martial Check against the target's Repeated Physical Save. Contest Success: The target is Restrained until the Grapple ends.",
    enhancements: [
      "Prone: (1 SP) The target also falls Prone (you don't fall Prone unless you choose to do so).",
      "Chokehold: (2 SP) The target also can't speak or breathe until they are no longer Restrained by you."
    ],
    tags: []
  },
  {
    name: "Body Block",
    type: "Grapple Maneuver",
    cost: "1 AP + 1 SP",
    range: "Melee",
    description: "You reposition a grappled creature to shield yourself from damage. Trigger: A creature that's not Grappled by you Hits you with an Attack. Reaction: Make a Martial Check against the Grappled target's Might Save. Check Success: The damage from the Attack is shared by you and the Grappled creature, and you can move the Grappled creature to any Space adjacent to you immediately afterwards.",
    enhancements: [
      "Switch: (1 SP) After completing the Reaction, you switch places with the Grappled target. This movement doesn't provoke Opportunity Attacks against either you or the target.",
      "Partial Block: (1 SP) Your portion of the shared damage is reduced to 0.",
      "Full Block: (2 SP) The Attack made against you is made against the Grappled creature instead. They take all of the damage and effects instead of you, and if the Attack is accompanied by a Save (as with a Dynamic Attack Save), they make the Save instead of the target. If they were also originally a target of the Attack, they resolve both separately."
    ],
    tags: []
  },
  {
    name: "Throw Creature",
    type: "Grapple Maneuver",
    cost: "Throw (1 AP)",
    range: "Melee",
    description: "When you throw a creature using the Throwing rules, you can add the following Maneuver Enhancements. When a Maneuver Enhancement is considered to be performing a Maneuver.",
    enhancements: [
      "Increased Throw: (X SP) The target is thrown X Spaces further.",
      "Skyward: (2 SP) Your throw distance isn't halved for vertical throws.",
      "Prone: (1 SP) The target also falls Prone."
    ],
    tags: []
  }
];
