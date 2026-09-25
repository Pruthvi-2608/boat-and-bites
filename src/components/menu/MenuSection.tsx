import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { MenuSlider } from './MenuSlider';
import { DigitalMenuGrid } from './DigitalMenuGrid';
import { Layers, Sparkles, LayoutGrid, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carousel' | 'signatures' | 'directory'>('carousel');

  // Verified signature items directly from the physical menu
  const signatureItems = [
    {
      name: "Paneer Shashlik Sizzler",
      nameGu: "પનીર શાસ્લીક સીઝલર",
      price: 840,
      category: "Basmati Ka Khazana & Sizzlers",
      description: "Char-grilled marinated paneer cubes sizzled over fresh vegetables, aromatic butter rice, and house sauce.",
      image: "/menu/unnamed (1).webp",
      badge: "Chef Special"
    },
    {
      name: "6 Rainbow Shooters",
      nameGu: "૬ રેઇનબો શૂટર",
      price: 210,
      category: "Mocktails & Floats",
      description: "Six vibrant, handcrafted layered fruit mocktails served in chilled shooter glasses.",
      image: "/menu/unnamed.webp",
      badge: "House Signature"
    },
    {
      name: "Tawa Ka Chawal",
      nameGu: "તવા કા ચાવલ",
      price: 340,
      category: "Basmati Ka Khazana",
      description: "Spiced aromatic basmati rice tossed on a live tawa with garden vegetables, served with chilled Boondi Raita.",
      image: "/menu/unnamed (1).webp",
      badge: "Must Try"
    },
    {
      name: "B&B Special Noodles",
      nameGu: "બી એન્ડ બી સ્પેશીયલ નુડલ્સ",
      price: 305,
      category: "Chinese & Tandoor",
      description: "Signature wok-tossed noodles with exotic bell peppers, crunchy greens, and house seasoning.",
      image: "/menu/unnamed (3).webp",
      badge: "Popular"
    },
    {
      name: "Jafrani Kofta",
      nameGu: "જાફરાની કોફતા",
      price: 365,
      category: "Subzi Mandi Se",
      description: "Delicate paneer and vegetable dumplings simmered in a saffron-infused royal gravy.",
      image: "/menu/unnamed (5).webp",
      badge: "Signature Gravy"
    },
    {
      name: "Baked Macaroni & Pineapple",
      nameGu: "બેક્ડ મેકરોની એન્ડ પાઇનેપલ",
      price: 485,
      category: "International Specialities",
      description: "Tender macaroni with sweet pineapple chunks baked to golden perfection with rich mozzarella crust.",
      image: "/menu/unnamed (6).webp",
      badge: "Continental"
    }
  ];

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Culinary Deck"
          title="Authentic Cruise Menu & Signature Bites"
          description="Explore our complete 10-page cruise-boat shaped menu cards with 5-second automatic sliding, signature chef highlights, and a searchable dish directory."
          className="mb-8 sm:mb-10"
        />

        {/* Unified Tab Switcher - Mobile-First Scrollable/Pill layout */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-brand-sand/70 border border-brand-border shadow-sm max-w-full overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('carousel')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === 'carousel'
                  ? 'bg-brand-ink text-white shadow-md'
                  : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
              <span>Cruise Cards Carousel</span>
            </button>

            <button
              onClick={() => setActiveTab('signatures')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === 'signatures'
                  ? 'bg-brand-ink text-white shadow-md'
                  : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
              <span>Signature Bites</span>
            </button>

            <button
              onClick={() => setActiveTab('directory')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === 'directory'
                  ? 'bg-brand-ink text-white shadow-md'
                  : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
              <span>Searchable Directory</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 5-Second Cruise Menu Carousel */}
        {activeTab === 'carousel' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MenuSlider />
          </motion.div>
        )}

        {/* Tab 2: Signature Bites Showcase */}
        {activeTab === 'signatures' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-10 sm:space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {signatureItems.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-border/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-44 sm:h-48 bg-brand-sand/40 overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-ink/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-sans font-bold shadow-sm">
                      ₹{item.price}/-
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider text-brand-wave-blue block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-brand-ink font-medium leading-tight">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-brand-orange font-medium mt-0.5 mb-2.5">
                        {item.nameGu}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs font-sans text-brand-muted">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                        100% Pure Veg
                      </span>
                      <button
                        onClick={() => setActiveTab('carousel')}
                        className="text-brand-orange hover:underline font-semibold"
                      >
                        View in Cruise Card →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Daily Unlimited Lunch Callout inside Menu */}
            <div className="bg-gradient-to-r from-brand-ink via-brand-ink-soft to-brand-ink text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-brand-orange text-white shrink-0 mt-1">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-sans tracking-widest text-brand-orange font-semibold block mb-1">
                    Daily Lunchtime Special
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal">
                    Unlimited Lunch Feast at Just ₹350/-
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-brand-cream/70 mt-1 max-w-xl">
                    More food, more joy, and unmatched pure vegetarian variety. Available daily between 11:00 AM and 3:00 PM at Boat & Bites Surat.
                  </p>
                </div>
              </div>

              <a
                href="tel:+919974615111"
                className="w-full sm:w-auto shrink-0 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md text-center"
              >
                Reserve For Lunch
              </a>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Searchable Item Directory */}
        {activeTab === 'directory' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DigitalMenuGrid />
          </motion.div>
        )}
      </div>
    </section>
  );
};
