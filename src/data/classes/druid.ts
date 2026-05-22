import type { CharacterClass } from './types';

export const druid: CharacterClass = {
  name: 'Druid',
  description: 'Druids tap into the power of nature, drawing upon the energies that flow through the world and creatures around them, and connect to plants, animals, and the plane itself. They can channel both the restorative and destructive forces of nature and shapeshift into wild beasts.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Druid Domain',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to create your own Druid Domain that includes small plant life, shallow water, or other naturally occurring features. You create up to 8 Domain Spaces along the ground or walls. The first Domain Space must be within 1 Space of you, and each additional Domain Space must be adjacent to another Domain Space. If you use the Feature again, the first Domain Space of it must be within 1 Space of you or another Domain Space.\n\nDomain Spaces: The area is considered to be Difficult Terrain for creatures of your choice, and you can cast Spells so as if you were standing in any Space within your Domain.\n\nLosing Domain Spaces: A Domain Space also disappears if you end your turn farther than 15 Spaces away from it, or you die.\n\nDomain Actions (available while you have Domain Spaces):\n• Nature\'s Grasp: (1 AP) Attempt to bind a creature of your choice within your Domain. Make a Spell Check against the target\'s Repeated Physical Save. Success: The target is Immobilized by your Domain for 1 minute or until the Domain Space it occupies ends.\n• Move Creature: (1 AP) Move a creature bound by this feature up to 2 Spaces within your Domain.\n• Move Object: You can take the Object Action to use your vines to interact with any object within your Domain as if you were standing in any of your Domain Spaces within 1 Space of the Object.\n• Wild Growth: (1 AP + 1 MP) Make a DC 10 Spell Check to heal a target within your Domain. Success: The target immediately regains 1 HP. For the next minute, they gain an additional 1 HP each time they end their turn within your Domain. Success (each 5): They immediately regain +1 HP. Failure: The target only regains 1 HP immediately.'
    },
    {
      name: 'Wild Speech',
      level: 1,
      description: 'You learn the Druidcraft Cantrip and can choose 1 of the following options:\n\n• Animals: You can understand and speak with Beasts in a limited manner. You can understand the meaning of their movements, sounds, and behaviors, and they can understand the meaning of simple words, concepts, and emotions.\n• Plants: You can understand and speak with Plants in a limited manner. You can understand the meaning of their swaying, folding, unfolding of their leaves and flowers, and they can understand the meanings of simple words, concepts, and emotions.\n• Weather: You can reach out to nature and cast the Commune with Nature Spell as a Ritual once per Long Rest. This is a Flavor Feature.'
    },
    {
      name: 'Wild Form',
      level: 1,
      description: 'You can spend 1 AP and 1 MP to transform into a Wild Form of your choice. You can spend 1 AP on your turn to shift back and forth between your True Form and any Wild Forms you currently have available. Once per Long Rest, you can transform without spending MP or using MP enhancements.\n\nTrue Form: When you transform from your Wild Form to your True Form, your statistics return to normal. You immediately revert to your True Form when your Wild Form HP is reduced to 0 or you die.\n\nWild Form: When you transform into a Wild Form, you gain the Wild Form\'s Wild Form HP (see Wild Form Stat Block below), retaining any HP losses.\n• Duration: Each Wild Form remains available until its Wild Form HP is reduced to 0 or you complete a Long Rest.\n• Multiple Forms: You can have multiple Wild Forms available at a time which have their own Wild Form HP and Traits.\n• Equipment: Your equipment falls to the ground or merges into your Wild Form (your choice for each item). You gain the benefits of Magic Items merged with your Wild Form, but you can\'t activate them or spend their charges.\n\nStatistics: While in your Wild Form, you\'re subjected to the following changes (unless otherwise stated):\n• Stat Block: You use the Wild Form Stat Block to determine your statistics.\n• Identity: You maintain your personality, intellect, and ability to speak.\n• Wild Form HP: You gain a secondary pool of Wild Form Health Points which is 3 with a maximum of 3. Damage and healing effects target your Wild Form HP before your True Form HP. Any damage or healing in excess carries over to your True Form HP.\n• Natural Weapon: You have Natural Weapons (claws, horns, fangs, etc.) which you can use to make Unarmed Strikes that deal 1 Bludgeoning, Piercing, or Slashing damage (your choice) (you use this damage type for each strike you make with this Feature).\n• Features & Talents: You don\'t benefit from your Ancestry Traits, but you gain 3 Trait Points to spend on Beast Traits or Wild Form Traits of your choice. You can\'t select negative Beast Traits. When you use this Feature, you can spend additional MP (up to your Mana Spend Limit) to gain 2 additional Trait Points per MP spent.\n• Traits: You don\'t benefit from Talents or Class Features, except Druid Class Features, Subclass Features, and Expert Talents. Additionally, you can\'t cast Spells or perform Maneuvers.'
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Mana to cast them. When you learn a new Spell, you can choose any Spell from the Primal Spell Source. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Nature\'s Torrent',
      level: 2,
      description: 'When a creature within 10 spaces of you takes Elemental damage, you can spend 1 AP as a Reaction to summon a torrent of nature. The torrent fills a 3 Space Diameter Sphere centered on the target that lasts for 1 minute. While creatures are within the area, they have Vulnerability (1) against the triggering damage type and have DisADV on Checks and Saves to resist being moved or knocked Prone.\n\nEnding Early: The torrent ends early if you use this Feature again, become Incapacitated, die, or choose to end it for free at anytime.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain the benefits of the Spellcaster Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose one of the following Druid Subclasses: Phoenix, Rampant Growth, or Paragon.',
      options: [
        {
          name: 'Phoenix',
          description: 'You wield the power of fire to lay destruction to what exists and foster new life.'
        },
        {
          name: 'Rampant Growth',
          description: 'You channel the unstoppable force of plant life to protect and support.'
        },
        {
          name: 'Paragon',
          description: 'You master the balance between nature\'s fury and its nurturing embrace.'
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
      description: 'You gain the benefits of the Spellcaster Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 2 Ancestry Points.'
    },
    {
      name: 'Expert Druid',
      level: 5,
      description: 'You gain the following benefits for your Druid Class Features:\n\n• Druid Domain: The number of Domain Spaces you create increases to 10.\n\nLosing Domain Spaces: A Domain Space disappears if you end your turn farther than 20 Spaces away from it.\n\nYou can spend additional MP when you use Druid Domain to increase the number of Domain Spaces created by 8 per additional MP spent.\n\n• Wild Growth: You can spend additional MP to increase the healing by 1 per 2 additional MP spent.\n\n• Wild Form: Your Wild Forms have +1 HP and 1 additional Trait Point.\n\n• Nature\'s Torrent: The range of Nature\'s Torrent increases to 15 Spaces. When you use Nature\'s Torrent, you can spend MP to enhance its effects:\n  - Vulnerability: (2 MP) The Vulnerability increases by 1.\n  - Area: (X MP) The diameter of the Sphere increases by X.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain the benefits of the Spellcaster Path.'
    }
  ]
};
