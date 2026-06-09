// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin M. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "The Air Force 1s are exactly like the pictures. Very comfortable and delivery to Westlands was fast.",
    product: "Original Nike Air Force 1",
    profile: "https://picsum.photos/seed/kevin/150/150",
  },
  {
    id: 2,
    name: "Bedan B. – Kampala",
    location: "Kampala",
    rating: 5,
    text: "I ordered the premium tracksuit via WhatsApp and received it the next day. Great service!",
    product: "Exclusive Nike Premium Outfit",
    profile: "https://picsum.photos/seed/bedan/150/150",
  },
  {
    id: 3,
    name: "John K. – Kisumu",
    location: "Kisumu",
    rating: 5,
    text: "Good quality and the drip is clean. I will definitely order again. The sizing was perfect.",
    product: "Nike Store Full Drift Set",
    profile: "https://picsum.photos/seed/john/150/150",
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Kevin M.",
    location: "Nairobi",
    rating: 5,
    date: "2 weeks ago",
    text: "The quality exceeded my expectations. So comfortable for everyday wear and they look exactly like the pictures.",
    purchased: true,
    profile: "https://picsum.photos/seed/kevin/150/150",
  },
  {
    id: 2,
    name: "David O.",
    location: "Mombasa",
    rating: 4,
    date: "1 month ago",
    text: "Love the design and fast countrywide delivery. Fits perfectly.",
    purchased: true,
    profile: "https://picsum.photos/seed/david/150/150",
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100",
  "https://picsum.photos/seed/user2/100/100",
  "https://picsum.photos/seed/user3/100/100"
];

export const reviewStats = {
  averageRating: "4.8/5 Average Rating",
  totalCustomers: "10,000+ Happy Customers"
};