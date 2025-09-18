import Script from "next/script";

const Ad = ({ index }: { index: number }) => {
  return (
    
    <div className="Ad hidden md:flex overflow-x-hidden  justify-center my-1">
      <div id={`ad-desktop-${index}`} />
      <Script
        id={`adsterra-desktop-${index}`}
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
              var container = document.getElementById("ad-desktop-${index}");
              if (container) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
                container.innerHTML = ""; // clear old ad
                container.appendChild(script);
              }
            })();
          `,
        }}
      />
    </div>
  );
};

export default Ad;
