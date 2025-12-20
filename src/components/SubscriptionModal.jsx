import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 200 } 
  },
  exit: { x: "100%", opacity: 0, transition: { ease: "easeInOut" } }
};

// FIX: Added onOpenOrder to the props here
export const SubscriptionModal = ({ isOpen, onClose, onOpenOrder }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-full w-full max-w-md bg-bakery-cream z-[70] shadow-2xl p-12 flex flex-col"
          >
            <button onClick={onClose} className="self-end text-bakery-crust font-mono uppercase text-xs tracking-tighter hover:opacity-50">
              Close [ESC]
            </button>
            
            <div className="mt-20">
              <span className="text-bakery-sage font-mono text-xs uppercase tracking-widest">The anana-Bakers Club</span>
              <h2 className="text-5xl font-serif text-bakery-crust mt-4 leading-tight">Fresh Cakes, <br/>delivered weekly.</h2>
              <p className="mt-6 text-bakery-crust/70 leading-relaxed">
                Join our small-batch subscription. Members get first access to limited seasonal cakes and free Saturday delivery.
              </p>
              
              {/* Added preventDefault to the form so the page doesn't refresh on click */}
              <form className="mt-12 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-transparent border-b border-bakery-crust/20 py-4 focus:outline-none focus:border-bakery-sage transition-colors"
                />
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onOpenOrder(); 
                    if (onClose) onClose(); 
                  }}
                  className="w-full bg-bakery-crust text-bakery-cream py-5 rounded-full font-bold uppercase text-xs tracking-widest"
                >
                  Join Anana-backers
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};