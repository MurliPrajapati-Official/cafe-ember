export function Footer() {
  return (
    <footer id="visit" className="w-full bg-rich-black text-warm-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-warm-white/20 border-b-2 border-warm-white/20">
        
        {/* Map area (using image instead of iframe for better editorial look) */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden grayscale contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Map location"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border border-warm-white/50 backdrop-blur-md bg-rich-black/50 p-6 flex flex-col items-center">
              <span className="font-serif text-2xl font-bold">Kuro Oslo</span>
              <span className="text-xs uppercase tracking-widest mt-2">Grünerløkka</span>
            </div>
          </div>
        </div>

        {/* Info area */}
        <div className="p-12 sm:p-24 flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-16">Find Us</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone mb-4">Address</div>
                <div className="font-serif text-2xl leading-relaxed">
                  Grünerløkka<br/>
                  India
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone mb-4">Opening Hours</div>
                <ul className="space-y-3 font-sans text-sm">
                  <li className="flex justify-between border-b border-warm-white/10 pb-2">
                    <span className="text-warm-white/60">Mon - Fri</span>
                    <span>07:00 – 19:00</span>
                  </li>
                  <li className="flex justify-between border-b border-warm-white/10 pb-2">
                    <span className="text-warm-white/60">Saturday</span>
                    <span>08:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between border-b border-warm-white/10 pb-2 text-brand-light">
                    <span>Sunday</span>
                    <span>08:00 – 17:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-warm-white/20 pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div className="font-serif text-4xl font-black tracking-widest">KURO</div>
            <div className="flex gap-8 text-xs uppercase tracking-widest text-warm-white/60">
              <a href="#" className="hover:text-warm-white transition-colors">Instagram</a>
              <a href="mailto:hello@kuro.oslo" className="hover:text-warm-white transition-colors">hello@kuro.oslo</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center text-xs uppercase tracking-[0.2em] text-warm-white/40">
        © {new Date().getFullYear()} Kuro Oslo. All rights reserved.
      </div>
    </footer>
  );
}
