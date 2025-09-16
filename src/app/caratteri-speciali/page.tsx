import CharacterGrid from "@/src/components/character-grid"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Caratteri Speciali da Copiare e Incollare - Simboli, Corsivo",
  description:
    "Genera e copia caratteri speciali, simboli e lettere in corsivo per Instagram, tatuaggi e messaggi creativi.",
  keywords: [
    "caratteri speciali", "corsivo", "lettere in corsivo", "alfabeto in corsivo", "font corsivo",
    "scrittura in corsivo", "simboli tastiera", "tatuaggi font", "caratteri Instagram",
    "scrittura bella", "caratteri da tastiera", "generatore lettere", "font per tatuaggi", "lettere maiuscole in corsivo",
    "copia e incolla simboli", "calligrafia in corsivo", "font Instagram"
  ],
  alternates: {
    canonical: "https://www.caratterispeciali10.it/caratteri-speciali",
  },
  metadataBase: new URL("https://www.caratterispeciali10.it"),
  openGraph: {
    title: "Caratteri Speciali da Copiare e Incollare",
    description: "Crea e copia lettere e simboli in corsivo, perfetti per Instagram, tatuaggi e scritte creative!",
    url: "https://www.caratterispeciali10.it",
    siteName: "CaratteriSpeciali10",
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-700 flex justify-between items-center text-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Caratteri Speciali</h1>
          <p className="text-lg md:text-xl opacity-90">Benvenuto alla nostra collezione di caratteri speciali!</p>
    <div className="w-full hidden md:flex my-4">
      <div id="ad-container-desktop" style={{ width: "100%", maxWidth: "728px" }} />

      <Script
        id="adsterra-desktop"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions = {
              'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
            var container = document.getElementById("ad-container-desktop");
            if (container) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
              container.appendChild(script);
            }
          `,
        }}
      />
    </div>        </div>
        {/* Instructions */}
        <div className="p-4 text-left rounded-lg mb-8">
          <h2 className="font-medium text-white mb-2">Come utilizzare i caratteri speciali</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>Clicca su un carattere per copiarlo negli appunti</li>
            <li>Incolla il carattere dove desideri (documento, chat, social media, ecc.)</li>
            <li>Puoi anche copiare più caratteri selezionandoli manualmente</li>
            <li>Usa il pulsante "Copia Tutti" per copiare tutti i caratteri in una volta</li>
          </ol>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-8">
        <CharacterGrid />
      </main>
               <script async data-cfasync="false" src="//pl27647015.revenuecpmgate.com/561945773a837ed34a8c131b672a147a/invoke.js"></script>
<div id="container-561945773a837ed34a8c131b672a147a"></div>
    </div>
  )
}
