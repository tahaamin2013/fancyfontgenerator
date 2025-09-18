"use client";
import { useEffect } from "react";

type AdWrapperProps = {
  index: number;
};

const AdWrapper = ({ index }: AdWrapperProps) => {
  useEffect(() => {
    const injectAd = (key: string, containerId: string) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = ""; // clear previous
 
      // Create script tag
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        (location.protocol === "https:" ? "https:" : "http:") +
        `//www.highperformanceformat.com/${key}/invoke.js`;

      container.appendChild(script);
    };

    // Desktop ad
    injectAd("8fcc3f83c250f7ce7879dbd892cfc63b", `ad-desktop-${index}`);

    // Mobile ad
    injectAd("108c6f2b2c994ee2bdf6646aa3216989", `ad-mobile-${index}`);
  }, [index]);

  return (
    <div className="my-4">
      {/* Desktop Only */}
      <div
        id={`ad-desktop-${index}`}
        className="hidden md:flex justify-center"
      />

      {/* Mobile Only */}
      <div
        id={`ad-mobile-${index}`}
        className="flex md:hidden justify-center"
      />
    </div>
  );
};

export default AdWrapper;
