import { Metadata } from "next";
import FancyTextGenerator from "@/src/components/fancy-text-generator";

export const metadata: Metadata = {
  title: "Nome Speciale - Generatore di Testo Fantasioso",
  description: "Crea un nome speciale con il nostro generatore di testo fantasioso. Personalizza e copia facilmente nomi unici e creativi.",
  alternates: {
    canonical: "https://caratterispeciali10.it/nomi-speciale",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen">
      <FancyTextGenerator />
    </main>
  );
}
