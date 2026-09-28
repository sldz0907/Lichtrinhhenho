import { motion } from 'framer-motion';

export const Carriage = () => {
  return (
    <div className="fixed bottom-12 left-0 right-0 pointer-events-none z-0 overflow-hidden h-64 opacity-50">
      <motion.div
        className="absolute bottom-0 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
        initial={{ x: '-100%' }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Detailed magical pumpkin carriage */}
          
          {/* Back Wheel Swirls */}
          <path d="M 60 170 Q 75 140 90 170 T 60 170" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8"/>
          <circle cx="75" cy="160" r="30" stroke="currentColor" strokeWidth="4" fill="none"/>
          <circle cx="75" cy="160" r="22" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
          <path d="M75 130 L75 190 M45 160 L105 160 M53 138 L97 182 M53 182 L97 138" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          
          {/* Front Wheel Swirls */}
          <circle cx="215" cy="160" r="30" stroke="currentColor" strokeWidth="4" fill="none"/>
          <circle cx="215" cy="160" r="22" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
          <path d="M215 130 L215 190 M185 160 L245 160 M193 138 L237 182 M193 182 L237 138" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          
          {/* Carriage Base / Chassis */}
          <path d="M 40 160 Q 145 190 250 160" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
          <path d="M 30 150 Q 50 130 75 160" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M 260 150 Q 240 130 215 160" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          
          {/* Pumpkin Body */}
          <path d="M 145 40 C 70 40 40 80 40 130 C 40 175 70 180 145 180 C 220 180 250 175 250 130 C 250 80 220 40 145 40 Z" fill="currentColor" opacity="0.3"/>
          <path d="M 145 40 C 70 40 40 80 40 130 C 40 175 70 180 145 180 C 220 180 250 175 250 130 C 250 80 220 40 145 40 Z" stroke="currentColor" strokeWidth="4" fill="none"/>
          
          {/* Pumpkin Ribs (Lines) */}
          <path d="M 145 40 C 110 40 90 80 90 130 C 90 175 110 180 145 180" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 145 40 C 180 40 200 80 200 130 C 200 175 180 180 145 180" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 145 40 C 130 40 120 80 120 130 C 120 175 130 180 145 180" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 145 40 C 160 40 170 80 170 130 C 170 175 160 180 145 180" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
          
          {/* Top Crown / Stem */}
          <path d="M 145 40 C 130 15 150 5 160 15" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M 145 40 C 120 30 110 10 130 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M 145 40 C 170 30 180 10 160 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          
          {/* Elegant Window */}
          <path d="M 120 80 C 120 60 170 60 170 80 L 170 120 C 170 135 120 135 120 120 Z" fill="white" opacity="0.8"/>
          <path d="M 120 80 C 120 60 170 60 170 80 L 170 120 C 170 135 120 135 120 120 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M 145 65 L 145 130 M 120 100 L 170 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
          
          {/* Heart Motif on Door */}
          <path d="M 145 145 C 145 145 140 140 135 140 C 130 140 130 148 135 150 L 145 160 L 155 150 C 160 148 160 140 155 140 C 150 140 145 145 145 145 Z" fill="currentColor"/>

          {/* Magical Dust / Sparkles trailing */}
          <circle cx="20" cy="130" r="4" fill="currentColor" opacity="0.8"/>
          <circle cx="10" cy="110" r="2.5" fill="currentColor" opacity="0.6"/>
          <circle cx="35" cy="150" r="3" fill="currentColor" opacity="0.7"/>
          <circle cx="15" cy="160" r="1.5" fill="currentColor" opacity="0.5"/>
          <path d="M 10 130 L 30 130 M 20 120 L 20 140" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          
        </svg>
      </motion.div>
    </div>
  );
};
