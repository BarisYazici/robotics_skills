import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import DatasetsPage from './pages/DatasetsPage';
import FineTunePage from './pages/FineTunePage';
import DemonstratePage from './pages/DemonstratePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'skills':
        return <SkillsPage />;
      case 'datasets':
        return <DatasetsPage />;
      case 'fine-tune':
        return <FineTunePage />;
      case 'demonstrate':
        return <DemonstratePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className='page-container'>{renderPage()}</main>
    </div>
  );
};

export default App;
