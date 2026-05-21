import type { Spell } from './types';

export const conjurationSpells: Spell[] = [
  {
    name: "Arcane Barrier",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Embolden", "Ward"],
    cost: "2 AP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You place an Arcane Glyph within range that creates a 3 Space diameter Sphere which protects creatures and objects inside for the duration or until they leave the area. Make a DC 15 Spell Check. Failure: The targets gain PDR and 1 Temp HP. Success: The Temp HP increases by 1.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Protection: (X MP) Each time creatures of you choice end their turn in the area, they gain X Temp HP until they leave the area or the Spell ends.",
      "Resistance: (2 MP) Creatures of you choice in the area gain Physical Resistance (Half) instead of PDR.",
      "Magical Ward: (2 MP) Creatures in the area have ADV on Saves against MP effects. Spell Attacks have DisADV against creatures in the area."
    ]
  },
  {
    name: "Call Familiar",
    source: "Arcane, Divine, Primal",
    school: "Conjuration",
    tags: ["Sense", "Summoning"],
    cost: "1 AP + 1 MP",
    range: "1 Space",
    duration: "Instantaneous",
    description: "You summon a friendly spirit that enters your service until you are reduced to 0 HP or you choose to end the Spell for free on your turn. It takes the form of a Tiny creature of your choice, with a Creature Type of your choice (except Beast and Humanoid). Your Familiar uses the statblock below. The Familiar shares your HP. If you both take damage from the same source, you only take 1 instance of that damage. While your Familiar occupies the same Space as you, it can't be targeted by Attacks. Pocket Dimension: You can spend a Minor Action to dismiss the Familiar into a pocket dimension, summon it from that pocket dimension, or summon it from anywhere on the same plane of existence. When summoned or dismissed, it appears in the nearest unoccupied Space of your choice. Shared Senses: While your Familiar is within 20 Spaces, you and your Familiar can speak Telepathically with each other. Spell Delivery: While within 10 Spaces of your Familiar, you can cast a Spell with a range of 1 Space as if you were standing in your Familiar's Space.",
    enhancements: [
      "Additional Traits: (1 MP, Repeatable) Grant your Familiar 2 points worth of Familiar or Beast Traits (you can't choose Negative Traits)."
    ]
  },
  {
    name: "Arcane Weapon",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Enfeeble", "Bludgeoning", "Piercing", "Slashing", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a Tiny Weapon made that deals a Physical Damage Type (Bludgeoning, Piercing or Slashing) of your choice. The Weapon disappears when the Spell ends. Command: Once per Round, when you cast the Spell, Sustain it, or by spending 1 AP on your turn, you can move the Weapon up to 5 Spaces and choose to make a Melee Spell Attack against the PD of a target within 1 Space of the Weapon. Hit: The target takes 2 damage of the chosen Damage Type. Tethered: The Weapon is Tethered to you a distance equal to the Spell's range. If you move farther than the Tethered distance from the Weapon, you drag the Weapon with you.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The Weapon's damage increases by X.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell and can Command the Weapon for free on your turn. You still can only Command the Weapon once per Round.",
      "Physical Effect: (1 MP) Creatures Hit by the Weapon have Vulnerability to an effect based on the chosen Damage Type for 1 Round: Bludgeoning (Prone), Piercing (Impaired), or Slashing (Bleeding).",
      "Cleave: (1 MP) When you Command the Weapon, you can instead make a Area Spell Attack against the AD of each target within a 1 Space Arc of the Weapon. Hit: The target takes 1 damage of the chosen type."
    ]
  },
  {
    name: "Bind",
    source: "Arcane, Divine, Primal",
    school: "Conjuration",
    tags: ["Bludgeoning", "Immobilized", "Restrained"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You bind a creature within range. Make a Spell Check contested by the target's Agility Save. Check Success: The target is Immobilized for the duration. Once on each of their turns, the target can spend 1 AP to attempt the Save again, ending the Spell on a success. Spell Passive: Wild Magic Surge - When you Critically Fail or Critically Succeed on a Check made to cast this Spell, you roll on the Wild Magic Table.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Restrain: (1 MP) On a Success, the target is Restrained instead.",
      "Constrict: (1 MP) For the duration, once per Round, you can spend 1 AP to deal 2 Bludgeoning damage to the target. When you make this attack, you can spend 1 or more MP to increase the damage by 1 per MP spent."
    ]
  },
  {
    name: "Chaos Bomb",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Chaos"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You conjure a Tiny sized Chaos Bomb in a Space within range. At the end of each of your turns, make a Fate Check. Result of 10 or above: The Chaos Bomb detonates. Detonation: When the bomb detonates, roll a d12 to determine the bomb's damage type. Make an Area Spell Attack as a Reaction for free against the AD of each target in a 3 Space diameter Sphere centered on the Bomb's Space while they make an Intelligence Save against your Save DC. Hit: The target takes 1 damage of the rolled damage type. Save Failure: The target is subjected to the effects of the Save Failure column based on the result rolled.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The damage increases by X.",
      "Chaotic Expansion: (1 AP) When you roll for Detonation and it doesn't detonate, the diameter of the Sphere increases by 1 Space.",
      "Controlled Entropy: (1 AP) When you roll the Fate Check, you roll twice and choose which result to use.",
      "Sticky: (1 AP) When you cast the Spell, you can attach the Chaos Bomb to an object or creature within range. If the target isn't willing, make a Spell Check against the target's Agility Save. Check Success: The Bomb is magically attached to the target. A creature can spend 1 AP to make a Trickery Check against your Save DC to remove it from a target within 1 Space (including themselves). Success: The Bomb stops magically sticking to objects or creatures. Success (5): The Bomb stops magically sticking to objects or creatures."
    ]
  },
  {
    name: "Disguise Self",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Communication", "Illusion"],
    cost: "1 AP + 1 MP",
    range: "Self",
    duration: "10 Minutes",
    description: "You alter your appearance to that of a specific person that you have seen or a general member of that ancestry. Your new form needs to be of the same size as you and you do not gain the traits, Features, or statistics of that form. You can end this Spell at any time for free. Being Identified: A creature can make an Investigation Check against your Save DC to discern that your form is not natural and has been altered by magic.",
    enhancements: [
      "Duration: (1 MP, Repeatable) The duration increases by 1 step (10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Size: (1 MP) You can choose the appearance of a creature 1 Size smaller or larger than you. Your Size doesn't change.",
      "Mimicry: (1 MP) You can perfectly mimic the voice, accent, and mannerisms of a creature you've heard speak for at least 10 minutes.",
      "Alter Form: (1 MP) Once per Round for the duration, you can spend 1 AP to alter your appearance to a different form of your choice."
    ]
  },
  {
    name: "Entangle",
    source: "Primal",
    school: "Conjuration",
    tags: ["Immobilized", "Plants", "Piercing", "Restrained"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You conjure a 3 Space diameter Sphere of natural phenomenon (such as entangling plants) within range. The area becomes Difficult Terrain for the duration. Make a Spell Check against the Agility Save of each creature in the area. Save Failure: The target becomes Immobilized for the duration or until the Space is cleared of the effect. The target can also spend 1 AP to repeat its Save, ending the Condition on itself on a Success. Clearing Spaces: Each Space within the area has an AD and PD equal to your Save DC and is cleared when it takes an amount of Elemental or Slashing damage equal to 1 MP spent on the Spell (minimum of 1).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Grasping: (2 MP) When a creature enters a Space within the area that hasn't been cleared for the first time on its turn, it makes an Agility Save against your Save DC. Save Failure: The target becomes Immobilized for the duration or until its Space is cleared of the effect. The target can also spend 1 AP to repeat its Save, ending the Condition on itself on a Success.",
      "Restrained: (2 MP) Creatures Immobilized by the Spell are also Restrained.",
      "Spikey Terrain: (X MP) Creatures take X Piercing damage when they enter a Space within the area that hasn't been cleared. They also take this damage each time they fail a Save (including any subsequent Saves) to resist being Immobilized by the Spell."
    ]
  },
  {
    name: "Elemental Weapon",
    source: "Primal",
    school: "Conjuration",
    tags: ["Cold", "Corrosion", "Enfeeble", "Fire", "Lightning", "Poison", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a Tiny spectral Weapon that deals an Elemental Damage Type (Cold, Corrosion, Fire, Lightning or Poison) of your choice. The Weapon disappears when the Spell ends. Command: Once per Round, when you cast the Spell, Sustain it, or by spending 1 AP on your turn, you can move the Weapon up to 5 Spaces and choose to make a Melee Spell Attack against the PD of a target within 1 Space of the Weapon. Hit: The target takes 2 damage of the chosen Damage Type. Tethered: The Weapon is Tethered to you a distance equal to the Spell's range. If you move farther than the Tethered distance from the Weapon, you drag the Weapon with you.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The Weapon's damage increases by X.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell and can Command the Weapon for free on your turn. You still can only Command the Weapon once per Round.",
      "Elemental Effect: (1 MP) Creatures Hit by the weapon have Vulnerability to an effect based on the chosen Damage Type for 1 Round: Slowed (Corrosion, Hindered), Fire (Burning), Lightning (Stunned), or Poison (Poisoned).",
      "Enduring Elements: (X MP) Creatures attacked by the Weapon must make a Repeated Physical Save. Save Failure: At the start of each of their turns, they take X damage of the chosen Damage Type for 1 minute."
    ]
  },
  {
    name: "Forcefield",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Antimagic", "Sound", "Summoning"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You create a Forcefield of pure arcane energy within range. Choose either a 3 Space diameter Dome or a 5 Space long, 2 Space tall Wall. Creatures and objects on either side of the Forcefield are pushed to nearest unoccupied Space of their choice on either side of the Forcefield (you choose for each object). The Forcefield is translucent and acts as a solid surface, blocking movement but not sound or light. The Forcefield has 2 HP, Resistance (Half) to all damage, and a PD and AD equal to your Save DC.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (1 MP, Repeatable) The size of the Forcefield increases: Dome: The diameter of the Dome increases by 1 Space. Wall: The length of the Wall increases by 5 Spaces and the height of the Wall increases by 2 Spaces.",
      "Durable: (X MP) The Forcefield has +X HP.",
      "One-way Mirror: (1 MP) Choose one face of the Forcefield to stay translucent. Creatures on that side see through normally, while creatures on the other side perceive it as a mirror.",
      "Privacy: (1 AP) When you cast the Spell or by spending 1 AP, you can alter how sound passes through the Forcefield. You can prevent any sound from passing through, prevent sound from only passing through in 1 direction (for example from the outside to the inside), or allow all sound to pass through.",
      "Full Lockdown: (2 MP) Creatures and effects can't affect anything on the other side of the Forcefield. In addition, creatures and objects can't teleport through the Forcefield."
    ]
  },
  {
    name: "Illusory Duplicate",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Communication", "Illusion", "Teleportation", "Sense"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You create an illusory duplicate of yourself in an unoccupied Space within range. Second Self: The duplicate mimics your posture and gestures. When you spend 1 AP to move, you can cause the duplicate to move instead of you or with you. If the duplicate moves with you, it moves in a similar manner the same number of Spaces in a direction of your choice. If you end your turn farther than the Spell's range from a duplicate, it disappears. Shared Senses: You can use a Minor Action to see and hear as if standing in the Space occupied by the duplicate. When you do you are Blinded and Deafened using your own senses. You can use a Minor Action to end the effect. False Threat: The duplicate is intangible, causing creatures and objects to pass through it. The duplicate counts as a creature for the purposes of Flanking against any creature that can't discern the duplicate as an illusion. Discerning the Illusion: A creature that attempts to physically interact with the duplicate automatically learns that it's an illusion. Otherwise, a creature can make an Investigation Check against your Save DC to attempt to discern if the duplicate is an illusion. Success: The creature discerns its an illusion.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration is increased by 1 step (1 min -> 10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Additional Duplicate: (X MP) You create X additional duplicates within range and each one can move independently when you move.",
      "Ventriloquism: (1 MP) You can choose to speak through your duplicate at the same time as you or instead of you, making your voice appear to come from its location.",
      "Swap: (3 MP) You can now spend 1 AP on your turn to swap places with a duplicate that's within the Spell's range. This swap is only noticeable by a creature that has discerned the duplicate to be an illusion."
    ]
  },
  {
    name: "Illusory Image",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Illusion", "Scent", "Sound", "Trap"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "You create an up to Medium size visual illusion of an object, creature, or effect within range. The illusion is purely visual, it can't create sound, light, smell, or physical interaction. It appears real to the eye but doesn't cast shadows or leave tracks. Make a DC 15 Spell Check. Failure: Creatures gain ADV on Checks made to Discern the Illusion. Success: Creatures gain DisADV on Checks made to Discern the Illusion. Success (5): Creatures gain DisADV on Checks made to Discern the Illusion. Discern the Illusion: If the illusion is an image, any physical interaction with the image reveals it to be an illusion. Alternatively, a creature can spend 1 AP to examine the image (or any effects from the Senses Enhancement) to attempt to determine if the illusion is real. The creature makes an Investigation Check against your Save DC. Success: The creature discerns the illusion for what it is, revealing the illusion to be false. If the illusion is an image, the illusion becomes partially transparent to the creature and no longer blocks their vision.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increased by 1 step (1 min -> 10 min -> 1 hour -> 8 hours -> Long Rest).",
      "Size: (1 MP, Repeatable) The Size of the illusion increases by 1 (e.g Medium -> Large -> Huge -> Gargantuan -> Colossal -> Titanic).",
      "Senses: (1 MP, Repeatable) The illusion can include one additional sense: sound, smell, or temperature.",
      "Programmed Image: (1 MP) You can set a simple repeating behavior (such as pacing, nodding, waving) that lasts for the duration.",
      "Triggered Image: (1 MP) You set a simple trigger when casting the spell (such as \"when someone enters this area\" or \"when the door opens\"). When the trigger occurs, the illusion appears instantly and lasts for the Spell duration. Until triggered, the Spell lies dormant."
    ]
  },
  {
    name: "Illusory Writing",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Communication", "Illusion", "Trap"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "1 Hour",
    description: "You inscribe text, sigils, or symbols upon a surface, infusing them with illusion magic. When cast, you write a sentence of up to 20 words that appears mundane or magical (your choice) on a surface or willing creature within range. While touching it, you can spend 1 AP to dismiss or rewrite the text. Hidden Script: When you cast the Spell, you can choose to obfuscate the writing to all creatures except those you designate at the time of casting. All other creature see the writing as gibberish, a creature can spend 1 AP to make an Investigation Check against your Save DC. Success: The creature can read the writing provided they understand the language its written in. Failure: The creature can't attempt this Check again for 24 hours.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Extended Script: (1 MP, Repeatable) The duration increases to Long Rest and you can add an additional sentence with up to 40 words for each time you use this Enhancement. If you spend 2 MP or more on this Enhancement, you can choose for the duration to become Until Dispelled.",
      "Lingering Message: (1 MP) The writing can produce faint sound or whispers that communicate its meaning aloud to nearby readers.",
      "Misleading Script: (1 MP) When a creature you haven't designated attempts to read the writing fails their Investigation Check to discern its meaning, they instead see a false message of your choosing.",
      "Trigger Phrase: (1 MP) The script activates or becomes visible when a chosen word or condition is met (for example: \"When someone opens this door,\" or \"When the moon is full\").",
      "Skywriting: (3 MP) You can instead inscribe the message across the sky in massive, glowing letters visible for miles. The range becomes Sight. This Enhancement can't be used with the Extended Script Enhancement."
    ]
  },
  {
    name: "Mage Armor",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Embolden", "Ward"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Hour",
    description: "You create a magical protective coating around the target creature. The target gains +2 AD for the duration.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Duration: (1 MP, Repeatable) The duration increases by 1 step. (1 hour -> 8 hours -> until Long Rest).",
      "Greater Armor: (1 MP) The target gain an additional +1 AD.",
      "Heavily Warded: (1 MP) The target gains PDR for the duration."
    ]
  },
  {
    name: "Mystical Weapon",
    source: "Divine",
    school: "Conjuration",
    tags: ["Enfeeble", "Psychic", "Radiant", "Umbral", "Weapon"],
    cost: "1 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a Tiny spectral Weapon that deals a Mystical Damage Type (Psychic, Radiant or Umbral) of your choice. The Weapon disappears when the Spell ends. Command: Once per Round, when you cast the Spell, Sustain it, or by spending 1 AP on your turn, you can move the Weapon up to 5 Spaces and choose to make a Melee Spell Attack against the PD of a target within 1 Space of the Weapon. Hit: The target takes 2 damage of the chosen Damage Type. Tethered: The Weapon is Tethered to you a distance equal to the Spell's range. If you move farther than the Tethered distance from the Weapon, you drag the Weapon with you.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (X MP) The Weapon's damage increases by X.",
      "Effortless: (1 MP) You no longer need to Sustain the Spell and can Command the Weapon for free on your turn. You still can only Command the Weapon once per Round.",
      "Mystical Effect: (1 MP) Creatures Hit by the Weapon have Vulnerability to an effect based on the chosen Damage Type for 1 Round: Radiant (Blinded), Psychic (Dazed), or Umbral (Doomed).",
      "Inhibiting: (1 MP) Creatures attacked by the Weapon must make a Mental Save. Save Failure: The target subtracts a d4 from their Checks for 1 Round."
    ]
  },
  {
    name: "Nature's Tether",
    source: "Primal",
    school: "Conjuration",
    tags: ["Bleeding", "Motion", "Plant", "Restrained", "Tethered"],
    cost: "1 AP",
    range: "10 Spaces",
    duration: "Instantaneous",
    description: "You conjure a whip made of vines, web, or some other natural effect that reaches for a target of your choice within range. Creature: If you target a creature, you can take the following Actions against the target: Pursuit: You pull yourself up to 5 Spaces toward the target. Pull: Make a Spell Check against the creature's Might Save. Save Failure: You pull them up to 2 Spaces toward you. Save Failure (each 5): You pull them up to 1 additional Space. Object: If you target an object that's not being held or carried, you pull it up to 5 Spaces towards you, or you pull yourself up to 5 Spaces towards it if it weighs more than you.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Distance: (1 AP, Repeatable) The distance moved increases by 2 Spaces.",
      "Bleeding: (X MP) The target must make a Might Save. Save Failure: They begin Hindered X.",
      "Tether: (1 MP) The target must make a Might Save. Save Failure: They becomes Tethered to you a distance equal to the Spell's range. While Tethered in this way, you can spend 1 AP to take the Pursuit or Pull Actions against the target. Once on each of their turns, the target can spend 1 AP to attempt the Save again, ending the Condition on a success.",
      "Restrain: (1 MP, Requires Tether) While Tethered by this Spell, the target is Restrained."
    ]
  },
  {
    name: "Oil Slick",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Burning", "Trap"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute",
    description: "An oily substance covers the ground in a 3 Space diameter Sphere area within range. When you cast the Spell, make a Spell Check against the Agility Save of each target in the area. Check Success: The target falls Prone. The affected Spaces are Difficult Terrain for the duration. The first time per turn a creature enters a Space in the area, it makes an Agility Save against your Save DC. Save Failure: The target falls Prone.",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Area: (X MP) The diameter of the Sphere increases by X Spaces.",
      "Spreading Oil: (1 MP) Whenever a creature falls Prone in the area, it becomes afflicted by Spreading Oil for the duration. When the creature enters a Space, that Space becomes affected by the Spell. A creature afflicted by Spreading Oil makes a Repeated Agility Save at the end of each of its turns, ending the effect on a Success.",
      "Flammable: (X MP) Any oil produced by this Spell becomes flammable. If fire touches the Space of ignites. When a creature enters the area for the first time on its turn, or starts its turn in an ignited Space, it makes a Repeated Physical Save against your Save DC. Save Failure: The target begins Burning X for 1 minute."
    ]
  },
  {
    name: "Tendrils from Beyond",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Aberration", "Bludgeoning", "Madness", "Psychic"],
    cost: "2 AP + 1 MP",
    range: "10 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You bring forth tendrils from beyond which cover each surface in a 3 Space diameter Sphere within range for the duration. Spaces filled with tendrils become Difficult Terrain. When you cast this Spell, make an Area Spell Attack against the PD of each creatures in the area. Hit: The target takes 1 Bludgeoning or Psychic damage (your choice). Tendril Attack: Once on each of your turns, when you Sustain this Spell or by spending 1 AP on your turn, you can make an Area Spell Attack against the PD of each target within the area. Hit: The target takes 1 Bludgeoning or Psychic damage (your choice).",
    enhancements: [
      "Range: (1 AP, Repeatable) The range of the Spell increases by 5 Spaces. You can use this Enhancement a maximum of two times.",
      "Damage: (2 MP, Repeatable) The damage increases by 1.",
      "Area: (1 MP, Repeatable) The diameter of the Sphere increases by 1 Space.",
      "Moving Tendrils: (1 MP) When you Sustain this Spell or by spending 1 AP, you can move the area up to 5 Spaces to another Space within range.",
      "Maw of Madness: (2 MP) When a creature enters the area for the first time on its turn or starts its turn there, it makes an Intelligence Save against your Save DC. Save Failure: The target spends 1 AP suffering from temporary madness.",
      "Tripping: (2 MP) When you make an Attack with this Spell, each target makes an Agility Save against your Save DC. Save Failure: The target falls Prone."
    ]
  },
  {
    name: "Unholy Aura",
    source: "Divine",
    school: "Conjuration",
    tags: ["Death", "Doomed", "Shadow", "Tethered"],
    cost: "2 AP + 1 MP",
    range: "Self",
    duration: "1 Minute",
    description: "Umbral energy surrounds you in a 1 Space Aura for the duration. When you cast the Spell, make a Spell Check against the Repeated Charisma Save of each target within the area. Check Success: The target is Doomed for the duration. Doomed Area: When a creature enters the area for the first time on its turn or starts its turn there, it makes a Repeated Charisma Save against your Save DC. Save Failure: The target is Doomed for the duration. Spell Passive: Obscure - Mundane lights produced by tiny or smaller sources stop working while within the Aura.",
    enhancements: [
      "Area: (X MP) The radius of the Aura increases by X.",
      "Doomed: (2 MP, Repeatable) Whenever a target gains Doomed from this Spell, it gains an additional stack for each time you use this Enhancement.",
      "Deathly Conversion: (1 MP, Repeatable) When a Doomed creature dies within the Aura, you gain 2 Temp HP. The Temp HP increases by 2 each time you use this Enhancement.",
      "Grasping Wisps: (1 MP) Creatures Doomed by this Spell are also Tethered to the Unholy Aura."
    ]
  },
  {
    name: "Summon Aberration",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon an aberration to assist you. Choose an aberration creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Beast",
    source: "Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a beast to assist you. Choose a beast creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Celestial",
    source: "Divine",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a celestial to assist you. Choose a celestial creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Construct",
    source: "Arcane",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a construct to assist you. Choose a construct creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Dragon",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a dragon to assist you. Choose a dragon creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Elemental",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon an elemental to assist you. Choose an elemental creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Fey",
    source: "Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a fey to assist you. Choose a fey creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Fiend",
    source: "Arcane, Divine",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a fiend to assist you. Choose a fiend creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Ooze",
    source: "Arcane, Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon an ooze to assist you. Choose an ooze creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Plant",
    source: "Primal",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon a plant to assist you. Choose a plant creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },
  {
    name: "Summon Undead",
    source: "Arcane, Divine",
    school: "Conjuration",
    tags: ["Summoning"],
    cost: "2 AP + X MP",
    range: "5 Spaces",
    duration: "1 Minute (Sustained)",
    description: "You summon an undead to assist you. Choose an undead creature type and spend MP up to your Mana Spend Limit. The summoned creature appears in an unoccupied space within range and acts on your turn. It follows your commands and uses your Spell Save DC for its abilities.",
    enhancements: [
      "Duration: (1 MP) The duration increases to 10 minutes.",
      "Stronger Summon: (X MP) The summoned creature's level increases by X (up to your Mana Spend Limit)."
    ]
  },

];
