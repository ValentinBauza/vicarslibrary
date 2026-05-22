import { human } from './human';
import { elf } from './elf';
import { dwarf } from './dwarf';
import { halfling } from './halfling';
import { gnome } from './gnome';
import { orc } from './orc';
import { dragonborn } from './dragonborn';
import { giantborn } from './giantborn';
import { angelborn } from './angelborn';
import { fiendborn } from './fiendborn';

export { human, elf, dwarf, halfling, gnome, orc, dragonborn, giantborn, angelborn, fiendborn };
export type { Ancestry, AncestryTrait } from './types';

export const ancestries = {
  human: human,
  elf: elf,
  dwarf: dwarf,
  halfling: halfling,
  gnome: gnome,
  orc: orc,
  dragonborn: dragonborn,
  giantborn: giantborn,
  angelborn: angelborn,
  fiendborn: fiendborn
};

export const ancestryNames = Object.keys(ancestries);
