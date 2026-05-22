import { useState } from 'react';
import './App.css';
import { PasswordGate } from './components/PasswordGate';
import { SpellsManeuversPage } from './components/SpellsManeuversPage';
import { ClassesPage } from './components/ClassesPage';

type PageType = 'spells-maneuvers' | 'classes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('dc20-authenticated') === 'true';
  });

  const [currentPage, setCurrentPage] = useState<PageType>('spells-maneuvers');

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-wrapper">
      <nav className="page-nav">
        <button
          className={`nav-btn ${currentPage === 'spells-maneuvers' ? 'active' : ''}`}
          onClick={() => setCurrentPage('spells-maneuvers')}
        >
          Spells & Maneuvers
        </button>
        <button
          className={`nav-btn ${currentPage === 'classes' ? 'active' : ''}`}
          onClick={() => setCurrentPage('classes')}
        >
          Classes
        </button>
      </nav>

      {currentPage === 'spells-maneuvers' && <SpellsManeuversPage />}
      {currentPage === 'classes' && <ClassesPage />}
    </div>
  );
}

export default App;
