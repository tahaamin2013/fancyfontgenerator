import "../styles/fonts.css";
import "./globals.css";
import React, { lazy } from "react";
import { cx } from "@/src/utils";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/src/components/ui/sonner"
import Script from "next/script";
import Footer from "../components/Header/Footer";
const Header = lazy(() => import("@/src/components/Header"));
const NextThemeProvider = lazy(() => import("@/src/providers/theme-provider"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
     crossOrigin="anonymous"></script>
     <meta name="google-adsense-account" content="ca-pub-9571755808195636"/>
     <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="afterInteractive"
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "8bc21ce9-6fec-4b2a-9e52-1b42a0f91280",
                
              });
            });
          `}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />
          <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebSite",
                      "name": "Caratteri Speciali 10",
                      "url": "https://www.caratterispeciali10.it",
                      "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.caratterispeciali10.it/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                      }
                    })
                  }}
                />
        
                {/* Organization Schema */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Caratteri Speciali 10",
                      "url": "https://www.caratterispeciali10.it",
                      "logo": "https://www.caratterispeciali10.it/logo.png"
                    })
                  }}
                />
        
                {/* WebPage Schema */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Caratteri Speciali 10 - Home",
                      "url": "https://www.caratterispeciali10.it",
                      "description": "Generatore di caratteri speciali da tastiera, simboli eleganti per Instagram, Facebook, Fortnite, WhatsApp e molto altro.",
                      "inLanguage": "it"
                    })
                  }}
                />

                <script type='text/javascript' src='//pl27647283.revenuecpmgate.com/ac/2b/2d/ac2b2da4217b85c286d81681d2a56188.js'></script>
      </head>
      <body className={cx("font-EuclidCircularB", "font-mr")}>
        <NextThemeProvider>
       
          <Header /> 
          <Providers>
                    <Toaster />
            {children}
            <script async data-cfasync="false" src="//pl27647015.revenuecpmgate.com/561945773a837ed34a8c131b672a147a/invoke.js"></script>
<div id="container-561945773a837ed34a8c131b672a147a"></div>


            <ToastContainer />
          </Providers>
          <Footer />
        </NextThemeProvider>
        <script type='text/javascript' src='//pl27646974.revenuecpmgate.com/0a/b1/45/0ab14528ff0ac3b971c5801bcbf9c504.js'></script>
      </body>
    </html>
  );
}
