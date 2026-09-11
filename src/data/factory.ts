import { images } from "./images";

export interface FactoryPhoto {
  image: string;
  caption: string;
}

export const factoryGallery: FactoryPhoto[] = [
  { image: images.factoryProcessingLine, caption: "Fruit processing line" },
  { image: images.factoryPackaging, caption: "Hygienic packaging" },
  { image: images.factoryWorkers, caption: "Careful, quality-focused production" },
  { image: images.factoryExterior, caption: "Our manufacturing facility" },
  { image: images.coldStorage, caption: "Cold storage warehouse" },
  { image: images.warehouse, caption: "Ready for dispatch" },
];
