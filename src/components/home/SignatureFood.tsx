import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Flame, Sparkles, UtensilsCrossed } from 'lucide-react';
import { menuCategories } from '../../data/menuData';

export const SignatureFood: React.FC = () => {
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
    <section id="food" className="py-20 md:py-28 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From The Kitchen"
          title="Curated Signatures & Crowd Favourites"
          description="Crafted with pure vegetarian passion, our kitchen presents sizzling platters, aromatic curries, and handcrafted refreshments."
          className="mb-14 md:mb-18"
        />

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-brand-border/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card visual frame */}
              <div className="relative h-48 bg-brand-sand/40 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Floating badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-ink/80 backdrop-blur-md text-white text-[11px] font-sans font-medium uppercase tracking-wider">
                  {item.badge}
                </span>
                {/* Price tag */}
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-sans font-bold shadow-sm">
                  ₹{item.price}/-
                </span>
              </div>

              {/* Card info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-brand-wave-blue block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-brand-ink font-medium leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-orange font-medium mt-0.5 mb-3">
                    {item.nameGu}
                  </p>
                  <p className="font-sans text-xs md:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs font-sans text-brand-muted">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                    100% Pure Veg
                  </span>
                  <a
                    href="#menu"
                    className="text-brand-orange hover:underline font-semibold"
                  >
                    View in Menu →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unlimited Lunch Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-ink via-brand-ink-soft to-brand-ink text-white rounded-3xl p-8 md:p-10 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-brand-orange text-white shrink-0 mt-1">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-brand-orange font-semibold block mb-1">
                Daily Lunchtime Special
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal">
                Unlimited Lunch Feast at Just ₹350/-
              </h3>
              <p className="text-xs md:text-sm font-sans text-brand-cream/70 mt-1 max-w-xl">
                More food, more joy, and unmatched pure vegetarian variety. Available every day between 11:00 AM and 3:00 PM at Boat & Bites Surat.
              </p>
            </div>
          </div>

          <a
            href="tel:+919974615111"
            className="shrink-0 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md"
          >
            Reserve For Lunch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
