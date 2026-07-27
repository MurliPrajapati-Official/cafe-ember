import { motion } from 'motion/react';

export function SignatureProducts() {
  return (
    <section className="w-full border-y-2 border-rich-black bg-warm-white mt-12 md:mt-24">
      <div className="p-8 md:p-12 border-b-2 border-rich-black">
        <div className="text-xs uppercase tracking-[0.3em] text-stone mb-4 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-stone block"></span>
          Signature
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-rich-black">What We're Known For</h2>
      </div>

      {/* Item 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-rich-black min-h-[60vh] group">
        <div className="relative overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-rich-black h-[50vh] md:h-auto">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop"
            alt="The Oslo Flat White"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 md:p-20 flex flex-col justify-center bg-cream">
          <div className="font-serif text-6xl md:text-7xl font-bold mb-4 text-rich-black">
            <span className="text-3xl font-normal">kr</span> 59
          </div>
          <h3 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-8 text-rich-black">The Oslo<br/>Flat White</h3>
          <p className="text-xs uppercase tracking-widest text-stone leading-loose mb-12">
            Double ristretto · Steamed whole milk<br/>
            Ethiopian single origin · La Marzocco<br/>
            Pulled at 27 seconds · 92°C
          </p>
          <div className="flex flex-wrap gap-3">
            {['Caramel', 'Bergamot', 'Smooth', 'Balanced'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-rich-black text-[11px] uppercase tracking-[0.1em] hover:bg-rich-black hover:text-warm-white transition-colors cursor-default text-rich-black">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] group">
        <div className="order-2 md:order-1 p-12 md:p-20 flex flex-col justify-center bg-warm-white">
          <div className="font-serif text-6xl md:text-7xl font-bold mb-4 text-rich-black">
            <span className="text-3xl font-normal">kr</span> 42
          </div>
          <h3 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-8 text-rich-black">Cardamom<br/>Skolebolle</h3>
          <p className="text-xs uppercase tracking-widest text-stone leading-loose mb-12">
            Slow-fermented dough · House cardamom blend<br/>
            Norwegian pearl sugar · Baked 6:00 daily<br/>
            Best before noon
          </p>
          <div className="flex flex-wrap gap-3">
            {['Warm Spice', 'Floral', 'Soft', 'Sweet'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-rich-black text-[11px] uppercase tracking-[0.1em] hover:bg-rich-black hover:text-warm-white transition-colors cursor-default text-rich-black">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 relative overflow-hidden border-b-2 md:border-b-0 md:border-l-2 border-rich-black h-[50vh] md:h-auto">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
            alt="Cardamom Bun"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
