import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppState';
import { foods } from '../data/foods';
import { Crown, ArrowLeft } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const FoodSelection = () => {
  const { state, updateState, nextStep, prevStep } = useApp();
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.foodId) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    nextStep();
  };

  return (
    <motion.div 
      className="min-h-screen w-full flex flex-col pt-24 pb-12 px-4 md:px-12 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center flex-grow">
        
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-plum mb-0 layered-text leading-tight">
            Chúng mình sẽ đii ăn...
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {foods.map((food) => {
            const isSelected = state.foodId === food.id;
            return (
              <motion.div
                key={food.id}
                whileHover={{ y: -12 }}
                onClick={() => updateState({ foodId: food.id })}
                className={twMerge(
                  "group relative h-48 md:h-64 rounded-[24px] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 bg-ivory border-[4px]",
                  isSelected ? "border-gold shadow-[0_20px_50px_rgba(214,174,98,0.4)]" : "border-white/50 hover:shadow-[0_30px_60px_rgba(201,133,155,0.2)]"
                )}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/30 to-transparent" />
                </div>
                
                {/* Light sweep effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">{food.name}</h3>
                </div>

                {/* Selected Crown */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ scale: 0, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, rotate: 45, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-ivory shadow-[0_0_20px_rgba(214,174,98,0.8)] flex items-center justify-center border-2 border-gold"
                    >
                      <Crown size={24} className="text-gold fill-gold" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div 
          className="w-full max-w-4xl flex justify-between items-center mt-auto pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={prevStep}
            className="flex items-center gap-3 text-plum/60 hover:text-plum transition-colors px-6 py-3 font-bold tracking-widest text-sm uppercase"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>
          
          <div className="flex flex-col items-end relative">
            <button 
              onClick={handleNext}
              className="btn-sweep relative overflow-hidden rounded-full bg-gradient-to-r from-rose to-champagne text-white px-10 py-5 font-bold tracking-widest shadow-[0_10px_30px_rgba(201,133,155,0.4)] hover:shadow-[0_15px_40px_rgba(201,133,155,0.6)] hover:-translate-y-1 transition-all duration-300 text-sm md:text-base border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">TIẾP THEO SẼ ✦</span>
            </button>
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bottom-full mb-4 right-0 text-sm text-plum font-semibold bg-white/90 px-6 py-2 rounded-full shadow-lg border border-rose/30 whitespace-nowrap"
                >
                  Em chọn món mình muốn ăn trước nhé ♡
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
