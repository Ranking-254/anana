import { Reveal } from './reveal';
import { Zap, Heart, Leaf,Palette,Star,ChefHat } from 'lucide-react';

const reasons = [
  { icon: <Leaf />, title: "Premium Ingredients", desc: "We use only the finest ingredients, sourced locally for freshness and quality." },
  { icon: <Zap />, title: "Customer Service", desc: "We Value each of our Client ." },
  { icon: <Heart />, title: "Hand-Sculpted", desc: "Each cake is a unique commission." },
  { icon: <Palette />, title: "Artisanal Design", desc: "Custom cakes for every occasion." },
  { icon:<Star />, title: "Customer Satisfaction", desc: "Our customers are our family. We go above and beyond to ensure every experience with Hearth Bakers is a delightful one."},
{ icon:<ChefHat />, title: "Expert Bakers", desc: "Our team of skilled bakers brings years of experience and a passion for the craft to every cake we create."},
];

export const WhyChooseUs = () => (
  <section className="py-32 px-12 md:px-24 text-dark-accent transition-colors duration-500">
    <Reveal>
      <h2 className="text-5xl font-serif italic mb-20 text-center">Why Choose Us</h2>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {reasons.map((reason, i) => (
        <Reveal key={i}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 opacity-80">{reason.icon}</div>
            <h3 className="text-2xl font-serif mb-4 italic">{reason.title}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 leading-relaxed">
              {reason.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);