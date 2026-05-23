"use client";

import { FormEvent, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { KakaoMap } from "@/components/sections/KakaoMap";
import { CONTACT } from "@/lib/data";

export function Consult() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with Server Action or Formspree
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 6000);
  }

  return (
    <Section id="consult" tone="white">
      <FadeIn className="text-center">
        <Eyebrow>Consult</Eyebrow>
        <Heading as="h2" className="mt-3 text-brand-navy">
          지금 바로 상담받으세요
        </Heading>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft md:text-lg">
          자녀에게 맞는 영어 학습 로드맵을 안내해 드립니다.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
        {/* ===== Left: Form ===== */}
        <FadeIn>
          <form
            className="grid gap-4 rounded-3xl border border-line bg-white p-6 shadow-sm md:p-8"
            onSubmit={handleSubmit}
          >
            <Field id="name" label="학부모 이름" placeholder="홍길동" required />
            <Field id="grade" label="자녀 학년" placeholder="예: 초3" required />
            <Field
              id="phone"
              label="연락처"
              placeholder="010-0000-0000"
              type="tel"
              required
            />
            <Field
              id="message"
              label="문의 내용"
              placeholder="상담 희망 시간, 자녀의 영어 학습 고민 등"
              textarea
            />

            <label className="flex items-center gap-2 text-sm text-ink-mute">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-line-strong text-brand-navy"
              />
              개인정보 수집·이용에 동의합니다.
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-brand-navy px-8 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-lg"
            >
              무료 상담 신청
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="text-center text-sm font-medium text-green-700"
              >
                신청이 접수되었습니다. 영업일 기준 24시간 내 연락드리겠습니다.
              </p>
            )}
          </form>
        </FadeIn>

        {/* ===== Right: Location + Kakao ===== */}
        <FadeIn delay={0.15} as="div">
          <aside
            id="location"
            className="flex h-full flex-col gap-6 rounded-3xl bg-brand-beige-soft p-6 md:p-8"
          >
            {/* 카카오맵 임베드 */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
              <KakaoMap />
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-navy md:text-xl">
                오시는길
              </h3>
              <dl className="mt-5 space-y-4 text-sm text-ink-soft md:text-base">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 flex-none text-brand-navy"
                    strokeWidth={2}
                  />
                  <span>{CONTACT.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 flex-none text-brand-navy"
                    strokeWidth={2}
                  />
                  <a
                    href={`tel:${CONTACT.tel}`}
                    className="font-semibold text-brand-navy hover:underline"
                  >
                    {CONTACT.tel}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="mt-0.5 flex-none text-brand-navy"
                    strokeWidth={2}
                  />
                  <span>
                    {CONTACT.hours.weekday}
                    <br />
                    <span className="text-ink-mute">
                      {CONTACT.hours.weekend}
                    </span>
                  </span>
                </div>
              </dl>
            </div>

            <div className="mt-auto rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-navy">
                전화·폼이 부담스러우시다면
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                카카오톡으로 편하게 문의해 주세요.
              </p>
              <a
                href={CONTACT.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#FEE500] px-5 text-sm font-bold text-[#3A1D1D] transition hover:brightness-95"
              >
                <MessageCircle size={18} fill="#3A1D1D" strokeWidth={0} />
                카카오톡 채널 상담
              </a>
            </div>
          </aside>
        </FadeIn>
      </div>
    </Section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
  textarea,
}: FieldProps) {
  const base =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-mute focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue";
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink-soft">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={3}
          className={base}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </div>
  );
}
