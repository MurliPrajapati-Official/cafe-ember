import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-2, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [3, -5]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden pt-20 border-b-2 border-rich-black">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 bg-warm-white" />
      
      {/* Typography layer */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="absolute z-30 pointer-events-none flex flex-col items-center justify-center w-full"
      >
        <h1 className="font-serif text-[12vw] sm:text-[14vw] md:text-[16vw] font-black leading-none tracking-tighter text-rich-black drop-shadow-md [-webkit-text-stroke:2px_white] sm:[-webkit-text-stroke:4px_white] [paint-order:stroke_fill]">
          KURO
        </h1>
        <div className="flex gap-4 sm:gap-12 mt-4 text-sm sm:text-base tracking-[0.3em] uppercase font-black text-rich-black bg-warm-white/60 px-6 py-2 rounded-full backdrop-blur-md shadow-lg border border-white/50 [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]">
          <span>Oslo</span>
          <span>&times;</span>
          <span>Norway</span>
        </div>
      </motion.div>

      {/* Images Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto h-[70vh] sm:h-[80vh] flex items-center justify-center pointer-events-none">
        
        {/* Main tall image */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute left-4 sm:left-[10%] w-[45%] sm:w-[30%] aspect-[2/3] overflow-hidden border-2 border-rich-black shadow-xl"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
            alt="Coffee pouring"
            className="w-full h-full object-cover origin-bottom"
          />
          {/* Tape */}
          <div className="tape top-[-10px] left-[50%] ml-[-50px]" />
        </motion.div>

        {/* Small polaroid */}
        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute right-4 sm:right-[15%] top-[10%] w-[40%] sm:w-[25%] bg-warm-white p-3 sm:p-4 pb-12 sm:pb-16 border border-gray-200 shadow-2xl drop-shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" 
            alt="Croissant"
            className="w-full aspect-square object-cover"
          />
          <div className="absolute bottom-4 left-4 font-hand text-xl sm:text-2xl text-rich-black opacity-80">
            Fresh daily, 6:00 AM
          </div>
          <div className="tape top-[-10px] left-[20px]" />
        </motion.div>

        {/* Bottom overlapping image */}
        <motion.div 
          style={{ rotate: rotate1 }}
          className="absolute bottom-[-10%] sm:bottom-0 right-[20%] sm:right-[30%] w-[50%] sm:w-[35%] aspect-[4/3] overflow-hidden border-2 border-rich-black shadow-lg bg-rich-black"
        >
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full h-full"
           >
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee beans"
              className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
           </motion.div>
        </motion.div>
      </div>

      {/* Floating text element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-8 z-30 font-serif italic text-lg sm:text-xl text-rich-black max-w-[200px]"
      >
        Coffee. Pastries. Neighborhood.
      </motion.div>
    </section>
  );
}
