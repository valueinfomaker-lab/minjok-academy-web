import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:items-end md:px-8 md:py-14">
        <div>
          <Link href="/" className="text-xl font-extrabold text-white">
            민족 어학원
          </Link>
          <p className="mt-3 text-sm text-white/60">
            영어를 자신감으로 배우는 공간
          </p>
        </div>

        <address className="not-italic text-sm leading-relaxed text-white/70">
          서울 서대문구 응암로 68 가좌빌딩 3층
          <br />
          <a
            href="tel:02-373-6841"
            className="font-medium text-white hover:text-brand-blue"
          >
            02-373-6841
          </a>
          <br />
          평일 09:00 ~ 22:00
        </address>

        <p className="text-xs text-white/40 md:text-right">
          © 2026 민족 어학원. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
