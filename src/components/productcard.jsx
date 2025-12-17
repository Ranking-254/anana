import { motion } from 'framer-motion';

export const ProductCard = ({ name, price, description, tag }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-[2.5rem] border border-bakery-crust/5 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-bakery-cream rounded-full text-bakery-sage border border-bakery-sage/20">
            {tag}
          </span>
          <span className="font-serif italic text-bakery-crust/60">{price}</span>
        </div>
        <h3 className="text-3xl font-serif text-bakery-crust mb-2 group-hover:text-bakery-sage transition-colors">
          {name}
        </h3>
        <p className="text-sm text-bakery-crust/60 leading-relaxed">
          {description}
        </p>
      </div>
      
      <motion.button 
        whileTap={{ scale: 0.95 }}
        className="mt-8 w-full py-3 rounded-2xl bg-bakery-cream text-bakery-crust font-bold text-sm border border-bakery-clay/20 hover:bg-bakery-sage hover:text-white transition-all"
      >
        Add to Batch
      </motion.button>
    </motion.div>
  );
};