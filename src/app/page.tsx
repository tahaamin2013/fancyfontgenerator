import siteMetadata from "../utils/siteMetaData"
import FancyTextGenerator from "../components/fancy-text-generator";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "it",
    type: "website",
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function Page() {
  return <FancyTextGenerator />
}
