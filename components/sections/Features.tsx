import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { FEATURES } from "@/lib/data";

export function Features() {
  return (
    <Section id="features" tone="beige">
      <FadeIn className="text-center">
        <Eyebrow>Why Minjok</Eyebrow>
        <Heading as="h2" className="mt-3 text-brand-navy">
          민족 어학원의 차별점
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
          숫자보다 아이의 변화로 증명합니다.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <FadeIn key={f.title} delay={0.06 * i}>
              <Card>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-navy">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-navy md:text-xl">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {f.desc}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
