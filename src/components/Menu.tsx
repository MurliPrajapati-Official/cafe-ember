import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Coffee', 'Tea', 'Pastry'];

const menuItems = [
  { category: 'Coffee', name: 'Espresso', desc: 'Single shot, 20ml, bright and sharp', price: 'kr 35' },
  { category: 'Coffee', name: 'Double Espresso', desc: 'Ristretto pull, intense and sweet', price: 'kr 42' },
  { category: 'Coffee', name: 'Cortado', desc: 'Equal parts espresso and steamed milk', price: 'kr 48' },
  { category: 'Coffee', name: 'Flat White', desc: 'Double ristretto, silky microfoam', price: 'kr 52' },
  { category: 'Coffee', name: 'Café Latte', desc: 'Espresso, steamed milk, light foam', price: 'kr 54' },
  { category: 'Coffee', name: 'Cappuccino', desc: 'Classic dry, dusted with cocoa', price: 'kr 52' },
  { category: 'Coffee', name: 'Filter Coffee', desc: 'Pour-over V60, single origin daily', price: 'kr 45' },
  { category: 'Coffee', name: 'Cold Brew', desc: '18-hour steep, on tap, summer seasonal', price: 'kr 55' },
  
  { category: 'Tea', name: 'Matcha Latte', desc: 'Ceremonial grade, oat milk, light', price: 'kr 59' },
  { category: 'Tea', name: 'Chai Latte', desc: 'House-spiced masala, oat milk', price: 'kr 54' },
  { category: 'Tea', name: 'Hibiscus Latte', desc: 'Dried hibiscus, oat milk, house syrup', price: 'kr 62' },
  { category: 'Tea', name: 'Earl Grey', desc: 'Loose leaf, bergamot, steamed milk', price: 'kr 48' },
  { category: 'Tea', name: 'Golden Milk', desc: 'Turmeric, ginger, coconut milk, honey', price: 'kr 58' },
  { category: 'Tea', name: 'Sparkling Water', desc: 'Sparkling Voss, 500ml', price: 'kr 35' },
  
  { category: 'Pastry', name: 'Cardamom Bun', desc: 'Pearl sugar, cardamom, soft · Vegan', price: 'kr 38' },
  { category: 'Pastry', name: 'Cinnamon Roll', desc: 'Scandinavian style, cream cheese glaze', price: 'kr 42' },
  { category: 'Pastry', name: 'Almond Croissant', desc: 'Twice-baked, house frangipane', price: 'kr 45' },
  { category: 'Pastry', name: 'Kouign-Amann', desc: 'Laminated dough, caramelised sugar', price: 'kr 48' },
  { category: 'Pastry', name: 'Banana Bread', desc: 'Walnut, dark chocolate, gluten-free', price: 'kr 40' },
  { category: 'Pastry', name: 'Seasonal Cake', desc: 'Changes weekly — ask at the counter', price: 'kr 52' },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Group by category for display
  const grouped = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <section id="menu" className="w-full border-t-2 border-rich-black min-h-screen">
      <div className="w-full px-6 md:px-12 py-12 border-b-2 border-rich-black flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-cream">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-stone mb-2">Full Menu</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-rich-black">Everything We Make</h2>
        </div>
        
        <div className="flex flex-col xl:flex-row gap-4 w-full xl:w-auto">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap bg-warm-white border-l border-t border-rich-black">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-6 py-3 text-[10px] sm:text-xs uppercase tracking-widest border-r border-b border-rich-black whitespace-nowrap transition-colors flex-1
                  ${activeTab === cat ? 'bg-rich-black text-warm-white' : 'hover:bg-stone/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="Search menu..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-3 bg-warm-white border border-rich-black text-sm outline-none focus:ring-1 focus:ring-rich-black text-rich-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-rich-black border-b-2 border-rich-black">
        <AnimatePresence mode="popLayout">
          {Object.entries(grouped).map(([categoryName, items]) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={categoryName} 
              className="flex flex-col"
            >
              <div className="sticky top-[70px] bg-warm-white p-8 border-b-2 border-rich-black z-10">
                <h3 className="font-serif text-3xl font-bold text-rich-black">{categoryName}</h3>
              </div>
              <div className="flex-1 bg-warm-white">
                {items.map((item, i) => (
                  <div key={item.name} className={`p-8 hover:bg-cream transition-colors ${i !== items.length - 1 ? 'border-b border-rich-black/20' : ''}`}>
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h4 className="font-serif text-xl font-bold text-rich-black">{item.name}</h4>
                      <span className="font-serif text-xl whitespace-nowrap text-rich-black">{item.price}</span>
                    </div>
                    <p className="font-sans text-sm text-stone">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {Object.keys(grouped).length === 0 && (
          <div className="col-span-full p-24 text-center font-serif text-2xl text-stone bg-warm-white">
            No items found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
