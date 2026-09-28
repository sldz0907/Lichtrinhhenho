import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';

export const PrincessAvatar = () => {
  return (
    <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mx-auto -mt-16 md:-mt-20 z-20">
      {/* Blurred glow behind */}
      <motion.div 
        className="absolute inset-0 bg-rose/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Soft pink halo */}
      <div className="absolute inset-2 bg-rose/10 rounded-full blur-md z-0" />
      
      {/* Medallion Container */}
      <motion.div 
        className="relative z-10 rounded-full p-2 border-4 border-champagne/80 shadow-[0_15px_50px_rgba(201,133,155,0.4)] bg-ivory"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-ivory p-1 bg-champagne/20">
          <img 
            src="/avatar.jpg" 
            alt="Princess Trang" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
      
      {/* Floating Crown */}
      <motion.div 
        className="absolute -top-8 text-gold z-30"
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Crown size={48} strokeWidth={1.5} className="drop-shadow-[0_4px_10px_rgba(214,174,98,0.5)] fill-gold/40" />
      </motion.div>
      
      {/* Tiny Stars */}
      <motion.div className="absolute top-8 -left-6 text-gold z-20" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
        <Star size={24} className="fill-gold/50" />
      </motion.div>
      <motion.div className="absolute bottom-16 -right-8 text-rose z-20" animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
        <Star size={28} className="fill-rose/50" />
      </motion.div>
      <motion.div className="absolute top-24 -right-4 text-champagne z-20" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}>
        <Star size={16} className="fill-champagne/80" />
      </motion.div>
    </div>
  );
};
