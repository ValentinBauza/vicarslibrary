import React, { useState } from 'react';
import { ancestries, ancestryNames } from '../data/ancestries';
import type { Ancestry, AncestryTrait } from '../data/ancestries';
import { Card } from './Card';
import { useSavedItems } from '../hooks/useSavedItems';

export const AncestriesPage: React.FC = () => {
  const [selectedAncestry, setSelectedAncestry] = useState<string>('human');
  const { toggleSave, isSaved } = useSavedItems();

  const currentAncestry: Ancestry = ancestries[selectedAncestry as keyof typeof ancestries];

  return (
    <div className="app">
      <header className="app-header">
        <h1>DC20 Ancestries</h1>
        <p className="subtitle">Reference for character ancestries and their traits</p>
      </header>

      <div className="controls">
        <div className="filter-buttons">
          {ancestryNames.map((ancestryName) => (
            <button
              key={ancestryName}
              className={`filter-btn ${selectedAncestry === ancestryName ? 'active' : ''}`}
              onClick={() => setSelectedAncestry(ancestryName)}
            >
              {ancestryName.charAt(0).toUpperCase() + ancestryName.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {currentAncestry && (
        <>
          <div className="class-description" style={{
            padding: '1rem',
            margin: '1rem 0',
            background: 'rgba(74, 158, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(74, 158, 255, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{ flex: 1 }}>
              <h2>{currentAncestry.name}</h2>
              {currentAncestry.description && <p>{currentAncestry.description}</p>}
              {currentAncestry.specialRules && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(74, 158, 255, 0.15)',
                  borderRadius: '4px',
                  borderLeft: '3px solid #4a9eff'
                }}>
                  <strong style={{ color: '#4a9eff' }}>Special Rules:</strong>
                  <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{currentAncestry.specialRules}</p>
                </div>
              )}
              <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                <strong>Source:</strong> {currentAncestry.source}
              </p>
            </div>
            <button
              className={`save-btn ${isSaved(currentAncestry.name, 'Ancestry') ? 'saved' : ''}`}
              onClick={() => toggleSave(currentAncestry.name, 'Ancestry')}
              style={{ marginLeft: '1rem', flexShrink: 0 }}
            >
              {isSaved(currentAncestry.name, 'Ancestry') ? '★' : '☆'}
            </button>
          </div>

          {currentAncestry.defaultTraits.length > 0 && (
            <>
              <h2 style={{ padding: '1rem 1rem 0.5rem', color: '#4a9eff' }}>Default Traits</h2>
              <div className="cards-container">
                {currentAncestry.defaultTraits.map((trait: AncestryTrait, index: number) => (
                  <Card
                    key={`default-${index}`}
                    title={trait.name}
                    subtitle={`Default Trait (${trait.pointCost} ${trait.pointCost === 1 || trait.pointCost === -1 ? 'Point' : 'Points'})`}
                    type="Ancestry Trait"
                    cost={trait.pointCost.toString()}
                    range="-"
                    description={trait.description}
                    tags={['Default Trait', `${trait.pointCost} Points`]}
                    source={currentAncestry.source}
                    isSaved={isSaved(`${currentAncestry.name}:${trait.name}`, 'AncestryTrait')}
                    onToggleSave={() => toggleSave(`${currentAncestry.name}:${trait.name}`, 'AncestryTrait')}
                  />
                ))}
              </div>
            </>
          )}

          {currentAncestry.expandedTraits.length > 0 && (
            <>
              <h2 style={{ padding: '1rem 1rem 0.5rem', color: '#4a9eff' }}>Expanded Traits</h2>
              <div className="cards-container">
                {currentAncestry.expandedTraits.map((trait: AncestryTrait, index: number) => (
                  <Card
                    key={`expanded-${index}`}
                    title={trait.name}
                    subtitle={`Expanded Trait (${trait.pointCost} ${trait.pointCost === 1 || trait.pointCost === -1 ? 'Point' : 'Points'})`}
                    type="Ancestry Trait"
                    cost={trait.pointCost.toString()}
                    range="-"
                    description={trait.description}
                    tags={['Expanded Trait', `${trait.pointCost} Points`]}
                    source={currentAncestry.source}
                    isSaved={isSaved(`${currentAncestry.name}:${trait.name}`, 'AncestryTrait')}
                    onToggleSave={() => toggleSave(`${currentAncestry.name}:${trait.name}`, 'AncestryTrait')}
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
