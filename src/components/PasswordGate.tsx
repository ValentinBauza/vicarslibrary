import React, { useState } from 'react';
import './PasswordGate.css';
import { verifyPassword } from '../utils/auth';

interface PasswordGateProps {
  onAuthenticated: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    const isValid = await verifyPassword(password);

    if (isValid) {
      localStorage.setItem('dc20-authenticated', 'true');
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
      setIsVerifying(false);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="password-gate">
      <div className="password-gate-container">
        <h1 className="password-gate-title">DC20 RPG - Spells & Maneuvers</h1>
        <p className="password-gate-subtitle">Enter password to access</p>

        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            className={`password-input ${error ? 'error' : ''}`}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <p className="error-message">Incorrect password</p>}
          <button type="submit" className="password-submit" disabled={isVerifying}>
            {isVerifying ? 'Verifying...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
};
