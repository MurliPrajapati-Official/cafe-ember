import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Cardamom Skolebolle',
    price: 'kr 42',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    tag: 'Baked at 6:00 AM'
  },
  {
    id: 2,
    name: 'The Oslo Flat White',
    price: 'kr 52',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
    tag: 'House Favorite'
  },
  {
    id: 3,
    name: 'Matcha Latte',
    price: 'kr 59',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop',
    tag: 'Ceremonial Grade'
  }
];

export function TodaysCounter() {
  return (
    <section className="w-full border-y-2 border-rich-black bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y-2 md:divide-y-0 md:divide-x-2 divide-rich-black">
        
        {/* Intro column */}
        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-stone mb-4">Today's Counter</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-rich-black">Fresh<br/>Out of<br/>the Oven.</h2>
          </div>
          <div className="font-hand text-2xl text-coffee mt-12">
            Grab them before they're gone.
          </div>
        </div>

        {/* Product columns */}
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="md:col-span-3 group relative cursor-pointer flex flex-col"
          >
            <div className="absolute top-4 left-4 z-10 bg-warm-white px-3 py-1 text-[10px] uppercase tracking-widest border border-rich-black">
              {product.tag}
            </div>
            <div className="h-[300px] md:h-[400px] w-full overflow-hidden border-b-2 border-rich-black">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 bg-warm-white group-hover:bg-rich-black group-hover:text-warm-white transition-colors duration-300">
              <h3 className="font-serif text-xl font-bold mb-2">{product.name}</h3>
              <div className="font-sans text-sm mt-auto opacity-70 flex justify-between items-center pt-8">
                <span>{product.price}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Add +</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
