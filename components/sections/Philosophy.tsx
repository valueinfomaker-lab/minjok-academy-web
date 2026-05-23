import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";

export function Philosophy() {
  return (
    <Section id="philosophy" tone="navy">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <Eyebrow invert>Our Philosophy</Eyebrow>
          <p className="mt-6 text-2xl font-medium leading-snug text-white md:text-3xl lg:text-4xl">
            <span className="text-brand-blue">&ldquo;</span>
            영어를 잘하는 아이보다
            <br />
            영어를 두려워하지 않는 아이를 키웁니다.
            <span className="text-brand-blue">&rdquo;</span>
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            민족 어학원
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
