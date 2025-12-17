import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/reveal';

export const Inquiry = ({ isDarkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  
  // State to track user input
  const [formData, setFormData] = useState({
    date: '',
    guests: '',
    vision: '' // Captured questions/details
  });

  const YOUR_PHONE_NUMBER = "254716700151"; // Replace with your number

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatting the WhatsApp message with line breaks and bold labels
    const message = `*NEW CONSULTATION REQUEST*%0A` +
      `--------------------------%0A` +
      `*Event Date:* ${formData.date}%0A` +
      `*Guest Count:* ${formData.guests}%0A` +
      `*Vision/Questions:* ${formData.vision}%0A` +
      `--------------------------%0A` +
      `Sent via Hearth Cake Studio Portfolio`;

    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-48 px-8 md:px-24 transition-colors duration-500 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Baker Availability Indicator */}
        <div className="flex items-center justify-center gap-3 mb-12 opacity-60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bakery-sage opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-bakery-sage"></span>
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">
            Baker is currently online
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Reveal>
                <h2 className="text-7xl font-serif mb-12 italic text-center leading-tight">
                  Begin Your <br /> Consultation
                </h2>
              </Reveal>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 font-mono text-[10px] uppercase tracking-[0.3em]">
                {/* Date Input */}
                <div className="flex flex-col gap-4 border-b border-current/10 pb-4">
                  <label className="opacity-40">Event Date</label>
                  <input 
                    required
                    type="text" 
                    placeholder="DD / MM / YY" 
                    className="bg-transparent focus:outline-none placeholder:opacity-20"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                
                {/* Guests Input */}
                <div className="flex flex-col gap-4 border-b border-current/10 pb-4">
                  <label className="opacity-40">Guest Count</label>
                  <input 
                    required
                    type="number" 
                    placeholder="00" 
                    className="bg-transparent focus:outline-none" 
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>

                {/* Question / Vision Textarea */}
                <div className="md:col-span-2 flex flex-col gap-4 border-b border-current/10 pb-4">
                  <label className="opacity-40">Questions & Design Vision</label>
                  <textarea 
                    required
                    rows="3" 
                    placeholder="Tell us about your theme or ask any questions..." 
                    className="bg-transparent focus:outline-none resize-none"
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.5em] shadow-2xl transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-bakery-cream text-dark-bg' 
                        : 'bg-bakery-crust text-bakery-cream'
                    }`}
                  >
                    Connect on WhatsApp
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <h2 className="text-6xl font-serif italic">Inquiry Sent.</h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-60">
                Check your WhatsApp to complete <br /> the artisan consultation.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-bakery-sage font-mono text-[8px] uppercase tracking-widest hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};