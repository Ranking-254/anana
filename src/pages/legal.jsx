import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/reveal';

export const Legal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="fixed inset-0 z-[120] bg-bakery-cream dark:bg-dark-bg text-bakery-crust dark:text-dark-text p-8 md:p-24 overflow-y-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="fixed top-12 right-12 font-mono text-[10px] uppercase tracking-widest z-[130]"
          >
            Close [X]
          </button>

          <div className="max-w-5xl mx-auto pt-20">
            <Reveal>
              <h1 className="text-6xl font-serif italic mb-24 border-b border-current/10 pb-8">Legal Studio</h1>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
              <div className="space-y-12">
                <h2 className="text-xl font-serif italic normal-case tracking-normal mb-8">Privacy Policy</h2>
                <div className="space-y-6 opacity-70">
                  <p>01 / DATA COLLECTION: We collect only information necessary for your cake commissions.</p>
                  <p>02 / USAGE: Your data is used exclusively to facilitate your artisan experience.</p>
                
                </div>
              </div>
              <div className="space-y-12">
                <h2 className="text-xl font-serif italic normal-case tracking-normal mb-8">Terms of Service</h2>
                <div className="space-y-6 opacity-70">
                  <p>01 / COMMISSIONS: Every cake is a unique artwork. Variations are expected.</p>
                  <p>02 / CANCELLATIONS: Within 72 hours of pickup are non-refundable.</p>
                </div>
                 
              </div><div className="mt-32 pt-2 border-t border-current/5 opacity-30 font-mono text-[10px] uppercase tracking-[0.5em] text-center text-red-600">

          Last Updated: December 2025 ● Hearth Cake Studio

        </div>
             
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};