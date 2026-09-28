import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrincessAvatar } from '../components/PrincessAvatar';
import { useApp } from '../context/AppState';
import { CalendarHeart, Clock, MapPin } from 'lucide-react';

export const Welcome = () => {
  const { state, updateState, nextStep } = useApp();
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.time || !state.location) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    nextStep();
  };

  return (
    <motion.div 
      className="min-h-screen w-full flex flex-col items-center justify-center p-2 md:p-8 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-4xl w-full relative">
        <div className="bg-white/20 backdrop-blur-xl rounded-[40px] shadow-[0_20px_60px_rgba(201,133,155,0.15)] border border-white/50 p-6 md:p-10 flex flex-col items-center text-center relative z-10 mt-12 md:mt-16">
          
          {/* Decorative Frame */}
          <div className="absolute inset-3 md:inset-4 pointer-events-none rounded-[32px] border border-champagne/30 z-0">
            <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold/50 rounded-tl-xl" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-gold/50 rounded-tr-xl" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-gold/50 rounded-bl-xl" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold/50 rounded-br-xl" />
          </div>
          
          <PrincessAvatar />

          <motion.div
            className="flex flex-col items-center mt-4 md:mt-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif font-black leading-tight mb-8 layered-text">
              <span className="layered-text-gradient block">Hi, Thu Trang ✦</span>
            </h1>

            {/* Capsules Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mb-10">
              {/* Date Capsule (Fixed) */}
              <div className="glass-capsule rounded-[32px] p-5 md:p-6 flex flex-col items-center justify-center text-center">
                <CalendarHeart size={28} className="text-rose mb-2 opacity-80" strokeWidth={1.5} />
                <label className="text-[10px] md:text-xs font-bold text-plum/50 uppercase tracking-widest mb-1">Ngày hẹn</label>
                <div className="text-lg md:text-xl font-serif font-bold text-plum mt-1">
                  01 / 10 / 2026
                </div>
              </div>
              
              {/* Time Capsule */}
              <div className="glass-capsule rounded-[32px] p-5 md:p-6 flex flex-col items-center justify-center text-center">
                <Clock size={28} className="text-rose mb-2 opacity-80" strokeWidth={1.5} />
                <label className="text-[10px] md:text-xs font-bold text-plum/50 uppercase tracking-widest mb-1">Giờ bắt đầu</label>
                <input 
                  type="time" 
                  className="bg-transparent text-lg md:text-xl font-serif font-bold text-plum text-center outline-none w-full cursor-pointer mt-1"
                  value={state.time}
                  onChange={e => updateState({ time: e.target.value })}
                />
              </div>

              {/* Location Capsule */}
              <div className="glass-capsule rounded-[32px] p-5 md:p-6 flex flex-col items-center justify-center text-center">
                <MapPin size={28} className="text-rose mb-2 opacity-80" strokeWidth={1.5} />
                <label className="text-[10px] md:text-xs font-bold text-plum/50 uppercase tracking-widest mb-1">Địa điểm đón em</label>
                <input 
                  type="text" 
                  className="bg-transparent text-lg md:text-xl font-serif font-bold text-plum text-center outline-none w-full placeholder-plum/30 mt-1"
                  value={state.location}
                  onChange={e => updateState({ location: e.target.value })}
                />
              </div>
            </div>

            {/* Button */}
            <div className="relative">
              <button 
                onClick={handleNext}
                className="btn-sweep relative overflow-hidden rounded-full bg-gradient-to-r from-rose to-champagne text-white px-8 py-4 font-bold tracking-widest shadow-[0_10px_30px_rgba(201,133,155,0.4)] hover:shadow-[0_15px_40px_rgba(201,133,155,0.6)] hover:-translate-y-1 transition-all duration-300 text-xs md:text-sm border border-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">TIẾP THEO &rarr;</span>
              </button>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-sm text-plum font-semibold bg-white/90 px-6 py-2 rounded-full shadow-lg border border-rose/30 whitespace-nowrap"
                  >
                    điền thiếu rùi kìa ✦
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
