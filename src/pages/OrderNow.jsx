import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const OrderForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    cakeType: 'Signature Chocolate', // Fixed name consistency
    size: '1.0 kg',
    date: ''
  });

  const YOUR_PHONE_NUMBER = "254716700151";

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const message = `*NEW CAKE ORDER*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Cake:* ${formData.cakeType}%0A` +
      `*Size:* ${formData.size}%0A` +
      `*Date:* ${formData.date}%0A` +
      `--------------------------%0A` +
      `Please confirm availability!`;

    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          /* FIX: removed color-black-500. 
             Added 'text-current' so it inherits from App.jsx theme colors.
             Added 'bg-inherit' or standard theme bg.
          */
          className="fixed inset-0 z-[110] bg-bakery-cream dark:bg-dark-bg text-bakery-crust dark:text-dark-text p-8 md:p-12 flex flex-col items-center justify-center transition-colors duration-500"
        >
          <button 
            onClick={onClose} 
            className="absolute top-12 right-12 font-mono text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100"
          >
            Close [X]
          </button>
          
          <div className="max-w-xl w-full">
            <h2 className="text-5xl font-serif italic mb-12 text-center">Place Your Order</h2>
            
            <form onSubmit={handleWhatsAppOrder} className="space-y-8 font-mono text-[10px] uppercase tracking-[0.2em]">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="opacity-50">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="Enter your name"
                  /* FIX: Using border-current/20 makes the line visible on both themes */
                  className="bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-bakery-sage transition-colors placeholder:text-current/20" 
                />
              </div>

              {/* Cake flavour */}
              <div className="flex flex-col gap-2">
                <label className="opacity-50">Cake Flavour</label>
                <select 
                  value={formData.cakeType}
                  onChange={(e) => setFormData({...formData, cakeType: e.target.value})}
                  className="bg-transparent border-b border-current/20 py-4 focus:outline-none cursor-pointer"
                >
                  <option className="text-black">Signature Chocolate</option>
                  <option className="text-black">Passion Fruit Cake</option>
                  <option className="text-black">Lemon Meringue Cake</option>
                 <option className="text-black">Black Forest Mini</option>
                 <option className="text-black">Red Velvet Cake</option>
                <option className="text-black">Strawberry Bliss</option>  

                </select>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-2">
                <label className="opacity-50">Size (kgs)</label>
                <select 
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  className="bg-transparent border-b border-current/20 py-4 focus:outline-none cursor-pointer"
                >
                  <option className="text-black">1.0 kg</option>
                  <option className="text-black">1.5 kgs</option>
                  <option className="text-black">2.0 kgs</option>
                  <option className="text-black">3.0 kgs +</option>
                </select>
              </div>

              {/* Pickup Date */}
              <div className="flex flex-col gap-2">
                <label className="opacity-50">Pickup Date</label>
                <input 
                  required
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="bg-transparent border-b border-current/20 py-4 focus:outline-none invert-0 dark:invert-[0.9]" 
                />
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#25D366] text-white py-6 rounded-full font-bold text-[11px] tracking-[0.4em] shadow-2xl flex items-center justify-center gap-4 mt-4"
              >
                Send Order via WhatsApp
              </motion.button>
              <h6>No payment required at this stage.</h6>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};