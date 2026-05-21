import type { Spell } from './types';

export const astromancySpells: Spell[] = [
  {
    name: "Arcane Bolt",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Bludgeoning", "Piercing", "Slashing"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of pure magical energy that homes in on a target. Make a Ranged Spell Attack against the AD of a target within range. Hit: The target takes 1 Bludgeoning, Slashing or Piercing damage (your choice).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP, Repeatable) The damage increases by X against 1 target of your choice.",
      "Arcane Missiles: (1 AP + X MP) Choose X additional targets within range using the same Spell Attack for all targets. The AP cost of this Enhancement can't be paid for with MP.",
      "Autonomous: (1 MP) You can Attack a target you've seen since the start of your last turn, provided it's within range and there's a path between you and the target the projectile can follow. This attack ignores 1/2 or 3/4 Cover and you don't have DisADV if the target is Unseen by you."
    ]
  },
  {
    name: "Arcane Wave",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Bludgeoning", "Deafened", "Motion", "Piercing", "Slashing"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a burst of destructive energy that envelops a 3 Space Cone. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Bludgeoning, Slashing or Piercing damage (your choice).",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Fractured: (1 MP) The Area becomes Difficult Terrain. A creature can spend 1 AP to clear 1 Space of this Difficult Terrain minorly returning the area to normal.",
      "Reverberate: (X MP) Each target makes a Physical Save. Save Failure: The target is pulled toward you or pushed away from you up to X Spaces (your choice) and is Deafened for 1 Round."
    ]
  },
  {
    name: "Banish",
    source: "Arcane, Divine",
    school: "Astromancy",
    tags: ["Incapacitated", "Planes", "Psychic", "Teleportation"],
    cost: "1 AP + 2 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You attempt to sever a target's link to this plane. Make a Spell Check against the Repeated Charisma Save of a target within range. Check Success: The target is banished to a harmless demiplane for the duration. If the target is native to another plane, it is sent back to its home plane instead. While banished, the target is Incapacitated. The target cannot affect or be affected by anything on the plane it is banished from. When the Spell ends, the creature reappears in the Space it left, or the nearest unoccupied Space. If it was banished to its home plane for 1 minute, the effect becomes permanent (GMs discretion).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Severing Seal: (1 MP) If the effect of the Spell becomes permanent, you can create a temporary seal preventing the creature from returning. The creature can't return to the plane it was banished from for 24 hours.",
      "Planar Tear: (X MP) You cause a tear in the fabric of the planes to appear in a 3 Space diameter Sphere centered on the Spaces the creature occupied. When a creature enters the area for the first time on its turn, or starts its turn there, it makes a Charisma Save against your Save DC. Save Failure: The target takes X Psychic damage. The tear disappears when the Spell ends."
    ]
  },
  {
    name: "Blessing of Air",
    source: "Arcane, Primal",
    school: "Astromancy",
    tags: ["Air", "Embolden", "Gravity", "Motion"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 Minutes (Sustained)",
    description: "You grant a creature with range the following benefits for the duration: Glide Speed: They can use their movement to glide horizontally in the air. Altitude Drop: If they end their turn midair, they Control Fall 1 Spaces. Controlled Falling: They suffer no damage from Controlled Falling. Spell Cast: When you cast the Spell, make a DC 15 Spell Check. Success: The target can immediately move in any direction (including vertically) up to their Speed.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Hover: (1 MP) The target isn't effected by Altitude Drop and instead hovers in place when not moving, even while Unconscious or Prone.",
      "Fly: (2 MP) The target isn't effected by Altitude Drop and gains a Fly Speed equal to its Speed for the duration."
    ]
  },
  {
    name: "Blessing of Zephyr",
    source: "Primal",
    school: "Astromancy",
    tags: ["Embolden", "Motion"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 Minutes",
    description: "You grant a creature with range a Climb Speed and Jump Distance equal to their Speed for the duration. Spell Cast: When you cast the Spell, make a DC 15 Spell Check. Success: The target can immediately move in any direction (including jumping) up to their Speed.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 minutes -> 1 hour -> 8 hours -> Long Rest).",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. The AP cost of this Enhancement can't be paid for with MP.",
      "Zephyr Walk: (1 MP) The target ignores Difficult Terrain for the duration.",
      "Greater Blessing: (1 MP, Repeatable) The target's Speed increases by 2."
    ]
  },
  {
    name: "Gravity Shift",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Dazed", "Gravity", "Hindered", "Motion"],
    cost: "2 AP + 4 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You alter gravity in a 6 Space high, 3 Space diameter Cylinder within range. Choose a vertical or horizontal plane within the Cylinder (such as the bottom, top or side of the Cylinder). The chosen section becomes a Gravity Plane. Spell Cast: When you cast this Spell, make a Spell Check against the Repeated Intelligence Save of each creature in the area. Save Failure: The target becomes Hindered while in the area for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The Cylinder's diameter increases by 1 and it's height by 2.",
      "Dazed: (1 MP) Creatures Hindered by this Spell are Dazed.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 minutes -> 1 hour -> 8 hours -> Long Rest)."
    ]
  },
  {
    name: "Gravity Well",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Gravity", "Motion", "Restrained"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You create an area of intense gravity that pulls creatures and objects in a 4 Space Sphere towards its center. Make a Spell Check against the Might Save of creatures in the area. Check Success: They're pulled 1 Space towards the center. Success (Each 5): They're pulled 1 additional Space. Collision: If a creature is pushed to the center of the area, they stop and take collision damage as if they had hit a solid surface.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Stronger Pull: (X MP) The distance pulled increases by X Spaces.",
      "Lingering: (X MP, Sustained) The duration of the Spell becomes 1 minute. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Might Save against your Save DC. Save Failure: They're pulled X Spaces towards the center.",
      "Black Hole: (3 MP, Requires Lingering) If a creature pulled by this Spell ends in a center Space they become Restrained for the duration. A creature Restrained this way makes a Repeated Might Save at the end of each of their turns, ending the condition on a Success."
    ]
  },
  {
    name: "Haste",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Embolden", "Motion", "Time"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You bolster the Speed of a creature within range for the duration. Make a DC 15 Spell Check. Failure: Once per Round, the target can gain half their Speed in Spaces of Movement for free. Success: Once per Round, the target gains its full Speed in Spaces of Movement instead. Success (Each 5): +1 Space.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Enhanced Speed: (1 MP, Repeatable) The target gains +3 Spaces of Movement each round.",
      "Phased Movement: (1 MP) The target can move through other creature's Spaces. Other creatures Spaces are considered Difficult Terrain.",
      "Disengage: (1 MP) The target gains the benefits of the Disengage Action for the duration.",
      "Reflexes: (1 MP) The target gains ADV on Agility Checks and Saves for the duration."
    ]
  },
  {
    name: "Increase Gravity",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Bludgeoning", "Gravity", "Immobilized", "Hindered", "Prone", "Slowed"],
    cost: "2 AP + 2 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You increase gravity in a 6 Space tall, 3 Space diameter Cylinder within range. Creatures and objects that fall to the ground within the area take +2 falling damage. Spell Cast: When you cast the Spell, make a Spell Check against the Might Save of every creature within the area. Save Failure: The creature falls Prone. Heightened Gravity: Creatures that start their turn within the area, or enter the area for the first time on their turn, must make a Repeated Might Save against your Save DC. Save Failure: The creature is Slowed and Hindered while in the area for the duration. Objects: Objects in the area that aren't being worn, held, or carried require a successful Athletics Check against your Save DC to be picked up or moved.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the height by 2 Spaces.",
      "Immobilized: (1 MP) Creatures Slowed by this Spell are also Immobilized.",
      "Crushing Weight: (X MP) Creatures that enter the area for the first time on their turn, or start their turn there, must make a Might Save. Save Failure: They take X Bludgeoning damage."
    ]
  },
  {
    name: "Slow Time",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Dazed", "Enfeeble", "Hindered", "Impaired", "Slowed", "Paralyzed", "Time"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You slow time for a creature in range. Make a Spell Check against the target's Repeated Charisma Save. Check Success: The target is Hindered for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Dulled Reactions: (1 AP) On a failed Save, the target is unable to take Reactions for the duration.",
      "Sluggish: (1 MP) On a failed Save, the target is Impaired and Dazed for the duration.",
      "Stolen Time: (1 MP) On a failed Save, for the duration, the target is Slowed and you gain half the target's Speed.",
      "Stop Time: (6 MP, Sustained) The creature is Paralyzed."
    ]
  },
  {
    name: "Telekinesis",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Immobilized", "Motion", "Restrained"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You manipulate a Small or smaller target within range with telekinetic force for the duration. Targets affected by this Spell do not fall as a result of gravity. If you end your turn outside the Spell's range from the target, the Spell ends. Creature: If you target a creature, make a Spell Check contested by their Repeated Might Save. Check Success: The creature is Immobilized and you can use the Telekinetic Action on it for the duration. Object: When you cast the Spell, you use Telekinetic Action on the object immediately for free. If the object is being held or carried by a creature, you must first succeed a Spell Check contested by the creature's Might Save or the Spell fails. A creature holding the object can spend 1 AP to make a Athletics Check against your Save DC to end the Spell. Success: The Spell ends early on the object. Telekinetic Action: When you Sustain this Spell or by spending 1 AP, you can move or throw the target up to 2 Spaces (+2 Spaces for each Size smaller it is than the maximum Size you can target). The total distance moved or thrown is halved if moving or throwing vertically upward. Throw Creature: If the target is a creature, you must first succeed a Spell Check contested by the creature's Might Save or the throw fails. When you throw the creature at a target, you compare your Spell Check against the target's PD. Hit: The thrown creature and the target share the Collision damage (each take half). Throw Object: When you throw an object at a target it's considered a Ranged Spell Attack with an Improved Weapon against the target's PD. Hit: The target takes a 1 damage of a type determined by the GM. Miss: The thrown object lands anywhere up to your maximum throwing distance.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Size: (1 MP, Repeatable) The maximum size of a creature or object you can target increases by 1 step (Small -> Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic). The cost of this Enhancement increases to 2 MP for each size increase beyond Large.",
      "Restrain: (2 MP) Targets Immobilized by this Spell are also Restrained."
    ]
  },
  {
    name: "Teleport",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Teleportation", "Motion", "Slowed"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "Instantaneous",
    description: "You teleport up to 5 Spaces to an unoccupied Space that you can see. If you're Immobilized the Spell fails.",
    enhancements: [
      "Distance: (1 MP, Repeatable) The distance of the teleport increases by 3 Spaces.",
      "Unbound: (1 MP) The Spell no longer fails if you are Immobilized.",
      "Passenger: (1 AP + X MP) X willing creatures (that aren't Immobilized) within 2 Spaces of you are also teleported, appearing in an unoccupied space within 2 Spaces of where you appear after teleporting. If used with Unbound, you can teleport other Immobilized creatures. The AP cost of this Enhancement can't be paid for with MP.",
      "Temporal Shiver: (X MP) Creatures within 1 Spaces of you before you teleport make an Intelligence Save against your Save DC. Save Failure: The target is Slowed X for 1 Round.",
      "Temporal Repulse: (X MP) After you teleport, creatures within 1 Space of you make a Might Save against your Save DC. Save Failure: The target is pushed X Spaces away from you."
    ]
  },
  {
    name: "Time Stop",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Time", "Paralyzed"],
    cost: "1 AP + 2 MP",
    range: "Self",
    duration: "End of Turn",
    description: "Time stops affecting all effects, objects, and creatures (except you). For the duration, you ignore the Multiple Check Penalty, and creatures whose time has stopped are considered Paralyzed. The Spell ends early after you target a creature with a harmful effect.",
    enhancements: [
      "More Time: (2 MP, Repeatable) Your current and maximum AP is increased by 1 for the duration.",
      "Locked Time: (3 MP) The Spell no longer ends early if you target a creature with a harmful effect.",
      "Additional Target: (2 MP, Repeatable) Choose 1 creature other than you within 10 Spaces. Time doesn't stop for the target and before the Spell ends, they can spend 1 AP (provided they have AP to spend) and ignore the Multiple Check Penalty. You can use this Enhancement on the same creature multiple times, allowing them to spend 1 additional AP each time."
    ]
  },
  {
    name: "Translocation",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Teleportation"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You teleport a Medium or smaller object or willing creature other than yourself within range up to 3 Spaces to an unoccupied Space also within range. If the target is Immobilized the Spell fails. Held Object: If you target an object being held or carried by an unwilling creature, you must first succeed a Spell Check contested by the creature's Charisma Save or the Spell fails.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Distance: (1 MP, Repeatable) The distance of the teleport increases by 3 Spaces.",
      "Hostile: (1 MP) You can target unwilling creatures, but must first succeed a Spell Check contested by the target's Charisma Save or the Spell fails.",
      "Unbound: (1 MP) The Spell no longer fails if the target is Immobilized.",
      "Size: (1 MP, Repeatable) The maximum size of a creature or object you target by 1 step (Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic). The cost of this Enhancement increases to 2 MP for each size increase beyond Large.",
      "Swap: (2 MP) Choose a second target within range (you can choose yourself). If the Spell Succeeds on both targets, they swap location provided they are within 3 Spaces of each other. The distance is increased by 3 Spaces for each time you use the Distance Enhancement. If the Spell only Succeeds on only 1 target, you can teleport that target as normal."
    ]
  },
  {
    name: "Reduce Inertia",
    source: "Arcane",
    school: "Astromancy",
    tags: ["Embolden", "Gravity", "Motion", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You reduce the inertia of up to 2 targets within range for the duration. Each target weighs half as much and falls a maximum of 10 Spaces per Round. Spell Cast: Make a DC 15 Spell Check. Failure: Each target has Resistance (Half) to falling damage for the duration. Success: The target is immune to falling damage for the duration and doesn't fall Prone as a result of falling. Reaction: You can cast this Spell as a Reaction when a target falls within range.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Lightweight: (1 MP, Repeatable) Each target's Speed and Jump Distance increases by 2.",
      "Targets: (1 MP, Repeatable) You can target 2 additional creatures.",
      "Controlled Descent: (2 MP) Each target hovers in place instead of falling. If the target is a creature, they can resume falling or hovering at will (no AP required)."
    ]
  },

];
