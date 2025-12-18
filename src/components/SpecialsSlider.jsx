import { motion } from 'framer-motion';
import { Reveal } from './reveal';

const specials = [
  { 
    id: '01', 
    title: 'Strawberry Bliss', 
    desc: 'Fresh local berries & cream',
    image: '/images/img1.webp' // Path to your public folder
  },
  { 
    id: '02', 
    title: 'Butter Croissant', 
    desc: '36hr fermented French butter',
    image: '/images/img2.webp'
  },
  { 
    id: '03', 
    title: 'Lemon Zesty', 
    desc: 'Tart curd with toasted meringue',
    image: '/images/img3.webp'
  },
  { 
    id: '04', 
    title: 'Chocolate Fudge', 
    desc: 'Rich ganache & dark chocolate',
    image: '/images/img4.webp'
  },  
];

export const SpecialsSlider = () => (
  <section className="py-24 px-6 md:px-24 overflow-hidden">
    <Reveal>
      <h2 className="text-4xl md:text-7xl font-serif italic mb-16 text-bakery-crust dark:text-dark-text">
        Chef's Specials
      </h2>
    </Reveal>

    <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
      {specials.map((item) => (
        <motion.div 
          key={item.id}
          className="min-w-[85vw] md:min-w-0 snap-center group relative aspect-[4/5] bg-bakery-crust/5 dark:bg-white/5 rounded-[2rem] p-8 flex flex-col justify-end overflow-hidden"
        >
          {/* FIX: The Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            {/* Gradient Overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Subtle Numbering */}
          <span className="absolute top-8 left-8 font-mono text-[10px] text-white opacity-50 z-10">
            {item.id}
          </span>
          
          <div className="relative z-10 text-white">
            <h3 className="text-3xl md:text-4xl font-serif italic mb-2">{item.title}</h3>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-80">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);