"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

type Props = {
  desktopKey: string;
  mobileKey: string;
};

export default function ResponsiveAd({ desktopKey, mobileKey }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768); // breakpoint for mobile
    }
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <div id="ad-container"></div>

      <Script
        id="adsterra-banner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions = {
              'key' : '${isMobile ? mobileKey : desktopKey}',
              'format' : 'iframe',
              'height' : ${isMobile ? 50 : 90},
              'width' : ${isMobile ? 320 : 728},
              'params' : {}
            };
            var container = document.getElementById("ad-container");
            if (container) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "//www.highperformanceformat.com/${isMobile ? mobileKey : desktopKey}/invoke.js";
              container.appendChild(script);
            }
          `,
        }}
      />
    </div>
  );
}
