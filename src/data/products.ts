import { images } from "./images";

export type ProductCategory =
  | "Frozen Fruit Pulps"
  | "Frozen Fruit Slices"
  | "Frozen Vegetables"
  | "Fruit Crushes"
  | "Jams & Spreads"
  | "Bulk & Industrial";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  packSizes: string[];
}

export const categories: ProductCategory[] = [
  "Frozen Fruit Pulps",
  "Frozen Fruit Slices",
  "Frozen Vegetables",
  "Fruit Crushes",
  "Jams & Spreads",
  "Bulk & Industrial",
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const raw: Omit<Product, "id">[] = [
  // Frozen Fruit Pulps
  { name: "Alphonso Mango Pulp", category: "Frozen Fruit Pulps", description: "The king of mangoes — rich, saffron-gold pulp with an unmistakable aroma.", image: images.mango, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Kesar Mango Pulp", category: "Frozen Fruit Pulps", description: "Fragrant, deep-orange pulp prized for its distinctive saffron notes.", image: images.mangoCluster, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Raw Mango Pulp", category: "Frozen Fruit Pulps", description: "Tangy green mango pulp, perfect for chutneys, panna and beverages.", image: images.rawMango, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Jamun Pulp", category: "Frozen Fruit Pulps", description: "Deep purple, antioxidant-rich Java plum pulp with a distinctive tang.", image: images.berriesMixed, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Strawberry Pulp", category: "Frozen Fruit Pulps", description: "Bright, naturally sweet strawberry pulp locked in at peak ripeness.", image: images.strawberry, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Red Guava Pulp", category: "Frozen Fruit Pulps", description: "Blushing pink pulp with a floral aroma and smooth texture.", image: images.guava, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "White Guava Pulp", category: "Frozen Fruit Pulps", description: "Delicately sweet, aromatic pulp from farm-fresh white guavas.", image: images.whiteGuava, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Chikoo Pulp", category: "Frozen Fruit Pulps", description: "Naturally caramel-sweet sapodilla pulp, malty and rich.", image: images.chikoo, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Custard Apple Pulp", category: "Frozen Fruit Pulps", description: "Creamy, grainy-sweet sitaphal pulp — a dessert favourite.", image: images.custardApple, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Dragon Fruit Pulp", category: "Frozen Fruit Pulps", description: "Vivid, subtly sweet pulp packed with antioxidants.", image: images.dragonFruit, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Fig Pulp", category: "Frozen Fruit Pulps", description: "Honeyed, jammy fig pulp with delicate seed texture.", image: images.figWhole, packSizes: ["1kg", "5kg", "20kg"] },

  // Frozen Fruit Slices
  { name: "Whole Strawberry", category: "Frozen Fruit Slices", description: "IQF whole strawberries — frozen within hours of harvest.", image: images.strawberrySingle, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Strawberry Slices", category: "Frozen Fruit Slices", description: "Uniform strawberry slices for desserts, bakery and beverages.", image: images.strawberryHalved, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Mango Cubes", category: "Frozen Fruit Slices", description: "Hand-cut Alphonso mango cubes, individually quick frozen.", image: images.mangoCubesGlass, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Dragon Fruit Slices", category: "Frozen Fruit Slices", description: "Elegant magenta-fleshed slices for premium plating.", image: images.dragonFruitHalved, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Fig Slices", category: "Frozen Fruit Slices", description: "Delicate fig slices, frozen to retain natural sweetness.", image: images.figSliced, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Red Guava Slices", category: "Frozen Fruit Slices", description: "Crisp, blush-pink guava slices with vibrant colour retention.", image: images.guavaHalvedBowl, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "White Guava Slices", category: "Frozen Fruit Slices", description: "Fragrant white guava slices, IQF for maximum freshness.", image: images.guavaHalvedPlate, packSizes: ["1kg", "2.5kg", "10kg"] },
  { name: "Chikoo Slices", category: "Frozen Fruit Slices", description: "Naturally sweet sapodilla slices, frozen at peak ripeness.", image: images.chikoo, packSizes: ["1kg", "2.5kg", "10kg"] },

  // Frozen Vegetables
  { name: "Green Peas", category: "Frozen Vegetables", description: "Farm-fresh green peas, blanched and flash frozen for sweetness.", image: images.greenPeasPods, packSizes: ["1kg", "5kg", "20kg"] },
  { name: "Broccoli Florets", category: "Frozen Vegetables", description: "Vitamin-rich broccoli florets, frozen within hours of harvest.", image: images.broccoli, packSizes: ["1kg", "5kg", "20kg"] },

  // Fruit Crushes
  { name: "Mango Crush", category: "Fruit Crushes", description: "Concentrated, ready-to-mix mango crush for beverages.", image: images.mangoSmoothie, packSizes: ["1L", "5L", "20L"] },
  { name: "Jamun Crush", category: "Fruit Crushes", description: "Rich jamun crush, perfect for sherbets and mocktails.", image: images.berriesMixed, packSizes: ["1L", "5L", "20L"] },

  // Jams & Spreads
  { name: "Mango Jam", category: "Jams & Spreads", description: "Small-batch mango jam made with real fruit, no artificial colour.", image: images.apricotJamJar, packSizes: ["250g", "1kg"] },
  { name: "Strawberry Jam", category: "Jams & Spreads", description: "Classic strawberry jam — chunky, fruity and naturally sweet.", image: images.strawberryJamJar, packSizes: ["250g", "1kg"] },
  { name: "Fig Jam", category: "Jams & Spreads", description: "Gourmet fig jam with a rich, honeyed depth of flavour.", image: images.figSliced, packSizes: ["250g", "1kg"] },
  { name: "Guava Jam", category: "Jams & Spreads", description: "Aromatic guava jam crafted from farm-fresh fruit.", image: images.berriesJar, packSizes: ["250g", "1kg"] },
  { name: "Dragon Fruit Jam", category: "Jams & Spreads", description: "Vivid, lightly sweet spread with a striking colour.", image: images.dragonFruit, packSizes: ["250g", "1kg"] },
  { name: "Jamun Jam", category: "Jams & Spreads", description: "Deep, tangy-sweet jamun jam rich in antioxidants.", image: images.cranberryJamJar, packSizes: ["250g", "1kg"] },
  { name: "Mixed Fruit Jam", category: "Jams & Spreads", description: "A balanced blend of seasonal fruits in every spoonful.", image: images.mixedBerryJamJar, packSizes: ["250g", "1kg"] },

  // Bulk & Industrial
  { name: "Bulk Mango Pulp", category: "Bulk & Industrial", description: "Industrial-grade Alphonso mango pulp for large-scale manufacturing.", image: images.distributionBags, packSizes: ["5kg", "20kg"] },
  { name: "Bulk Mixed Fruit Pulp", category: "Bulk & Industrial", description: "Custom-blended fruit pulp for beverage and dairy manufacturers.", image: images.warehouse, packSizes: ["5kg", "20kg"] },
];

export const products: Product[] = raw.map((p) => ({ id: slug(p.name), ...p }));
