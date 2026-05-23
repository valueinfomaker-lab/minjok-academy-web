import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden md:min-h-[640px] lg:min-h-[720px]"
    >
      {/* full-bleed background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* gradient overlay — mobile: top-down dim, desktop: left-strong → right-light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/85 via-brand-navy/55 to-brand-navy/30 md:bg-gradient-to-r md:from-brand-navy/85 md:via-brand-navy/40 md:to-brand-navy/10"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <FadeIn className="max-w-2xl text-white">
          <Eyebrow invert>Since 2010 · 초등 · 중등 영어</Eyebrow>
          <Heading as="h1" className="mt-5 text-white">
            영어를{" "}
            <span className="bg-brand-blue/85 px-2 text-brand-navy">
              자신감
            </span>
            으로
            <br className="hidden sm:block" /> 배우는 공간
          </Heading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90 md:text-xl">
            아이가 먼저 참여하는 영어 수업.
            <br /> 발표·회화·자신감까지 함께 키워갑니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="white" href="#consult">
              무료 상담 신청
            </Button>
            <Button variant="white-outline" href="#consult">
              체험 수업 예약
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
