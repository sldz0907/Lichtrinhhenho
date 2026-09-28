import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number; type: string }[]>([]);

  useEffect(() => {
    const chars = ['✦', '✧', '⋆'];
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: random(0, 100),
        y: random(0, 100),
        size: random(10, 24),
        duration: random(3, 8),
        delay: random(0, 5),
        type: chars[Math.floor(Math.random() * chars.length)]
      }));
      setSparkles(newSparkles);
    };
    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute text-gold/30 font-serif"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: sparkle.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -30, -60],
            rotate: [0, 45, 90]
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        >
          {sparkle.type}
        </motion.div>
      ))}
      {/* Floating light particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute rounded-full bg-white/20 blur-md"
          style={{
            width: random(30, 80),
            height: random(30, 80),
            left: `${random(0, 100)}%`,
            top: `${random(0, 100)}%`,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, random(-50, 50), random(-100, 100)],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: random(10, 20),
            repeat: Infinity,
            delay: random(0, 10),
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};
