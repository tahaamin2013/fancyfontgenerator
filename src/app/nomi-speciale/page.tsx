import { Metadata } from "next";
import FancyTextGenerator from "@/src/components/fancy-text-generator";

export const metadata: Metadata = {
  title: "Nome Speciale - Generatore di Testo Fantasioso",
  description: "Crea un nome speciale con il nostro generatore di testo fantasioso. Personalizza e copia facilmente nomi unici e creativi.",
  alternates: {
    canonical: "https://www.caratterispeciali10.it/nomi-speciale",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen">
            <h1 className="sr-only">Decorazioni per Nomi</h1>

      <FancyTextGenerator />
      <section className="mt-8 max-w-2xl mx-auto px-4 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Cos'è un Nome Speciale?</h2>
        <p className="mb-4">
          Un <strong>nome speciale</strong> è un nome con simboli e decorazioni. Lo rende unico e diverso dagli altri. Puoi usarlo sui social, nei giochi o nelle chat per farti notare.
        </p>
        <h3 className="text-xl font-semibold mb-2">Come funziona il generatore?</h2>
        <p className="mb-4">
          Scrivi il tuo nome nel generatore. Scegli lo stile che ti piace. In pochi secondi avrai un nome creativo da copiare e usare dove vuoi.
        </p>
        <h3 className="text-xl font-semibold mb-2">Perché usare nomi decorati?</h2>
        <p>
          I nomi decorati sono perfetti per i profili social, i giochi e le firme online. Rendono il tuo nome più bello e facile da ricordare.
        </p>
      </section>
    </main>
  );
}
