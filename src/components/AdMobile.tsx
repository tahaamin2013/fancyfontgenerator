"use client";
import { useEffect } from "react";

const AdMobile = ({ index }: { index: number }) => {
  useEffect(() => {
    // Script inject karte hi ad load karega
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src =
      "//pl27647015.revenuecpmgate.com/561945773a837ed34a8c131b672a147a/invoke.js";

    // Har render pe naya container banega
    const containerId = `container-561945773a837ed34a8c131b672a147a-${index}`;
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = ""; // clear old ad
      container.appendChild(script);
    }
  }, [index]);

  return (
    <div className="AdMobile flex md:hidden justify-center my-4">
      <div id={`container-561945773a837ed34a8c131b672a147a-${index}`} />
    </div>
  );
};

export default AdMobile;
