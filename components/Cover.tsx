import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import { ASSETS, CANDIDATE } from '../constants';

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState<string>("Tamu Undangan");

  useEffect(() => {
    // Dynamic Guest Name Logic
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -1000, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-center px-4 bg-batik-pattern"
    >
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-uny-blue/10 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* UNY Logo */}
        <motion.img 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          src={ASSETS.logoUrl} 
          alt="Logo UNY" 
          className="h-24 md:h-32 mb-6 drop-shadow-md"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-uny-blue uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Undangan Digital
          </h3>
          <h1 className="font-serif text-3xl md:text-4xl text-slate-800 font-bold leading-tight mb-2">
            Ujian Tertutup dan Sidang
            <br />
            Promosi Doktor
          </h1>
          <div className="w-24 h-1 bg-uny-gold mx-auto my-4 rounded-full"></div>
          <p className="text-lg md:text-xl font-semibold text-slate-700">
            {CANDIDATE.name}
          </p>
        </motion.div>

        {/* Dynamic Guest Name Box */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm w-full mb-8 backdrop-blur-sm bg-opacity-80"
        >
          <p className="text-slate-500 text-sm mb-2 font-light italic">Kepada Yth. Bapak/Ibu/Saudara:</p>
          <p className="text-xl md:text-2xl font-bold text-uny-blue font-serif break-words">
            {guestName}
          </p>
        </motion.div>

        {/* Open Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-uny-blue rounded-full shadow-lg hover:shadow-uny-blue/40 focus:outline-none ring-offset-2 focus:ring-2 ring-uny-blue"
        >
          <MailOpen className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          <span>Buka Undangan</span>
        </motion.button>
      </div>
      
      <p className="absolute bottom-6 text-xs text-slate-400">
        Universitas Negeri Yogyakarta
      </p>
    </motion.div>
  );
};

export default Cover;