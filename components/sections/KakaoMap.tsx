"use client";

import { useEffect, useRef } from "react";

const TIMESTAMP = "1779533059268";
const KEY = "oa9dpu4fum4";
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
 *  Inline width/height set by widget; we override to 100% via globals.css. */
export function KakaoMap() {
  const inited = useRef(false);

  useEffect(() => {
    function init() {
      if (inited.current) return true;
      const Lander = window.daum?.roughmap?.Lander;
      if (!Lander) return false;
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
      return true;
    }

    if (init()) return;

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${LOADER_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => init());
      return;
    }
    const s = document.createElement("script");
    s.charset = "UTF-8";
    s.src = LOADER_SRC;
    s.async = true;
    s.onload = () => init();
    document.head.appendChild(s);
  }, []);

  return (
    <div
      id={`daumRoughmapContainer${TIMESTAMP}`}
      className="root_daum_roughmap root_daum_roughmap_landing h-full w-full"
    />
  );
}
