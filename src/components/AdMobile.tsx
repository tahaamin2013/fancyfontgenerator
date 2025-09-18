import Script from "next/script";

const AdMobile = ({ index }: { index: number }) => {
  return (
    <div className="AdMobile flex md:hidden overflow-x-hidden justify-center my-1">
      <div id={`ad-mobile-${index}`} />
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

export default AdMobile;
