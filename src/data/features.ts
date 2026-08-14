import {
  FaSnowflake,
  FaSeedling,
  FaBan,
  FaHandsWash,
  FaThermometerQuarter,
  FaMedal,
  FaBoxes,
  FaGlobe,
  FaTruckLoading,
  FaBoxOpen,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export const features: Feature[] = [
  { title: "Frozen Fresh", description: "Locked-in freshness within hours of harvest.", icon: FaSnowflake },
  { title: "Natural Goodness", description: "100% real fruit and vegetables, nothing artificial.", icon: FaSeedling },
  { title: "No Preservatives", description: "Purity preserved by freezing, not chemicals.", icon: FaBan },
  { title: "Hygienically Processed", description: "Handled under strict food-safety protocols.", icon: FaHandsWash },
  { title: "Stored at -18°C", description: "Consistent deep-freeze cold chain, end to end.", icon: FaThermometerQuarter },
  { title: "Trusted Quality", description: "Consistent grading across every single batch.", icon: FaMedal },
  { title: "Bulk Supply", description: "Reliable volumes for large-scale operations.", icon: FaBoxes },
  { title: "Export Packaging", description: "International-standard, tamper-evident packaging.", icon: FaGlobe },
  { title: "Reliable Cold Chain", description: "Temperature-monitored from factory to doorstep.", icon: FaTruckLoading },
  { title: "Custom Packaging", description: "Flexible pack sizes tailored to your business.", icon: FaBoxOpen },
];
