// components/EzoicAd.tsx
"use client";

import { useEffect } from "react";

interface EzoicAdProps {
  ids: number[]; // example: [101] or [101, 102]
}

export default function EzoicAd({ ids }: EzoicAdProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ezstandalone?.cmd) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(...ids);
      });
    }
  }, [ids]);

  return (
    <>
      {ids.map((id) => (
        <div key={id} id={`ezoic-pub-ad-placeholder-${id}`}></div>
      ))}
    </>
  );
}
