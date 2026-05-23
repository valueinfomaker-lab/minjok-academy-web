"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
// NCP의 신규 키는 `ncpKeyId`, 구버전 키는 `ncpClientId` 파라미터를 사용한다.
// 둘 다 동작하지 않으면 NCP 콘솔에서 도메인 등록 여부를 확인할 것.
const SDK_SRC = CLIENT_ID
  ? `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`
  : "";

// 학원 좌표 (서울 서대문구 응암로 68 가좌빌딩) — 정확한 값 측정 후 교체
const LAT = 37.5765;
const LNG = 126.9148;
const MARKER_TITLE = "민족 어학원";

type LatLngCtor = new (lat: number, lng: number) => unknown;
type MapCtor = new (
  container: HTMLElement | string,
  options: { center: unknown; zoom: number },
) => unknown;
type MarkerCtor = new (opts: {
  position: unknown;
  map: unknown;
  title?: string;
}) => unknown;
type InfoCtor = new (opts: { content: string }) => {
  open: (map: unknown, marker?: unknown) => void;
};

declare global {
  interface Window {
    naver?: {
      maps: {
        LatLng: LatLngCtor;
        Map: MapCtor;
        Marker: MarkerCtor;
        InfoWindow: InfoCtor;
      };
    };
  }
}

/** Embed Naver Maps using the official v3 JavaScript SDK.
 *  Requires NEXT_PUBLIC_NAVER_MAP_CLIENT_ID (ncpKeyId from NCP console). */
export function NaverMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inited = useRef(false);

  function init() {
    if (inited.current) return;
    if (!window.naver?.maps || !containerRef.current) return;
    const n = window.naver.maps;
    const center = new n.LatLng(LAT, LNG);
    const map = new n.Map(containerRef.current, { center, zoom: 16 });
    const marker = new n.Marker({
      position: center,
      map,
      title: MARKER_TITLE,
    });
    const info = new n.InfoWindow({
      content: `<div style="padding:6px 10px;font-size:13px;font-weight:600;color:#1E2A4A;white-space:nowrap;">${MARKER_TITLE}</div>`,
    });
    info.open(map, marker);
    inited.current = true;
  }

  // Re-attempt init in case the SDK is already loaded by the time ref mounts.
  useEffect(() => {
    if (window.naver?.maps) init();
    // surface auth failures in browser console
    (window as unknown as { navermap_authFailure?: () => void }).navermap_authFailure =
      () => {
        console.error(
          "Naver Maps auth failed — check ClientID and registered domain in NCP console",
        );
      };
  }, []);

  if (!CLIENT_ID) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-brand-beige-soft p-6 text-center">
        <div className="text-sm text-ink-soft">
          <p className="font-semibold text-ink">네이버맵 키 설정 필요</p>
          <p className="mt-2 text-ink-mute">
            <code className="rounded bg-white px-1.5 py-0.5">
              NEXT_PUBLIC_NAVER_MAP_CLIENT_ID
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
