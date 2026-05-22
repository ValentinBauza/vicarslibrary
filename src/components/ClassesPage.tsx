import React, { useState } from 'react';
import { classes, classNames } from '../data/classes';
import type { CharacterClass, ClassFeature } from '../data/classes';
import { Card } from './Card';
import { useSavedItems } from '../hooks/useSavedItems';

export const ClassesPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('cleric');
  const { toggleSave, isSaved } = useSavedItems();

  const currentClass: CharacterClass = classes[selectedClass as keyof typeof classes];

  return (
    <div className="app">
      <header className="app-header">
        <h1>DC20 Classes</h1>
        <p className="subtitle">Reference for character classes and their features</p>
      </header>

      <div className="controls">
        <div className="filter-buttons">
          {classNames.map((className) => (
            <button
              key={className}
              className={`filter-btn ${selectedClass === className ? 'active' : ''}`}
              onClick={() => setSelectedClass(className)}
            >
              {className.charAt(0).toUpperCase() + className.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {currentClass && (
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
              <h2>{currentClass.name}</h2>
              <p>{currentClass.description}</p>
              <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                <strong>Source:</strong> {currentClass.source}
              </p>
            </div>
            <button
              className={`save-btn ${isSaved(currentClass.name, 'Class') ? 'saved' : ''}`}
              onClick={() => toggleSave(currentClass.name, 'Class')}
              style={{ marginLeft: '1rem', flexShrink: 0 }}
            >
              {isSaved(currentClass.name, 'Class') ? '★' : '☆'}
            </button>
          </div>

          <div className="cards-container">
            {currentClass.features.map((feature: ClassFeature, index: number) => (
              <Card
                key={index}
                title={feature.name}
                subtitle={`Level ${feature.level} Feature`}
                type="Class Feature"
                cost="-"
                range="-"
                description={feature.description}
                enhancements={feature.options?.map(opt => `**${opt.name}**: ${opt.description}`)}
                tags={[`Level ${feature.level}`]}
                source={currentClass.source}
                isSaved={isSaved(`${currentClass.name}:${feature.name}`, 'Feature')}
                onToggleSave={() => toggleSave(`${currentClass.name}:${feature.name}`, 'Feature')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
