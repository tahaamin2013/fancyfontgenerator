
"use client"
import { useEffect, useState, useRef } from "react"
declare global {
    interface Window {
        atOptions?: any
    }
}
const AdBanner = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const bannerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setIsClient(true)
        const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
        setIsMobile(/Mobi|Android/i.test(userAgent))
    }, [])
    useEffect(() => {
        if (!isClient || !bannerRef.current) return
        bannerRef.current.innerHTML = ""
        window.atOptions = isMobile
            ? {
                key: "108c6f2b2c994ee2bdf6646aa3216989",
                format: "iframe",
                height: 300,
                width: 160,
                params: {},
            }
            : {
                key: "8fcc3f83c250f7ce7879dbd892cfc63b",
                format: "iframe",
                height: 90,
                width: 728,
                params: {},
            }
        const script = document.createElement("script")
        script.src = isMobile
            ? "//www.highperformanceformat.com/108c6f2b2c994ee2bdf6646aa3216989/invoke.js"
            : "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js"
        script.async = true
        bannerRef.current.appendChild(script)
    }, [isClient, isMobile])
    if (!isClient) return null
    return <div className="my-6" ref={bannerRef}></div>
}
export default AdBanner