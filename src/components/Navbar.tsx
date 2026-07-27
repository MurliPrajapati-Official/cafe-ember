import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b-2 
      ${scrolled ? 'bg-warm-white/90 backdrop-blur-md py-4 border-rich-black' : 'bg-transparent py-8 border-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-black tracking-[0.2em] uppercase text-rich-black">
          Kuro
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-rich-black">
          <a href="#menu" className="hover:opacity-50 transition-opacity">Menu</a>
          <a href="#story" className="hover:opacity-50 transition-opacity">Story</a>
          <a href="#visit" className="hover:opacity-50 transition-opacity">Visit</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
        </div>
        <button className="md:hidden text-xs uppercase tracking-widest">Menu</button>
      </div>
    </nav>
  );
}
