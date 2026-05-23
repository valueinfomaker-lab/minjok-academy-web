import { ReactNode } from "react";

type Props = {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
};

const SIZE: Record<"h1" | "h2" | "h3", string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]",
  h2: "text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]",
  h3: "text-xl md:text-2xl font-semibold leading-[1.3]",
};

export function Heading({ as = "h2", children, className = "" }: Props) {
  const Tag = as;
  return <Tag className={`${SIZE[as]} ${className}`}>{children}</Tag>;
}
