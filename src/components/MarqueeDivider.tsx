import { motion } from 'motion/react';

export function MarqueeDivider() {
  return (
    <div className="w-full py-10 md:py-16 border-b-2 border-rich-black overflow-hidden flex items-center bg-warm-white z-10 relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
      >
        <div className="flex gap-12 md:gap-24 items-center">
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Specialty Coffee</span>
          <span className="text-coffee text-4xl">·</span>
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Scandinavian Pastries</span>
          <span className="text-coffee text-4xl">·</span>
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Grünerløkka Oslo</span>
          <span className="text-coffee text-4xl">·</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-12 md:gap-24 items-center">
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Specialty Coffee</span>
          <span className="text-coffee text-4xl">·</span>
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Scandinavian Pastries</span>
          <span className="text-coffee text-4xl">·</span>
          <span className="font-serif text-5xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '1px var(--color-rich-black)' }}>Grünerløkka Oslo</span>
          <span className="text-coffee text-4xl">·</span>
        </div>
      </motion.div>
    </div>
  );
}
