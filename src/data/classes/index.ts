import { cleric } from './cleric';

export { cleric };
export type { CharacterClass, ClassFeature } from './types';

export const classes = {
  cleric: cleric
};

export const classNames = Object.keys(classes);
