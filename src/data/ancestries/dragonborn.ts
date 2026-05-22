import type { Ancestry } from './types';

export const dragonborn: Ancestry = {
  name: 'Dragonborn',
  source: 'DC20 RPG 0.10.5 Beta v1',
  specialRules: 'Draconic Origin: Choose a Draconic Origin from the list below. All future choices within this Ancestry must use the chosen Draconic Origin. The type of damage associated with your Draconic Origin is your Draconic damage.\n\n• Elemental Origin: Cold, Corrosion, Fire, Lightning, or Poison.\n• Mystic Origin: Psychic, Radiant, or Umbral.',
  defaultTraits: [
    {
      name: 'Darkvision',
      pointCost: 1,
      description: 'You have Darkvision 10 Spaces.'
    },
    {
      name: 'Draconic Resistance',
      pointCost: 2,
      description: 'You gain Resistance (Half) to your Draconic damage type.'
    },
    {
      name: 'Draconic Breath Weapon',
      pointCost: 2,
      description: 'You gain a Breath Weapon that you can use by spending 2 AP to exhale destructive power in an Area or Focused against a specific target. You can use this ability once per Long Rest, and regain the ability to use it again when you roll for Initiative.\n\n• Area: Make a Spell Attack against every target\'s AD within a 3 Space Cone or 6 Space Line. Hit: The target takes 2 Draconic damage.\n• Focused: Make a Spell Attack against 1 target\'s PD within 6 Spaces. Hit: The target takes 4 Draconic damage.\n\nBefore you make your Spell Check, you can spend 1 or more SP, MP, or a combination of both to increase the damage. When you do, the Area damage increases by 1 per 2 SP spent or 1 MP spent, and the Focused damage increases by 1 per SP spent and by 2 per MP spent.'
    },
    {
      name: 'Reptilian Superiority',
      pointCost: 0,
      description: 'You have ADV on Intimidation Checks against reptilian creatures of Medium Size and smaller (not including other Dragonborn).'
    }
  ],
  expandedTraits: [
    {
      name: 'Mana Increase',
      pointCost: 1,
      description: 'Your MP maximum increases by 1.'
    },
    {
      name: 'Thick-Skinned',
      pointCost: 1,
      description: 'While you aren\'t wearing Armor, you gain +1 AD.'
    },
    {
      name: 'Second Breath',
      pointCost: 2,
      description: '(requires Draconic Breath Weapon) You can now use your Draconic Breath Weapon twice per Combat. Additionally, whenever you use your Draconic Breath Weapon, you can spend 2 uses to increase the damage by 2 if it\'s an Area, or by 4 if it\'s Focused.'
    },
    {
      name: 'Concussive Breath',
      pointCost: 1,
      description: '(requires Draconic Breath Weapon) When you use your Draconic Breath Weapon, you can force all targets to make a Physical Save. Save Failure: The target is pushed 1 Space away +1 additional Space for every 5 it fails its Save by.'
    },
    {
      name: 'Draconic Affinity',
      pointCost: 1,
      description: 'When you take damage of the same type as your Draconic damage, your next Draconic Breath Weapon deals +1 bonus damage.'
    },
    {
      name: 'Dying Breath',
      pointCost: 1,
      description: '(requires Draconic Breath Weapon) Once per Combat when you enter Death\'s Door, you regain a use of your Draconic Breath Weapon and can immediately use it as a Reaction for free (0 AP).'
    },
    {
      name: 'Dragon Ward',
      pointCost: 1,
      description: 'Once per Combat when you enter Death\'s Door, you gain 2 Temp HP. Whenever you\'re Hit by a Melee Attack while you have this Temp HP, your Attacker takes 1 Draconic damage.'
    },
    {
      name: 'Draconic Protection',
      pointCost: 1,
      description: 'Once per Combat, when an ally within 20 Spaces is on Death\'s Door, you begin to surge with ancient power. While they remain on Death\'s Door their PD and AD increases by 5 until Combat ends.'
    },
    {
      name: 'Glide Speed',
      pointCost: 2,
      description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren\'t Incapacitated, you gain the following benefits while in the air:\n\n• Controlled Falling: You suffer no damage from Controlled Falling.\n• Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces.\n• Glide Speed: You can use your movement to glide horizontally.'
    },
    {
      name: 'Guardian\'s Bond',
      pointCost: -1,
      description: 'Once per Combat when an ally enters Death\'s Door within 20 Spaces of you, you take an amount of True damage equal to your Prime Modifier.'
    }
  ]
};
