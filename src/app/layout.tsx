import "../styles/fonts.css";
import "./globals.css";
import React, { lazy } from "react";
import { cx } from "@/src/utils";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/src/components/ui/sonner"
import Script from "next/script";
import siteMetadata from "../utils/siteMetaData";
import Footer from "../components/Header/Footer";
import Head from "next/head";
const Header = lazy(() => import("@/src/components/Header"));
const NextThemeProvider = lazy(() => import("@/src/providers/theme-provider"));

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <Head>
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
      </Head>
      <body className={cx("font-EuclidCircularB", "font-mr")}>
        <NextThemeProvider>
          <Header /> 
          <Providers>
                    <Toaster />
            {children}
            <ToastContainer />
          </Providers>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
