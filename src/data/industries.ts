import {
  FaUtensils,
  FaHotel,
  FaMugHot,
  FaBlender,
  FaIceCream,
  FaBreadSlice,
  FaWineBottle,
  FaIndustry,
  FaTruck,
  FaGlobeAmericas,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Industry {
  name: string;
  icon: IconType;
  description: string;
}

export const industries: Industry[] = [
  { name: "Restaurants", icon: FaUtensils, description: "Consistent, chef-ready frozen fruit & veg for busy kitchens." },
  { name: "Hotels", icon: FaHotel, description: "Reliable bulk supply for hospitality groups and resorts." },
  { name: "Cafés", icon: FaMugHot, description: "Premium pulps and crushes for beverages and desserts." },
  { name: "Juice Bars", icon: FaBlender, description: "Vibrant, high-yield pulps for fresh juice and smoothie menus." },
  { name: "Ice Cream Manufacturers", icon: FaIceCream, description: "Flavour-true fruit inputs for artisanal and industrial gelato." },
  { name: "Bakeries", icon: FaBreadSlice, description: "Fruit fillings, slices and jams for pastries and confections." },
  { name: "Beverage Companies", icon: FaWineBottle, description: "Concentrated crushes and pulps for large-scale bottling." },
  { name: "Food Processing Units", icon: FaIndustry, description: "Bulk, spec-consistent inputs for FMCG production lines." },
  { name: "Distributors", icon: FaTruck, description: "Cold-chain reliable supply for regional distribution networks." },
  { name: "Exporters", icon: FaGlobeAmericas, description: "Export-grade packaging and documentation for global trade." },
];
