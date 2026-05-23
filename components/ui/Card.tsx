import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "default" | "tight" | "loose" | "none";
};

const PAD: Record<NonNullable<Props["padding"]>, string> = {
  none: "",
  tight: "p-5 md:p-6",
  default: "p-6 md:p-8",
  loose: "p-8 md:p-10",
};

export function Card({
  children,
  className = "",
  hover = true,
  padding = "default",
}: Props) {
  const hoverCls = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-line-strong"
    : "";
  return (
    <div
      className={`rounded-2xl border border-line bg-white shadow-sm ${PAD[padding]} ${hoverCls} ${className}`}
    >
      {children}
    </div>
  );
}
