import Script from "next/script";

const AdMobile = ({ index }: { index: number }) => {
  const containerId = `atContainer-3b5fa1f4c3f73210970b365785a42e34-${index}`;

  return (
    <div className="AdMobile flex md:hidden overflow-x-hidden justify-center my-1">
      {/* Ad container */}
      <div id={containerId}></div>

      {/* Script loader */}
      <Script
        id={`adsterra-mobile-${index}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
            atAsyncOptions.push({
              'key': '3b5fa1f4c3f73210970b365785a42e34',
              'format': 'js',
              'async': true,
              'container': '${containerId}',
              'params': {}
            });
            (function() {
              var script = document.createElement('script');
              script.type = "text/javascript";
              script.async = true;
              script.src = 'http' + (location.protocol === 'https:' ? 's' : '') + '://www.highperformanceformat.com/3b5fa1f4c3f73210970b365785a42e34/invoke.js';
              document.getElementsByTagName('head')[0].appendChild(script);
            })();
          `,
        }}
      />
    </div>
  );
};

export default AdMobile;
