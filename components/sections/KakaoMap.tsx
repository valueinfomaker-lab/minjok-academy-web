"use client";

import { useEffect, useRef } from "react";

const TIMESTAMP = "1779534647921";
const KEY = "nvqqp55cun6";
const LOADER_SRC =
  "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";

declare global {
  interface Window {
    daum?: {
      roughmap?: {
        Lander: new (opts: {
          timestamp: string;
          key: string;
          mapWidth: string;
          mapHeight: string;
        }) => { render: () => void };
      };
    };
  }
}

/** Embed Kakao "지도 퍼가기" widget.
 *  Loader is async — poll for `window.daum.roughmap.Lander` after script tag. */
export function KakaoMap() {
  const inited = useRef(false);

  useEffect(() => {
    let cancelled = false;

    // Ensure loader script is in DOM (idempotent).
    if (!document.querySelector(`script[src="${LOADER_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = LOADER_SRC;
      s.async = true;
      s.charset = "UTF-8";
      document.head.appendChild(s);
    }

    function tryInit(attempts = 0) {
      if (cancelled || inited.current) return;
      const Lander = window.daum?.roughmap?.Lander;
      if (Lander) {
        try {
          new Lander({
            timestamp: TIMESTAMP,
            key: KEY,
            mapWidth: "640",
            mapHeight: "360",
          }).render();
          inited.current = true;
        } catch (e) {
          console.error("kakao roughmap init failed", e);
        }
        return;
      }
      if (attempts > 60) {
        // give up after ~12s
        console.warn("kakao roughmap loader did not appear");
        return;
      }
      setTimeout(() => tryInit(attempts + 1), 200);
    }

    tryInit();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      id={`daumRoughmapContainer${TIMESTAMP}`}
      className="root_daum_roughmap root_daum_roughmap_landing h-full w-full"
    />
  );
}
