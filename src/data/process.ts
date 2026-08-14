import {
  FaLeaf,
  FaTint,
  FaCogs,
  FaSnowflake,
  FaClipboardCheck,
  FaWarehouse,
  FaBoxOpen,
  FaShippingFast,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: IconType;
}

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Fresh Harvest", description: "Fruits and vegetables sourced from trusted farms at peak ripeness.", icon: FaLeaf },
  { step: "02", title: "Cleaning", description: "Rigorous washing and sorting to remove impurities and defects.", icon: FaTint },
  { step: "03", title: "Processing", description: "Precision cutting, pulping and grading under hygienic conditions.", icon: FaCogs },
  { step: "04", title: "Flash Freezing", description: "IQF technology locks in nutrients, colour and flavour instantly.", icon: FaSnowflake },
  { step: "05", title: "Quality Inspection", description: "Multi-point checks against food safety and export standards.", icon: FaClipboardCheck },
  { step: "06", title: "Cold Storage", description: "Maintained at -18°C in a fully monitored cold-chain facility.", icon: FaWarehouse },
  { step: "07", title: "Packaging", description: "Export-ready, tamper-proof packaging in custom pack sizes.", icon: FaBoxOpen },
  { step: "08", title: "Distribution", description: "Temperature-controlled logistics to your doorstep, on time.", icon: FaShippingFast },
];
