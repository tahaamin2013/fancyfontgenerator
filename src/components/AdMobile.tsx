"use client";

import { useEffect } from "react";

const AdMobile = ({ index }: { index: number }) => {
  useEffect(() => {
    const container = document.getElementById(`ad-mobile-${index}`);
    if (container) {
      container.innerHTML = ""; // clear old ad

      // set atOptions
      (window as any).atOptions = {
        key: "108c6f2b2c994ee2bdf6646aa3216989",
        format: "iframe",
        height: 300,
        width: 160,
        params: {},
      };

      // create script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.highperformanceformat.com/108c6f2b2c994ee2bdf6646aa3216989/invoke.js";
      script.async = true;

      container.appendChild(script);
    }
  }, [index]);

  return (
    <div className="AdMobile flex md:hidden justify-center my-1">
      <div id={`ad-mobile-${index}`} />
    </div>
  );
};

export default AdMobile;
