// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "SNEAKERS",
    slug: "sneakers",
    label: "Trending Now",
    image: "/NIKE AIR FORCE 1.jpg",
    span: "md:col-span-2",
  },
  {
    name: "PREMIUM OUTFITS",
    slug: "premium-outfits",
    label: "Best Sellers",
    image: "public/FULL NIKE DRIP pink.jpg",
    span: "md:col-span-2",
  },
];

export const heroCategories = categories.slice(0, 5);

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' },
  { id: 'best-sellers', label: '⭐ Best Sellers', context: 'Best Sellers' },
  { id: 'just-dropped', label: '🆕 Just Dropped', context: 'New Arrivals' },
  { id: 'premium-drip', label: '💎 Premium Drip', context: 'Premium Collection' },
  { id: 'running', label: '🏃‍♂️ Running', context: 'Athletic Shoes' },
];

export const filterCategories = ['All', 'Sneakers', 'Outfits', 'Running', 'Air Force', 'Jordans'];

export const searchSuggestions = ['Trending Sneakers', 'Air Force 1', 'Premium Tracksuits', 'Air Jordan 11', 'Alphafly 3'];

export const navSearchSuggestions = ['Sneakers', 'Outfits', 'New Arrivals'];

export const navLinksData = [
  { label: "Shop All", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false },
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true },
];

export const priceRanges = ['Under 15,000', '15,000 - 25,000', 'Over 25,000'];

export const filterSizes = ['39', '40', '41', '42', '43', '44', '45'];