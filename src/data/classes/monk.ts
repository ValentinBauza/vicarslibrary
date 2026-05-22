import type { CharacterClass } from './types';

export const monk: CharacterClass = {
  name: 'Monk',
  description: 'Monks are master martial artists that perfect their mind and bodies utilizing the ebb and flow of their inner energy. They use their body as a weapon and can enter into different stances that drastically change their combat abilities.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Monk Training',
      level: 1,
      description: 'Your martial arts training grants you greater offense, defense, and movement:\n\n• Iron Palm: Choose a Melee Weapon Style when you gain this Feature. Your limbs are considered Natural Weapons that deal 1 Bludgeoning damage and perform the Weapon Enhancement of the chosen Weapon Style.\n• Patient Defense: While you aren\'t wearing Armor, you gain +2 PD.\n• Step of the Wind: You gain the following benefits:\n  - You gain +1 Speed and Jump Distance.\n  - You can move a number of Spaces up to your Speed along vertical surfaces and across liquids without falling, but this exhausts you and halts your move.\n  - You can use your Prime Modifier instead of Agility to determine your Jump Distance and the damage you take from Falling.'
    },
    {
      name: 'Monk Stance',
      level: 1,
      description: 'You learn 2 Monk Stances from the list below.\n\nEntering & Exiting: At the start of each of your turns during Combat, you can freely enter or shift into one of your Monk Stances. You can also spend 1 AP or 1 SP on your turn to enter or shift into one of your Monk Stances at anytime. You can only be in 1 Monk Stance at a time.\n\nAvailable Stances: Bear Stance, Bull Stance, Cobra Stance, Gazelle Stance, Mantis Stance, Mongoose Stance, Scorpion Stance, Turtle Stance, Wolf Stance.'
    },
    {
      name: 'Meditation',
      level: 1,
      description: 'You can enter a state of meditation during a Short Rest (1 hour) or longer. Choose 1 Charisma or Intelligence Skill. When you complete the Rest, your Skill Mastery level increases by 1 (up to your Skill Mastery Cap) for the chosen Skill until you complete another Short or longer rest. While meditating, you remain alert to danger. This is a Flavor Feature.'
    },
    {
      name: 'Spiritual Balance',
      level: 2,
      description: 'You gain the power to harness your inner spirit as a counterbalance against your physical energy.\n\nKi Points: You have a maximum number of Ki Points equal to your Stamina Points. When your Stamina Point maximum increases, your Ki Point maximum increases equally.\n\nRegaining Ki: When you spend a Stamina Point on your turn, you regain a Ki Point. You regain all spent Ki Points when Combat ends.\n\nKi Actions: You can spend Ki Points to perform the Reactions listed below:\n• Deflect Attack: When a creature misses you with a Ranged Martial Attack that targets your PD, you can spend 1 or more Ki Points and use a free hand to redirect the Attack at a different creature you can see within 5 Spaces. Make an Attack Check against the new target\'s PD. The target takes an amount of damage equal to the Ki Points spent. The damage type is the same as the triggering Attack.\n• Slow Fall: When you take damage from falling, you can spend 1 or more Ki Points to reduce the damage by an amount equal to the Ki Points spent.\n• Uncanny Dodge: When a creature makes an Attack against you, you can spend 1 Ki Point to impose DisADV on the attack.'
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
      description: 'Choose one of the following Monk Subclasses: Astral Self, Shifting Tide, or Paragon.',
      options: [
        {
          name: 'Astral Self',
          description: 'You manifest your inner self as astral energy that extends your reach and power.'
        },
        {
          name: 'Shifting Tide',
          description: 'You flow like water, adapting and responding to the battlefield with grace.'
        },
        {
          name: 'Paragon',
          description: 'You represent the pinnacle of martial arts mastery and spiritual balance.'
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
      name: 'Expert Monk',
      level: 5,
      description: 'You gain the following benefits for your Monk Class Features:\n\n• Monk Training: Choose an additional Melee Weapon Style. When you make an Attack with an Unarmed Strike, you can use both Weapon Enhancements.\n• Step of the Wind: You gain an additional +1 Speed and Jump Distance.\n• Monk Stances: You learn 1 additional Monk Stance.\n• Spiritual Balance: Your Ki Point maximum increases by 1. Whenever you regain Ki Points, you regain half of your maximum Ki instead.'
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
