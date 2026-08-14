/**
 * Curated, license-free stock photography (Unsplash CDN) used as realistic
 * placeholders for premium product/food photography. Swap for proprietary
 * shoots when available.
 */

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  heroBg: u("photo-1550989460-0adf9ea622e2", 1920, 75),
  mango: u("photo-1553279768-865429fa0078"),
  mangoCluster: u("photo-1601493700631-2b16ec4b4716"),
  strawberry: u("photo-1518635017498-87f514b751ba"),
  strawberrySingle: u("photo-1615397349754-cfa2066a298e"),
  guava: u("photo-1536511132770-e5058c7e8c46"),
  dragonFruit: u("photo-1527325678964-54921661f888"),
  broccoli: u("photo-1622206151226-18ca2c9ab4a1"),
  broccoliAlt: u("photo-1459411621453-7b03977f4bfc"),
  berriesMixed: u("photo-1563746098251-d35aef196e83"),
  kiwi: u("photo-1601412436009-d964bd02edbc"),
  tropicalMix: u("photo-1568702846914-96b305d2aaeb"),
  producePlatter: u("photo-1622483767028-3f66f32aef97"),
  iceCreamCone: u("photo-1497034825429-c343d7c6a68f"),
  iceCreamBowl: u("photo-1560008581-09826d1de69e"),
  juiceBottle: u("photo-1626200419199-391ae4be7a41"),
  bakeryBread: u("photo-1517248135467-4c7edcad34c4"),
  bakeryHands: u("photo-1556910103-1c02745aae4d"),
  restaurantTable: u("photo-1556742049-0cfed4f6a45d"),
  restaurantInterior: u("photo-1600585154340-be6161a56a0c"),
  cafeCounter: u("photo-1600880292203-757bb62b4baf"),
  coldStorage: u("photo-1587293852726-70cdb56c2866"),
  warehouse: u("photo-1601004890684-d8cbf643f5f2"),
  distributionBags: u("photo-1608686207856-001b95cf60ca"),
  marketStall: u("photo-1610832958506-aa56368176cf"),
  groceryShelf: u("photo-1587049633312-d628ae50a8ae"),
  handshake: u("photo-1600880292203-757bb62b4baf"),
  aboutFactory: u("photo-1587293852726-70cdb56c2866", 1400, 80),
} as const;

export type ImageKey = keyof typeof images;
