'use client'
import React, { useEffect, useState } from 'react';
import { LucideArrowUpRight, LucideX, LucideChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Industry {
  name: string;
}

const industries: Industry[] = [
  { name: 'Law Firms' }, { name: 'Commercial Cleaning' },
  { name: 'Medical Clinics' }, { name: 'Restaurant Design' },
  { name: 'Flooring Companies' }, { name: 'Fire Suppression' },
  { name: 'Roofing Companies' }, { name: 'Auto Glass' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative z-[120]">
      <nav className="relative z-[120] flex items-center px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
          <div className="h-8 flex items-center justify-center">
            <Image
              src="/Logo.svg"
              alt="Logo"
              className="w-full h-full object-contain"
              width={120}
              height={100}
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <ul className="hidden lg:flex items-center gap-8 text-[15px] text-gray-400">
            <li className="hover:text-emerald-600 cursor-pointer transition-colors">Case Studies</li>

            <li
              className="relative group cursor-pointer py-2"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 hover:text-white transition-colors">
                Industries <LucideChevronDown size={14} />
              </div>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-2xl mt-2 grid grid-cols-2 gap-4"
                  >
                    {industries.map((item) => (
                      <div key={item.name} className="text-gray-400 hover:text-white transition-colors py-1">{item.name}</div>
                    ))}
                    <div className="col-span-2 mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                      <p className="text-xs text-gray-500">Didn not find your business category?</p>
                      <button className="bg-white/5 px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:bg-white/10">
                        Find Out if You Qualify <LucideArrowUpRight size={12} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              Resources <LucideChevronDown size={14} />
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
          </ul>

          <button className="hidden lg:flex items-center gap-2 bg-white/15 border border-white/10 px-6 py-2 rounded-lg text-md font-medium hover:bg-white/10 transition-all active:scale-95 text-white">
            <Phone size={17} />
            <span>Talk to Us</span>
          </button>

          {!isMobileMenuOpen && (
            <button
              className="lg:hidden z-[130] p-2 text-white rounded-md focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={false}
              aria-controls="mobile-menu-panel"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8L4 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 16L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}          
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[115] bg-[#050505] px-6 pt-6 pb-8 flex flex-col lg:hidden md:px-12"
          >
            <div className="flex h-10 items-center justify-end">
              <button
                className="inline-flex items-center rounded-md px-2 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu "
              >
                <LucideX size={28} />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              {['Case Studies', 'Industries', 'Resources', 'Testimonials', 'FAQ'].map((item) => (
                <button
                  key={item}
                  className="text-left text-2xl font-bold border-b border-white/10 pb-4 flex justify-between items-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item} <LucideChevronDown size={30} className="text-gray-500" />
                </button>
              ))}
            </div>

            <button
              className="mt-10 w-full bg-emerald-500 text-black py-4 rounded-xl font-bold active:scale-[0.98] transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Speak to an Expert
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
