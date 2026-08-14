import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function Counter({ target, suffix = "", label }: CounterProps) {
  const { ref, value } = useCountUp(target);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-4xl font-bold text-forest-dark sm:text-5xl">
        {value.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-1 text-sm font-medium text-ink/55">{label}</p>
    </div>
  );
}
