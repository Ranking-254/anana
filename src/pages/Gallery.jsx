import { motion } from 'framer-motion';
import { Reveal } from '../components/reveal.jsx'
import imga from '../assets/img1.webp';
import imgb from '../assets/img2.webp';
import imgc from '../assets/img3.webp';
import imgd from '../assets/img4.webp';
import imge from  '../assets/chocolate.webp'
import imgf from  '../assets/img5.jpg';
import imgg from '../assets/img6.jpg';
import imgh from '../assets/img7.jpg';
import imgi from '../assets/img8.jpg';
import imgj from '../assets/img9.jpg';
import imgk from '../assets/img10.jpg';
import imgl from '../assets/img11.jpg';
import imgm from '../assets/img12.jpg';
import imgn from '../assets/img13.jpg';
import imgo from '../assets/img14.jpg';
import imgp from '../assets/img15.jpg';
import imgkq from '../assets/img16.jpg';
import imgr from '../assets/img17.jpg';
import imgs from '../assets/img18.jpg';
import imgt from '../assets/img19.jpg';
import imgu from '../assets/img20.jpg';
import imgv from '../assets/img21.jpg';
import imgw from '../assets/img22.jpg';
import imgx from '../assets/img23.jpg';
import imgy from '../assets/img24.jpg';




const cakePortfolios = [
  { id: 1, title: "Velvet Ganache", size: "md:col-span-4", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000" },
  { id: 2, title: "Summer Berry Stack", size: "md:col-span-8", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000" },
  { id: 3, title: "Golden Hour Citrus", size: "md:col-span-6", img: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000" },
  { id: 4, title: "Midnight Espresso", size: "md:col-span-6", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000" },
  {id : 5, title: "Tropical Delight", size: "md:col-span-4", img: imga },
  {id : 6, title: "Chocolate Cascade", size: "md:col-span-6", img: imgb },
  {id : 7, title: "Berry Bliss", size: "md:col-span-6", img: imgc },
  {id : 8, title: "Lemon Zest", size: "md:col-span-6", img: imgd },
  {id : 9, title: "Red Velvet Dream", size: "md:col-span-3", img: imge },
  {id: 10, title: "Anana", size: "md:col-span-6", img:imgf,},
   {id: 11, title: "Anana", size: "md:col-span-4", img:imgg},
    {id: 12, title: "Anana", size: "md:col-span-4", img:imgh},
     {id: 13, title: "Anana", size: "md:col-span-6", img:imgi},
      {id: 14, title: "Anana", size: "md:col-span-4", img:imgj},
       {id: 15, title: "Anana", size: "md:col-span-4", img:imgk},
        {id: 16, title: "Anana", size: "md:col-span-4", img:imgl},
        {id: 17, title: "Anana", size: "md:col-span-4", img:imgm},
        {id: 18, title: "Anana", size: "md:col-span-4", img:imgn},
        {id: 19, title: "Anana", size: "md:col-span-4", img:imgo},
        {id: 20, title: "Anana", size: "md:col-span-4", img:imgp},
        {id: 21, title: "Anana", size: "md:col-span-4", img:imgkq},
        {id: 22, title: "Anana", size: "md:col-span-4", img:imgr},

];

export const Gallery = () => {
  return (
    <div className="pt-32 pb-48 px-8 md:px-24 transition-colors duration-500 ">
      <Reveal>
        <h2 className="text-7xl font-serif text-bakery-crust mb-16 italic">The Collection</h2>
      </Reveal>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {cakePortfolios.map((cake) => (
          <motion.div
            key={cake.id}
            whileHover={{ scale: 0.98 }}
            className={`${cake.size} relative aspect-[16/10] overflow-hidden rounded-[2.5rem] group cursor-none`}
          >
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={cake.img} 
              alt={cake.title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-bakery-crust/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <p className="text-bakery-cream font-serif text-3xl italic">{cake.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};