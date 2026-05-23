"use client";

import Script from "next/script";
import { useRef } from "react";

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
 *  Uses next/script onReady so the Lander global is guaranteed by call time. */
export function KakaoMap() {
  const inited = useRef(false);

  function init() {
    if (inited.current) return;
    const Lander = window.daum?.roughmap?.Lander;
    if (!Lander) {
      // Script tag fired onReady but global not yet ready — retry briefly.
      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;
        if (window.daum?.roughmap?.Lander) {
          clearInterval(timer);
          try {
            new window.daum.roughmap.Lander!({
              timestamp: TIMESTAMP,
              key: KEY,
              mapWidth: "640",
              mapHeight: "360",
            }).render();
            inited.current = true;
          } catch (e) {
            console.error("kakao roughmap render failed", e);
          }
        } else if (attempts > 50) {
          clearInterval(timer);
          console.warn("kakao roughmap Lander never appeared");
        }
      }, 200);
      return;
    }
    try {
      new Lander({
        timestamp: TIMESTAMP,
        key: KEY,
        mapWidth: "640",
        mapHeight: "360",
      }).render();
      inited.current = true;
    } catch (e) {
      console.error("kakao roughmap render failed", e);
    }
  }

  return (
    <>
      <div
        id={`daumRoughmapContainer${TIMESTAMP}`}
        className="root_daum_roughmap root_daum_roughmap_landing h-full w-full"
      />
      <Script
        src={LOADER_SRC}
        strategy="afterInteractive"
        onReady={init}
      />
    </>
  );
}
