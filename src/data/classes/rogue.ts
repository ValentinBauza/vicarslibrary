import type { CharacterClass } from './types';

export const rogue: CharacterClass = {
  name: 'Rogue',
  description: 'Rogues are skilled, evasive, and cunning. They impose conditions onto enemies, then exploit those weaknesses to inflict even more harm.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Debilitating Strike',
      level: 1,
      description: 'When you make a Weapon Attack, you can spend 1 SP to force the target to make a Physical Save against your Save DC. Save Failure: The target suffers 1 of the following effects of your choice for 1 Round: Deafened, Exposed, Hindered, or Slowed 2. A target can\'t be affected by the same option more than once at a time.'
    },
    {
      name: 'Roguish Finesse',
      level: 1,
      description: 'Cunning Action: You gain movement equal to half your Speed when you take the Disengage, Feint, or Hide Actions. You can use this movement immediately before or after you take the Action.\n\nSkill Expertise: Your Skill Mastery Limit increases by 1, up to Grandmaster (+10). A Skill can only benefit from this increase to its Mastery limit.\n\nMulti-Skilled: You gain 1 Skill Point.'
    },
    {
      name: 'Cypher Speech',
      level: 1,
      description: 'You become Fluent in a Mortal Language of your choice. Additionally, you understand how to speak in code with a specific demographic of your choice (such as upper society, lower society, a faction, etc.). Your coded messages can be concealed in normal conversation and written communication. This allows you to leave simple messages such as "Safety", "Threat", or "Wealth", or mark the location of a cache, a secret passageway, a safehouse, or an area of danger. This is a Flavor Feature.'
    },
    {
      name: 'Cheap Shot',
      level: 2,
      description: 'You deal +1 damage on Martial Attacks against a creature that fulfills at least one of the following:\n• It\'s Flanked or Prone.\n• It has any Condition other than Invisible.\n• You\'re Hidden from it.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Martial Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Rogue Subclasses: Long Death, Swashbuckler, or Paragon.',
      options: [
        {
          name: 'Long Death',
          description: 'You are a master of applying deadly toxins and exploiting bleeding wounds.'
        },
        {
          name: 'Swashbuckler',
          description: 'You are a skilled duelist who taunts opponents while taking advantage of their openings.'
        },
        {
          name: 'Paragon',
          description: 'You embody the quintessential rogue, blending stealth, cunning, and precision.'
        }
      ]
    },
    {
      name: 'Talent',
      level: 4,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 4,
      description: 'You gain the benefits of the Martial Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Rogue',
      level: 5,
      description: 'You gain the following benefits for your Rogue Class Features:\n\n• Debilitating Strike: When you use Debilitating Strike, you can spend SP to choose an additional condition per SP spent.\n• Roguish Finesse: You gain 1 Skill Point.\n• Cheap Shot: Cheap Shot now deals +2 damage instead.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Martial Path.'
    }
  ]
};
