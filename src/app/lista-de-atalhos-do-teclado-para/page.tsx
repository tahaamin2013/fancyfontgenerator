import { ArrowRight, Info } from "lucide-react"
import { Card } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Scorciatoie Alt Code - Caratteri Speciali a Portata di Mano",
  description:
    "Scopri come usare i codici Alt per digitare caratteri speciali su Windows. Elenco completo di simboli e istruzioni passo passo.",
  alternates: {
    canonical: "https://www.caratterispeciali10.it/lista-de-atalhos-do-teclado-para",
  },
}
export default function KeyboardShortcutsPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
 
      <header className="bg-purple-800 text-white py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Scorciatoie Alt Code</h1>
          <p className="text-purple-200 text-lg">Caratteri speciali a portata di mano</p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8 md:px-6">
        <section className="mb-10">
          <Card className="p-6 border-purple-200 bg-white shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Come Usare i Codici Alt</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I Codici Alt sono utilizzati per inserire caratteri che non sono presenti sulla tastiera. Quando
                    tieni premuto il tasto Alt e digiti numeri utilizzando il tastierino numerico, viene stampato un
                    simbolo o carattere speciale.
                  </p>

                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 flex items-center gap-2 mb-2">
                      <span className="bg-purple-800 text-white p-1 rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">
                        1
                      </span>
                      Assicurati che il Bloc Num sia ATTIVO
                    </h3>
                    <h3 className="font-semibold text-purple-800 flex items-center gap-2 mb-2">
                      <span className="bg-purple-800 text-white p-1 rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">
                        2
                      </span>
                      Tieni premuto il tasto Alt
                    </h3>
                    <h3 className="font-semibold text-purple-800 flex items-center gap-2 mb-2">
                      <span className="bg-purple-800 text-white p-1 rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">
                        3
                      </span>
                      Digita il numero sul tastierino numerico
                    </h3>
                    <h3 className="font-semibold text-purple-800 flex items-center gap-2">
                      <span className="bg-purple-800 text-white p-1 rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">
                        4
                      </span>
                      Rilascia il tasto Alt e il simbolo apparirà
                    </h3>
                  </div>

                  <div className="flex items-start gap-2 mt-4">
                    <div className="mt-1 text-purple-600">
                      <Info size={20} />
                    </div>
                    <p className="text-sm">
                      <strong>Importante:</strong> Questo funziona solo su Windows con un tastierino numerico (tastiera
                      desktop o completa). Non funzionerà su laptop senza un tastierino numerico dedicato a meno che non
                      si attivi il tastierino numerico tramite il tasto Funzione (Fn) o si utilizzi la tastiera su
                      schermo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 bg-purple-800 rounded-lg p-6 text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Esempi</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 1</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">☺</span>
                  </li>
                    <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 6</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">♠</span>
                  </li>
                                  <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 13</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">♪</span>
                  </li>
                        <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 14</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">♫</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 3</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">♥</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Badge className="bg-white text-purple-800 hover:bg-purple-100">Alt + 15</Badge>
                    <ArrowRight size={16} className="text-purple-300" />
                    <span className="text-2xl">☼</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <Tabs defaultValue="symbols" className="mb-10">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
            <TabsTrigger value="symbols">Simboli Comuni</TabsTrigger>
            <TabsTrigger value="all">Tutti i Codici Alt</TabsTrigger>
          </TabsList>

          <TabsContent value="symbols" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { code: 1, char: "☺" },
                { code: 2, char: "☻" },
                { code: 3, char: "♥" },
                { code: 4, char: "♦" },
                { code: 5, char: "♣" },
                { code: 6, char: "♠" },
                { code: 13, char: "♪" },
                { code: 14, char: "♫" },
                { code: 15, char: "☼" },
                { code: 169, char: "®" },
                { code: 184, char: "©" },
                { code: 248, char: "°" },
                { code: 251, char: "¹" },
                { code: 252, char: "³" },
                { code: 253, char: "²" },
              ].map((item) => (
                <Card
                  key={item.code}
                  className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="p-4 text-center">
                    <div className="text-3xl mb-2 text-purple-800">{item.char}</div>
                    <div className="text-sm font-medium text-gray-600">Alt+{item.code}</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { code: 1, char: "☺" },
                { code: 2, char: "☻" },
                { code: 3, char: "♥" },
                { code: 4, char: "♦" },
                { code: 5, char: "♣" },
                { code: 6, char: "♠" },
                { code: 7, char: "•" },
                { code: 8, char: "◘" },
                { code: 9, char: "○" },
                { code: 10, char: "◙" },
                { code: 11, char: "♂" },
                { code: 12, char: "♀" },
                { code: 13, char: "♪" },
                { code: 14, char: "♫" },
                { code: 15, char: "☼" },
                { code: 16, char: "►" },
                { code: 17, char: "◄" },
                { code: 18, char: "↕" },
                { code: 20, char: "¶" },
                { code: 21, char: "§" },
                { code: 22, char: "▬" },
                { code: 23, char: "ý" },
                { code: 24, char: "↑" },
                { code: 25, char: "↓" },
                { code: 26, char: "→" },
                { code: 27, char: "←" },
                { code: 28, char: "∟" },
                { code: 29, char: "↔" },
                { code: 30, char: "▲" },
                { code: 31, char: "▼" },
                { code: 42, char: "*" },
                { code: 127, char: "⌂" },
                { code: 139, char: "ï" },
                { code: 140, char: "¥" },
                { code: 143, char: "Å" },
                { code: 145, char: "æ" },
                { code: 146, char: "Æ" },
                { code: 155, char: "ø" },
                { code: 156, char: "£" },
                { code: 157, char: "Ø" },
                { code: 158, char: "×" },
                { code: 159, char: "ƒ" },
                { code: 166, char: "ª" },
                { code: 167, char: "º" },
                { code: 168, char: "¿" },
                { code: 169, char: "®" },
                { code: 170, char: "¬" },
                { code: 171, char: "½" },
                { code: 172, char: "¼" },
                { code: 173, char: "¡" },
                { code: 174, char: "«" },
                { code: 175, char: "»" },
                { code: 176, char: "░" },
                { code: 177, char: "▒" },
                { code: 178, char: "▓" },
                { code: 179, char: "│" },
                { code: 180, char: "┤" },
                { code: 182, char: "Â" },
                { code: 183, char: "À" },
                { code: 184, char: "©" },
                { code: 185, char: "╣" },
                { code: 186, char: "║" },
                { code: 187, char: "╗" },
                { code: 188, char: "╝" },
                { code: 189, char: "¢" },
                { code: 190, char: "¥" },
                { code: 191, char: "┐" },
                { code: 192, char: "└" },
                { code: 193, char: "┴" },
                { code: 194, char: "┬" },
                { code: 195, char: "├" },
                { code: 196, char: "─" },
                { code: 197, char: "┼" },
                { code: 200, char: "╚" },
                { code: 201, char: "╔" },
                { code: 202, char: "╩" },
                { code: 203, char: "╦" },
                { code: 204, char: "╠" },
                { code: 205, char: "═" },
                { code: 206, char: "╬" },
                { code: 207, char: "¤" },
                { code: 209, char: "Ð" },
                { code: 213, char: "ı" },
                { code: 217, char: "┘" },
                { code: 218, char: "┌" },
                { code: 219, char: "█" },
                { code: 220, char: "▄" },
                { code: 221, char: "¦" },
                { code: 222, char: "Ì" },
                { code: 223, char: "▀" },
                { code: 225, char: "ß" },
                { code: 230, char: "µ" },
                { code: 231, char: "þ" },
                { code: 232, char: "Þ" },
                { code: 238, char: "¯" },
                { code: 239, char: "´" },
                { code: 241, char: "±" },
                { code: 242, char: "‗" },
                { code: 243, char: "¾" },
                { code: 244, char: "¶" },
                { code: 245, char: "§" },
                { code: 247, char: "¸" },
                { code: 248, char: "°" },
                { code: 249, char: "¨" },
                { code: 250, char: "•" },
                { code: 251, char: "¹" },
                { code: 252, char: "³" },
                { code: 253, char: "²" },
                { code: 254, char: "■" },
              ].map((item) => (
                <Card
                  key={item.code}
                  className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="p-4 text-center">
                    <div className="text-3xl mb-2 text-purple-800">{item.char}</div>
                    <div className="text-sm font-medium text-gray-600">Alt+{item.code}</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Alert className="bg-purple-100 border-purple-300">
          <Info className="h-5 w-5 text-purple-800" />
          <AlertTitle className="text-purple-800">Compatibilità della Tastiera</AlertTitle>
          <AlertDescription className="text-purple-700">
            I codici Alt funzionano meglio su computer Windows con un tastierino numerico. Se stai utilizzando un laptop
            senza un tastierino numerico, potresti dover utilizzare il tasto Fn per attivare il tastierino numerico
            incorporato o utilizzare la tastiera su schermo.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  )
}
