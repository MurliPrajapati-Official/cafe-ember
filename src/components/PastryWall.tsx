import { motion } from 'motion/react';

export function PastryWall() {
  const pastries = [
    { name: "Almond Croissant", price: "45", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
    { name: "Cinnamon Roll", price: "42", img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/3]" },
    { name: "Kouign-Amann", price: "48", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
    { name: "Banana Bread", price: "40", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
  ];

  return (
    <section className="w-full bg-rich-black text-warm-white py-24 sm:py-32 border-b-2 border-warm-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-serif text-5xl md:text-7xl font-bold">The Bakery</h2>
          <span className="font-hand text-2xl md:text-3xl text-warm-white/70">Baked fresh, every morning</span>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {pastries.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden break-inside-avoid border border-warm-white/10 bg-warm-white/5"
            >
              <div className={`w-full ${p.aspect} overflow-hidden`}>
                <img 
                  src={p.img} 
                  alt={p.name}
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="font-serif text-2xl font-bold">{p.name}</div>
                <div className="text-xs uppercase tracking-widest mt-2 text-warm-white/80">kr {p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
