import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { GALLERY } from "@/lib/data";

export function Classroom() {
  return (
    <Section id="classroom" tone="white">
      <FadeIn className="text-center">
        <Eyebrow>Our Classroom</Eyebrow>
        <Heading as="h2" className="mt-3 text-brand-navy">
          교실 안의 모습
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
          사진으로 보여드리는 우리 학원의 하루.
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4">
        {GALLERY.map((g, i) => (
          <FadeIn key={g.src} delay={0.05 * i}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-beige-soft">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
