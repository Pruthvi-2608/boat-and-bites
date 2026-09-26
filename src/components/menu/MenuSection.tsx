import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const MENU_CATEGORIES = [
  {
    id: "unlimited-feast",
    name: "Unlimited Feast",
    cardCode: "Cards 01",
    subtitle: "Pure Veg Unlimited Lunch & Dinner @ ₹350/-",
    dishes: [
      {
        name: "Unlimited Pure Veg Dining Feast",
        price: "₹350/-",
        description: "Unlimited starters, subzi mandi specialties, live tawa rice, Indian breads, dal, and ice cream desserts.",
        badge: "UNLIMITED FEAST",
        image: "/menu/unnamed.webp"
      },
      {
        name: "Weekend Special Cruise Thali",
        price: "₹350/-",
        description: "Chef's weekend menu featuring royal paneer gravy, mocktail shooters, and freshly baked garlic naan.",
        badge: "WEEKEND SPECIAL",
        image: "/menu/unnamed (1).webp"
      }
    ]
  },
  {
    id: "signatures",
    name: "Signature Bites",
    cardCode: "Cards 02 – 04",
    subtitle: "Handcrafted Chef Specialties",
    dishes: [
      {
        name: "Paneer Shashlik Sizzler",
        price: "₹840/-",
        description: "Char-grilled paneer sizzled over fresh buttered vegetables and aromatic basmati rice.",
        badge: "SIGNATURE SIZZLER",
        image: "/menu/unnamed (3).webp"
      },
      {
        name: "B&B Special Noodles",
        price: "₹305/-",
        description: "Signature wok-tossed noodles with colorful bell peppers, crunchy greens, and house spices.",
        badge: "POPULAR",
        image: "/menu/unnamed (4).webp"
      }
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails & Floats",
    cardCode: "Cards 05 – 06",
    subtitle: "Chilled Refreshing Cruise Beverages",
    dishes: [
      {
        name: "6 Rainbow Shooters",
        price: "₹210/-",
        description: "Six vibrant, layered fruit mocktail shooters served over crushed ice.",
        badge: "MUST TRY",
        image: "/menu/unnamed (1).webp"
      },
      {
        name: "Hawaiian Blue Surfer",
        price: "₹240/-",
        description: "Cool ocean blue curaçao blended with pineapple juice and coconut cream.",
        badge: "HOUSE FAVORITE",
        image: "/menu/unnamed.webp"
      }
    ]
  },
  {
    id: "subzi-mandi",
    name: "Subzi Mandi & Gravies",
    cardCode: "Cards 07 – 08",
    subtitle: "Royal Indian Curries",
    dishes: [
      {
        name: "Jafrani Kofta",
        price: "₹365/-",
        description: "Delicate paneer dumplings simmered in a saffron-infused rich royal gravy.",
        badge: "ROYAL GRAVY",
        image: "/menu/unnamed (5).webp"
      },
      {
        name: "Paneer Tikka Masala",
        price: "₹380/-",
        description: "Clay-oven roasted paneer cubes tossed in rich tomato and cashew gravy.",
        badge: "CHEF SPECIAL",
        image: "/menu/unnamed (7).webp"
      }
    ]
  },
  {
    id: "italian-continental",
    name: "Italian & International",
    cardCode: "Cards 09 – 10",
    subtitle: "Baked Delicacies & Pastas",
    dishes: [
      {
        name: "Baked Macaroni & Pineapple",
        price: "₹485/-",
        description: "Tender macaroni with sweet pineapple chunks baked with golden mozzarella crust.",
        badge: "CONTINENTAL",
        image: "/menu/unnamed (6).webp"
      },
      {
        name: "Boat & Bite Dry Paneer",
        price: "₹340/-",
        description: "Crispy starter paneer cubes tossed with wok peppers and aromatic herbs.",
        badge: "STARTER",
        image: "/menu/unnamed (8).webp"
      }
    ]
  }
];

export function MenuSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = MENU_CATEGORIES[activeCategoryIndex];

  return (
    <section id="menu" className="w-full bg-[#FAF4F3] text-[#101820] py-28 px-4 md:px-8 relative overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Editorial Section Header (Cocova Style: "Cooked with love, served on deck.") */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F0822A] tracking-widest uppercase">
            <Utensils className="w-4 h-4" />
            <span>THE CULINARY DECK</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#101820]">
            Cooked with love, <br />
            <span className="italic text-[#F0822A]">served on deck.</span>
          </h2>
          <p className="text-sm md:text-base text-[#101820]/75 font-sans font-light max-w-xl">
            Take the long way through our handcrafted offerings. Pure Veg Unlimited Feast @ ₹350/-, authentic sizzlers, mocktails, and royal gravies.
          </p>
        </div>

        {/* Category Pills (Cocova Menu Pill Bar Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {MENU_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-3 rounded-full text-xs font-sans font-semibold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 shadow-sm ${
                idx === activeCategoryIndex
                  ? 'bg-[#101820] text-white shadow-md'
                  : 'bg-white text-[#101820]/70 hover:text-[#101820] border border-[#101820]/10'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] opacity-60 font-mono">({cat.cardCode})</span>
            </button>
          ))}
        </div>

        {/* Active Category Cards Stage (Cocova Editorial Menu Card Style) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Category Header Bar */}
            <div className="flex items-center justify-between border-b border-[#101820]/10 pb-4">
              <span className="text-xs font-mono uppercase text-[#F0822A] tracking-widest font-semibold">
                0{activeCategoryIndex + 1} &#8226; {activeCategory.name.toUpperCase()} &#8226; {activeCategory.cardCode}
              </span>
              <span className="text-sm font-serif italic text-[#101820]/60">
                {activeCategory.subtitle}
              </span>
            </div>

            {/* Menu Dish Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeCategory.dishes.map((dish, i) => (
                <div
                  key={dish.name}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-[#101820]/10 shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group hover:border-[#F0822A]/40 transition-all duration-300"
                >
                  {/* Left Details */}
                  <div className="space-y-3 flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#101820] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                      {dish.badge}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#101820]">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#101820]/75 font-sans font-light leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="pt-2 text-xl font-bold font-mono text-[#F0822A]">
                      {dish.price}
                    </div>
                  </div>

                  {/* Right Floating Dish Cutout Image */}
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#FAF4F3] border border-[#101820]/10 p-2 shadow-md shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.src = '/cruise-sketch.jpg';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Bottom Reservation Callout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between bg-[#101820] text-[#FAF4F3] p-8 rounded-3xl shadow-xl gap-6">
          <div>
            <h3 className="font-serif text-2xl font-light">
              Ready to dine aboard Surat's finest cruise deck?
            </h3>
            <p className="text-xs font-mono text-[#F0822A] uppercase tracking-wider mt-1">
              Unlimited Pure Veg Feast @ ₹350/- • Lunch &amp; Dinner Daily
            </p>
          </div>
          <a
            href="tel:+919974615111"
            className="inline-flex items-center gap-3 bg-[#F0822A] hover:bg-[#d9711c] text-white px-7 py-4 rounded-full text-sm font-mono font-semibold uppercase tracking-wider transition-all transform hover:scale-105 shadow-md shadow-[#F0822A]/30 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>RESERVE TABLE</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default MenuSection;
