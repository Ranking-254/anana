import { Reveal } from './reveal';

export const MenuSection = () => (
  <section id="menu" className="py-48 px-12 md:px-24">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-center">
      <div className="md:col-span-7">
        <Reveal width="100%">
          <a href="#inquiry" className="block aspect-[4/5] rounded-[3.5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
            <div 
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
            <div className="absolute bottom-16 left-16 text-white">
               <h3 className="text-6xl font-serif italic mb-4">Signature Chocolate</h3>
               <span className="font-mono uppercase text-[10px] tracking-widest bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                 Inquire for Custom Order
               </span>
            </div>
          </a>
        </Reveal>
      </div>
      
      <div className="md:col-span-5 flex flex-col justify-center gap-16">
        <Reveal width="100%">
          <div className="p-16 bg-white/50 backdrop-blur-xl rounded-[3rem] border border-bakery-crust/5 shadow-2xl">
            <h4 className="text-3xl font-serif text-bakery-crust mb-12">Studio Favorites</h4>
            <ul className="space-y-8 font-mono text-[10px] uppercase tracking-widest opacity-80">
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Passion Fruit Cake</span>
                <span>$9.50</span>
              </li>
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Lemon Meringue Cake</span>
                <span>$8.00</span>
              </li>
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Black Forest Mini</span>
                <span>$12.00</span>
              </li>
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Zesty Lemon Cake</span>
                <span>$12.00</span>
              </li>
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Strawberry Bliss</span>
                <span>$15.00</span>
              </li>
              <li className="flex justify-between border-b border-bakery-crust/10 pb-4">
                <span>Chocolate Fudge Cake</span>
                <span>$17.00</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);