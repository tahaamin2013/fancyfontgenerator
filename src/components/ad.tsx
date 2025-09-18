import Script from "next/script";

const AdResponsive = ({ index }: { index: number }) => {
  return (
    <div className="flex justify-center my-1">
      {/* Desktop */}
      <div className="hidden md:block" id={`ad-desktop-${index}`} />
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
                container.innerHTML = "";
                container.appendChild(script);
              }
            })();
          `,
        }}
      />

      {/* Mobile */}
      <div className="block md:hidden" id={`ad-mobile-${index}`} />
      <Script
        id={`adsterra-mobile-${index}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var atOptions = {
                'key' : '108c6f2b2c994ee2bdf6646aa3216989',
                'format' : 'iframe',
                'height' : 300,
                'width' : 160,
                'params' : {}
              };
              var container = document.getElementById("ad-mobile-${index}");
              if (container) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "//www.highperformanceformat.com/108c6f2b2c994ee2bdf6646aa3216989/invoke.js";
                container.innerHTML = "";
                container.appendChild(script);
              }
            })();
          `,
        }}
      />
    </div>
  );
};

export default AdResponsive;
