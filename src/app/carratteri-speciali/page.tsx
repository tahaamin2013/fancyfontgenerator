import CharacterGrid from "@/src/components/character-grid"
import { Button } from "@/src/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-700 flex justify-between items-center text-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Caratteri Speciali</h1>
          <p className="text-lg md:text-xl opacity-90">Benvenuto alla nostra collezione di caratteri speciali!</p>
        </div>
            {/* Instructions */}
      <div className="p-4 text-left rounded-lg mb-8">
        <h3 className="font-medium text-white mb-2">Come utilizzare i caratteri speciali</h3>
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


    </div>
  )
}
