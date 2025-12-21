import { motion } from 'framer-motion';
/* Import the specific icons from Lucide */
import { Instagram, Facebook, Twitter, Mail, ExternalLink } from 'lucide-react';
import{  BsWhatsapp,BsTiktok } from 'react-icons/bs';

export const Footer = ({ onOpenLegal }) => {
  return (
    <footer className="bg-bakery-crust py-24 px-12 md:px-24 text-bakery-cream rounded-t-[4rem]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand & Contact Info */}
        <div className="max-w-sm text-left">
          <motion.h5 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif italic mb-8"
          >
            Visit ANANA-Bakers.
          </motion.h5>
          <div className="space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] leading-loose opacity-60">
            <p>Embu,Kenya</p>
            <p>mon—sat: 07:00 — 16:00</p>
            <div className="flex items-center gap-2">
               <Mail size={12} />
               <span>cakes@ananabackers.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Follow</span>
            <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-left">
              <li>
                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-3">
                  <Instagram size={14} strokeWidth={1.5} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-3">
                  <Facebook size={14} strokeWidth={1.5} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-3">
                  <Facebook size={14} strokeWidth={1.5} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-3">
                  <BsTiktok size={14} strokeWidth={1.5} />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/254716700151?text=Hi, I want to order a cake"
      target="_blank"
      rel="noopener noreferrer" className="hover:opacity-50 transition-opacity flex items-center gap-3">
                  <BsWhatsapp size={14} strokeWidth={1.5} />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6 text-left">Information</h4>
            <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-left">
              <li>
                <button onClick={onOpenLegal} className="hover:opacity-50 transition-opacity uppercase cursor-pointer flex items-center gap-3">
                  <ExternalLink size={12} opacity={0.5} />
                  <span>Privacy</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenLegal} className="hover:opacity-50 transition-opacity uppercase cursor-pointer flex items-center gap-3">
                  <ExternalLink size={12} opacity={0.5} />
                  <span>Terms</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 text-center md:text-left">
        <span>© 2025 ANANA-BACKERS.</span>
        <div className="flex gap-8">
          <span>Sculpted with patience</span>
          <span className="hidden md:inline">●</span>
          <span>Naturally Crafted</span>
        </div>
      </div>
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 text-center md:text-left">
      built by<a href="https://pattin-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Pattin</a> 
       </div>
    </footer>
  );
};