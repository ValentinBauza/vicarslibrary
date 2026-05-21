import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  title: string;
  subtitle?: string;
  type: string;
  cost: string;
  range: string;
  duration?: string;
  description: string;
  enhancements?: string[];
  tags?: string[];
  source?: string;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  type,
  cost,
  range,
  duration,
  description,
  enhancements,
  tags,
  source,
  isSaved = false,
  onToggleSave
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="card-header-content">
          <h2 className="card-title">{title}</h2>
          {subtitle && <div className="card-subtitle">{subtitle}</div>}
        </div>
        <div className="card-header-buttons">
          {onToggleSave && (
            <button
              className={`save-button ${isSaved ? 'saved' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave();
              }}
              aria-label={isSaved ? 'Unsave' : 'Save'}
              title={isSaved ? 'Remove from saved' : 'Save for later'}
            >
              {isSaved ? '★' : '☆'}
            </button>
          )}
          <button
            className="expand-button"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-meta">
          {source && <div className="card-meta-item"><strong>Source:</strong> {source}</div>}
          <div className="card-meta-item"><strong>Type:</strong> {type}</div>
          <div className="card-meta-item"><strong>Cost:</strong> {cost}</div>
          <div className="card-meta-item"><strong>Range:</strong> {range}</div>
          {duration && <div className="card-meta-item"><strong>Duration:</strong> {duration}</div>}
        </div>

        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="card-description">
          {description}
        </div>

        {enhancements && enhancements.length > 0 && (
          <div className="card-enhancements">
            <h3>Enhancements</h3>
            <ul>
              {enhancements.map((enhancement, index) => (
                <li key={index}>{enhancement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
