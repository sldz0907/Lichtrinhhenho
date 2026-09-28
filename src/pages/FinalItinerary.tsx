import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppState';
import { foods } from '../data/foods';
import { activities } from '../data/activities';
import { RefreshCcw, Heart, MapPin, Clock, Utensils, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalItinerary = () => {
  const { state, updateState } = useApp();
  const [agreed, setAgreed] = useState(false);

  const food = foods.find(f => f.id === state.foodId);
  const activity = activities.find(a => a.id === state.activityId);

  const handleAgree = async () => {
    setAgreed(true);

    // Gửi dữ liệu qua mail bằng Formspree
    try {
      await fetch('https://formspree.io/f/mdekyarg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: 'Trang đã đồng ý lịch trình hẹn hò! ♡',
          time: state.time || '19:00',
          location: state.location || 'Trước cửa nhà em',
          food: food?.name || '',
          activity: activity?.name || ''
        })
      });
    } catch (error) {
      console.error("Lỗi khi gửi email:", error);
    }

    // Confetti celebration
    const end = Date.now() + 4 * 1000;
    const colors = ['#D6AE62', '#C9859B', '#FFFFFF', '#F4E7F1', '#6E304D'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const steps = [
    { label: 'ĐÓN EM LÚC', value: state.time || '19:00', icon: <Clock size={16} /> },
    { label: 'TẠI', value: state.location || 'Trước cửa nhà em', icon: <MapPin size={16} /> },
    { label: 'CHÚNG MÌNH SẼ ĐI ĂN', value: food?.name || '', icon: <Utensils size={16} /> },
    { label: 'SAU ĐÓ CHÚNG MÌNH SẼ', value: activity?.name || '', icon: <Moon size={16} /> },
  ];

  if (agreed) {
    return (
      <motion.div
        className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose/60 blur-3xl rounded-full scale-150" />
            <Heart size={160} className="text-rose drop-shadow-[0_0_50px_rgba(201,133,155,1)] fill-rose relative z-10" />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 md:px-12 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: Final Portrait / Jewelry Box */}
        <motion.div
          className="flex flex-col items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Subtle frame behind */}
          <div className="absolute -inset-6 border border-gold/30 rounded-[40px] pointer-events-none rotate-3 opacity-50" />
          <div className="absolute -inset-6 border border-rose/30 rounded-[40px] pointer-events-none -rotate-2 opacity-50" />

          <div className="w-full max-w-md rounded-[30px] p-3 border-2 border-gold/80 bg-ivory shadow-[0_30px_60px_rgba(201,133,155,0.3)] relative z-10">
            <div className="aspect-[4/5] rounded-[22px] overflow-hidden relative border border-gold/40">
              <img
                src="/avatar.jpg"
                alt="Portrait"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-plum/10 mix-blend-overlay" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,249,245,0.4)] pointer-events-none" />
            </div>
          </div>
          <p className="mt-8 text-center font-script text-plum/90 text-3xl md:text-4xl leading-relaxed">
            “Mong rằng ta sẽ có một buổi tối vui vẻ.”
          </p>
        </motion.div>

        {/* Right: Itinerary Stationery */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-plum leading-tight layered-text whitespace-nowrap">
              Lịch trình 1/10
            </h2>
          </motion.div>

          <div className="relative pl-6 md:pl-10 mb-12">
            {/* Elegant Vertical Line */}
            <div className="absolute top-2 bottom-2 left-[11px] md:left-[19px] w-[2px] bg-gradient-to-b from-gold via-rose/50 to-transparent" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col justify-center group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute -left-[30px] md:-left-[38px] top-[2px] w-5 h-5 rounded-full bg-ivory border-[3px] border-gold shadow-[0_0_15px_rgba(214,174,98,0.6)] flex items-center justify-center text-rose group-hover:scale-125 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                  />
                  <div className="pl-6 md:pl-8">
                    <p className="text-[11px] md:text-xs font-bold text-plum/50 tracking-widest uppercase mb-2 flex items-center gap-2">
                      <span className="text-rose/70">{step.icon}</span> {step.label}
                    </p>
                    <p className="text-2xl md:text-4xl font-serif font-bold text-plum">
                      {step.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center md:text-left mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleAgree}
                className="w-full sm:w-auto btn-sweep relative overflow-hidden rounded-full bg-gradient-to-r from-rose to-champagne text-white px-10 py-5 font-bold tracking-widest shadow-[0_10px_30px_rgba(201,133,155,0.4)] hover:shadow-[0_15px_40px_rgba(201,133,155,0.6)] hover:-translate-y-1 transition-all duration-300 text-sm border border-white/20 uppercase"
              >
                <span className="relative z-10 flex items-center gap-2">♡ Đồng ý với lịch trình</span>
              </button>
              <button
                onClick={() => updateState({ step: 1 })}
                className="w-full sm:w-auto text-plum/60 hover:text-plum px-8 py-5 rounded-full font-bold uppercase tracking-widest transition-all flex justify-center items-center gap-2 border-2 border-transparent hover:border-plum/20 hover:bg-white/40 text-sm"
              >
                <RefreshCcw size={16} /> Chọn lại
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
