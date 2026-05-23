import { ReactNode } from "react";

type Tone = "white" | "beige" | "blue-soft" | "navy";

type Props = {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  /** narrow container for forms/single-column */
  narrow?: boolean;
  /** disable default vertical padding (for hero) */
  flush?: boolean;
};

const TONES: Record<Tone, string> = {
  white: "bg-surface text-ink",
  beige: "bg-brand-beige-soft text-ink",
  "blue-soft": "bg-brand-blue-soft text-ink",
  navy: "bg-brand-navy text-ink-invert",
};

export function Section({
  id,
  tone = "white",
  children,
  className = "",
  narrow = false,
  flush = false,
}: Props) {
  const padding = flush ? "" : "py-20 md:py-28 lg:py-32";
  const maxW = narrow ? "max-w-3xl" : "max-w-6xl";
  return (
    <section id={id} className={`${TONES[tone]} ${padding} ${className}`}>
      <div className={`mx-auto ${maxW} px-6 md:px-8`}>{children}</div>
    </section>
  );
}
