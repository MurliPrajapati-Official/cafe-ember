import { motion } from 'motion/react';

interface Props {
  quote: string;
  author: string;
  spacing?: string;
  align?: 'left' | 'right' | 'center';
  backgroundImage?: string;
  theme?: 'light' | 'dark';
}

export function EditorialQuote({ quote, author, spacing = "py-24", align = "left", backgroundImage, theme = "light" }: Props) {
  const isDark = theme === 'dark';

  return (
    <section className={`relative w-full px-6 sm:px-12 md:px-24 ${spacing} overflow-hidden ${isDark ? 'bg-rich-black' : ''}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0 bg-rich-black">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 filter grayscale"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-rich-black/30" />
        </div>
      )}
      <div className={`relative z-10 max-w-5xl mx-auto flex flex-col ${align === 'right' ? 'items-end text-right' : align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`font-sans text-xs tracking-[0.2em] uppercase mb-8 border-b pb-2 inline-block ${isDark ? 'text-warm-white/70 border-warm-white/20' : 'text-stone border-rich-black/20'}`}
        >
          Words from our guests
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={`font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-medium tracking-tight ${isDark ? 'text-warm-white' : 'text-rich-black'}`}
        >
          "{quote}"
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`font-hand text-2xl sm:text-3xl mt-8 ${isDark ? 'text-warm-white/80' : 'text-coffee'}`}
        >
          — {author}
        </motion.p>
      </div>
    </section>
  );
}

