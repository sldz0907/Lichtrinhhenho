import { motion } from 'framer-motion';

export const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <motion.div
            initial={false}
            animate={{
              color: currentStep === step ? '#D6AE62' : currentStep > step ? '#C9859B' : '#E5D6DE',
              textShadow: currentStep === step ? '0 0 10px rgba(214,174,98,0.8)' : 'none',
              scale: currentStep === step ? 1.2 : 1
            }}
            className="text-xs font-serif tracking-widest font-bold"
          >
            0{step}
          </motion.div>
          {currentStep === step && (
            <motion.span 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="text-[10px] text-champagne"
            >
              ✦
            </motion.span>
          )}
          {index < steps.length - 1 && (
            <motion.div
              className="w-8 md:w-12 h-[1px] mx-1 md:mx-2"
              animate={{
                backgroundColor: currentStep > step ? '#C9859B' : '#E5D6DE'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
