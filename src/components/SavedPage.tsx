import React from 'react';
import { Card } from './Card';
import { spells } from '../data/spells';
import { maneuvers } from '../data/maneuvers';
import { classes } from '../data/classes';
import type { ClassFeature } from '../data/classes';
import { useSavedItems } from '../hooks/useSavedItems';

export const SavedPage: React.FC = () => {
  const { savedItems, toggleSave } = useSavedItems();

  const savedSpells = spells.filter(s => savedItems.has(`Spell:${s.name}`));
  const savedManeuvers = maneuvers.filter(m => savedItems.has(`Maneuver:${m.name}`));

  const savedClasses: Array<{ name: string; className: string }> = [];
  const savedFeatures: Array<{ feature: ClassFeature; className: string; classDisplayName: string }> = [];

  Object.entries(classes).forEach(([className, classData]) => {
    if (savedItems.has(`Class:${classData.name}`)) {
      savedClasses.push({ name: classData.name, className });
    }

    classData.features.forEach(feature => {
      if (savedItems.has(`Feature:${classData.name}:${feature.name}`)) {
        savedFeatures.push({
          feature,
          className,
          classDisplayName: classData.name
        });
      }
    });
  });

  const totalSaved = savedSpells.length + savedManeuvers.length + savedClasses.length + savedFeatures.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Saved Items</h1>
        <p className="subtitle">Your collection of saved spells, maneuvers, classes, and features</p>
      </header>

      <div className="results-info">
        <p>Total saved items: {totalSaved}</p>
      </div>

      {totalSaved === 0 ? (
        <div className="no-results">
          <p>No saved items yet</p>
          <p className="hint">Start saving spells, maneuvers, classes, or features from the other pages</p>
        </div>
      ) : (
        <>
          {savedSpells.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Spells ({savedSpells.length})</h2>
              <div className="cards-container">
                {savedSpells.map((spell, index) => (
                  <Card
                    key={`spell-${index}`}
                    title={spell.name}
                    subtitle="Spell"
                    type={spell.school}
                    cost={spell.cost}
                    range={spell.range}
                    duration={spell.duration}
                    description={spell.description}
                    enhancements={spell.enhancements}
                    tags={spell.tags}
                    source={spell.source}
                    isSaved={true}
                    onToggleSave={() => toggleSave(spell.name, 'Spell')}
                  />
                ))}
              </div>
            </>
          )}

          {savedManeuvers.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Maneuvers ({savedManeuvers.length})</h2>
              <div className="cards-container">
                {savedManeuvers.map((maneuver, index) => (
                  <Card
                    key={`maneuver-${index}`}
                    title={maneuver.name}
                    subtitle="Maneuver"
                    type={maneuver.type}
                    cost={maneuver.cost}
                    range={maneuver.range}
                    description={maneuver.description}
                    enhancements={maneuver.enhancements}
                    tags={maneuver.tags}
                    isSaved={true}
                    onToggleSave={() => toggleSave(maneuver.name, 'Maneuver')}
                  />
                ))}
              </div>
            </>
          )}

          {savedClasses.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Classes ({savedClasses.length})</h2>
              <div className="cards-container">
                {savedClasses.map((savedClass) => {
                  const classData = classes[savedClass.className as keyof typeof classes];
                  return (
                    <Card
                      key={`class-${savedClass.className}`}
                      title={classData.name}
                      subtitle="Class"
                      type="Character Class"
                      cost="-"
                      range="-"
                      description={classData.description}
                      enhancements={classData.features.map(f => `**Level ${f.level} - ${f.name}**: ${f.description.substring(0, 100)}...`)}
                      tags={[`${classData.features.length} Features`]}
                      source={classData.source}
                      isSaved={true}
                      onToggleSave={() => toggleSave(classData.name, 'Class')}
                    />
                  );
                })}
              </div>
            </>
          )}

          {savedFeatures.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Class Features ({savedFeatures.length})</h2>
              <div className="cards-container">
                {savedFeatures.map((item, index) => (
                  <Card
                    key={`feature-${index}`}
                    title={item.feature.name}
                    subtitle={`${item.classDisplayName} Feature`}
                    type="Class Feature"
                    cost="-"
                    range="-"
                    description={item.feature.description}
                    enhancements={item.feature.options?.map(opt => `**${opt.name}**: ${opt.description}`)}
                    tags={[`Level ${item.feature.level}`, item.classDisplayName]}
                    source={classes[item.className as keyof typeof classes].source}
                    isSaved={true}
                    onToggleSave={() => toggleSave(`${item.classDisplayName}:${item.feature.name}`, 'Feature')}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
