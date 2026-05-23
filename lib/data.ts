import {
  MessagesSquare,
  Mic,
  Users,
  FileText,
  Sparkles,
  Globe,
  type LucideIcon,
} from "lucide-react";

/* ===== Section 2 — Empathy ===== */
export const PAIN_POINTS: string[] = [
  "영어를 오래 배웠는데 말을 못해요",
  "아이가 영어를 어려워해요",
  "학원은 다니는데 흥미가 없어요",
  "자신감이 부족해요",
  "수업 참여를 잘 안 해요",
];

/* ===== Section 3 — Features ===== */
export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const FEATURES: Feature[] = [
  {
    icon: MessagesSquare,
    title: "참여형 영어 수업",
    desc: "강의가 아닌 대화. 아이가 먼저 입을 뗍니다.",
  },
  {
    icon: Mic,
    title: "발표 중심 수업",
    desc: "매주 Show & Tell과 영어 발표로 자신감을 키웁니다.",
  },
  {
    icon: Users,
    title: "소수 정예 관리",
    desc: "한 반 인원을 제한해 한 명도 놓치지 않습니다.",
  },
  {
    icon: FileText,
    title: "학습 리포트 제공",
    desc: "정기 진단평가 + 학부모용 학습 리포트.",
  },
  {
    icon: Sparkles,
    title: "자신감을 키우는 교육",
    desc: "틀려도 괜찮은 교실, 영어가 즐거워집니다.",
  },
  {
    icon: Globe,
    title: "두려움 없는 환경",
    desc: "원어민과 함께하는 자연스러운 일상 영어.",
  },
];

/* ===== Section 5 — Reviews (dummy) ===== */
export type Review = {
  body: string;
  author: string;
};

export const REVIEWS: Review[] = [
  {
    body: "원장님이 늘 친절하게 상담해 주시고, 선생님들께서 아이를 세심하게 살펴봐 주셔서 믿고 보낼 수 있습니다.",
    author: "초3 자녀 학부모 · 남가좌동 K",
  },
  {
    body: "영어 기초가 거의 없어서 걱정했는데, 아이 수준에 맞춰 차근차근 설명해 주셔서 부담 없이 따라갈 수 있었습니다.",
    author: "초2 자녀 학부모 · 북가좌동 P",
  },
  {
    body: "처음 시작하는 아이도 어렵지 않게 배울 수 있도록, 기초부터 꼼꼼하게 잡아주셔서 만족스러웠습니다.",
    author: "7세 자녀 학부모 · 응암동 L",
  },
  {
    body: "선생님께서 아이의 부족한 부분을 잘 파악해 주시고, 그에 맞게 수업을 진행해 주셔서 실력이 조금씩 늘고 있습니다.",
    author: "초5 자녀 학부모 · 남가좌동 J",
  },
  {
    body: "아이가 영어에 자신감이 없었는데, 천천히 알려주시고 격려해 주셔서 영어에 흥미를 갖게 되었습니다.",
    author: "초3 자녀 학부모 · 가좌동 H",
  },
  {
    body: "원장님과 선생님 모두 아이에게 관심을 가지고 지도해 주셔서, 학원에 대한 신뢰가 생기고 계속 보내고 싶은 마음이 듭니다.",
    author: "중1 자녀 학부모 · 북가좌동 M",
  },
];

/* ===== Section 4 — Classroom gallery ===== */
export type GalleryItem = { src: string; alt: string };
export const GALLERY: GalleryItem[] = [
  { src: "/images/gallery-hands-up.webp", alt: "수업 활동 — 손을 든 어린이" },
  { src: "/images/gallery-group.webp", alt: "단체 활동" },
  { src: "/images/gallery-study.webp", alt: "학습 활동" },
  { src: "/images/gallery-event.webp", alt: "교실 이벤트" },
];

/* ===== Section 8 — Location/contact ===== */
export const CONTACT = {
  address: "서울 서대문구 응암로 68 가좌빌딩 3층",
  tel: "02-373-6841",
  kakaoChannelUrl: "https://pf.kakao.com/_minjok",
  kakaoMapUrl:
    "https://map.kakao.com/?q=" +
    encodeURIComponent("서울 서대문구 응암로 68 가좌빌딩"),
  hours: {
    weekday: "평일 09:00 ~ 22:00",
    weekend: "주말 휴무",
  },
};
