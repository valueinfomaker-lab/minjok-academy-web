"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { REVIEWS } from "@/lib/data";

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <Section id="reviews" tone="beige">
      <FadeIn className="text-center">
        <Eyebrow>Parents Voice</Eyebrow>
        <Heading as="h2" className="mt-3 text-brand-navy">
          학부모님의 이야기
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
          아이의 변화가 가장 큰 증명입니다.
        </p>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12 md:mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm md:p-8">
                  <Quote
                    size={28}
                    className="text-brand-blue"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="flex-1 text-base leading-relaxed text-ink-soft md:text-lg">
                    {r.body}
                  </p>
                  <p className="text-sm font-semibold text-brand-navy">
                    — {r.author}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-navy transition hover:bg-brand-blue-soft"
            aria-label="이전 후기"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-1.5" role="tablist">
            {REVIEWS.map((_, i) => (
              <span
                key={i}
                aria-current={i === selectedIndex}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-6 bg-brand-navy"
                    : "w-1.5 bg-line-strong"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-navy transition hover:bg-brand-blue-soft"
            aria-label="다음 후기"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </FadeIn>
    </Section>
  );
}
