import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white" | "white-outline";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  href: string;
  children: ReactNode;
  className?: string;
  /** for href that is external — opens new tab */
  external?: boolean;
  ariaLabel?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 will-change-transform";

const SIZES: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm md:text-base",
  lg: "h-14 px-8 text-base md:text-lg",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-navy text-white shadow-md hover:bg-brand-navy-dark hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
  secondary:
    "bg-white text-brand-navy border border-brand-navy/20 hover:bg-brand-beige-soft hover:-translate-y-0.5 hover:border-brand-navy/40",
  ghost: "text-brand-navy hover:bg-brand-blue-soft",
  white:
    "bg-white text-brand-navy shadow-sm hover:bg-brand-blue-soft hover:-translate-y-0.5 hover:shadow-md",
  "white-outline":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70",
};

export function Button({
  variant = "primary",
  size = "lg",
  href,
  children,
  className = "",
  external = false,
  ariaLabel,
}: Props) {
  const cls = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
