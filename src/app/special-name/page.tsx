import FancyTextGenerator from "@/src/components/fancy-text-generator";


export default function Home() {
  return (
    <main className="min-h-screen">
      <FancyTextGenerator />
    </main>
  )
}
export const metadata = {
  title: "Generatore di Testo Fantasioso",
  description: "Crea testi stilizzati e fantasiosi facilmente online.",
};