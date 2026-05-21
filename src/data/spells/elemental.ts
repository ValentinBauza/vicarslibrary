import type { Spell } from './types';

export const elementalSpells: Spell[] = [
  {
    name: "Fire Bolt",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of fire that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Fire damage. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X for 1 target of your choice.",
      "Burning: (X MP) Each target makes a Repeated Physical Save. Save Failure: The target begins Burning X for 1 minute.",
      "Back Draft: (X MP) Each target makes a Might Save against your Save DC. Save Failure: The target is pushed X Spaces away from you. Failure (each 5): The target is pushed 1 additional Space."
    ]
  },
  {
    name: "Lightning Bolt",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Lightning", "Stunned"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of lightning that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target you can see within range. Hit: The target takes 1 Lightning damage. Spell Passive: Magnetic - Metal in the target's Space becomes briefly magnetized, causing metal objects to attract or repel each other and disrupting compass-based navigation.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (1 AP, Repeatable) The damage increases by 1 for 1 target of your choice.",
      "Stun: (1 AP) 1 target of your choice makes a Physical Save. Creatures made of metal or wearing metal (such as Heavy Armor) have DisADV on this Save. Save Failure: The target becomes Stunned until the start of their next turn.",
      "Chain: (1 MP, Repeatable) Choose 1 additional targets within 3 Spaces of the original target using the same Spell Attack for all targets. If you use this Enhancement multiple times, you choose an additional target within 3 Spaces of a previously chosen target."
    ]
  },
  {
    name: "Fireball",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire", "Shadow"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a brilliant flame that envelops a 3 Space Diameter Sphere area within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Fire damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The diameter of a Sphere of your choice increases by 1 Space.",
      "Burning: (1 MP, Repeatable) Each target makes a Repeated Physical Save. Save Failure: The target begins Burning for 1 minute.",
      "Smoke: (1 MP) The area becomes Fully Concealed by thick black smoke. Creatures in the area that can't hold their breath begin Suffocating. The smoke lasts for 1 Round or until a wind of moderate or greater speed disperses it.",
      "Fireball Swarm: (2 MP, Repeatable) You produce an additional 3 Space diameter Sphere within range using the same Spell Attack for all targets in each area. A creature can only be targeted once by this Spell even if they are in multiple Spheres."
    ]
  },
  {
    name: "Absorb Elements",
    source: "Primal",
    school: "Elemental",
    tags: ["Embolden", "Ward"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a protective elemental ward in response to damage. Trigger: When you take Elemental Damage. Reaction: You reduce the damage taken by 3.",
    enhancements: [
      "Amplified Shield: (1 MP, Repeatable) You reduce the damage taken by an additional 2.",
      "Enduring Resistance: (1 MP) After resolving the damage, you gain Resistance (Half) to the damage type you reduced for 1 Round.",
      "Backlash: (X AP) You deal +X damage of the damage type your reduced on your next Attack made in until the end of your turn.",
      "Lingering Retaliation: (X MP) For the next minute, when a creature Hits you with a Melee Attack, it takes X damage of of the damage type you reduced."
    ]
  },
  {
    name: "Acid Stream",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Corrosion", "Enfeeble", "Hindered"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a stream of acid that project in a 8 Space Line. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Corrosion damage. Spell Passive: Acidic - Mundane materials in the area (wood, leather, rope, non-magical metals) that are not being worn or held partially erode or decay, weakening structures and gear.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 AP, Repeatable) The length of the Line increases by 4 Spaces.",
      "Dissolve: (1 AP) Each target makes an Agility Save. Save Failure: They no longer benefit from Physical or Elemental Resistance for 1 Round.",
      "Removed Resistance: (1 MP) Each target makes an Agility Save. Save Failure: The target no longer benefits from PDR or EDR for 1 Round.",
      "Hinder: (3 MP) Each target makes a Repeated Agility Save. Save Failure: The Target becomes covered in acid for 1 minute. While covered in acid, the target is Hindered. A creature within 1 Space (including itself) spends 1 AP to make a Survival Check against your Save DC, removing the acid on a Success."
    ]
  },
  {
    name: "Air Slash",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Bleeding", "Slashing"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a slash of high velocity wind that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Slashing damage. Spell Passive: Wind - Unsecured mundane objects in the target's space are knocked over or blown away, especially light ones (papers, tools, empty crates). Can slam doors, scatter sand/dust and disperse smoke.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Bleeding: (X AP) The target makes a Repeated Physical Save. Save Failure: The target begins Bleeding X for 1 minute.",
      "Hidden Slash: (1 MP) You add a d10 to your Attack Check."
    ]
  },
  {
    name: "Blight Bomb",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Ailment", "Impaired", "Poison"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce an explosion of Poisonous gas in a 3 Space diameter Sphere within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Poison damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Noxious - Plant life in the area that are not being worn or held wilts or dies, grass blackens, and flowers or vines shrivel where the Spell touches.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Impair: (1 MP) Each target makes a Might Save. Save Failure: The target becomes Impaired for 1 Round.",
      "Deadly Poison: (X MP) Each target makes a Might Save. Save Failure: The target becomes Poisoned for 1 minute. While Poisoned in this way, the creature takes X Poison damage at the start of each of its turns. A creature can make a Repeated Might Save at the end of each of its turns, ending the Poison on a success. This Poison can be removed by any effect that ends a Basic Poison.",
      "Poison Cloud: (X MP, Sustained) The duration of the Spell becomes 1 minute. Poison gas fills the area for the duration. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Might Save against your Save DC. Save Failure: The target takes X Poison damage."
    ]
  },
  {
    name: "Cloud Cover",
    source: "Primal",
    school: "Elemental",
    tags: ["Cold", "Shadow", "Slashing"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "10 Minutes (Sustained)",
    description: "You obscure a 4 Space diameter Sphere within range with natural phenomenon (such as fog, sand, or sleet) for the duration. The Sphere spreads around corners. Targets within the area are Fully Concealed and creatures that aren't within 1 Space of them. The Spell ends early if a 20 mph (30 kph) wind disperses it. Relocate: When you Sustain this Spell, or by spending 1 AP, you can move the Sphere up to 5 Spaces to another Space within range.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Blanketing Cloud: (2 MP) Surfaces within the area becomes covered in natural phenomenon (such as debris, ice, or sand) for the duration, making them Difficult Terrain. When a creature enters the area for the first time on its turn, or starts its turn within there, it must make an Agility Save. Save Failure: The target falls Prone.",
      "Abrasive Storm: (X MP) When a creature enters the area for the first time on its turn, or starts its turn within there, it must make a Might Save. Save Failure: The target takes X Slashing or Cold Damage (chosen when you use this Enhancement)."
    ]
  },
  {
    name: "Cold Wave",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Cold", "Slowed", "Trap"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a rush of freezing air that envelops a 2 Space Arc. Make an Area Spell Attack against the AD of every target within the Spell's area. Hit: The target takes 1 Cold damage. Spell Passive: Freezing - Liquids and objects not being held or carried in the area frost over, causing them to adhere to nearby surfaces. A creature can use a Minor Action to make a Might Check against your Save DC to dislodge an object.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The area's radius increases by X Spaces.",
      "Aura: (1 MP) The Area becomes an Aura instead.",
      "Encasing Frost: (X AP) Each target makes a Might Save against your Save DC. Save Failure: For the duration, for the first time the target willingly moves or takes a Reaction it takes X Cold damage.",
      "Slow: (X MP) Each target makes a Repeated Might Save. Save Failure: The target is Slowed X for 1 Round."
    ]
  },
  {
    name: "Cone of Cold",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Cold", "Slowed", "Stunned"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a rush of freezing air that envelops a 3 Space Cone. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Cold damage. Spell Passive: Freezing - Liquids and objects not being held or carried in the area frost over, causing them to adhere to nearby surfaces. A creature can use a Minor Action to make a Might Check against your Save DC to dislodge an object.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Slow: (X MP) Each target makes a Repeated Might Save. Save Failure: The target is Slowed X for 1 Round.",
      "Frozen Stiff: (2 MP, Repeatable) Each target makes a Physical Save. Save Failure: The target is Stunned for 1 Round."
    ]
  },
  {
    name: "Corrosive Bolt",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Corrosion", "Enfeeble", "Hindered"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of acid that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Corrosion damage. Spell Passive: Acidic - Mundane materials in the target's Space (wood, leather, rope, non-magical metals) that are not being worn or held partially erode or decay, weakening structures and gear.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Dissolve: (1 AP) The target makes a Repeated Agility Save. Save Failure: The target no longer benefits from PDR or EDR for 1 minute.",
      "Acid: (X MP) The target makes a Repeated Agility Save. Save Failure: The target becomes covered in acid for 1 minute. While covered in acid, the target is Hindered and take X Corrosion damage at the start of each of their turns. A creature within 1 Space (including itself) spends 1 AP to make a Survival Check against your Save DC, removing the acid on a Success."
    ]
  },
  {
    name: "Corrosive Cascade",
    source: "Arcane",
    school: "Elemental",
    tags: ["Corrosion", "Enfeeble"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a deluge of acid that envelops a 6 Space tall, 3 Space diameter Cylinder within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Corrosion damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Acidic - Mundane materials in the area (wood, leather, rope, non-magical metals) that are not being worn or held partially erode or decay, weakening structures and gear.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the Height by 2 Spaces.",
      "Dissolve: (1 MP) Each target makes a Repeated Agility Save. Save Failure: The target no longer benefits from PDR or EDR for 1 minute.",
      "Pitted Terrain: (1 MP) Surfaces in the area become Difficult Terrain until the surfaces are repaired."
    ]
  },
  {
    name: "Corrosive Wave",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Corrosion", "Enfeeble", "Exposed"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a wave of acid that envelops a 2 Space Arc. Make a Spell Attack against the AD of every target within the area. Hit: The target takes 1 Corrosion damage. Spell Passive: Acidic - Mundane materials in the area (wood, leather, rope, non-magical metals) that are not being worn or held partially erode or decay, weakening structures and gear.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The area's radius increases by X Spaces.",
      "Aura: (1 MP) The Area becomes an Aura instead.",
      "Dissolve: (1 MP) Each target makes a Repeated Agility Save. Save Failure: They no longer benefit from PDR or EDR for the 1 minute.",
      "Exposing Acid: (1 MP) Each target makes a Repeated Agility Save. Save Failure: The target becomes covered in acid for 1 minute or until a creature (including itself) within 1 Space spends 1 AP to make a Survival Check against your Save DC, removing the acid on a Success. While covered in acid, the target is Exposed."
    ]
  },
  {
    name: "Elemental Shield",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Embolden", "Ward"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "1 Hour",
    description: "A protective elemental ward surrounds you. Choose an Elemental damage type. Make a DC 15 Spell Check. Failure: You gain 2 Temp HP. Success: You gain 3 Temp HP. Success (each 5): +1 Temp HP. Retaliation: If a creature within 1 Space Hits you with an Attack while you have this Temp HP, the creature takes 1 damage of the chosen type for each Temp HP that was consumed by the Attack. The Spell ends early if all the Temp HP from this Spell is consumed.",
    enhancements: [
      "Lashing Elements: (1 AP, Repeatable) The range of Retaliation is increased by 2 Spaces.",
      "Durability: (1 MP, Repeatable) The Temp HP is increased by 2.",
      "Resistance: (2 MP) You gain Resistance (Half) to the chosen damage type for the duration.",
      "Immunity: (4 MP) You gain Immunity to the chosen damage type for the duration."
    ]
  },
  {
    name: "Eruption",
    source: "Primal",
    school: "Elemental",
    tags: ["Bludgeoning", "Earth", "Motion"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You create a 3 Space diameter Sphere of erupting earth within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Bludgeoning damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Quake - The ground rumbles and quakes, causing all unsecured small objects to fall and leaving visible cracks and marks across surfaces.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Erupted: (X MP) Each target makes a Physical Save. Save Failure: The target is pushed upward X Spaces.",
      "Fractured: (1 MP) The Area becomes Difficult Terrain. A creature can spend 1 AP to clear 1 Space of this Difficult Terrain, returning the Space to normal."
    ]
  },
  {
    name: "Fire Blast",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a brilliant flame that envelops a 1 Space Aura. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Fire damage. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them. Beta Note: For now, you can assume objects remain on fire for 1 minute and spreads to other flammable objects at a rate of 1 Space per minute unless the GM decided otherwise. A creature doesn't start Burning when it's in a Space with a burning object unless the entire Space is on Fire.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Aura's radius increases by X Spaces.",
      "Mantle of Fire: (X MP, Sustained) The Spell's duration becomes 1 minute. The heat lingers on you in a 1 Space Aura for the duration. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Repeated Physical Save against your Save DC. Save Failure: The target begins Burning X for 1 minute. DC Tip: You can choose for the Space you occupy to not be affected by an Aura you produce."
    ]
  },
  {
    name: "Fire Torrent",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire", "Motion"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a torrent of fire that envelops a 3 Space Cone. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Fire damage. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them. Beta Note: For now, you can assume objects remain on fire for 1 minute and spreads to other flammable objects at a rate of 1 Space per minute unless the GM decided otherwise. A creature doesn't start Burning when it's in a Space with a burning object unless the entire Space is on Fire.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The length of the Cone increases by X Spaces.",
      "Burning: (X MP) Each target makes a Repeated Physical Save. Save Failure: The target begins Burning X for 1 minute.",
      "Back Draft: (X MP) Each target makes a Might Save against your Save DC. Save Failure: The target is pushed X Spaces away from you. Failure (each 5): The target is pushed 1 additional Space."
    ]
  },
  {
    name: "Freeze",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Cold", "Enfeeble", "Immobilized", "Slowed", "Stunned"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You gather freezing wind around a target within range for the duration. Make a Spell Check contested by the target's Repeated Agility Save. Save Failure: The target is Slowed for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Increased Slow: (X AP) The target gains X additional stacks of Slowed.",
      "Frostbite: (X AP) While Slowed this way, the target takes X Cold damage at the start of each of their turns.",
      "Brittle: (1 MP) While Slowed this way, the target gains Vulnerability (1) to Physical damage.",
      "Targets: (1 AP + X MP) You can target X additional creatures within range. When you choose this Enhancement, the cost of all other Enhancements (except Range) is doubled. The AP cost of this Enhancement can't be paid for with MP.",
      "Frozen Stiff: (3 MP) On a failed Save, the target is Immobilized and Stunned 2 for the duration."
    ]
  },
  {
    name: "Frost Bolt",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Cold", "Slowed"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of condensed freezing air that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Cold damage. Spell Passive: Freezing - Liquids and objects not being held or carried in the target's Space frost over, causing them to adhere to nearby surfaces. A creature can use a Minor Action to make a Might Check against your Save DC to dislodge an object.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP, Repeatable) The damage increases by X for 1 target of your choice."
    ]
  },
  {
    name: "Frost Storm",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Cold", "Slowed"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "The temperature rapidly decreases in a 6 Space tall, 3 Space diameter Cylinder within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Cold damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Freezing - Liquids and objects not being held or carried in the area frost over, causing them to adhere to nearby surfaces. A creature can use a Minor Action to make a Might Check against your Save DC to dislodge an object.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the Height by 2 Spaces.",
      "Slow: (X MP) Each target makes a Repeated Might Save. Save Failure: The target is Slowed X for 1 Round.",
      "Freeze: (2 MP) The area is covered by ice, becoming Difficult Terrain. A Space stops being covered after 1 minute or when it takes fire damage. When a creature starts their turn on a Space covered by ice or enters it for the first time on their turn, it makes an Agility Save against your Save DC. Save Failure: The target falls Prone."
    ]
  },
  {
    name: "Gust",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Motion"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a gust of wind that targets a Medium Size or smaller creature or object within range. The Spell has no effect on secured or worn objects. Creature or Held Object: If you target a creature or an object held by a creature, make a Spell Check contested by the creature's Might Save. Save Failure: The target is pushed horizontally 1 Space in a direction of your choice. Failure (each 5): The target is pushed 1 additional Space. If the target is a creature, you can choose to knock them Prone instead. Loose Object: If the target is a loose object, make a DC 15 Spell Check. Check Failure: The target is pushed horizontally 1 Space in a direction of your choice. Success: The target is pushed 2 Spaces in a direction of your choice. Success (each 5): The target is pushed 1 additional Space. Smaller Target: The target is pushed up to 2 Spaces additional Spaces for each Size smaller it is than the maximum Size you can target.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Knock Over: (1 AP) If the target collides with another creature of the same Size or smaller as part of this movement, the creature it collides with must make a Might Save against your Save DC. Save Failure: The target also falls Prone. Failure (each 5): The target is also pushed 1 Space in the same direction.",
      "Size: (1 MP, Repeatable) The maximum size of a creature or object you can target increases by 1 step (Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic). The cost of this Enhancement increases to 2 MP for each size increase beyond Large. Example: You use the Size Enhancement twice to target a Huge creature. The first one cost 1 MP (to target Large) and the second one costs 2 MP (to target Huge) for a total of 3 MP.",
      "Targets: (1 AP + X MP) You can target X additional creatures or objects within range. When you choose this Enhancement, the cost of all other Enhancements is doubled. The AP cost of this Enhancement can't be paid for with MP."
    ]
  },
  {
    name: "Hydro Lance",
    source: "Primal",
    school: "Elemental",
    tags: ["Bleeding", "Motion", "Piercing", "Water"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a high-pressure jet of water in an 8 Space Line. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Piercing damage. Spell Passive: Extinguish - Open flames in the area are extinguished, including torches, candles, or small campfires, unless magical or protected.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 AP, Repeatable) The length of the Line increases by 4 Spaces.",
      "Knockback: (X AP) The closest target makes a Might Save. Save Failure: The target is pushed 1 Space away from you. Save Failure (each 5): The target is pushed up to 1 additional Space.",
      "Bleeding: (X MP) Each target makes a Repeated Physical Save. Save Failure: The target begins Bleeding X for 1 minute."
    ]
  },
  {
    name: "Inflict Poison",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Ailment", "Dazed", "Frightened", "Impaired", "Slowed", "Stunned"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "Make a Spell Check against the Repeated Might Save of a creature within range. Check Success: The target is Poisoned for the duration. Creatures Poisoned by this Spell have DisADV on Awareness Checks, and are Dazed, Impaired and Slowed. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Poison from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Disease on a success.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Sapped: (1 MP) While Poisoned by this Spell, the target falls Prone and can't stand up.",
      "Fear Toxin: (1 MP) The target has vivid hallucinations. While Poisoned by this Spell, the target is Frightened of all creatures it can see.",
      "Mental Fog: (2 MP) While Poisoned by this Spell, the target is Stunned and forgets every detail about the previous minute."
    ]
  },
  {
    name: "Lightning Blast",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Lightning"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a torrent of lightning in a 1 Space Aura. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Lightning damage. Spell Passive: Magnetic - Metal in the area becomes briefly magnetized, causing metal objects to attract or repel each other and disrupting compass-based navigation.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Aura's radius increases by X Spaces.",
      "Shock: (1 MP) Each target makes an Agility Save. Save Failure: The target can't take Reactions for 1 Round.",
      "Static: (X MP) The area becomes laden with electricity for 1 minute. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Fate Check. Result of a 10 or lower: They take X Lightning damage. Beta Note: A Fate Check is a d20 roll where no modifier (numerical or otherwise) apply to the Check, no critical result apply and you can't choose to fail."
    ]
  },
  {
    name: "Lightning Storm",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Deafened", "Lightning", "Sound"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a torrent of crackling lightning that envelops a 6 Space tall, 3 Space diameter Cylinder within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Lightning damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Magnetic - Metal in the area becomes briefly magnetized, causing metal objects to attract or repel each other and disrupting compass-based navigation.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the Height by 2 Spaces.",
      "Shock: (1 MP) Each target makes an Agility Save. Save Failure: The target can't take Reactions for 1 Round. If used with Storm Cloud, the cost of the enhancement becomes 2 MP and the target can't take Reactions for 1 Round whenever they fail a Save against Storm Cloud.",
      "Storm Cloud: (X MP, Sustained) The duration of the Spell becomes 1 Minute. Crackling lightning fills the area for the duration. When a creature enters the area for the first time on its turn or starts its turn there, it makes an Agility Save against your Save DC. Save Failure: The target takes X Lightning damage."
    ]
  },
  {
    name: "Lightning Torrent",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Dazed", "Lightning"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a torrent of crackling lightning that envelops a 5 Space Line. Make an Area Spell Attack against the AD of every target within the area, and the closest target to you makes a Might Save. Hit: The target takes 1 Lightning damage. Save Failure: The target can't take Reactions for 1 Round. Spell Passive: Magnetic - Metal in the area becomes briefly magnetized, causing metal objects to attract or repel each other and disrupting compass-based navigation.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (1 AP, Repeatable) The length of the Line increases by 5 Spaces.",
      "Chain Shock: (1 AP) Instead of only the closest target making the Might Save, each target makes the Might Save.",
      "Dazed: (1 MP) Each target makes an Intelligence Save. Save Failure: The target is Dazed for 1 round.",
      "Remote: (1 MP) The range becomes 5 Spaces, with the origin of the Line becoming the chosen Space. The closest target is measured from the origin."
    ]
  },
  {
    name: "Lightning Rod",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Lightning", "Tethered"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You attempt to turn a creature of your choice within range into a lightning rod. Make a Spell Check against the target's Repeated Agility Save. Save Failure: this target is able to take Reactions and you are able to use Shock against the target for the duration. The Spell ends early if you end your turn beyond the Spell's range from the target or behind Full Cover from the target. Shock: Once on each of your turns, when you Sustained this Spell or by spending 1 AP, you can deal 1 Lightning damage to the target, provided it's not behind Full Cover. When you use Shock, you can spend 1 or more MP to increase the damage by 1 per MP spent.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Arcing Current: (1 AP, Repeatable) Choose an additional targets within 2 Spaces of a previously chosen target that's also within the Spell's range. Only 1 creature targeted by Shock at a time.",
      "Tether: (1 MP) On a Failed Save, they also become Tethered to you at a distance equal to the Spell's range. If you use the Arcing Current Enhancement, this Enhancement costs 2 MP instead."
    ]
  },
  {
    name: "Living Bomb",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire", "Trap"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You set a target within range ablaze. Make a Spell Check against the target's Repeated Physical Save. Check Success: The target begins Burning. Bomb: When the Burning caused by this Spell ends, the fire magic detonates in a 1 Space Aura centered on the target. Each target in the area (including the original one) makes a Might Save against your Save DC. Save Failure: The target takes 1 Fire damage. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them. Beta Note: For now, you can assume objects remain on fire for 1 minute and spreads to other flammable objects at a rate of 1 Space per minute unless the GM decided otherwise. A creature doesn't start Burning when it's in a Space with a burning object unless the entire Space is on Fire.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Stronger Bomb: (X MP) The damage of Bomb increases by X.",
      "Larger Area: (X MP) The radius of the Bomb increases by X Spaces.",
      "Increased Burning: (X AP) The target gains X additional stacks of Burning."
    ]
  },
  {
    name: "Maelstrom",
    source: "Primal",
    school: "Elemental",
    tags: ["Motion", "Slowed", "Water"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You create a 3 Space diameter, 2 Space tall Cylinder of swirling water within range for the duration. Open mundane flames in the area are extinguished (such as torches, candles, or small campfires). Creatures in the area are subjected to the Underwater Combat rules (DisADV on Martial Attacks and Slowed without Swim Speed, gain Fire Resistance, subject to Hold Breath and Suffocation). Attacks that deal Physical or Elemental damage have DisADV if made against targets within the Wall on the other side of the Wall. Spell Cast: When you cast the Spell, make a Spell Check against the Might Save of each target in the area. Save Failure: They are pulled to 1 Space to the Point of Origin.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Cylinder increases by X Spaces.",
      "Increased Pull: (X MP) The distance pulled increases by X Spaces.",
      "Drowning: (3 MP) When a creature fails a Save, they lose their breathe and begin Suffocating if they can't breath underwater."
    ]
  },
  {
    name: "Mold Earth",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Earth", "Motion"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You manipulate a up to a 4 Space Zone of mundane earth (including dirt, mud, and stone) of your choice within range, provided it's not being carried or supporting a Small or larger creature or object. Choose 1 of the following options when casting the Spell: Move: You move the area up to 4 Spaces. Any creatures or objects on the earth move with the dirt, unless you (or the creature) choose otherwise. If they remain in the same place and there's no ground to support them, they begin a Controlled Fall. Reshape: You cause shapes, earthen colors, or both to appear on or in the earth (such as words, images, or patterns). Difficult Terrain: You can cause Spaces of your choice within the area to become Difficult Terrain. A creature can spend 1 AP to clear 1 Space of Difficult Terrain created in this way. If the ground is already Difficult Terrain as a result of loose earth, you can cause it to become normal terrain instead.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Expand: (1 AP, Repeatable) The size of the Zone increases by 4 Spaces.",
      "Manipulate Stone: (1 MP) You can also manipulate compacted earth or stone.",
      "Precise Construction: (1 MP) You can select multiple options when casting the Spell. You can manipulate the earth into an exact form you wish. This can be used to repair structures or produce your own in unoccupied Spaces.",
      "Heavy Excavation: (1 MP, Repeatable) You can move earth supporting creatures or objects 1 size larger (Small -> Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic).",
      "Unstable Earth: (2 MP) Creatures in the area must make an Agility Save. Save Failure: They fall Prone."
    ]
  },
  {
    name: "Poison Bolt",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Ailment", "Hindered", "Impaired", "Poison"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a bolt of condensed poisonous gas that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Poison damage. Spell Passive: Noxious - Plant life in the target's Space that is not being worn or held wilts or dies, grass blackens, and flowers or vines shrivel where the Spell touches.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP) The damage increases by X.",
      "Debilitating Poison: (1 MP) The target makes a Repeated Might Save. Save Failure: The target is Poisoned for 1 minute. While Poisoned in this way, the creature becomes Hindered or Impaired (your choice when you use this Enhancement). This Poison can be removed by any effect that ends a Basic Poison. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Poison from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Basic Poison on a success.",
      "Deadly Poison: (X MP) The target makes a Repeated Might Save. Save Failure: The target is Poisoned for 1 minute. While Poisoned in this way, the creature takes X Poison damage at the start of each of their turns. This Poison can be removed by any effect that ends a Basic Poison."
    ]
  },
  {
    name: "Spike Bolt",
    source: "Primal",
    school: "Elemental",
    tags: ["Earth", "Impaired", "Piercing", "Plants"],
    cost: "1 AP",
    range: "10 Space",
    duration: "Instantaneous",
    description: "You produce a sharp spike of earth or plant matter that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Piercing damage. Spell Passive: Natural Destruction - This Spell leaves debris imbedded in the Space it lands in.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X AP, Repeatable) The damage increases by X for 1 target of your choice.",
      "Impair: (1 AP) 1 target of your choice makes an Agility Save. Save Failure: The target is Impaired for 1 Round.",
      "Piercing: (1 AP + 1 MP) The Spell pierces the target, continuing up to 3 Spaces in a Line beyond the target. Each creature within the Spell's path beyond the original target also become targets of the Attack. These targets do not benefit from cover provided by other targets of this Spell. The AP cost of this Enhancement can't be paid for with MP."
    ]
  },
  {
    name: "Spike Cluster",
    source: "Primal",
    school: "Elemental",
    tags: ["Earth", "Immobilized", "Impaired", "Piercing", "Plants"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce an explosion of spikes or thorns that envelops a 3 Space diameter Sphere within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Piercing damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Natural Destruction - This Spell leaves debris imbedded in objects in the area.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Impair: (1 MP) Each target makes an Agility Save. Save Failure: The target is Impaired for 1 Round.",
      "Immobilizing Spikes: (2 MP) Each target makes an Agility Save. Save Failure: The target is Immobilized for 1 Round."
    ]
  },
  {
    name: "Spike Surge",
    source: "Primal",
    school: "Elemental",
    tags: ["Earth", "Impaired", "Piercing", "Plants"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You conjure a wave of spikes or thorns that emerge from the ground in a 2 Space Arc. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Piercing damage. Spell Passive: Natural Destruction - This Spell leaves debris imbedded in objects in the area.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Area's radius increases by X Spaces.",
      "Aura: (1 MP) The Area becomes an Aura instead.",
      "Impair: (1 MP) Each target makes an Agility Save. Save Failure: The target is Impaired for 1 Round.",
      "Spikey Terrain: (X MP) The area becomes Spikey Terrain for 1 Round. Creatures take X Piercing damage when they enter a Space within the area."
    ]
  },
  {
    name: "Tornado",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Blinded", "Chaos", "Lightning", "Motion", "Slowed"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You create a 6 Space high, 2 Space diameter Cylinder of swirling winds within range for the duration. Creatures in the area are Slowed 2, Blinded, and Fully Concealed. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Might Save against your Save DC. Save Failure: They're pushed 1 Space horizontally in a random direction. Failure (each 5): They're pushed 1 additional Space. Spell Cast: When you cast the Spell, make a Spell Check against the Might Save of each target in the area. Save Failure: They're pushed 1 Space horizontally in a random direction. Failure (each 5): They're pushed 1 additional Space. Moving the Cylinder: When you Sustain this Spell or by spending 1 AP, you can move the Cylinder up to 5 spaces to another Space within range.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The diameter of the Cylinder increases by 1 Space and the height increases by 2 Spaces.",
      "Increased Push: (X MP) The distance pushed increases by X Spaces.",
      "Vortex: (1 MP) When you cast the spell, creatures within the area, or within 1 Space of the area, make a Might Save against your Save DC. Save Failure: They're pulled toward the Point of Origin.",
      "Storm Core: (X MP) A creature that fails its Save also takes X Lightning damage.",
      "Updraft: (2 MP, Repeatable) A creature that fails its Save is also pulled upward 3 Spaces."
    ]
  },
  {
    name: "Toxic Burst",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Ailment", "Enfeeble", "Poison"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You emit toxic air that envelops a 1 Space Aura. Make an Area Spell Attack against the AD of each target in the area. Hit: They take 1 Poison damage. Spell Passive: Noxious - Plant life in the area that are not being worn or held wilts or dies, grass blackens, and flowers or vines shrivel where the Spell touches.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Aura's radius increases by X Spaces.",
      "Disease: (X MP) Each target makes a Repeated Might Save against your Save DC. Save Failure: The target is Diseased for 1 minute. Creatures Diseased by this Spell have their current and maximum HP reduced by X at the start of each of their turns. The creature's HP returns to normal after taking a rest. This Disease can be removed by any effect that ends a Basic Disease. Beta Note: A creature with a Medicine Kit can attempt to remove a Basic Disease from a creature within 1 Space (including themselves) by spending 1 AP and 1 charge from the Medicine Kit and make a Medicine Check against the effect's Save DC, removing the Disease on a success.",
      "Spreading Plague: (1 MP) Requires Disease. Creatures Diseased by this Spell also emit a 1 Space Aura of diseased air. When a creature enters the area for the first time on its turn or starts its turn there, it makes a Repeated Might Save against your Save DC. Save Failure: The target also becomes Diseased by this Spell for 1 minute. You are immune to the effects of Spreading Plague."
    ]
  },
  {
    name: "Wall of Fire",
    source: "Arcane, Primal",
    school: "Elemental",
    tags: ["Burning", "Fire", "Shadow"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You conjure persistent flames that fills a 5 Space long, 2 Space tall Wall. When you cast the Spell, make an Area Spell Attack against the AD of each target within the area. Hit: The target takes 1 Fire damage. Hazardous Area: When a creature enters the area for the first time on its turn or starts its turn there, it makes a Might Save against your Save DC. Save Failure: The target takes 1 Fire damage. Spell Passive: Ignite - Flammable objects that are not being worn or held in the target's Space catch fire. A creature can spend 1 AP to put out a mundane fire within 1 Space of them. Beta Note: For now, you can assume objects remain on fire for 1 minute and spreads to other flammable objects at a rate of 1 Space per minute unless the GM decided otherwise. A creature doesn't start Burning when it's in a Space with a burning object unless the entire Space is on Fire.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (2 MP, Repeatable) The damage increases by 1.",
      "Area: (1 MP, Repeatable) The length of the Wall increases by 5 Spaces.",
      "Ringwall: (1 MP) The area becomes an up to 4 Space diameter Ringwall. The diameter of the Ringwall increases by 1 each time you use the Area Enhancement.",
      "Burning: (2 MP, Repeatable) When a creature fails the Save against the Hazardous Area it begins Burning. A creature can make a Repeated Physical Save at the end of each of its turns, ending the Burning on a Success.",
      "Smoke: (1 MP) The area becomes Fully Concealed by thick black smoke. Creatures in the area that can't hold their breath begin Suffocating. The smoke lasts for 1 minute or until a wind of moderate or greater speed disperses it."
    ]
  },
  {
    name: "Wall of Earth",
    source: "Primal",
    school: "Elemental",
    tags: ["Earth", "Motion", "Summoning"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You create a 5 Space long, 2 Space high Wall of earth within range. Medium Size or smaller creatures and objects within the area are pushed to nearest unoccupied Space; their choice on either side of the Wall (you choose for each object). Large Size or larger creatures or objects prevent the Wall from forming in their Space. The Wall is a solid surface that provides Full Cover. Each Space within the Wall has 1 HP, an AD and PD equal to your Save DC, Slashing Resistance (Half), and Psychic Immunity. Each Space of the Wall can be broken if it reduced to 0 HP. When a Space of Wall breaks, all Spaces above that Space are also broken, and the Space becomes Difficult Terrain until a creature spends 1 AP to clear it. Wall Slam: When you cast the Spell, or by spending 1 AP, you can cause the Wall to move 2 Spaces horizontally in a direction of your choice either on or off its facing direction. Make a Spell Check against the Might Save of each creature within the area the Wall moves. Save Success: They aren't moved and they prevent any Spaces of the Wall that make contact with them from moving. Save Failure: They're pushed with the Wall in the direction it moves. After moving the Wall in this way, it breaks, and each Space breached to 0 HP through becomes Difficult Terrain until a creature spends 1 AP to clear it. Spell Ends: When the Spell ends, the Wall remains but you can no longer use Wall Slam.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Size: (1 MP, Repeatable) The Wall's length or height increases by 2 Spaces. If used with the Additional Walls Enhancement, you choose which Wall to increase the size of.",
      "Density: (X MP) The HP of each Space of the Wall and the number of Spaces the Wall moves when using Wall Slam both increase by X.",
      "DC Tip: The further the wall would have travelled when slamming someone into a solid surface, the more collision damage they take!",
      "Additional Walls: (X MP) You conjure X additional Walls within range using the same Spell Check. When you use Wall Slam, you choose which Wall to move."
    ]
  },
  {
    name: "Wall of Water",
    source: "Primal",
    school: "Elemental",
    tags: ["Motion", "Water"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You create a 5 Space long, 2 Space high Wall of water within range for the duration. Open mundane flames in the area are extinguished (such as torches, candles, or small campfires). Creatures in the area are subjected to the Underwater Combat rules (DisADV on Martial Attacks and Slowed without Swim Speed, gain Fire Resistance, subject to Hold Breath and Suffocation). Attacks that deal Physical or Elemental damage have DisADV if made against targets within the Wall on the other side of the Wall. Spell End: When the Spell ends, it creates a Tidal Wave on both sides of the Wall that crashes upon every Space within a number of Spaces equal to half the Wall's height in both directions. Objects: Medium Size or smaller objects in the area that aren't held or carried are pushed away from the Wall's area to the farthest Spaces of the Tidal Wave's area. Creatures: Medium Size or smaller creatures in the area must make a Might Save against your Save DC. Save Failure: They're pushed to a number of Spaces away from the Wall's area equal to half the Wall's height. Failure (Each 5): They are pushed 1 additional Space. DC Tip: If the Wall is 4 Spaces high when the Spell ends, creatures who fail their Save against the Tidal Wave would be pushed 2 Spaces, plus 1 Space for each 5 they fail the Save by. Spell Passive: Extinguish - Open flames in the area are extinguished, including torches, candles, or small campfires, unless magical or protected.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Length: (1 MP, Repeatable) The Wall's length increases by 2 Spaces.",
      "Height: (1 MP, Repeatable) The Wall's height increases by 2 Spaces.",
      "Tidal Force: (1 MP, Repeatable) The maximum target Size that Tidal Wave effects increases by 1 step (Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic).",
      "Prone: (1 MP) Each target that fails its Save against the Tidal Wave also falls Prone."
    ]
  },
  {
    name: "Water Bolt",
    source: "Primal",
    school: "Elemental",
    tags: ["Bludgeoning", "Motion", "Water"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a bolt of water that flies towards a target of your choice. Make a Ranged Spell Attack against the PD of a target within range. Hit: The target takes 1 Bludgeoning damage. Spell Passive: Extinguish - Open flames in the target's Space are extinguished, including torches, candles, or small campfires, unless magical or protected.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (1 AP, Repeatable) The damage increases by 1 for 1 target of your choice.",
      "Knockback: (1 AP, Repeatable) 1 target of your choice makes a Might Save. Save Failure: The target is pushed 1 Space away from you. Failure (each 5): The target is pushed 1 additional Space.",
      "Splash: (1 AP + X MP) The projectile detonates on impact. Compare the Spell Attack to the AD of each targets in a 2 Space behind the original target. Hit: The target takes X Bludgeoning damage. The AP cost of this Enhancement can't be paid for with MP."
    ]
  },
  {
    name: "Wind Blade",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Bleeding", "Motion", "Slashing"],
    cost: "2 AP",
    range: "Self",
    duration: "Instantaneous",
    description: "You produce a rush of high velocity wind in a 2 Space Arc. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Slashing damage. Spell Passive: Wind - Unsecured mundane objects in the area are knocked over or blown away, especially light ones (papers, tools, empty crates). Can slam doors, scatter sand/dust and disperse smoke.",
    enhancements: [
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The Area's radius increases by X Spaces.",
      "Aura: (1 MP) The Area becomes an Aura instead.",
      "Bleeding: (X MP) Each target makes a Repeated Physical Save. Failure: The target begins Bleeding X for 1 minute.",
      "Tailwind: (1 MP, Repeatable) Immediately before or after casting this Spell you can move 2 Spaces without provoking Opportunity Attacks."
    ]
  },
  {
    name: "Wind Burst",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Bleeding", "Motion", "Slashing"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You produce a vortex of high velocity wind that envelops a 3 Space diameter Sphere area within range. Make an Area Spell Attack against the AD of every target within the area. Hit: The target takes 1 Slashing damage. Close Quarters Penalty: You have DisADV on the Attack if you're within the Melee Range of at least 1 enemy, unless that enemy is Incapacitated. Spell Passive: Wind - Unsecured mundane objects in the area are knocked over or blown away, especially light ones (papers, tools, empty crates). Can slam doors, scatter sand/dust and disperse smoke.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Bleeding: (X MP) Each target makes a Repeated Physical Save. Failure: The target begins Bleeding X for 1 minute.",
      "Turbulent: (2 MP) Each target makes a Might Save. Save Failure: The target is moved to an unoccupied Space of your choice within the area."
    ]
  },
  {
    name: "Wind Tunnel",
    source: "Primal",
    school: "Elemental",
    tags: ["Air", "Motion", "Slowed"],
    cost: "2 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You create a 5 Space Line of forceful wind within range, designating one end as the Point of Origin. Make a Spell Check against the Might Save of each Medium size or smaller creature in the area. Check Success: The target is pushed 1 Space away from the Point of Origin. Success (each 5): They are pushed up to +1 Space. Objects: Medium Size or smaller objects that aren't secured, worn or held are pushed 1 Space away from the Point of Origin. Smaller Sizes: Creatures and objects are pushed up to 1 additional Space for each size smaller they are than the maximum size you can target.",
    enhancements: [
      "Range: (1 MP) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Length: (1 MP, Repeatable) The length of the Line increases by 5 Spaces.",
      "Width: (X MP) The width and Height of the Line increases by X Spaces. The cost of this Enhancement increases by 1 MP for each time the Length Enhancement has been used.",
      "Size: (1 MP, Repeatable) The maximum size of a creature or object you affect with this spell increases by 1 step (Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic). The cost of this Enhancement increases to 2 MP for each size increase beyond Large. Example: You use the Size Enhancement two times to target a Huge creature. The first one cost 1 MP, and the last one costs 2 MP for a total of 3 MP.",
      "Continuous: (X MP, Sustained) The Spell's duration is increased to 1 minute. Creatures in the area affected by the Spell are Slowed X when moving toward the Point of Origin, and move X additional Spaces for every 1 Space of movement spent when moving away from the Point of Origin. Objects affected by the Spell are pushed away from the Point of Origin to the other end of the Line. When you Sustain this Spell or by spending 1 AP, you can change which end is the Point of Origin, reversing the flow of wind.",
      "Projectile Tunnel: (1 MP, Requires Continuous) Ranged Martial Attacks have ADV if they originate from within (or pass through) the Spell's area, provided they travel in the same direction as the wind. Otherwise, Ranged Martial Attacks have DisADV if they originate from within (or pass through) the Spell's area."
    ]
  },

];
