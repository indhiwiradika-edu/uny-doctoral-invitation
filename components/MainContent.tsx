import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Youtube, GraduationCap } from 'lucide-react';
import { ASSETS, CANDIDATE, EVENT, LINKS } from '../constants';
import CountdownTimer from './CountdownTimer';

const MainContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white pb-12 relative overflow-hidden"
    >
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-uny-blue to-white -z-10 opacity-10"></div>
       <div className="absolute -top-20 -right-20 w-64 h-64 bg-uny-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
       <div className="absolute -top-20 -left-20 w-64 h-64 bg-uny-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s"}}></div>

      <div className="max-w-3xl mx-auto px-4 pt-10">
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
               {/* Note: Change profileUrl in constants.ts */}
              <img 
                src={ASSETS.profileUrl} 
                alt={CANDIDATE.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-uny-gold scale-110 animate-spin-slow opacity-50 border-dashed"></div>
          </div>
          
          <h2 className="text-xl font-bold text-uny-blue uppercase tracking-wider mb-2">Calon Doktor</h2>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-1">{CANDIDATE.name}</h1>
          <p className="text-slate-500 font-medium">NIM. {CANDIDATE.nim}</p>
          <p className="text-sm text-slate-400 mt-2 max-w-md">{CANDIDATE.program}</p>
        </motion.div>

        {/* Dissertation Title */}
        <motion.div variants={itemVariants} className="bg-slate-50 border-l-4 border-uny-gold p-6 md:p-8 rounded-r-xl shadow-sm mb-12 mx-2">
          <div className="flex items-start">
            <GraduationCap className="w-8 h-8 text-uny-blue mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Judul Disertasi</h3>
              <p className="font-serif text-lg md:text-xl text-slate-800 italic leading-relaxed">
                "{CANDIDATE.dissertation}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-12">
          <div className="bg-uny-blue p-4 text-center">
            <h3 className="text-white font-semibold tracking-widest uppercase">Detail Acara</h3>
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-uny-blue" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Hari, Tanggal</h4>
                <p className="text-slate-600">{EVENT.date}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-uny-blue" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Waktu</h4>
                <p className="text-slate-600">{EVENT.time}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-uny-blue" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Lokasi</h4>
                <p className="text-slate-600 leading-relaxed">{EVENT.location}</p>
              </div>
            </div>

            {/* Moved Live Streaming Button Here */}
            <div className="pt-4 mt-2 border-t border-slate-100">
               <a 
                href={LINKS.stream} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-xl bg-red-600 text-white font-bold flex items-center justify-center shadow-lg hover:bg-red-700 hover:shadow-red-600/30 transition-all group"
              >
                <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Saksikan Live Streaming
              </a>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Menuju Acara</h3>
          <CountdownTimer />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
          <a 
            href={LINKS.product} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl border-2 border-uny-blue text-uny-blue font-bold flex items-center justify-center hover:bg-blue-50 transition-colors group"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Lihat Produk Pengembangan
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="text-center border-t border-slate-200 pt-8 pb-4">
          <img src={ASSETS.logoUrl} alt="UNY" className="h-12 mx-auto mb-4 opacity-80" />
          <p className="text-sm text-slate-500">
            &copy; 2026 {CANDIDATE.name}.<br/>Universitas Negeri Yogyakarta.
          </p>
          <p className="text-xs text-slate-400 mt-2">Designed with academic excellence in mind.</p>
        </motion.footer>

      </div>
    </motion.main>
  );
};

export default MainContent;