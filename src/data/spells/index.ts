import { astromancySpells } from './astromancy';
import { conjurationSpells } from './conjuration';
import { divinationSpells } from './divination';
import { elementalSpells } from './elemental';
import { enchantmentSpells } from './enchantment';
import { invocationSpells } from './invocation';
import { nullificationSpells } from './nullification';
import { transmutationSpells } from './transmutation';

export * from './types';

export const spells = [
  ...astromancySpells,
  ...conjurationSpells,
  ...divinationSpells,
  ...elementalSpells,
  ...enchantmentSpells,
  ...invocationSpells,
  ...nullificationSpells,
  ...transmutationSpells
];
