import { RestaurantInfo } from '../types';

export const restaurantData: RestaurantInfo = {
  name: "Boat & Bites",
  tagline: "Gujarat's First Cruise & Boat Theme Restaurant",
  subTagline: "This boat doesn’t move, but the food will move you.",
  description: "Surat's landmark dining destination celebrating authentic flavours, pure vegetarian culinary craft, and scenic cruise ambiance. From gourmet sizzlers to biryanis, tandoor specials, and handcrafted mocktails.",
  address: {
    line: "Anthem Circle, New Outer Ring Road",
    landmark: "Saniya Hemad / Valak",
    city: "Surat",
    state: "Gujarat",
    pincode: "395006",
    full: "Anthem Circle, New Outer Ring Road, Saniya Hemad / Valak, Surat, Gujarat 395006"
  },
  phones: [
    "+91 99746 15111",
    "+91 99258 92727"
  ],
  instagram: {
    handle: "boatandbites_surat",
    url: "https://www.instagram.com/boatandbites_surat/"
  },
  hours: {
    lunch: "11:00 AM - 3:00 PM",
    dinner: "6:30 PM - 11:00 PM",
    display: "Daily: 11:00 AM - 3:00 PM & 6:30 PM - 11:00 PM"
  },
  banquet: {
    indoorCapacity: "300 to 600 Guests",
    outdoorCapacity: "700 to 1,000+ Guests",
    description: "Versatile indoor hall with elegant seating and an expansive open-air lawn area for grand weddings, receptions, milestones, and corporate celebrations."
  },
  specialOffer: {
    title: "Unlimited Lunch Feast",
    price: "₹350/-",
    description: "Unlimited culinary joy every single day during lunch hours (11:00 AM - 3:00 PM)."
  },
  cuisine: "100% Pure Vegetarian Multi-Cuisine",
  googleMapsUrl: "https://maps.google.com/?q=Boat+%26+Bites+Restaurant+Anthem+Circle+Surat"
};
