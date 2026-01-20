import React, { useState, useEffect } from 'react';
import { EVENT } from '../constants';
import { TimeLeft } from '../types';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(EVENT.targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-uny-blue rounded-lg flex items-center justify-center shadow-lg border-b-4 border-uny-gold mb-2">
        <span className="text-2xl sm:text-3xl font-bold text-white font-sans">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center items-center py-6">
      <TimeUnit value={timeLeft.days} label="Hari" />
      <TimeUnit value={timeLeft.hours} label="Jam" />
      <TimeUnit value={timeLeft.minutes} label="Menit" />
      <TimeUnit value={timeLeft.seconds} label="Detik" />
    </div>
  );
};

export default CountdownTimer;