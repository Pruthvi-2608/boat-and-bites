export interface MediaItem {
  id: string;
  src: string;
  type: 'image' | 'video';
  source: 'dataset' | 'menu' | 'restaurant';
  title: string;
  caption?: string;
  date?: string;
  url?: string;
  category: 'vessel' | 'daynight' | 'atmosphere' | 'table' | 'menu' | 'reels';
}

export const MEDIA_MANIFEST: MediaItem[] = [
  // Physical Menu Folder Pages (10 authentic pages)
  {
    id: 'menu-0',
    src: '/menu/unnamed.webp',
    type: 'image',
    source: 'menu',
    title: 'Mocktails & Artisanal Floats',
    category: 'menu',
  },
  {
    id: 'menu-1',
    src: '/menu/unnamed (1).webp',
    type: 'image',
    source: 'menu',
    title: 'Basmati Ka Khazana & Sizzlers',
    category: 'menu',
  },
  {
    id: 'menu-2',
    src: '/menu/unnamed (2).webp',
    type: 'image',
    source: 'menu',
    title: 'Punjabi & Royal Paneer Craft',
    category: 'menu',
  },
  {
    id: 'menu-3',
    src: '/menu/unnamed (3).webp',
    type: 'image',
    source: 'menu',
    title: 'Tandoor Speciaities & Starters',
    category: 'menu',
  },
  {
    id: 'menu-4',
    src: '/menu/unnamed (4).webp',
    type: 'image',
    source: 'menu',
    title: 'Chinese Wok & Noodles',
    category: 'menu',
  },
  {
    id: 'menu-5',
    src: '/menu/unnamed (5).webp',
    type: 'image',
    source: 'menu',
    title: 'Artisanal Pasta & Continental',
    category: 'menu',
  },
  {
    id: 'menu-6',
    src: '/menu/unnamed (6).webp',
    type: 'image',
    source: 'menu',
    title: 'Soup & Fresh Salad Cellar',
    category: 'menu',
  },
  {
    id: 'menu-7',
    src: '/menu/unnamed (7).webp',
    type: 'image',
    source: 'menu',
    title: 'Indian Breads & Roti Tokri',
    category: 'menu',
  },
  {
    id: 'menu-8',
    src: '/menu/unnamed (8).webp',
    type: 'image',
    source: 'menu',
    title: 'Desserts & Ice Cream Delights',
    category: 'menu',
  },
  {
    id: 'menu-9',
    src: '/menu/unnamed (9).webp',
    type: 'image',
    source: 'menu',
    title: 'Chef Special Sizzler Platters',
    category: 'menu',
  },

  // Vessel Architecture & Day/Night Photos
  {
    id: 'vessel-night',
    src: '/cruise-sketch-detailed.png',
    type: 'image',
    source: 'restaurant',
    title: 'Illuminated Vessel Night Architecture',
    caption: 'The majestic boat hull lit up against the Surat night sky, reflecting warm golden lights across the waterfront.',
    category: 'vessel',
  },
  {
    id: 'vessel-day',
    src: '/cruise-sketch.jpg',
    type: 'image',
    source: 'restaurant',
    title: 'Daytime Deck Atmosphere',
    caption: 'Sunlit decks and open-air views at Anthem Circle, Surat.',
    category: 'daynight',
  },

  // Food Table Highlights
  {
    id: 'dish-paneer',
    src: '/dishes/dish1.png',
    type: 'image',
    source: 'restaurant',
    title: 'Royal Paneer Shashlik Sizzler',
    caption: 'Flame-seared paneer cubes with chargrilled peppers and signature makhani gravy.',
    category: 'table',
  },
  {
    id: 'dish-feast',
    src: '/dishes/dish2.png',
    type: 'image',
    source: 'restaurant',
    title: 'Unlimited Pure Veg Feast',
    caption: 'Complete 7-course pure veg feast served fresh every day during lunch hours.',
    category: 'table',
  },
  {
    id: 'dish-sizzler',
    src: '/dishes/dish3.png',
    type: 'image',
    source: 'restaurant',
    title: 'Sizzling Platter & Rainbow Shooters',
    caption: 'Sizzling hot platter paired with 6 artisanal rainbow mocktail shooters.',
    category: 'table',
  },
  {
    id: 'dish-curry',
    src: '/dish-curry-original.png',
    type: 'image',
    source: 'restaurant',
    title: 'Chef Handcrafted Handi Gravy',
    caption: 'Rich aromatic gravy prepared with authentic Indian spices.',
    category: 'table',
  },
];
