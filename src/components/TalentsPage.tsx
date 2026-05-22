import React, { useState } from 'react';
import { allTalents, generalTalents, classTalents } from '../data/talents';
import type { Talent } from '../data/talents';
import { Card } from './Card';
import { useSavedItems } from '../hooks/useSavedItems';

type FilterType = 'all' | 'general' | 'class';

export const TalentsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [classFilter, setClassFilter] = useState<string>('all');
  const { toggleSave, isSaved } = useSavedItems();

  // Get unique class names from class talents
  const classNames = Array.from(new Set(classTalents.map(t => t.className).filter((name): name is string => Boolean(name)))).sort();

  // Filter talents based on selected filters
  const getFilteredTalents = (): Talent[] => {
    let talents = allTalents;

    // Apply category filter
    if (filter === 'general') {
      talents = generalTalents;
    } else if (filter === 'class') {
      talents = classTalents;
    }

    // Apply class filter for class talents
    if (filter === 'class' && classFilter !== 'all') {
      talents = talents.filter(t => t.className === classFilter);
    }

    return talents;
  };

  const filteredTalents = getFilteredTalents();

  const formatBenefits = (talent: Talent): string[] | undefined => {
    if (!talent.benefits || talent.benefits.length === 0) {
      return undefined;
    }
    return talent.benefits;
  };

  const getTalentSubtitle = (talent: Talent): string => {
    const parts: string[] = [];

    if (talent.className) {
      parts.push(talent.className);
    }

    if (talent.requirement) {
      parts.push(`Requirement: ${talent.requirement}`);
    }

    if (talent.canOnlyGainOnce) {
      parts.push('Can Only Gain Once');
    }

    return parts.join(' • ');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>DC20 Talents</h1>
        <p className="subtitle">Character progression talents - {filteredTalents.length} talents</p>
      </header>

      <div className="controls">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => {
              setFilter('all');
              setClassFilter('all');
            }}
          >
            All Talents ({allTalents.length})
          </button>
          <button
            className={`filter-btn ${filter === 'general' ? 'active' : ''}`}
            onClick={() => {
              setFilter('general');
              setClassFilter('all');
            }}
          >
            General ({generalTalents.length})
          </button>
          <button
            className={`filter-btn ${filter === 'class' ? 'active' : ''}`}
            onClick={() => setFilter('class')}
          >
            Class ({classTalents.length})
          </button>
        </div>

        {filter === 'class' && (
          <div className="filter-buttons" style={{ marginTop: '1rem' }}>
            <button
              className={`filter-btn ${classFilter === 'all' ? 'active' : ''}`}
              onClick={() => setClassFilter('all')}
            >
              All Classes
            </button>
            {classNames.map((className) => (
              <button
                key={className}
                className={`filter-btn ${classFilter === className ? 'active' : ''}`}
                onClick={() => setClassFilter(className)}
              >
                {className}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="cards-container">
        {filteredTalents.map((talent, index) => (
          <Card
            key={index}
            title={talent.name}
            subtitle={getTalentSubtitle(talent)}
            type={talent.category === 'General' ? 'General Talent' : 'Class Talent'}
            cost="-"
            range="-"
            description={talent.description}
            enhancements={formatBenefits(talent)}
            tags={[talent.category, talent.className].filter(Boolean) as string[]}
            source="DC20 RPG Beta 0.10.5 (pg 186-190)"
            isSaved={isSaved(talent.name, 'Talent')}
            onToggleSave={() => toggleSave(talent.name, 'Talent')}
          />
        ))}
      </div>
    </div>
  );
};
