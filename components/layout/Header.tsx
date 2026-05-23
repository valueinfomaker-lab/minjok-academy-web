"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV = [
  { href: "#features", label: "차별점" },
  { href: "#reviews", label: "후기" },
  { href: "#location", label: "오시는길" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/85 backdrop-blur transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="민족 어학원 - 홈으로"
          >
            <Image
              src="/logo.webp"
              alt="민족 어학원"
              width={120}
              height={120}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" size="sm" href="#consult">
              체험 수업
            </Button>
            <Button variant="primary" size="sm" href="#consult">
              무료 상담
            </Button>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-navy hover:bg-brand-blue-soft md:hidden"
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-brand-navy/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image
                src="/logo.webp"
                alt="민족 어학원"
                width={120}
                height={120}
                className="h-10 w-auto"
              />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-brand-blue-soft"
                onClick={() => setOpen(false)}
                aria-label="메뉴 닫기"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-brand-beige-soft hover:text-brand-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Button variant="secondary" size="md" href="#consult" className="w-full">
                체험 수업 예약
              </Button>
              <Button variant="primary" size="md" href="#consult" className="w-full">
                무료 상담 신청
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
