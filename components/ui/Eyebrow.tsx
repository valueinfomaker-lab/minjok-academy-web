import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  invert?: boolean;
  className?: string;
};

export function Eyebrow({ children, invert = false, className = "" }: Props) {
  const color = invert ? "text-brand-blue" : "text-brand-navy/70";
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.14em] ${color} ${className}`}
    >
      {children}
    </span>
  );
}
