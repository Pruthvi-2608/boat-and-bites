import React from 'react';
import { motion } from 'framer-motion';

const TABLE_HIGHLIGHTS = [
  {
    id: 1,
    name: 'Royal Paneer Shashlik Sizzler',
    category: 'CHEF SPECIAL',
    image: '/dishes/dish1.png',
    price: '₹340',
    desc: 'Flame-seared cottage cheese skewers served on a sizzling hot plate with buttered rice & signature gravy.',
  },
  {
    id: 2,
    name: 'Unlimited Pure Veg Feast',
    category: 'SIGNATURE LUNCH',
    image: '/dishes/dish2.png',
    price: '₹350/-',
    desc: 'Complete 7-course feast served unlimited every day from 11:00 AM to 3:00 PM.',
  },
  {
    id: 3,
    name: '6 Rainbow Mocktail Shooters',
    category: 'ARTISANAL DRINKS',
    image: '/dishes/dish3.png',
    price: '₹210',
    desc: 'Vibrant handcrafted shooter selection featuring blue surfer, kiwi colada, and tropical sunburst.',
  },
  {
    id: 4,
    name: 'Hyderabadi Dum Biryani',
    category: 'BASMATI KHAZANA',
    image: '/dish-curry-original.png',
    price: '₹310',
    desc: 'Long-grain basmati rice dum-cooked with aromatic Indian spices, saffron, and fresh vegetables.',
  },
];

export const Table: React.FC = () => {
  return (
    <section id="table" className="w-full bg-[#FAF8F3] text-[#171717] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            05 / THE TABLE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#101820]">
            Flavours That <span className="italic text-[#F0822A]">Move You</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6F6A63] font-light leading-relaxed">
            100% Pure Vegetarian Multi-Cuisine prepared fresh with authentic ingredients.
          </p>
        </div>

        {/* Food Index Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TABLE_HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-[#EEE8DC] shadow-md flex flex-col sm:flex-row gap-5 items-center group"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1.5 text-left flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#F0822A] tracking-widest uppercase font-semibold">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#101820] bg-[#FAF8F3] px-2.5 py-0.5 rounded-full border border-stone-200">
                    {item.price}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#101820] uppercase leading-tight">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-[#6F6A63] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
