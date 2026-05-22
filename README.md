# Vicar's Library - DC20 RPG Spells & Maneuvers

A searchable compendium of spells and maneuvers from DC20 RPG Beta v0.10.5.

🔗 **Live Site**: [valentinbauza.github.io/vicarslibrary](https://valentinbauza.github.io/vicarslibrary)

## Features

- 🔍 **Search** - Search through all spells and maneuvers by name, description, tags, and enhancements
- 📚 **159 Spells** - Complete spell database across 8 schools:
  - Astromancy (15)
  - Conjuration (29)
  - Divination (7)
  - Elemental (43)
  - Enchantment (13)
  - Invocation (17)
  - Nullification (18)
  - Transmutation (17)
- ⚔️ **26 Maneuvers** - All maneuver types:
  - Attack Maneuvers (11)
  - Defense Maneuvers (5)
  - Grapple Maneuvers (4)
  - Utility Maneuvers (6)
- 👥 **14 Classes** - Complete class database with level-based features
- 🧬 **10 Ancestries** - All ancestries with default and expanded traits
- ✨ **42 Talents** - General and class-specific talents for character progression:
  - 5 General Talents
  - 37 Class Talents
- 🏷️ **Advanced Filtering** - Filter by school, source, type, tags, class, and category
- 💾 **Save Favorites** - Save spells, maneuvers, classes, features, ancestries, traits, and talents to your browser for quick access
- 🔒 **Password Protected** - Simple access control
- 🎨 **Dark Theme** - Easy on the eyes for long reading sessions

## Data Source

All data is extracted from the **DC20 RPG 0.10.5 Beta v1** PDF:
- Spells: Pages 70-144
- Maneuvers: Pages 51-58
- Classes: Various pages
- Ancestries: Various pages
- Talents: Pages 186-190

## Tech Stack

- **React 19** - UI framework
- **TypeScript 6** - Type safety
- **Vite 8** - Build tool and dev server
- **GitHub Pages** - Hosting

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ValentinBauza/vicarslibrary.git
   cd vicarslibrary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Add the password hash to .env (ask project owner)
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

### Build

```bash
npm run build
```

### Deploy

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Project Structure

```
src/
├── components/         # React components
│   ├── Card.tsx       # Spell/Maneuver card display
│   └── PasswordGate.tsx # Authentication component
├── data/              # Data files
│   ├── maneuvers/     # Maneuver data by type
│   │   ├── attack-maneuvers.ts
│   │   ├── defense-maneuvers.ts
│   │   ├── grapple-maneuvers.ts
│   │   ├── utility-maneuvers.ts
│   │   └── index.ts
│   └── spells/        # Spell data by school
│       ├── astromancy.ts
│       ├── conjuration.ts
│       ├── divination.ts
│       ├── elemental.ts
│       ├── enchantment.ts
│       ├── invocation.ts
│       ├── nullification.ts
│       ├── transmutation.ts
│       └── index.ts
├── utils/             # Utility functions
│   └── auth.ts        # Password verification
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

## Authentication

See [AUTH_README.md](AUTH_README.md) for details on the password system.

## License

This is a fan-made tool for the DC20 RPG system. All game content belongs to The Dungeon Coach.

## Contributing

If you find errors in the spell or maneuver data, please open an issue.
