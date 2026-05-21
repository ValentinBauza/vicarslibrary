import React from 'react';
import './ConditionModal.css';
import type { Condition } from '../data/conditions';

interface ConditionModalProps {
  condition: Condition;
  onClose: () => void;
}

export const ConditionModal: React.FC<ConditionModalProps> = ({ condition, onClose }) => {
  return (
    <div className="condition-modal-overlay" onClick={onClose}>
      <div className="condition-modal" onClick={(e) => e.stopPropagation()}>
        <div className="condition-modal-header">
          <h3>{condition.name}</h3>
          <button className="condition-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="condition-modal-content">
          {condition.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
