import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import MainContent from './components/MainContent';
import { ASSETS } from './constants';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Play hymne UNY after invitation is opened
    setTimeout(() => {
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch(error => {
          console.log('Audio autoplay prevented:', error);
        });
      }
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(error => {
          console.log('Audio play error:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {!isOpened && (
          <Cover key="cover" onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>
      
      {isOpened && (
        <>
          <MainContent />
          
          {/* Audio Controls */}
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={toggleMute}
              className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                isMuted 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-uny-blue hover:bg-blue-700 text-white'
              }`}
              title={isMuted ? 'Putar Musik' : 'Matikan Musik'}
            >
              {isMuted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={ASSETS.hymneUrl}
            loop
            preload="auto"
          />
        </>
      )}
    </div>
  );
};

export default App;