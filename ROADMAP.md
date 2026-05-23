# 민족 어학원 사이트 — 다음 작업 백로그

> 라이브: https://minjok-academy-web.vercel.app
> 시트 (상담): https://docs.google.com/spreadsheets/d/1NdHWJ3IEdngVJFUgFeIhpirJcpEu5M0SaSO8YQVde3U

---

## 🔴 즉시 (운영 시작 전 권장)

| # | 항목 | 메모 | 예상 |
|---|---|---|---|
| 1 | **카카오톡 채널 URL 교체** | 현재 더미 `pf.kakao.com/_minjok` 사용 중 (Consult·KakaoFab). 클릭 시 404. 채널 만들거나 카드/FAB 숨기기 | 5분 |
| 2 | **운영 시간 정확화** | 현재 "평일 09:00~22:00 / 주말 휴무" — 실제 운영시간 확인 후 교체 | 1분 |
| 3 | **시트 테스트 row 16건 정리** | 운영 전 깨끗한 상태로. row 1~16 일괄 삭제 | 1분 (MCP) |
| 4 | **시트 알림 설정** | 시트 메뉴 → 도구 → 알림 규칙 → 변경시 즉시 이메일 (사용자 작업) | 30초 |

## 🟡 곧 (한 달 내)

### 도메인 & 인프라
| # | 항목 | 메모 |
|---|---|---|
| 5 | 커스텀 도메인 연결 | 예: `minjok-eng.com`, `minjokacademy.kr`. 도메인 결정 후 Vercel 대시보드 → Domains |
| 6 | 도메인 DNS 설정 | A·CNAME 레코드 추가, Vercel 자동 SSL |
| 7 | 기존 사이트 리다이렉트 | `valueinfomaker-lab.github.io/minjok-academy/` → 신 도메인 |
| 8 | 미사용 env 정리 | `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` (지도 임베드 폐기 후 미사용) — Vercel에서 제거 |

### SEO & 분석
| # | 항목 | 메모 |
|---|---|---|
| 9 | Google Analytics 4 등록 | GA4 측정 ID 발급 → next/script로 삽입 |
| 10 | 네이버 서치어드바이저 등록 | 사이트 소유 확인 + sitemap 제출 |
| 11 | Google Search Console 등록 | 색인 요청 + 모바일 친화성 확인 |
| 12 | `app/sitemap.ts` 추가 | Next.js 자동 sitemap 생성 |
| 13 | `app/robots.ts` 추가 | crawler 허용 |
| 14 | 구조화 데이터 (JSON-LD) | LocalBusiness · EducationalOrganization 스키마 — 구글 풍부한 결과 |
| 15 | OG 이미지 별도 제작 | 1200×630 디자인 (현재는 Hero 사진 그대로) |

## ⚪ 점진적 (운영하면서 추가)

### 콘텐츠 보강
| # | 항목 | 메모 |
|---|---|---|
| 16 | 강사진 소개 섹션 | 학원에서 정보·사진 받으면 — 처음엔 단순화로 제거됨 |
| 17 | 프로그램 상세 페이지 | 유치부/초중등 각각 — 학년별 시간표·교재 등 (현 LP에서 제거) |
| 18 | 갤러리 사진 추가 | 새 활동 사진 받으면 교체·추가 |
| 19 | 후기 추가 | 실제 학부모 후기 수집되면 |
| 20 | 학원 공지·이벤트 | MDX 블로그 도입 검토 |
| 21 | 학원 소개 영상 | (선택) Hero 또는 별도 섹션에 YouTube embed |

### 상담 폼 강화
| # | 항목 | 메모 |
|---|---|---|
| 22 | 스팸 방지 (Honeypot 또는 reCAPTCHA) | 봇 제출 차단 |
| 23 | 폼 rate limiting | Vercel KV 또는 Upstash로 IP당 분당 제한 |
| 24 | 폼 응답 자동 답장 | "접수 확인" 메일 학부모에게 (Sheets webhook에서 추가) |
| 25 | 시트 → CRM 연동 | (선택) Notion · HubSpot · 학원 관리 도구 |

### 성능·품질
| # | 항목 | 메모 |
|---|---|---|
| 26 | Lighthouse 90+ 점검 | Perf · A11y · Best Practices · SEO 4지표 |
| 27 | 이미지 lazy load 점검 | Hero 외 모두 next/image lazy 동작 확인 |
| 28 | 접근성 a11y 점검 | 키보드 네비, 대비, ARIA |
| 29 | 모바일 반응형 점검 | 375 · 768 · 1280 · 1920 |
| 30 | 폼 입력 검증 강화 | 전화번호 정규식, 이름 한글만 등 |

---

## 🛠 운영 가이드 (학원 직원용 — 추후 docs/ 추가 권장)

- [ ] 학원 측 시트 접근 권한 부여 — 시트 공유 → 학원 운영자
- [ ] 새 후기 추가 방법 (lib/data.ts 편집 또는 CMS 도입)
- [ ] 사진 교체 방법
- [ ] Vercel 대시보드 권한 (관리자 위임 시)

---

## 변경 이력
- v1 (2026-05-24) — 초기 백로그
