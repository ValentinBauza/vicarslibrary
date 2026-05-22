import type { Ancestry } from './types';

export const fiendborn: Ancestry = {
  name: 'Fiendborn',
  source: 'DC20 RPG 0.10.5 Beta v1',
  specialRules: 'Fiendish Origin: Choose a Fiendish Origin from the following list: Cold, Corrosion, Fire, Poison, and Umbral. All future choices within this Ancestry must use the chosen Fiendish Origin. The type of damage associated with your Fiendish Origin is your Fiendish damage.\n\nFiendborn Redemption: If you choose to play a Fiendborn and go down a path of redemption, you can choose to be a Redeemed Fiendborn. This can happen at character creation from good acts done from your backstory, or this can happen mid-campaign after a large change in your character.\n\nYou gain the following Ancestry Trait:\n• (0) Redeemed: You can now spend your Ancestry Points on Angelborn Traits.',
  defaultTraits: [
    {
      name: 'Fiendish Resistance',
      pointCost: 2,
      description: 'You gain Resistance (Half) to your Fiendish damage type.'
    },
    {
      name: 'Fiendish Magic',
      pointCost: 2,
      description: 'You learn 1 Spell of your choice from the Arcane Spell List from the Elemental or Enchantment Spell Schools. If the Spell deals damage, it must be the same damage type as your Fiendish damage. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spell\'s total MP cost (before all reductions) still can\'t exceed your Mana Spend Limit.'
    },
    {
      name: 'Darkvision',
      pointCost: 1,
      description: 'You have a Darkvision of 10 Spaces.'
    },
    {
      name: 'Light\'s Bane',
      pointCost: 0,
      description: 'You can spend 1 AP to snuff out a mundane light source within 5 Spaces of you.'
    }
  ],
  expandedTraits: [
    {
      name: 'Mana Increase',
      pointCost: 1,
      description: 'Your MP maximum increases by 1.'
    },
    {
      name: 'Silver-Tongued',
      pointCost: 1,
      description: 'Once per Long Rest you can grant yourself ADV on an Influence Check when trying to deceive someone.'
    },
    {
      name: 'Fiendish Aura',
      pointCost: 1,
      description: 'You learn the Sorcery Cantrip, but you must choose the type of energy that\'s the same as your Fiendish Origin.'
    },
    {
      name: 'Superior Darkvision',
      pointCost: 1,
      description: '(requires Darkvision) Your Darkvision increases to 20 Spaces.'
    },
    {
      name: 'Infernal Bravery',
      pointCost: 1,
      description: 'You have ADV on Saves against being Intimidated.'
    },
    {
      name: 'Intimidator',
      pointCost: 1,
      description: 'Once per Combat you can take the Intimidate Action as a Minor Action.'
    },
    {
      name: 'Charming Gaze',
      pointCost: 1,
      description: 'You can spend 1 AP to gaze upon a creature you can see within 10 Spaces that can also see you. Make a Spell Check contested by the target\'s Repeated Charisma Save. Success: The creature becomes Charmed by you for 1 minute. You can use this ability once per Long Rest, or meet some other unique criteria at the GM\'s discretion, this ability recharges.'
    },
    {
      name: 'Glide Speed',
      pointCost: 2,
      description: 'You have a set of wings that you can use to horizontally glide and slow your descent. Provided you aren\'t Incapacitated, you gain the following benefits while in the air:\n\n• Controlled Falling: You suffer no damage from Controlled Falling.\n• Altitude Drop: If you end your turn midair, you Controlled Fall 4 Spaces.\n• Glide Speed: You can use your movement to glide horizontally.'
    },
    {
      name: 'Radiant Weakness',
      pointCost: -1,
      description: 'You have Radiant Vulnerability (1).'
    },
    {
      name: 'Divine Dampening',
      pointCost: -1,
      description: 'You recover 1 less HP when healed from divine sources.'
    }
  ]
};
