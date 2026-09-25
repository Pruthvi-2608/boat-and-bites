import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Filter, X } from 'lucide-react';
import { menuCategories, MenuItem } from '../../data/menuData';

export const DigitalMenuGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((cat) => {
        // If a specific category is selected, only keep that category
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        // Filter items within category by search query
        const matchingItems = cat.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            item.name.toLowerCase().includes(query) ||
            (item.nameGu && item.nameGu.toLowerCase().includes(query)) ||
            cat.title.toLowerCase().includes(query)
          );
        });

        if (matchingItems.length === 0) return null;

        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalMatchingItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat: any) => acc + (cat?.items?.length || 0), 0);
  }, [filteredCategories]);

  return (
    <div className="max-w-6xl mx-auto mt-6 sm:mt-10 bg-white rounded-3xl border border-brand-border/80 p-5 sm:p-8 md:p-10 shadow-xl">
      {/* Top Search & Filter Bar - Mobile First Stacked Layout */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8 border-b border-brand-border/60">
        {/* Search input with quick clear */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dish (e.g. Sizzler, Biryani, Paneer, Mocktail)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-3 rounded-full bg-brand-cream border border-brand-border text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-orange transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-brand-sand text-brand-muted"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category selector dropdown */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-orange shrink-0 hidden sm:block" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-full bg-brand-cream border border-brand-border text-xs sm:text-sm font-sans text-brand-text focus:outline-none focus:border-brand-orange font-medium"
          >
            <option value="all">All 10 Categories</option>
            {menuCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Category Chips for Touch Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none border-b border-brand-border/40">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-brand-orange text-white shadow-sm'
              : 'bg-brand-cream text-brand-muted hover:text-brand-ink'
          }`}
        >
          All Items ({totalMatchingItems})
        </button>
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-brand-orange text-white shadow-sm'
                : 'bg-brand-cream text-brand-muted hover:text-brand-ink'
            }`}
          >
            {cat.title.split('&')[0].trim()}
          </button>
        ))}
      </div>

      {/* Comprehensive Long List of Menu Categories */}
      <div className="space-y-10 sm:space-y-12 mt-8">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-brand-muted font-sans text-sm">
            No dishes found matching "{searchQuery}".
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="block mx-auto mt-3 text-xs font-semibold text-brand-orange underline"
            >
              Reset Search & Filter
            </button>
          </div>
        ) : (
          filteredCategories.map((cat: any) => (
            <div key={cat.id} className="space-y-4">
              {/* Category Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-brand-orange/20 pb-3 gap-1">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-ink font-semibold">
                    {cat.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-sans text-brand-orange font-medium">
                    {cat.gujaratiTitle}
                  </span>
                </div>
                <span className="text-xs font-sans text-brand-muted font-medium bg-brand-cream px-3 py-1 rounded-full w-fit">
                  {cat.items.length} verified items
                </span>
              </div>

              {/* Items 2-column Grid (1-column on mobile, 2-column on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 sm:gap-y-4 pt-1">
                {cat.items.map((item: MenuItem) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-3 py-2.5 px-2 rounded-xl hover:bg-brand-cream/80 transition-colors border-b border-brand-border/30 md:border-b-0"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-serif text-base sm:text-lg text-brand-ink font-medium leading-snug">
                          {item.name}
                        </span>
                        {item.isSpecial && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-sans font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                            <Sparkles className="w-2.5 h-2.5 text-amber-600" /> Special
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-sans font-bold uppercase tracking-wider text-red-800 bg-red-100 px-1.5 py-0.5 rounded">
                            <Flame className="w-2.5 h-2.5 text-red-600" /> Spicy
                          </span>
                        )}
                      </div>
                      {item.nameGu && (
                        <p className="text-xs font-sans text-brand-muted mt-0.5">
                          {item.nameGu}
                        </p>
                      )}
                    </div>

                    {/* Price tag */}
                    <div className="font-sans font-bold text-brand-orange text-sm sm:text-base shrink-0 whitespace-nowrap pt-0.5">
                      ₹{item.price}/-
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer hint */}
      <div className="mt-12 pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-brand-muted gap-2 text-center sm:text-left">
        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
          100% Pure Vegetarian Kitchen
        </span>
        <span>All dishes prepared fresh to order at Anthem Circle</span>
      </div>
    </div>
  );
};
