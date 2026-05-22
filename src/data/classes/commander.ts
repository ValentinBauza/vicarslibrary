import type { CharacterClass } from './types';

export const commander: CharacterClass = {
  name: 'Commander',
  description: 'Commanders are the leaders of the battlefield, inspiring their allies and leading them to victory. They can command their allies to attack or move around the battlefield, and are even able to "heal" allies by making them dig deep within themselves to push forward in combat.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Inspiring Presence',
      level: 1,
      description: 'Once per Round during Combat, when you spend SP you can restore 1 HP to a creature of your choice within 5 Spaces (including yourself) that can see or hear you. If the creature is on Death\'s Door, they regain 1 additional HP.'
    },
    {
      name: 'Commander\'s Call',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to command a willing creature that you can see within 5 Spaces that can also see or hear you. The chosen creature can immediately take 1 of the following Actions of your choice as a Reaction for free. You can only use each of the following commands once on each of your turns:\n\n• Attack: The creature makes an Attack with ADV. They can\'t spend any resources on this Attack, such as AP, SP, or MP.\n• Dodge: The creature takes the Full Dodge Action.\n• Move: The creature moves up to their Speed without provoking Opportunity Attacks.'
    },
    {
      name: 'Natural Leader',
      level: 1,
      description: 'You have ADV on Checks made to convince creatures that you are an authority figure. Additionally, you have ADV on the first Charisma Check made to interact with non-hostile members of military groups (such as soldiers, guards, etc.). This is a Flavor Feature.'
    },
    {
      name: 'Commanding Aura',
      level: 2,
      description: 'You\'re surrounded by a 5 Space Aura. You can target any creature within your Aura to grant one of the following effects below, provided the target can see or hear you:\n\n• Bolster: (1 AP) You take the Help Action to aid the target with an Attack. You can also do so as a Reaction whenever a valid target makes an Attack.\n• Rally: (1 AP) You grant creatures of your choice (including yourself) 1 Temp HP.\n• Reinforce: (1 AP) When a creature in your Aura is targeted by an Attack, you can impose DisADV on the Attack as a Reaction.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Commander Subclasses: Crusader, Warlord, or Paragon.',
      options: [
        {
          name: 'Crusader',
          description: 'You lead from the front, inspiring your allies through your actions in battle.'
        },
        {
          name: 'Warlord',
          description: 'You are a tactical genius, directing your allies with precision and efficiency.'
        },
        {
          name: 'Paragon',
          description: 'You embody the ideal leader, balancing inspiration with strategic brilliance.'
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
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Commander',
      level: 5,
      description: 'You gain the following benefits for your Commander Class Features:\n\n• Commander\'s Call: The range of Commander\'s Call increases to 10 Spaces. When you use Commander\'s Call, you can spend 2 additional SP to issue the creature 1 additional command of your choice. The creature chooses the order in which it resolves the granted commands.\n\n• Inspiring Presence: The amount of HP restored by Inspiring Presence is increased by 1.\n\n• Commanding Aura: When you help a creature within your Commanding Aura, your Help Die starts at a d10. When you use Commanding Aura, you can spend additional SP to enhance its effect:\n  - Rally: The Temp HP granted increases by 1 per 2 SP spent.\n  - Reinforce: You can spend 1 SP to grant the target ADV on any Saves made as part of the Attack.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Martial Path or Spellcaster Path.'
    }
  ]
};
