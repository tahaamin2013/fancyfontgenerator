import "../styles/fonts.css";
import "./globals.css";
import React, { lazy } from "react";
import { cx } from "@/src/utils";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/src/components/ui/sonner"

import siteMetadata from "../utils/siteMetaData";
const Header = lazy(() => import("@/src/components/Header"));
const NextThemeProvider = lazy(() => import("@/src/providers/theme-provider"));

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
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
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className={cx("font-EuclidCircularB", "font-mr")}>
        <NextThemeProvider>
          <Header />
          <Providers>
                    <Toaster />
            {children}
            <ToastContainer />
          </Providers>
        </NextThemeProvider>
      </body>
    </html>
  );
}
