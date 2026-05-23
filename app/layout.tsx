import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "민족 어학원";
const SITE_DESCRIPTION =
  "아이가 먼저 참여하는 영어 수업. 초등·중등 영어, Speaking Class. 무료 상담 및 체험 수업 신청.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://minjok-academy-web.vercel.app",
  ),
  title: {
    default: `${SITE_NAME} — 영어를 자신감으로 배우는 공간`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "민족어학원",
    "민족 영어학원",
    "초등 영어",
    "중등 영어",
    "스피킹 클래스",
    "영어 학원",
    "영어 발표",
    "원어민 영어",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} — 영어를 자신감으로 배우는 공간`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/hero.webp",
        width: 1280,
        height: 720,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — 영어를 자신감으로 배우는 공간`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.webp"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-surface font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
