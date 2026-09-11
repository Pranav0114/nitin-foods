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
  strawberrySingle: u("photo-1770325929620-711e3a6824b1"),
  guava: u("photo-1536511132770-e5058c7e8c46"),
  dragonFruit: u("photo-1527325678964-54921661f888"),
  broccoli: u("photo-1459411621453-7b03977f4bfc"),
  berriesMixed: u("photo-1563746098251-d35aef196e83"),
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

  // Factory gallery
  factoryProcessingLine: u("photo-1651525670054-279c154bc3b6", 1400, 80),
  factoryPackaging: u("photo-1762330018258-2cf9b8f80618", 1400, 80),
  factoryWorkers: u("photo-1663841365335-8acab127bf68", 1400, 80),
  factoryExterior: u("photo-1776173061215-591c39279596", 1400, 80),

  // Founder section (symbolic farm imagery — not an actual photo of the founder)
  founderJourney: u("photo-1499529112087-3cb3b73cec95", 1200, 80),

  // Product photography — one distinct image per product, sourced to match
  // the actual fruit/vegetable shown (see products.ts for assignment)
  rawMango: u("photo-1623497718131-46ace0d4d707"),
  whiteGuava: u("photo-1629367308496-a2496ba22f88"),
  guavaHalvedBowl: u("photo-1600659090872-74ca5ca1023a"),
  guavaHalvedPlate: u("photo-1629367309270-1e6b8a303630"),
  chikoo: u("photo-1562753205-f8d7672e5eaa"),
  custardApple: u("photo-1757281096705-a4685c3c2057"),
  dragonFruitHalved: u("photo-1676630034207-5e6e627420d9"),
  figWhole: u("photo-1635341814161-d696d538542c"),
  figSliced: u("photo-1633932850276-4382027c868a"),
  greenPeasPods: u("photo-1780667162311-3cdba0716533"),
  mangoCubesGlass: u("photo-1644204010805-90a62ab0bdc9"),
  strawberryHalved: u("photo-1558384405-c6c80d532134"),
  mangoSmoothie: u("photo-1623065422902-30a2d299bbe4"),
  strawberryJamJar: u("photo-1500912239908-4ee48acb3a7f"),
  apricotJamJar: u("photo-1757489345191-07ea9f17a0a1"),
  cranberryJamJar: u("photo-1753775290598-05fb7f911ac2"),
  mixedBerryJamJar: u("photo-1633084426862-3a8c25aa7ce5"),
  berriesJar: u("photo-1686343963534-d4ec4af73cc2"),
} as const;

export type ImageKey = keyof typeof images;
