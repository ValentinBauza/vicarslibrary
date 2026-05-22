import React from 'react';
import { Card } from './Card';
import { spells } from '../data/spells';
import { maneuvers } from '../data/maneuvers';
import { classes } from '../data/classes';
import type { ClassFeature } from '../data/classes';
import { ancestries } from '../data/ancestries';
import type { AncestryTrait } from '../data/ancestries';
import { allTalents } from '../data/talents';
import { useSavedItems } from '../hooks/useSavedItems';

export const SavedPage: React.FC = () => {
  const { savedItems, toggleSave } = useSavedItems();

  const savedSpells = spells.filter(s => savedItems.has(`Spell:${s.name}`));
  const savedManeuvers = maneuvers.filter(m => savedItems.has(`Maneuver:${m.name}`));
  const savedTalents = allTalents.filter(t => savedItems.has(`Talent:${t.name}`));

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

  const savedAncestries: Array<{ name: string; ancestryKey: string }> = [];
  const savedAncestryTraits: Array<{ trait: AncestryTrait; ancestryKey: string; ancestryDisplayName: string; traitType: 'Default' | 'Expanded' }> = [];

  Object.entries(ancestries).forEach(([ancestryKey, ancestryData]) => {
    if (savedItems.has(`Ancestry:${ancestryData.name}`)) {
      savedAncestries.push({ name: ancestryData.name, ancestryKey });
    }

    ancestryData.defaultTraits.forEach(trait => {
      if (savedItems.has(`AncestryTrait:${ancestryData.name}:${trait.name}`)) {
        savedAncestryTraits.push({
          trait,
          ancestryKey,
          ancestryDisplayName: ancestryData.name,
          traitType: 'Default'
        });
      }
    });

    ancestryData.expandedTraits.forEach(trait => {
      if (savedItems.has(`AncestryTrait:${ancestryData.name}:${trait.name}`)) {
        savedAncestryTraits.push({
          trait,
          ancestryKey,
          ancestryDisplayName: ancestryData.name,
          traitType: 'Expanded'
        });
      }
    });
  });

  const totalSaved = savedSpells.length + savedManeuvers.length + savedClasses.length + savedFeatures.length + savedAncestries.length + savedAncestryTraits.length + savedTalents.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Saved Items</h1>
        <p className="subtitle">Your collection of saved spells, maneuvers, classes, features, ancestries, traits, and talents</p>
      </header>

      <div className="results-info">
        <p>Total saved items: {totalSaved}</p>
      </div>

      {totalSaved === 0 ? (
        <div className="no-results">
          <p>No saved items yet</p>
          <p className="hint">Start saving spells, maneuvers, classes, features, ancestries, traits, or talents from the other pages</p>
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

          {savedAncestries.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Ancestries ({savedAncestries.length})</h2>
              <div className="cards-container">
                {savedAncestries.map((savedAncestry) => {
                  const ancestryData = ancestries[savedAncestry.ancestryKey as keyof typeof ancestries];
                  return (
                    <Card
                      key={`ancestry-${savedAncestry.ancestryKey}`}
                      title={ancestryData.name}
                      subtitle="Ancestry"
                      type="Character Ancestry"
                      cost="-"
                      range="-"
                      description={ancestryData.description || `${ancestryData.defaultTraits.length} default traits and ${ancestryData.expandedTraits.length} expanded traits.`}
                      enhancements={ancestryData.defaultTraits.slice(0, 3).map(t => `**${t.name}** (${t.pointCost}): ${t.description.substring(0, 80)}...`)}
                      tags={[`${ancestryData.defaultTraits.length} Default Traits`, `${ancestryData.expandedTraits.length} Expanded Traits`]}
                      source={ancestryData.source}
                      isSaved={true}
                      onToggleSave={() => toggleSave(ancestryData.name, 'Ancestry')}
                    />
                  );
                })}
              </div>
            </>
          )}

          {savedAncestryTraits.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Ancestry Traits ({savedAncestryTraits.length})</h2>
              <div className="cards-container">
                {savedAncestryTraits.map((item, index) => (
                  <Card
                    key={`ancestry-trait-${index}`}
                    title={item.trait.name}
                    subtitle={`${item.ancestryDisplayName} ${item.traitType} Trait`}
                    type="Ancestry Trait"
                    cost={item.trait.pointCost.toString()}
                    range="-"
                    description={item.trait.description}
                    tags={[`${item.traitType} Trait`, `${item.trait.pointCost} Points`, item.ancestryDisplayName]}
                    source={ancestries[item.ancestryKey as keyof typeof ancestries].source}
                    isSaved={true}
                    onToggleSave={() => toggleSave(`${item.ancestryDisplayName}:${item.trait.name}`, 'AncestryTrait')}
                  />
                ))}
              </div>
            </>
          )}

          {savedTalents.length > 0 && (
            <>
              <h2 style={{ padding: '1rem', color: '#4a9eff' }}>Talents ({savedTalents.length})</h2>
              <div className="cards-container">
                {savedTalents.map((talent, index) => (
                  <Card
                    key={`talent-${index}`}
                    title={talent.name}
                    subtitle={talent.className ? `${talent.className} Talent` : 'General Talent'}
                    type={talent.category === 'General' ? 'General Talent' : 'Class Talent'}
                    cost="-"
                    range="-"
                    description={talent.description}
                    enhancements={talent.benefits && talent.benefits.length > 0 ? talent.benefits : undefined}
                    tags={[talent.category, talent.className, talent.requirement].filter(Boolean) as string[]}
                    source="DC20 RPG Beta 0.10.5 (pg 186-190)"
                    isSaved={true}
                    onToggleSave={() => toggleSave(talent.name, 'Talent')}
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
