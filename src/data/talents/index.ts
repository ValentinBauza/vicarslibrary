import { generalTalents } from './general-talents';
import { classTalents } from './class-talents';

export const allTalents = [...generalTalents, ...classTalents];
export { generalTalents, classTalents };
export type { Talent } from './types';
