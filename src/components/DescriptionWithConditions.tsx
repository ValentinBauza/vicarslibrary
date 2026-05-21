import React, { useState } from 'react';
import { conditions, conditionNames } from '../data/conditions';
import { ConditionModal } from './ConditionModal';
import './DescriptionWithConditions.css';

interface DescriptionWithConditionsProps {
  text: string;
}

export const DescriptionWithConditions: React.FC<DescriptionWithConditionsProps> = ({ text }) => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  // Create a regex pattern that matches any condition name (case-insensitive, whole word)
  const pattern = new RegExp(
    `\\b(${conditionNames.join('|')})\\b`,
    'gi'
  );

  // Split text and create clickable spans for conditions
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the clickable condition
    const conditionName = match[0];
    const conditionKey = conditionNames.find(
      name => name.toLowerCase() === conditionName.toLowerCase()
    );

    if (conditionKey) {
      parts.push(
        <span
          key={match.index}
          className="condition-link"
          onClick={() => setSelectedCondition(conditionKey)}
          title={`Click to see ${conditionKey} description`}
        >
          {conditionName}
        </span>
      );
    } else {
      parts.push(conditionName);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return (
    <>
      <span>{parts}</span>
      {selectedCondition && (
        <ConditionModal
          condition={conditions[selectedCondition]}
          onClose={() => setSelectedCondition(null)}
        />
      )}
    </>
  );
};
