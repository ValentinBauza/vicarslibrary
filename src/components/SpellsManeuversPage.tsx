import { useState, useMemo } from 'react';
import { Card } from './Card';
import { maneuvers } from '../data/maneuvers';
import { spells } from '../data/spells';
import { useSavedItems } from '../hooks/useSavedItems';

type ContentType = 'all' | 'spells' | 'maneuvers';

export const SpellsManeuversPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState<ContentType>('all');
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedManeuverType, setSelectedManeuverType] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const { toggleSave, isSaved } = useSavedItems();

  // Extract unique spell schools
  const spellSchools = useMemo(() => {
    const schools = new Set(spells.map(spell => spell.school));
    return ['all', ...Array.from(schools).sort()];
  }, []);

  // Extract unique spell sources
  const spellSources = useMemo(() => {
    const sources = new Set<string>();
    spells.forEach(spell => {
      spell.source.split(',').forEach(source => {
        sources.add(source.trim());
      });
    });
    return ['all', ...Array.from(sources).sort()];
  }, []);

  // Extract unique maneuver types
  const maneuverTypes = useMemo(() => {
    const types = new Set(maneuvers.map(maneuver => maneuver.type));
    return ['all', ...Array.from(types).sort()];
  }, []);

  // Extract unique spell tags
  const spellTags = useMemo(() => {
    const tags = new Set<string>();
    spells.forEach(spell => {
      spell.tags.forEach(tag => {
        tags.add(tag);
      });
    });
    return ['all', ...Array.from(tags).sort()];
  }, []);

  const filteredContent = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();

    type ItemWithCategory = (typeof spells[0] | typeof maneuvers[0]) & { category: string };
    let items: ItemWithCategory[] = [];

    if (contentType === 'all' || contentType === 'maneuvers') {
      let maneuverItems = maneuvers.map(m => ({ ...m, category: 'Maneuver' as const }));

      // Filter by maneuver type
      if (selectedManeuverType !== 'all') {
        maneuverItems = maneuverItems.filter(m => m.type === selectedManeuverType);
      }

      items = [...items, ...maneuverItems];
    }

    if (contentType === 'all' || contentType === 'spells') {
      let spellItems = spells.map(s => ({ ...s, category: 'Spell' as const }));

      // Filter by school
      if (selectedSchool !== 'all') {
        spellItems = spellItems.filter(s => s.school === selectedSchool);
      }

      // Filter by source
      if (selectedSource !== 'all') {
        spellItems = spellItems.filter(s =>
          s.source.split(',').map(src => src.trim()).includes(selectedSource)
        );
      }

      // Filter by tag
      if (selectedTag !== 'all') {
        spellItems = spellItems.filter(s => s.tags.includes(selectedTag));
      }

      items = [...items, ...spellItems];
    }

    if (!searchTerm) return items;

    return items.filter(item => {
      const searchableText = [
        item.name,
        item.description,
        'type' in item ? item.type : '',
        'school' in item ? item.school : '',
        ...(item.tags || []),
        ...(item.enhancements || []),
        'source' in item ? item.source : ''
      ].join(' ').toLowerCase();

      return searchableText.includes(searchLower);
    });
  }, [searchTerm, contentType, selectedSchool, selectedSource, selectedManeuverType, selectedTag]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>DC20 RPG - Spells & Maneuvers</h1>
        <p className="subtitle">A searchable compendium of spells and maneuvers from DC20 RPG Beta v0.10.5</p>
      </header>

      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search spells and maneuvers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-button"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${contentType === 'all' ? 'active' : ''}`}
            onClick={() => {
              setContentType('all');
              setSelectedSchool('all');
              setSelectedSource('all');
              setSelectedManeuverType('all');
              setSelectedTag('all');
            }}
          >
            All ({maneuvers.length + spells.length})
          </button>
          <button
            className={`filter-btn ${contentType === 'spells' ? 'active' : ''}`}
            onClick={() => {
              setContentType('spells');
              setSelectedManeuverType('all');
            }}
          >
            Spells ({spells.length})
          </button>
          <button
            className={`filter-btn ${contentType === 'maneuvers' ? 'active' : ''}`}
            onClick={() => {
              setContentType('maneuvers');
              setSelectedSchool('all');
              setSelectedSource('all');
              setSelectedTag('all');
            }}
          >
            Maneuvers ({maneuvers.length})
          </button>
        </div>

        {contentType === 'spells' && (
          <div className="secondary-filters">
            <div className="filter-group">
              <label htmlFor="school-filter">School:</label>
              <select
                id="school-filter"
                className="filter-select"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                {spellSchools.map(school => (
                  <option key={school} value={school}>
                    {school === 'all' ? 'All Schools' : school}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="source-filter">Source:</label>
              <select
                id="source-filter"
                className="filter-select"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                {spellSources.map(source => (
                  <option key={source} value={source}>
                    {source === 'all' ? 'All Sources' : source}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="tag-filter">Tag:</label>
              <select
                id="tag-filter"
                className="filter-select"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {spellTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Tags' : tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {contentType === 'maneuvers' && (
          <div className="secondary-filters">
            <div className="filter-group">
              <label htmlFor="maneuver-type-filter">Type:</label>
              <select
                id="maneuver-type-filter"
                className="filter-select"
                value={selectedManeuverType}
                onChange={(e) => setSelectedManeuverType(e.target.value)}
              >
                {maneuverTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="results-info">
        <p>Showing {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="cards-container">
        {filteredContent.length === 0 ? (
          <div className="no-results">
            <p>No results found for "{searchTerm}"</p>
            <p className="hint">Try different keywords or clear your search</p>
          </div>
        ) : (
          filteredContent.map((item, index) => (
            <Card
              key={`${item.category}-${index}`}
              title={item.name}
              subtitle={item.category}
              type={'type' in item ? item.type : item.school}
              cost={item.cost}
              range={item.range}
              duration={'duration' in item ? item.duration : undefined}
              description={item.description}
              enhancements={item.enhancements}
              tags={item.tags}
              source={'source' in item ? item.source : undefined}
              isSaved={isSaved(item.name, item.category)}
              onToggleSave={() => toggleSave(item.name, item.category)}
            />
          ))
        )}
      </div>
    </div>
  );
};
