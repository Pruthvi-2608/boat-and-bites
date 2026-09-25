export interface RestaurantInfo {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  address: {
    line: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: string[];
  instagram: {
    handle: string;
    url: string;
  };
  hours: {
    lunch: string;
    dinner: string;
    display: string;
  };
  banquet: {
    indoorCapacity: string;
    outdoorCapacity: string;
    description: string;
  };
  specialOffer: {
    title: string;
    price: string;
    description: string;
  };
  cuisine: string;
  googleMapsUrl: string;
}

export interface MenuItem {
  name: string;
  nameGu?: string;
  price: number;
  description?: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  gujaratiTitle: string;
  cardImage: string;
  badge?: string;
  items: MenuItem[];
}

export interface MenuPage {
  index: number;
  id: string;
  title: string;
  gujaratiTitle: string;
  image: string;
  itemCount: number;
  featuredDishes: string[];
}

export interface InstagramReel {
  id: string;
  shortCode: string;
  url: string;
  displayUrl: string;
  videoUrl: string;
  caption: string;
  likes: number;
  views: number;
  timestamp: string;
  tags?: string[];
}

export interface InstagramPhoto {
  id: string;
  shortCode: string;
  url: string;
  displayUrl: string;
  caption: string;
  likes: number;
  timestamp: string;
}
