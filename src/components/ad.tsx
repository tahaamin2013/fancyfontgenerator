"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

interface AdProps {
  reload?: boolean;
}

const Ad: React.FC<AdProps> = ({ reload = false }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!reload) return;

    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // force re-render
    }, 10000);

    return () => clearInterval(interval);
  }, [reload]);

  return (
                      <div id="ad-desktop" className="flex overflow-x-hidden mt-5 justify-center ">
      <div
        id={`ad-desktop-${key}`}
        key={key} // re-render ad container
        className="flex overflow-x-hidden justify-center"
      >
        <Script
          id={`adsterra-desktop-${key}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var atOptions = {
                  'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
                var container = document.getElementById("ad-desktop-${key}");
                if (container) {
                  var script = document.createElement("script");
                  script.type = "text/javascript";
                  script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
                  container.appendChild(script);
                }
              })();
            `,
          }}
        />
      </div>
    </div>
  );
};

export default Ad;
