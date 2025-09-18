"use client";
import { useEffect } from "react";
const AdMobile = ({ index }: { index: number }) => {
const adKey = "108c6f2b2c994ee2bdf6646aa3216989";
useEffect(() => {
const container = document.getElementById(`container-${adKey}`);
if (container) {
container.innerHTML = "";
(window as any).atOptions = {
key: adKey,
format: "iframe",
height: 300,
width: 160,
params: {},
};
const script = document.createElement("script");
script.type = "text/javascript";
script.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
script.async = true;
container.appendChild(script);
}
}, [index]);
return (
<div className="AdMobile flex md:hidden justify-center my-1">
<div id={`container-${adKey}`} />
</div>
);
};
export default AdMobile;