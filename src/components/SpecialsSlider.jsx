import { motion } from 'framer-motion';
import { Reveal } from './reveal';

const specials = [
  { id: '01', title: 'Strawberry Bliss', desc: 'Fresh local berries & cream', image: '/images/img4.jpg' },
  { id: '02', title: 'Chocolate Fudge', desc: 'Rich ganache & dark chocolate', image: '/images/img24.jpg' },
  { id: '03', title: 'Lemon Zesty', desc: 'Tart curd with toasted meringue', image: '/images/img3.jpg' },
  { id: '04', title: 'Red Velvelt', desc: 'A signature deep red cake with a hint of cocoa, often with cream cheese frosting.', image: '/images/img1.jpg' },   
  { id: '05', title: 'Black Forest', desc: 'Cherries & whipped cream', image: '/images/images.jpeg'},
  { id: '06', title: 'Marble Cake', desc: 'Swirls of vanilla and chocolate.', image: '/images/im.jpg'},
  { id: '07', title: 'Cheesecake', desc: 'Creamy, dense, and often flavored with fruit or vanilla.', image: '/images/img2.jpg'},
  { id: '08', title: 'Banana Cake', desc: 'Naturally sweet and moist.', image: '/images/img4.jpg'},
  { id: '09', title: 'Ferrero Rocher', desc: 'Chocolate and hazelnut combination', image: '/images/img5.jpg'},
  { id: '10', title: 'Tiramisu Slice', desc: 'Coffee-soaked ladyfingers', image: '/images/img6.jpg'}, 
];

export const SpecialsSlider = () => (
  <section className="py-24 px-6 md:px-24 overflow-hidden">
    <Reveal>
      <h2 className="text-4xl md:text-7xl font-serif italic mb-16 text-bakery-crust dark:text-dark-text">
        Chef's Specials
      </h2>
    </Reveal>

    {/* 1. gap-4 (mobile) na gap-6 (desktop) kwa nafasi kati ya kadi.
      2. pr-[20vw] inahakikisha kadi ya mwisho ina nafasi ya kutosha upande wa kulia.
      3. scrollbar-hide inaficha scrollbar mbaya (hakikisha unayo ile CSS kwenye index.css).
    */}
    <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pr-[20vw] md:pr-0">
      {specials.map((item) => (
        <motion.div 
          key={item.id}
          /* FIX: min-w-[75vw] inafanya kadi ya kwanza isi-cover screen nzima, 
             ikionyesha sehemu ya kadi inayofuata.
             snap-start inafanya kila kadi ijishikize vizuri upande wa kushoto.
          */
          className="min-w-[75vw] md:min-w-[calc(33.333%-1rem)] snap-start group relative aspect-[4/5] bg-bakery-crust/5 dark:bg-white/5 rounded-[3rem] p-8 flex flex-col justify-end overflow-hidden"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            {/* Gradient Overlay kwa ajili ya kusomeka kwa maandishi */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>

          {/* Card Content */}
          <span className="absolute top-8 left-8 font-mono text-[10px] text-white opacity-50 z-10">
            {item.id}
          </span>
          
          <div className="relative z-10 text-white">
            <h3 className="text-2xl md:text-4xl font-serif italic mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-80">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);