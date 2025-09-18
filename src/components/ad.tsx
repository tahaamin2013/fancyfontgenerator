"use client";

import { useEffect } from "react";

const Ad = ({ index }: { index: number }) => {
  useEffect(() => {
    const container = document.getElementById(`ad-desktop-${index}`);
    if (container) {
      container.innerHTML = ""; // clear old ad

      // set atOptions
      (window as any).atOptions = {
        key: "8fcc3f83c250f7ce7879dbd892cfc63b",
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      };

      // create script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
      script.async = true;

      container.appendChild(script);
    }
  }, [index]);

  return (
    <div className="Ad hidden md:flex justify-center my-4">
      <div id={`ad-desktop-${index}`} />
    </div>
  );
};

export default Ad;
