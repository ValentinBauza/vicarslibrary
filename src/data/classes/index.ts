import { barbarian } from './barbarian';
import { bard } from './bard';
import { champion } from './champion';
import { cleric } from './cleric';
import { commander } from './commander';
import { druid } from './druid';
import { hunter } from './hunter';
import { monk } from './monk';
import { rogue } from './rogue';
import { sorcerer } from './sorcerer';
import { spellblade } from './spellblade';
import { warlock } from './warlock';
import { wizard } from './wizard';

export { barbarian, bard, champion, cleric, commander, druid, hunter, monk, rogue, sorcerer, spellblade, warlock, wizard };
export type { CharacterClass, ClassFeature } from './types';

export const classes = {
  barbarian: barbarian,
  bard: bard,
  champion: champion,
  cleric: cleric,
  commander: commander,
  druid: druid,
  hunter: hunter,
  monk: monk,
  rogue: rogue,
  sorcerer: sorcerer,
  spellblade: spellblade,
  warlock: warlock,
  wizard: wizard
};

export const classNames = Object.keys(classes);
