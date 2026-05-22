import type { CharacterClass } from './types';

export const hunter: CharacterClass = {
  name: 'Hunter',
  description: 'Hunters are master survivalists and natural explorers. They mark their targets to better track them and take them down, using their mastery over terrain, traps, and weapons to their advantage.',
  source: 'DC20 RPG 0.10.5 Beta v1',
  features: [
    {
      name: 'Hunter\'s Mark',
      level: 1,
      description: 'You can spend 1 AP and 1 SP to focus on and mark a creature you can see within 15 Spaces as your target. Alternatively, you can mark a creature by studying its tracks for at least 1 minute. While a creature is marked, you gain the following benefits:\n\n• You have ADV on Awareness and Survival Checks made to find the target.\n• The first Martial Attack against your target on your turn has ADV and ignores PDR.\n• When you score a Heavy or Critical Hit against the target, you automatically grant a d8 Help Die to the next Attack made against the target before the start of your next turn.\n\nThe target is marked as long as it\'s on the same Plane of Existence as you, and vanishes early if you complete a Long Rest, fall Unconscious, or use this Feature again to mark another creature.\n\nWhen a marked creature dies you can spend 1 AP or 1 SP as a reaction to immediately Mark another target within range.'
    },
    {
      name: 'Favored Terrain',
      level: 1,
      description: 'You are particularly familiar with two types of environments and are adept at the skills unique to the region. Choose 2 types of Favored Terrain. While you\'re in one of your Favored Terrains, you have ADV on Stealth and Survival Checks and can\'t be Surprised. Available terrain types include: Coast, Desert, Forest, Grassland, Jungle, Mountain, Swamp, Tundra, Subterranean, and Urban.'
    },
    {
      name: 'Bestiary',
      level: 1,
      description: 'You have developed a trove of knowledge hunting creatures which you\'ve recorded in your Bestiary. Your Bestiary can take the form of a book, a memory vault within your mind, or some other representation of your choice. You have ADV on Checks made to learn or recall information about any creature recorded in your Bestiary.\n\nStarting Entries: Choose a Creature Type: Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, or Undead. Your Bestiary includes prerecorded notes about various creatures of the chosen type.\n\nMaking New Entries: You can spend 10 minutes of Light Activity recording information into your Bestiary about a specific creature you have slain within the last 24 hours. This is a Flavor Feature.'
    },
    {
      name: 'Hunter\'s Strike',
      level: 2,
      description: 'You can spend 1 SP as part of a Weapon Attack to add 1 of the unique Martial Enhancements listed below. You can only use 1 of these Enhancements per Attack. The damage increases by 1 for each SP spent beyond the first. If a Enhancement forces the target to make a Save, it uses your Save DC.\n\n• Acid: The target takes 1 Corrosion damage and makes an Agility Save. Save Failure: The target becomes Hindered until the end of your next turn.\n• Fire: The target takes 1 Fire damage and makes a Might Save. Save Failure: The target begins Burning.\n• Piercing: The target takes 1 Piercing damage and makes a Might Save. Save Failure: The target begins Bleeding.\n• Snare: The target takes 1 Bludgeoning damage and makes an Agility Save. Save Failure: The target becomes Immobilized until the end of your next turn.\n• Toxic: The target takes 1 Poison damage and makes a Might Save. Save Failure: The target becomes Impaired until the end of your next turn.'
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
      description: 'Choose one of the following Hunter Subclasses: Monster Slayer, Trapper, or Paragon.',
      options: [
        {
          name: 'Monster Slayer',
          description: 'You hunt down monstrous creatures with deadly efficiency.'
        },
        {
          name: 'Trapper',
          description: 'You excel at setting traps and using the environment to your advantage.'
        },
        {
          name: 'Paragon',
          description: 'You embody the perfect hunter, combining tracking, trapping, and combat expertise.'
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
      name: 'Expert Hunter',
      level: 5,
      description: 'You gain the following benefits for your Hunter Class Features:\n\n• Hunter\'s Mark: The Help die granted by Hunter\'s Mark is increased to a d10 and the first Martial Attack against your target on your turn ignores Physical Resistance.\n\n• Favored Terrain: You gain 1 additional Favored Terrain.\n\n• Hunter\'s Strike: You can use up to 2 Hunter\'s Strike Enhancements on an Attack.'
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
