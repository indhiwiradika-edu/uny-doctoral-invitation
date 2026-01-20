import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Optional: Play a soft sound here if requested
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {!isOpened && (
          <Cover key="cover" onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>
      
      {isOpened && (
        <MainContent />
      )}
    </div>
  );
};

export default App;