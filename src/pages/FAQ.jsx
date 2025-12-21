import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/reveal';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  { id: 1, question: "How much notice do I need to give for an order?", answer: "We generally require at least 3-4 days notice for standard cakes. For wedding cakes or complex custom designs, we recommend booking at least 1 week in advance to secure your date." },
  { id: 2, question: "Do you offer delivery?", answer: "Yes! We deliver via safe car courier within Embu Town. Delivery charges depend on the distance from Embu Town (approx. KES 300 - 1000). You can also pick up your cake directly from our Bakery." },
  { id: 3, question: "What payment methods do you accept?", answer: "We accept M-Pesa (Buy Goods Till) and Bank Transfers. A 50% deposit is required to confirm your order." },
  { id: 4, question: "Do you bake eggless or sugar-free cakes?", answer: "Absolutely. We offer eggless, gluten-free, and sugar-free options upon request. Please mention any dietary restrictions in the order form notes." },
  { id: 5, question: "Do you offer custom cake designs?", answer: "Absolutely! We specialize in custom cake designs. Whether you have a specific theme or unique design in mind, we can bring your vision to life." },
  {id: 6,  question: "Can I order a cake for same-day pickup?", answer: "Same-day pickup is available for our ready-made cakes in the shop. For custom orders, we require at least 48 hours notice. Please call ahead to check availability and place your order."},
  {id :7,  question: "Can I change or cancel my order?",answer: "Orders can be modified up to 48 hours before the pickup/delivery date. Cancellations made within 48 hours may incur a cancellation fee. We understand plans can change, so please contact us as soon as possible if you need to make changes."}
];

export const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-24 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-serif italic mb-16 text-bakery-crust dark:text-dark-accent">
            Common Inquiries
          </h2>
        </Reveal>

        <div className="border-t border-current/10">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-current/10">
              <button 
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="font-serif text-xl md:text-2xl italic text-bakery-crust dark:text-dark-accent group-hover:opacity-60 transition-opacity">
                  {item.question}
                </span>
                <span className="text-bakery-crust dark:text-dark-accent opacity-40">
                  {activeId === item.id ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 0.7 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed text-bakery-crust dark:text-dark-accent">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};