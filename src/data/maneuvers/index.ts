import { attackManeuvers } from './attack-maneuvers';
import { defenseManeuvers } from './defense-maneuvers';
import { grappleManeuvers } from './grapple-maneuvers';
import { utilityManeuvers } from './utility-maneuvers';

export * from './types';

export const maneuvers = [
  ...attackManeuvers,
  ...defenseManeuvers,
  ...grappleManeuvers,
  ...utilityManeuvers
];
