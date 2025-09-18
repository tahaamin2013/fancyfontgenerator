import Script from "next/script";

const Ad = ({ index }: { index: number }) => {
  const containerId = `atContainer-8fcc3f83c250f7ce7879dbd892cfc63b-${index}`;

  return (
    <div className="Ad hidden md:flex overflow-x-hidden justify-center my-1">
      {/* Container for Ad */}
      <div id={containerId}></div>

      {/* Script Loader */}
      <Script
        id={`adsterra-desktop-${index}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
            atAsyncOptions.push({
              'key': '8fcc3f83c250f7ce7879dbd892cfc63b',
              'format': 'js',
              'async': true,
              'container': '${containerId}',
              'params': {}
            });
            (function() {
              var script = document.createElement('script');
              script.type = "text/javascript";
              script.async = true;
              script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js';
              document.getElementsByTagName('head')[0].appendChild(script);
            })();
          `,
        }}
      />
    </div>
  );
};

export default Ad;
