"use client";

import { useEffect, useState } from "react";

// TBD: 실제 카카오톡 채널 URL로 교체
const KAKAO_URL = "https://pf.kakao.com/_minjok";

export function KakaoFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={KAKAO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡으로 상담하기"
      className={`fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16 ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {/* KakaoTalk chat icon (simplified) */}
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="#3A1D1D"
        aria-hidden="true"
      >
        <path d="M12 3C6.477 3 2 6.582 2 11c0 2.886 1.886 5.413 4.733 6.834l-1.082 3.957c-.096.35.295.633.601.444L11 19.825c.328.024.661.037 1 .037 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
      </svg>
    </a>
  );
}
