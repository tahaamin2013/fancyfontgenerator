"use client";

import "../styles/fonts.css";
import "./globals.css";
import React, { lazy } from "react";
import { cx } from "@/src/utils";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/src/components/ui/sonner";
import Script from "next/script";
import Footer from "../components/Header/Footer";

const Header = lazy(() => import("@/src/components/Header"));
const NextThemeProvider = lazy(() => import("@/src/providers/theme-provider"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const desktopAtOptions = `
    atOptions = {
      'key': '8fcc3f83c250f7ce7879dbd892cfc63b',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };
  `;
  const mobileAtOptions = `
    atOptions = {
      'key': '108c6f2b2c994ee2bdf6646aa3216989',
      'format': 'iframe',
      'height': 50,
      'width': 320,
      'params': {}
    };
  `;

  return (
    <html lang="it">
      <head>
        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9571755808195636"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-9571755808195636"
        />

        {/* OneSignal */}
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

        {/* ezstandalone placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
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
                "target":
                  "https://www.caratterispeciali10.it/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Caratteri Speciali 10",
              "url": "https://www.caratterispeciali10.it",
              "logo": "https://www.caratterispeciali10.it/logo.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Caratteri Speciali 10 - Home",
              "url": "https://www.caratterispeciali10.it",
              "description":
                "Generatore di caratteri speciali da tastiera, simboli eleganti per Instagram, Facebook, Fortnite, WhatsApp e molto altro.",
              "inLanguage": "it",
            }),
          }}
        />
      </head>

      <body className={cx("font-EuclidCircularB", "font-mr")}>
        <NextThemeProvider>
          <Header />

          <Providers>
            <Toaster />

            {/* Responsive Ads */}
            <style>{`
              .mobileShow { display: none; }
              @media only screen and (max-width: 768px) {
                .mobileShow { display: block; }
                .mobileHide { display: none; }
              }
            `}</style>

            <div className="mobileHide">
              <Script id="desktop-atoptions">{desktopAtOptions}</Script>
              <Script src="//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js" />
            </div>

            <div className="mobileShow">
              <Script id="mobile-atoptions">{mobileAtOptions}</Script>
              <Script src="//www.highperformanceformat.com/108c6f2b2c994ee2bdf6646aa3216989/invoke.js" />
            </div>

            {children}
            <ToastContainer />
          </Providers>

          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
