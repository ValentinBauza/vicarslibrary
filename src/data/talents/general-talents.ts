import type { Talent } from './types';

export const generalTalents: Talent[] = [
  {
    name: 'Ancestry Increase',
    category: 'General',
    description: 'You gain 4 Ancestry Points.',
    benefits: []
  },
  {
    name: 'Attribute Increase',
    category: 'General',
    description: 'You gain 2 Attribute Points to put into any Attribute of your choice.',
    benefits: []
  },
  {
    name: 'Skill Increase',
    category: 'General',
    description: 'You gain 4 Skill Points.',
    benefits: []
  },
  {
    name: 'Martial Expansion',
    category: 'General',
    canOnlyGainOnce: true,
    description: 'You can only gain this Talent once.',
    benefits: [
      'Combat Training: You gain Combat Training with Weapons, Heavy Armors, and all Shields.',
      'Stamina Regen: You gain the Stamina Regen of the Class of your choice or the Spellcaster Path Stamina Regen (see "Character Paths" on page 192). You can only benefit from 1 Stamina Regen per Round.',
      'Maneuvers Known: You learn 2 Maneuvers.'
    ]
  },
  {
    name: 'Spellcasting Expansion',
    category: 'General',
    canOnlyGainOnce: true,
    description: 'You can only gain this Talent once.',
    benefits: [
      'Combat Training: You gain Combat Training with Spell Focuses.',
      'Spell List: You add 1 Spell Source or 3 Spell Schools of your choice to your Spell List.',
      'Spells Known: You learn 3 Spells from your Spell List.'
    ]
  }
];
