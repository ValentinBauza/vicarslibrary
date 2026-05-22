import type { CharacterClass } from './types';

export const cleric: CharacterClass = {
  name: 'Cleric',
  description: 'Clerics are divine spellcasters who derive their power from their unwavering faith in a deity, pantheon, or cosmic force. Through prayer and devotion, they channel divine energy to heal allies, smite enemies, and perform miraculous feats.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Cleric Order',
      level: 1,
      description: 'You choose a Divine Domain that represents your deity\'s sphere of influence and determines your Divine Damage type. Additionally, you gain special benefits based on your chosen domain.',
      options: [
        {
          name: 'Life Domain',
          description: 'Divine Damage: Radiant. You can use your Divine Damage to heal instead of harm.'
        },
        {
          name: 'Light Domain',
          description: 'Divine Damage: Radiant. Your Divine Damage ignores Resistance.'
        },
        {
          name: 'Dark Domain',
          description: 'Divine Damage: Necrotic. Your Divine Damage ignores Resistance.'
        },
        {
          name: 'War Domain',
          description: 'Divine Damage: Force. When you deal Divine Damage, you can push the target 1 Space.'
        },
        {
          name: 'Peace Domain',
          description: 'Divine Damage: Psychic. Creatures have DisADV on Attacks against you until the start of your next turn when you deal Divine Damage to them.'
        },
        {
          name: 'Order Domain',
          description: 'Divine Damage: Force. Targets have DisADV on Saves against your Spells when you deal Divine Damage to them before the start of your next turn.'
        },
        {
          name: 'Chaos Domain',
          description: 'Divine Damage: Lightning. When you deal Divine Damage, roll a d6. On a 5-6, deal additional Divine Damage equal to your Spellcasting Check.'
        },
        {
          name: 'Divination Domain',
          description: 'Divine Damage: Psychic. You learn the Scrying Spell.'
        },
        {
          name: 'Trickery Domain',
          description: 'Divine Damage: Poison. You learn the Invisibility Spell.'
        },
        {
          name: 'Ancestral Domain',
          description: 'Divine Damage: Necrotic. You learn the Speak with Dead Spell.'
        }
      ]
    },
    {
      name: 'Knowledge',
      level: 1,
      description: 'You gain 2 Knowledge Points to spend on Languages or Lore.'
    },
    {
      name: 'Magic',
      level: 1,
      description: 'You learn Spells and gain Spell Slots and Mana to cast them. Your Spellcasting Attribute is Intelligence, Wisdom, or Charisma (chosen at character creation).'
    },
    {
      name: 'Divine Damage Expansion',
      level: 1,
      description: 'When you deal Divine Damage with a Spell, you can change its damage type to your Divine Damage type.'
    },
    {
      name: 'Divine Blessing',
      level: 1,
      description: 'You can channel divine energy to bless your allies or curse your enemies. Choose one of the following blessings:',
      options: [
        {
          name: 'Destruction',
          description: 'As a Minor Action (1/Rest), you can grant yourself or an ally within 6 Spaces a blessing that lasts 1 minute. While blessed, the creature deals additional Divine Damage equal to your Spellcasting Modifier on all successful Attacks.'
        },
        {
          name: 'Guidance',
          description: 'As a Minor Action (1/Rest), you can grant yourself or an ally within 6 Spaces a blessing that lasts 1 minute. While blessed, the creature gains ADV on all Checks.'
        },
        {
          name: 'Restoration',
          description: 'As a Minor Action (1/Rest), you can grant yourself or an ally within 6 Spaces a blessing that lasts 1 minute. While blessed, the creature regains HP equal to your Spellcasting Modifier at the start of each of their turns.'
        }
      ]
    },
    {
      name: 'Divine Omen',
      level: 1,
      description: 'You receive signs and portents from your deity. This is a flavor feature that allows you to receive cryptic messages, visions, or omens from your divine patron at the GM\'s discretion.'
    },
    {
      name: 'Channel Divinity',
      level: 2,
      description: 'You gain the ability to channel divine energy directly from your deity. As an Action (2 AP, 1/Rest), you can use one of the following effects:\n\n• Turn Undead: All Undead creatures within 6 Spaces must make a Charisma Save against your Spell Save DC or become Frightened of you for 1 minute. Undead with CR equal to or less than your character level that fail the Save are instantly destroyed.\n\n• Divine Weapon: You bless a weapon within 6 Spaces. For 1 minute, the weapon deals additional Divine Damage equal to your Spellcasting Modifier on each hit.'
    },
    {
      name: 'Divine Rebuke',
      level: 2,
      description: 'When a creature within 6 Spaces hits an ally with an Attack, you can use your Reaction to force that creature to make a Charisma Save against your Spell Save DC. On a failure, they take Divine Damage equal to twice your Spellcasting Check.'
    },
    {
      name: 'Lesser Divine Intervention',
      level: 2,
      description: 'Once per Long Rest, you can call upon your deity for aid. Describe the assistance you seek, and the GM determines the nature of the intervention. The intervention should be minor and narrative-focused rather than combat-decisive.'
    },
    {
      name: 'Talent',
      level: 2,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 2,
      description: 'You gain progression in your chosen Spellcasting Path.'
    },
    {
      name: 'Subclass',
      level: 3,
      description: 'Choose your Cleric Subclass: Inquisitor, Priest, or Paragon. Your subclass choice grants you additional features and defines your role within the faith.',
      options: [
        {
          name: 'Inquisitor',
          description: 'Inquisitors are militant clerics who root out heresy and defend the faith through force of arms.'
        },
        {
          name: 'Priest',
          description: 'Priests are traditional clerics who focus on ceremony, healing, and supporting their allies.'
        },
        {
          name: 'Paragon',
          description: 'Paragons are exemplars of their faith who inspire others through their deeds and presence.'
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
      description: 'You gain progression in your chosen Spellcasting Path.'
    },
    {
      name: 'Ancestry Points',
      level: 4,
      description: 'You gain 1 Ancestry Point.'
    },
    {
      name: 'Expert Cleric',
      level: 5,
      description: 'Your mastery of divine magic deepens. You gain the following enhancements:\n\n• Enhanced Cleric Order: The benefits from your Divine Domain are doubled.\n\n• Enhanced Divine Blessing: Your Divine Blessing can now affect up to 3 creatures simultaneously, and its duration increases to 10 minutes.\n\n• Enhanced Channel Divinity: You can use Channel Divinity twice per Rest instead of once.'
    },
    {
      name: 'Talent',
      level: 6,
      description: 'You gain 1 Talent Point.'
    },
    {
      name: 'Path Progression',
      level: 6,
      description: 'You gain progression in your chosen Spellcasting Path.'
    }
  ]
};
