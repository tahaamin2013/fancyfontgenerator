"use client";
import { useEffect } from "react";

const AdMobile = ({ index }: { index: number }) => {
  useEffect(() => {
    const loadAd = () => {
      const container = document.getElementById(`ad-mobile-${index}`);
      if (container) {
        container.innerHTML = ""; // purana ad hatao

        // Set atOptions on the window object for the ad script to access
        (window as any).atOptions = {
          key: "108c6f2b2c994ee2bdf6646aa3216989",
          format: "iframe",
          height: 300,
          width: 160,
          params: {},
        };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//www.highperformanceformat.com/108c6f2b2c994ee2bdf6646aa3216989/invoke.js";

        container.appendChild(script);
      }
    };

    // pehli dafa ad load karo
    loadAd();
    // har 5 second baad refresh karo
    const interval = setInterval(loadAd, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [index]);

  return (
    <div className="AdMobile flex md:hidden overflow-x-hidden justify-center my-1">
      <div id={`ad-mobile-${index}`} />
    </div>
  );
};

export default AdMobile;
