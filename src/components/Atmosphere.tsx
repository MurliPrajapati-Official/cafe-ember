import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Atmosphere() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="w-full bg-cream">
      <div className="p-8 md:p-12 border-b-2 border-rich-black">
        <div className="text-xs uppercase tracking-[0.3em] text-stone mb-4 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-stone block"></span>
          Atmosphere
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-rich-black">A Day at Kuro</h2>
      </div>

      {/* Morning */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-rich-black bg-warm-white">
        <div className="lg:col-span-2 relative min-h-[400px] lg:h-[80vh] overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-rich-black">
          <motion.img 
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
            alt="Morning at Kuro"
            className="absolute inset-[-15%] w-[130%] h-[130%] object-cover opacity-90"
          />
        </div>
        <div className="lg:col-span-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.3em] text-coffee mb-6">07:00 — Morning</div>
          <h3 className="font-serif text-5xl md:text-6xl font-black leading-none mb-8 text-rich-black">Before<br/>the Rush</h3>
          <p className="font-sans text-stone leading-relaxed">
            The café opens at seven. The cardamom buns come out at six forty-five. There's usually a line by seven ten. Some regulars come before work, with their newspapers and their cortados, and don't say much at all. That's understood.
          </p>
        </div>
      </div>

      {/* Afternoon */}
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-warm-white">
        <div className="order-2 lg:order-1 lg:col-span-1 p-8 lg:p-16 flex flex-col justify-center border-t-2 lg:border-t-0 lg:border-r-2 border-rich-black">
          <div className="text-xs uppercase tracking-[0.3em] text-coffee mb-6">14:00 — Afternoon</div>
          <h3 className="font-serif text-5xl md:text-6xl font-black leading-none mb-8 text-rich-black">Golden<br/>Hour</h3>
          <p className="font-sans text-stone leading-relaxed">
            The light comes in from the west around two. The café empties just enough. Laptop workers settle in. The espresso machine slows its rhythm. This is when we pull the best shots — no rush, just craft.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-2 relative min-h-[400px] lg:h-[80vh] overflow-hidden">
          <motion.img 
            style={{ y: y2 }}
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
            alt="Afternoon at Kuro"
            className="absolute inset-[-15%] w-[130%] h-[130%] object-cover opacity-90 sepia"
          />
        </div>
      </div>
    </section>
  );
}
