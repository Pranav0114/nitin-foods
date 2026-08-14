export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohan Mehta",
    role: "Executive Chef",
    company: "Coastal Grove Hotels",
    quote:
      "Nitin Foods' mango pulp tastes like the fruit was cut this morning. Our dessert menu has never been more consistent across properties.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    role: "Founder",
    company: "Pulp & Co. Juice Bars",
    quote:
      "We switched our entire smoothie line to their frozen pulps. The colour, yield and flavour consistency is unmatched at this price point.",
    rating: 5,
  },
  {
    name: "Vikram Sondhi",
    role: "Procurement Head",
    company: "Frostline Ice Creams",
    quote:
      "Reliable bulk supply, always on schedule, always within spec. Nitin Foods has become a dependable extension of our production line.",
    rating: 5,
  },
  {
    name: "Sarah D'Souza",
    role: "Bakery Owner",
    company: "The Fig & Fern Patisserie",
    quote:
      "Their fig and strawberry slices hold their shape beautifully in our tarts. Export-quality packaging makes storage effortless too.",
    rating: 5,
  },
];
