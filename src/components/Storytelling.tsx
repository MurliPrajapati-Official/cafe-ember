import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Storytelling() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative w-full py-24 sm:py-40 bg-rich-black text-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left text */}
        <div className="order-2 md:order-1 flex flex-col items-start relative z-20">
          <div className="text-xs uppercase tracking-[0.3em] text-stone mb-8 border-b border-stone/30 pb-2">
            The Craft
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-none mb-8">
            Light roast.<br/>Heavy focus.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-warm-white/80 max-w-md leading-relaxed mb-12">
            We stop at 195°C — just past first crack — to keep the origin character intact. Never dark, never bitter. Always bright.
          </p>

          <div className="relative p-6 border border-warm-white/20 bg-warm-white/5 backdrop-blur-sm transform rotate-[-2deg]">
            <div className="tape top-[-10px] left-[50%] ml-[-50px] bg-warm-white/20 mix-blend-overlay" />
            <p className="font-hand text-2xl">
              "If it's not right, we pull again. That's the only standard we have."
            </p>
            <p className="font-sans text-xs uppercase tracking-widest mt-4 opacity-50">
              Barista note, 08:30 AM
            </p>
          </div>
        </div>

        {/* Right images */}
        <div className="order-1 md:order-2 relative h-[600px] w-full">
          <motion.div 
            style={{ y: img1Y }}
            className="absolute top-0 right-0 w-[80%] aspect-[3/4] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop" 
              alt="Barista at work"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </motion.div>
          
          <motion.div 
            style={{ y: img2Y }}
            className="absolute bottom-12 left-0 w-[60%] aspect-square border-4 border-warm-white p-2 bg-warm-white shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
              alt="Cafe interior"
              className="w-full h-full object-cover"
            />
            <div className="tape top-[-10px] right-[-20px] rotate-[45deg]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
