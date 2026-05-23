import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { PAIN_POINTS } from "@/lib/data";

export function Empathy() {
  return (
    <Section id="empathy" tone="white">
      <FadeIn className="text-center">
        <Eyebrow>For Parents</Eyebrow>
        <Heading as="h2" className="mt-3 text-brand-navy">
          혹시 이런 고민이 있으신가요?
        </Heading>
      </FadeIn>

      <ul className="mx-auto mt-12 grid max-w-3xl gap-4 md:mt-16">
        {PAIN_POINTS.map((text, i) => (
          <FadeIn key={text} delay={0.05 * i} as="li">
            <div className="flex items-start gap-4 rounded-2xl bg-brand-beige-soft p-5 md:p-6">
              <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-navy text-white">
                <Check size={16} strokeWidth={3} />
              </span>
              <p className="text-base text-ink-soft md:text-lg">{text}</p>
            </div>
          </FadeIn>
        ))}
      </ul>

      <FadeIn delay={0.3} className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-lg font-semibold text-brand-navy md:text-xl">
          민족 어학원은 아이들이 직접 참여하며 성장하는
          <br className="hidden sm:block" />
          영어 환경을 만듭니다.
        </p>
      </FadeIn>
    </Section>
  );
}
