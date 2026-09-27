import React from 'react';
import { motion } from 'framer-motion';

const STORY_STEPS = [
  {
    step: '01',
    title: "Gujarat's First Boat Theme Dining",
    desc: 'Conceived as a landmark dining destination bringing authentic cruise aesthetics to Anthem Circle, Surat.',
  },
  {
    step: '02',
    title: '100% Pure Vegetarian Excellence',
    desc: 'Crafted multi-cuisine menu featuring gourmet sizzlers, basmati biryani, tandoor delights, and artisanal mocktails.',
  },
  {
    step: '03',
    title: 'Daily Unlimited Lunch Feast @ ₹350/-',
    desc: 'Creating joyful family memories every day with our signature unlimited feast served from 11:00 AM to 3:00 PM.',
  },
];

export const Story: React.FC = () => {
  return (
    <section id="story" className="w-full bg-[#FAF8F3] text-[#171717] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            09 / OUR STORY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#101820]">
            The Journey Of <span className="italic text-[#F0822A]">The Vessel</span>
          </h2>
        </div>

        {/* Timeline Along Vertical Wave Path */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#F0822A]/30 space-y-10">
          {STORY_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative space-y-2"
            >
              {/* Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#F0822A] border-4 border-[#FAF8F3] shadow-md" />

              <span className="font-mono text-xs text-[#F0822A] font-bold tracking-widest uppercase">
                {item.step} · CHAPTER
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#101820]">
                {item.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#6F6A63] font-light max-w-xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
