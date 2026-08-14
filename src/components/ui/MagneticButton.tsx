import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-gold text-forest-dark hover:bg-gold-light shadow-[0_10px_30px_-8px_rgba(230,179,37,0.6)]",
  secondary:
    "bg-forest text-cream hover:bg-emerald shadow-[0_10px_30px_-8px_rgba(11,93,59,0.5)]",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10",
};

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        type={!href ? type : undefined}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 cursor-pointer",
          variants[variant],
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
