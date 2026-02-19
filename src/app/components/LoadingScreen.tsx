import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0e27]"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight mb-4"
            >
              <span className="text-white">SENTI</span>
              <span className="text-[#00d4ff]">METRIX</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent mx-auto"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xs text-gray-500 uppercase tracking-widest"
            >
              Initializing Intelligence Systems
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
