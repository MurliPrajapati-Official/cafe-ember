import { motion } from 'motion/react';

export function MapLocation() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 md:px-24 bg-warm-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-stone font-sans text-xs tracking-[0.2em] uppercase mb-8 border-b border-rich-black/20 pb-2 inline-block"
        >
          Find Us
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-rich-black text-center mb-16 tracking-tight"
        >
          Kuro Cafe
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full h-[50vh] min-h-[400px] border border-gray-200 shadow-xl overflow-hidden bg-warm-white relative flex flex-col items-center justify-center text-center p-8"
        >
          <p className="font-serif text-2xl font-medium text-rich-black mb-2">Come visit us</p>
          <p className="text-stone mb-8">Find us across India on Google Maps.</p>
          <a
            href="https://www.google.com/maps/place/India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-rich-black text-warm-white rounded-full font-sans text-sm tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Open in Google Maps
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-rich-black/70 font-sans font-medium"
        >
          <p>Kuro Cafe</p>
          <p>India</p>
        </motion.div>
      </div>
    </section>
  );
}
