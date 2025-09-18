"use client";
import { useEffect } from "react";

type AdWrapperProps = {
  index: number;
};

const AdWrapper = ({ index }: AdWrapperProps) => {
  useEffect(() => {
    const loadAd = (key: string, containerId: string) => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = ""; // clear old ad

        if (typeof window !== "undefined") {
          // @ts-ignore
          if (typeof window.atAsyncOptions !== "object") {
            // @ts-ignore
            window.atAsyncOptions = [];
          }

          // @ts-ignore
          window.atAsyncOptions.push({
            key,
            format: "js",
            async: true,
            container: containerId,
            params: {},
          });

          const script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src =
            (location.protocol === "https:" ? "https:" : "http:") +
            `//www.highperformanceformat.com/${key}/invoke.js`;
          document.head.appendChild(script);
        }
      }
    };

    // Desktop ad
    loadAd(
      "8fcc3f83c250f7ce7879dbd892cfc63b",
      `ad-desktop-container-${index}`
    );

    // Mobile ad
    loadAd(
      "3b5fa1f4c3f73210970b365785a42e34",
      `ad-mobile-container-${index}`
    );
  }, [index]);

  return (
    <div className="my-4">
      {/* Desktop */}
      <div
        id={`ad-desktop-container-${index}`}
        className="hidden md:flex justify-center"
      ></div>

      {/* Mobile */}
      <div
        id={`ad-mobile-container-${index}`}
        className="flex md:hidden justify-center"
      ></div>
    </div>
  );
};

export default AdWrapper;
