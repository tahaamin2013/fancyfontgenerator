"use client";
import Script from "next/script";

const AdMobile = ({ index }: { index: number }) => {
  return (
    <div className="AdMobile flex overflow-x-hidden justify-center my-4">
      <Script
        id={`adsterra-mobile-${index}`}
        async
        data-cfasync="false"
        src="//pl27647015.revenuecpmgate.com/561945773a837ed34a8c131b672a147a/invoke.js"
      />
      <div id={`ad-mobile-${index}-container`} />
    </div>
  );
};

export default AdMobile;
