"use client"

import { Copy } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { useState } from "react"

interface Emoticon {
  symbol: string
  description: string
}

export default function EmoticonPage() {
  return (
    <div className="container mx-auto py-8 px-4">


      <h1 className="text-3xl font-bold text-center mb-4">Emoticon Testuali</h1>
      <p className="text-center text-muted-foreground mb-2">
        Sfoglia e copia emoticon semplici per i tuoi messaggi e social.
      </p>
      <p className="text-center text-muted-foreground mb-8 text-sm">
        Trova faccine, kaomoji e simboli per rendere le chat più divertenti.
      </p>

      <ClientEmoticonPage />
<div className="mt-12 max-w-2xl mx-auto text-center text-base leading-relaxed text-muted-foreground">
  <h2 className="text-xl font-semibold mb-4">Cos'è una emoticon?</h2>
  <p>
    Una emoticon è una faccina. Si scrive con la tastiera. Ti aiuta a dire come ti senti.
    Per esempio:
    <span className="font-mono">:)</span> vuol dire "sono felice",<br />
    <span className="font-mono">:(</span> vuol dire "sono triste",<br />
    <span className="font-mono">&lt;3</span> vuol dire "ti voglio bene".
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Come si usa?</h2>
  <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-md">
    <li>Guarda la faccina che ti piace.</li>
    <li>Clicca il bottone "Copia".</li>
    <li>Incolla la faccina nel tuo messaggio.</li>
  </ul>

  <p>
    Le emoticon fanno sembrare i messaggi più felici e simpatici.<br />
    Non serve scaricare niente. Basta copiare e incollare!<br />
    Ecco altri esempi:<br />
    <span className="font-mono">:D</span> = sto ridendo<br />
    <span className="font-mono">;)</span> = faccio l’occhiolino<br />
    <span className="font-mono">T_T</span> = sto piangendo
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Perché usarle?</h2>
  <p>
    Perché sono facili!<br />
    Tutti le capiscono. Puoi far vedere come ti senti.<br />
    E rendono i tuoi messaggi più divertenti!
  </p>
</div>


    </div>
  )
}

function ClientEmoticonPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copiedEmoticon, setCopiedEmoticon] = useState<string | null>(null)

  const emoticons: Emoticon[] = [
    { symbol: "O:)", description: "Angelo" },
    { symbol: "=D", description: "Sorriso grande" },
    { symbol: ":-D", description: "Sorriso grande" },
    { symbol: "=]", description: "Sorriso" },
    { symbol: ":-X", description: "Silenzioso" },
    { symbol: "=^.^=", description: "Gatto" },
    { symbol: ":'(", description: "Pianto" },
    { symbol: ":-)'", description: "Sbavando" },
    { symbol: "}:(", description: "Mezzo sorriso" },
    { symbol: ":-7", description: "Sorriso" },
    { symbol: ":*", description: "Bacio" },
    { symbol: ":-#", description: "Bocca sigillata" },
    { symbol: ":-{", description: "Triste" },
    { symbol: "@}-;-'--", description: "Baffi rosa" },
    { symbol: ":(", description: "Triste" },
    { symbol: "=O", description: "Scioccato" },
    { symbol: ":)", description: "Sorriso" },
    { symbol: "8-)", description: "Sorriso" },
    { symbol: ":-)", description: "Sorriso" },
    { symbol: ":-|", description: "Sorriso teso" },
    { symbol: "=p", description: "Lingua fuori" },
    { symbol: ":-\\", description: "Indeciso" },
    { symbol: ";)", description: "Occhiolino" },
    { symbol: ":-*", description: "Bacio" },
    { symbol: "=B", description: "Ronaldo" },
    { symbol: "^^", description: "Sorriso dolce" },
    { symbol: "D:", description: "Bocca aperta" },
    { symbol: "--'", description: "Imbarazzato" },
    { symbol: "d(-_-)b", description: "Ascoltando musica" },
    { symbol: "o.O", description: "Confuso" },
    { symbol: "T_T", description: "Piangendo" },
    { symbol: "U_U", description: "Dormendo" },
    { symbol: "$_$", description: "Amo i soldi" },
    { symbol: "{{{(>_<)}}}", description: "Impazzendo" },
    { symbol: "//.*))", description: "Emo" },
    { symbol: "X-(", description: "Arrabbiato" },
    { symbol: "~:@", description: "Bambino" },
    { symbol: "o\\-<]:", description: "Skater" },
    { symbol: "(_8^(|)", description: "Homer Simpson" },
    { symbol: "B^)", description: "Con occhiali" },
    // Emoticon con caratteri speciali
    { symbol: "̿ ̿'̿̿̿̿̿'\\̵͇̿̿\\=((•̪●)", description: "Emoticon speciale" },
    { symbol: "(●̮̃•̃)", description: "Emoticon speciale" },
    { symbol: "¬_¬", description: "Emoticon speciale" },
    { symbol: "⊙〈⊙", description: "Emoticon speciale" },
    { symbol: "⎝╰_╯⎠", description: "Emoticon speciale" },
    { symbol: "*:o)", description: "Emoticon speciale" },
    { symbol: "⁀‿⁀", description: "Emoticon speciale" },
    { symbol: "⁀‿ ⁀", description: "Emoticon speciale" },
    { symbol: "ヅツツッシ", description: "Emoticon giapponese" },
    { symbol: "ジ ッ", description: "Emoticon giapponese" },
    { symbol: "(ړײ♥", description: "Emoticon con cuore" },
    { symbol: "ツ ヅ", description: "Emoticon giapponese" },
    { symbol: "⊙‿⊙", description: "Emoticon speciale" },
    { symbol: "(╥_╥)", description: "Emoticon triste" },
    { symbol: "^‿^", description: "Sorriso" },
    { symbol: ">‿<", description: "Sorriso felice" },
    { symbol: "εїз", description: "Farfalla" },
    { symbol: "☺", description: "Faccina sorridente" },
    { symbol: "☹", description: "Faccina triste" },
    { symbol: "☻", description: "Faccina sorridente nera" },
    { symbol: "(‧'''‧)", description: "Emoticon speciale" },
    { symbol: "๑(•ิ.) •ั)๑", description: "Emoticon thailandese" },
    { symbol: '(,")', description: "Emoticon speciale" },
    { symbol: "♥", description: "Cuore" },
    { symbol: '(",)', description: "Emoticon speciale" },
    { symbol: "(Ø_©)", description: "Emoticon speciale" },
    { symbol: "⍨", description: "Emoticon speciale" },
    { symbol: "☠", description: "Teschio" },
    { symbol: ":-≬", description: "Emoticon speciale" },
    { symbol: "(⌒‿⌒)", description: "Sorriso felice" },
    { symbol: "⁽(ົ‿ົ⁾", description: "Emoticon speciale" },
    { symbol: "༽", description: "Emoticon speciale" },
    { symbol: "⁽༾ྋḻྋ༿⁾", description: "Emoticon speciale" },
    { symbol: "༼", description: "Emoticon speciale" },
    { symbol: "Ƹ̵̡Ӝ̵̨̄Ʒ", description: "Farfalla" },
    { symbol: "【ツ】", description: "Emoticon giapponese" },
    { symbol: "✿⊰", description: "Fiore" },
    { symbol: "ઇઉ", description: "Emoticon speciale" },
    { symbol: "(→ܫ◕ฺ人◕ฺฺܫ◕ฺ)", description: "Emoticon complessa" },
    { symbol: "ʕ•ᴥ•ʔ", description: "Orso" },
    { symbol: "ಠ_ಠ", description: "Disapprovazione" },
    { symbol: "¯\\_(ツ)_/¯", description: "Scrollata di spalle" },
    { symbol: "(゚ ✌∀゚)", description: "Emoticon giapponese" },
    { symbol: "☞", description: "Indicatore" },
    { symbol: "(♥.♥)", description: "Occhi a cuore" },
    { symbol: "ლ(ಠ▃ಠლ)", description: "Confusione" },
    { symbol: "(✌╰_╯)", description: "Pace" },
    { symbol: "☞", description: "Indicatore" },
    { symbol: "^▽^", description: "Sorriso felice" },
    { symbol: "٩(•̮̃•̃)۶", description: "Felicità" },
    { symbol: "٩(-̮̮̃-̃)۶", description: "Felicità" },
    { symbol: "٩(●̮̃•̃)۶", description: "Felicità" },
    { symbol: "٩(͡๏̯͡๏)۶", description: "Confusione" },
    { symbol: "٩(-̮̮̃•̃)۶", description: "Felicità" },
    { symbol: "���", description: "Alieno" },
  ]

  const filteredEmoticons = emoticons.filter(
    (emoticon) =>
      emoticon.description.toLowerCase().includes(searchTerm.toLowerCase()) || emoticon.symbol.includes(searchTerm),
  )

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedEmoticon(text)
    setTimeout(() => setCopiedEmoticon(null), 2000)
  }

  return (
    <>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Cerca emoticon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredEmoticons.map((emoticon, index) => (
          <Card
            key={index}
            className="p-4 flex flex-col items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2 font-mono min-h-[40px] flex items-center">{emoticon.symbol}</div>
            <div className="text-sm text-muted-foreground mb-2 text-center">{emoticon.description}</div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              onClick={() => copyToClipboard(emoticon.symbol)}
            >
              {copiedEmoticon === emoticon.symbol ? (
                <span className="text-green-500">Copiato!</span>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" /> Copia
                </>
              )}
            </Button>
          </Card>
        ))}
      </div>

      {filteredEmoticons.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">Nessuna emoticon trovata per la tua ricerca.</div>
      )}
    </>
  )
}
