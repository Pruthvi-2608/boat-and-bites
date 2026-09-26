import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Anchor, Utensils, Heart } from 'lucide-react';

interface VoyageStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  targetId: string;
}

const VOYAGE_STEPS: VoyageStep[] = [
  {
    id: 'place',
    number: '01',
    title: 'THE PLACE',
    subtitle: 'Riverfront Deck & Sunset Serenade',
    icon: Compass,
    targetId: 'about',
  },
  {
    id: 'craft',
    number: '02',
    title: 'THE CRAFT',
    subtitle: 'Authentic Flavors & Culinary Passion',
    icon: Anchor,
    targetId: 'craft',
  },
  {
    id: 'table',
    number: '03',
    title: 'THE TABLE',
    subtitle: 'Unlimited Feast & Grand Menu',
    icon: Utensils,
    targetId: 'menu',
  },
  {
    id: 'memories',
    number: '04',
    title: 'THE MEMORIES',
    subtitle: 'Celebrations & Guest Stories',
    icon: Heart,
    targetId: 'reels',
  },
];

export function VoyagePath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const boatX = useTransform(scrollYProgress, [0.1, 0.85], ['5%', '92%']);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="reative bg-brand-cream border-y border-brand-ink/10 py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              THE BOAT IS THE GUIDE
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ink font-bold tracking-tight">
            Your Voyage Through Boat &amp; Bites
          </h2>
          <p className="text-brand-muted text-sm md:text-base mt-2 font-sans">
            Scroll to sail through our waterfront story, from sunset decks to table feasts.
          </p>
        </div>

        <div className="relative my-8 md:my-12">
          <div className="relative w-full h-20 md:h-28 flex items-center justify-center">
            <svg
              className="w-full h-full text-brand-purple/20"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="none">
              <path
                d="M0,90 Q250,10 500,50 T1000,50"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <motion.path
                d="M0,50 Q250,10 500,50 T1000,50"
                stroke="#F0822A"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -mt-6 z-20 pointer-events-none"
              style={{ left: boatX }}
            >
              <div className="bg-brand-orange text-white p-2.5 rounded-full shadow-lg border-2 border-white flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 15.5C4 15.5 6 14.5 9 14.5C12 14.5 14 15.5 14 15.5C14 158 16 14.5 19 14.5C21 14.5 22 15 22 15L20.5 19.5C20.2 20.4 19.4 21 18.5 21H5.5C4.6 21 3.8 20.4 3.5 19.5L2 15C2 15 3 14.5 4 15.5Z" />
                  <path
                    d="M12 2V14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path d="M12 3L18 9H12V3Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
            {VOYAGE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToSection(step.targetId)}
                  className="group text-left bg-white/80 hover:bg-white backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-brand-ink/10 hover:border-brand-orange/40 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl md:text-2xl font-bold text-brand-orange">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-brand-cream group-hover:bg-brand-orange/10 text-brand-ink group-hover:text-brand-orange transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base md:text-lg inline-block font-bold text-brand-ink group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-muted mt-1 leading-snug">
                    {step.subtitle}
                  </p>
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  </section>
);
}
