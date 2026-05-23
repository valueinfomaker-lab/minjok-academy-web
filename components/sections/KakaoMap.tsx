"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
const SDK_SRC = APP_KEY
  ? `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
  : "";

// 학원 좌표 (서울 서대문구 응암로 68 가좌빌딩) — 정확한 값 측정 후 교체 가능
const LAT = 37.5765;
const LNG = 126.9148;
const MARKER_TITLE = "민족 어학원";

type LatLngCtor = new (lat: number, lng: number) => unknown;
type MapCtor = new (
  container: HTMLElement,
  options: { center: unknown; level: number },
) => unknown;
type MarkerCtor = new (opts: { position: unknown; map: unknown }) => unknown;
type InfoCtor = new (opts: { content: string }) => {
  open: (map: unknown, marker: unknown) => void;
};

declare global {
  interface Window {
    kakao?: {
      maps?: {
        load: (cb: () => void) => void;
        LatLng: LatLngCtor;
        Map: MapCtor;
        Marker: MarkerCtor;
        InfoWindow: InfoCtor;
      };
    };
  }
}

/** Embed Kakao map using the official JavaScript SDK.
 *  Requires NEXT_PUBLIC_KAKAO_MAP_KEY (registered domain in Kakao dev console). */
export function KakaoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inited = useRef(false);

  function init() {
    if (inited.current) return;
    if (!window.kakao?.maps || !containerRef.current) return;
    window.kakao.maps.load(() => {
      const k = window.kakao!.maps!;
      const center = new k.LatLng(LAT, LNG);
      const map = new k.Map(containerRef.current!, { center, level: 3 });
      const marker = new k.Marker({ position: center, map });
      const info = new k.InfoWindow({
        content: `<div style="padding:6px 10px;font-size:13px;font-weight:600;color:#1E2A4A;white-space:nowrap;">${MARKER_TITLE}</div>`,
      });
      info.open(map, marker);
      inited.current = true;
    });
  }

  // Re-attempt init in case onReady fires before container ref is attached.
  useEffect(() => {
    if (window.kakao?.maps) init();
  }, []);

  if (!APP_KEY) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-brand-beige-soft p-6 text-center">
        <div className="text-sm text-ink-soft">
          <p className="font-semibold text-ink">카카오맵 키 설정 필요</p>
          <p className="mt-2 text-ink-mute">
            <code className="rounded bg-white px-1.5 py-0.5">
              NEXT_PUBLIC_KAKAO_MAP_KEY
            </code>{" "}
            환경변수를 설정해 주세요.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div ref={containerRef} className="h-full w-full" />
      <Script src={SDK_SRC} strategy="afterInteractive" onReady={init} />
    </>
  );
}
