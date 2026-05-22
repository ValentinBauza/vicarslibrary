import { useState } from 'react';
import './App.css';
import { PasswordGate } from './components/PasswordGate';
import { SpellsManeuversPage } from './components/SpellsManeuversPage';
import { ClassesPage } from './components/ClassesPage';
import { AncestriesPage } from './components/AncestriesPage';
import { TalentsPage } from './components/TalentsPage';
import { SavedPage } from './components/SavedPage';

type PageType = 'spells-maneuvers' | 'classes' | 'ancestries' | 'talents' | 'saved';

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
        <button
          className={`nav-btn ${currentPage === 'ancestries' ? 'active' : ''}`}
          onClick={() => setCurrentPage('ancestries')}
        >
          Ancestries
        </button>
        <button
          className={`nav-btn ${currentPage === 'talents' ? 'active' : ''}`}
          onClick={() => setCurrentPage('talents')}
        >
          Talents
        </button>
        <button
          className={`nav-btn ${currentPage === 'saved' ? 'active' : ''}`}
          onClick={() => setCurrentPage('saved')}
        >
          Saved
        </button>
      </nav>

      {currentPage === 'spells-maneuvers' && <SpellsManeuversPage />}
      {currentPage === 'classes' && <ClassesPage />}
      {currentPage === 'ancestries' && <AncestriesPage />}
      {currentPage === 'talents' && <TalentsPage />}
      {currentPage === 'saved' && <SavedPage />}
    </div>
  );
}

export default App;
