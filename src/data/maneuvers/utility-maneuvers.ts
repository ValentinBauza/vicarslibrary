import type { Maneuver } from './types';

export const utilityManeuvers: Maneuver[] = [
  {
    name: "Swap",
    type: "Utility Maneuver",
    cost: "1 AP",
    range: "1 Space",
    description: "You swap places with a nearby creature. You swap Spaces with a willing creature within range. If you or the target creature provoke Opportunity Attacks as a result of swapping Spaces, those Attacks are all made against you. Reaction: You can spend an additional 1 SP to perform this Maneuver as a Reaction in response to a creature within 1 Space being Attacked. When you do, you also impose DisADV on the Attack against them.",
    enhancements: [
      "Escape: (1 SP) The target can immediately move up to its Speed after swapping Spaces.",
      "Seamless Swap: (1 SP) Swapping Spaces doesn't provoke any Opportunity Attacks.",
      "Hostile Swap: (1 SP) You can target an unwilling creature. When you do, make a Martial Check against the target's Physical Save. Check Success: You swap Spaces with them."
    ],
    tags: []
  },
  {
    name: "Resolve",
    type: "Utility Maneuver",
    cost: "1 AP + 1 SP",
    range: "Self",
    description: "You take a moment to catch your breath and refocus. Make a DC 15 Martial Check. Failure: You gain 2 Temp HP for 1 Round. Success: You gain 3 Temp HP for 1 Round. Success (each 5): +1 Temp HP.",
    enhancements: [
      "Increased Temp HP: (1 SP, Repeatable) You gain +2 Temp HP.",
      "Physical Resolve: (1 SP) You gain ADV on Physical Saves for the duration.",
      "Mental Resolve: (1 SP) You gain ADV on Mental Saves for the duration."
    ],
    tags: []
  },
  {
    name: "Recover",
    type: "Utility Maneuver",
    cost: "1 AP",
    range: "Self",
    description: "You take a moment to catch your breath and refocus. You attempt to spend Rest Points to regain HP equal to the Rest Points spent. Make a DC 15 Martial Check. Failure: You can spend 2 Rest Points. Success: You can spend up to 3 Rest Points. Success (each 5): You can spend 1 additional Rest Point.",
    enhancements: [
      "Increased Health: (1 AP or 1 SP, Repeatable) You can spend 1 additional Rest Point.",
      "Repeat Save: (1 AP or 1 SP) You can repeat a Save against an effect you're subjected to."
    ],
    tags: []
  },
  {
    name: "Heroic Pass Through",
    type: "Utility Maneuver",
    cost: "1 AP + 1 SP",
    range: "Self",
    description: "When you take the Pass Through Action, you can add the following Maneuver Enhancements. When you add a Maneuver Enhancement (or perform the Action using SP), you're considered to be performing a Maneuver. Stamina Action: You can spend SP instead of AP to perform the Pass Through Action.",
    enhancements: [
      "Brush Past: (1 SP) The creature's Space isn't considered Difficult Terrain for this movement and you don't provoke an Opportunity Attack from them if you leave their reach as part of the same movement.",
      "Let's Go: (1 SP) On a Success, you can pull a willing creature within 1 Space of you to an unoccupied Space within 1 Space of the creature you pass."
    ],
    tags: []
  },
  {
    name: "Line Run",
    type: "Utility Maneuver",
    cost: "2 AP + 1 SP",
    range: "Self",
    description: "You run through a line of enemies. You move in a Line up to your Speed and make a Martial Check. Each creature within the Line must make a Physical Save against your Martial Check when you attempt to move through its Space. Contest Failure: You're unable to move through the creature's Space, preventing you from moving any further. Contest Success: You can move through the creature's Space and they are knocked Prone.",
    enhancements: [
      "Distance: (1 SP, Repeatable) You can move up to an additional half your Speed.",
      "Brush Past: (1 SP) The Space of every creature who fails the contest isn't considered Difficult Terrain for this movement and you don't provoke an Opportunity Attack from them."
    ],
    tags: []
  },
  {
    name: "Reposition",
    type: "Utility Maneuver",
    cost: "1 AP + 1 SP",
    range: "Self",
    description: "Sprint across the battlefield. Trigger: A creature ends their turn. Reaction: You immediately move up to your Speed.",
    enhancements: [
      "Agile: (1 SP) You ignore Difficult Terrain during this movement.",
      "Disengage: (1 AP) You gain the benefits of the Disengage Action for the Movement. When you use this Enhancement, you can spend 1 additional SP to gain the benefits of the Full Disengage Action instead.",
      "Coordinated Movement: (2 SP, Repeatable) A willing creature of your choice within 1 Space of your original position can move without spending its own movement, provided they're able to move and they end their movement within 1 Space of your destination."
    ],
    tags: []
  }
];
