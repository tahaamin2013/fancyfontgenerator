"use client"

import { Copy } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useState } from "react"

export default function SpecialCharactersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Tabella dei Caratteri Speciali
        </h1>

        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Cerca caratteri speciali..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Descrizione
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Codice HTML
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Carattere
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {characterData
                  .filter(
                    (char) =>
                      searchTerm === "" ||
                      char.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      char.htmlCode.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((char, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {char.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">
                        {char.htmlCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-2xl text-center">
                        {char.character}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <CopyButton text={char.htmlCode} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p>© 2025 Tabella dei Caratteri Speciali. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
    >
      <Copy className="h-4 w-4" />
      <span>{copied ? "Copiato!" : "Copia"}</span>
    </Button>
  )
}

const characterData = [
  { description: "Virgoletta singola sinistra", htmlCode: "&lsquo;", character: "'" },
  { description: "Virgoletta singola destra", htmlCode: "&rsquo;", character: "'" },
  { description: "Virgoletta singola bassa", htmlCode: "&sbquo;", character: "‚" },
  { description: "Virgolette doppie sinistra", htmlCode: "&ldquo;", character: '"' },
  { description: "Virgolette doppie destra", htmlCode: "&rdquo;", character: '"' },
  { description: "Virgolette doppie basse", htmlCode: "&bdquo;", character: "„" },
  { description: "Pugnale", htmlCode: "&dagger;", character: "†" },
  { description: "Doppio pugnale", htmlCode: "&Dagger;", character: "‡" },
  { description: "Per mille", htmlCode: "&permil;", character: "‰" },
  { description: "Virgoletta angolare singola sinistra", htmlCode: "&lsaquo;", character: "‹" },
  { description: "Virgoletta angolare singola destra", htmlCode: "&rsaquo;", character: "›" },
  { description: "Picche", htmlCode: "&spades;", character: "♠" },
  { description: "Fiori", htmlCode: "&clubs;", character: "♣" },
  { description: "Cuori", htmlCode: "&hearts;", character: "♥" },
  { description: "Quadri", htmlCode: "&diams;", character: "♦" },
  { description: "Linea superiore", htmlCode: "&oline;", character: "‾" },
  { description: "Freccia sinistra", htmlCode: "&larr;", character: "←" },
  { description: "Freccia su", htmlCode: "&uarr;", character: "↑" },
  { description: "Freccia destra", htmlCode: "&rarr;", character: "→" },
  { description: "Freccia giù", htmlCode: "&darr;", character: "↓" },
  { description: "Marchio registrato", htmlCode: "&#x2122;", character: "™" },
  { description: "Non utilizzato", htmlCode: "&#00;-&#08;", character: "" },
  { description: "Tab orizzontale", htmlCode: "&#09;", character: " " },
  { description: "Avanzamento riga", htmlCode: "&#10;", character: " " },
  { description: "Non utilizzato", htmlCode: "&#11;", character: "" },
  { description: "Spazio", htmlCode: "&#32;", character: " " },
  { description: "Punto esclamativo", htmlCode: "&#33;", character: "!" },
  { description: "Virgolette doppie", htmlCode: "&#34;", character: '"' },
  { description: "Cancelletto", htmlCode: "&#35;", character: "#" },
  { description: "Dollaro", htmlCode: "&#36;", character: "$" },
  { description: "Percentuale", htmlCode: "&#37;", character: "%" },
  { description: "E commerciale", htmlCode: "&amp;", character: "&" },
  { description: "Apostrofo", htmlCode: "&#39;", character: "'" },
  { description: "Parentesi sinistra", htmlCode: "&#40;", character: "(" },
  { description: "Parentesi destra", htmlCode: "&#41;", character: ")" },
  { description: "Asterisco", htmlCode: "&#42;", character: "*" },
  { description: "Segno più", htmlCode: "&#43;", character: "+" },
  { description: "Virgola", htmlCode: "&#44;", character: "," },
  { description: "Trattino", htmlCode: "&#45;", character: "-" },
  { description: "Punto", htmlCode: "&#46;", character: "." },
  { description: "Barra", htmlCode: "&#47;", character: "/" },
  { description: "Cifre 0-9", htmlCode: "&#48;-&#57;", character: "0-9" },
  { description: "Due punti", htmlCode: "&#58;", character: ":" },
  { description: "Punto e virgola", htmlCode: "&#59;", character: ";" },
  { description: "Minore di", htmlCode: "&lt;", character: "<" },
  { description: "Uguale", htmlCode: "&#61;", character: "=" },
  { description: "Maggiore di", htmlCode: "&gt;", character: ">" },
  { description: "Punto interrogativo", htmlCode: "&#63;", character: "?" },
  { description: "Chiocciola", htmlCode: "&#64;", character: "@" },
  { description: "Parentesi quadra sinistra", htmlCode: "&#91;", character: "[" },
  { description: "Barra rovesciata", htmlCode: "&#92;", character: "\\" },
  { description: "Parentesi quadra destra", htmlCode: "&#93;", character: "]" },
  { description: "Accento circonflesso", htmlCode: "&#94;", character: "^" },
  { description: "Barra orizzontale", htmlCode: "&#95;", character: "_" },
  { description: "Accento grave", htmlCode: "&#96;", character: "`" },
  { description: "Parentesi graffa sinistra", htmlCode: "&#123;", character: "{" },
  { description: "Barra verticale", htmlCode: "&#124;", character: "|" },
  { description: "Parentesi graffa destra", htmlCode: "&#125;", character: "}" },
  { description: "Tilde", htmlCode: "&#126;", character: "~" },
  { description: "Non utilizzato", htmlCode: "&#127;-&#149;", character: "" },
  { description: "Trattino 'en'", htmlCode: "&#150;", character: "–" },
  { description: "Trattino 'em'", htmlCode: "&#151;", character: "—" },
  { description: "Non utilizzato", htmlCode: "&#152;-&#159;", character: "" },
  { description: "Punto esclamativo invertito", htmlCode: "&#161;", character: "¡" },
  { description: "Centesimo", htmlCode: "&#162;", character: "¢" },
  { description: "Sterlina", htmlCode: "&#163;", character: "£" },
  { description: "Simbolo valuta", htmlCode: "&#164;", character: "¤" },
  { description: "Yen", htmlCode: "&#165;", character: "¥" },
  { description: "Barra verticale spezzata", htmlCode: "&#166;", character: "¦" },
  { description: "Paragrafo", htmlCode: "&#167;", character: "§" },
  { description: "Dieresi", htmlCode: "&#168;", character: "¨" },
  { description: "Copyright", htmlCode: "&#169;", character: "©" },
  { description: "Ordinale femminile", htmlCode: "&#170;", character: "ª" },
  { description: "Virgolette angolari doppie sinistra", htmlCode: "&#171;", character: "«" },
  { description: "Negazione logica", htmlCode: "&#172;", character: "¬" },
  { description: "Trattino morbido", htmlCode: "&#173;", character: "­" },
  { description: "Marchio registrato", htmlCode: "&#174;", character: "®" },
  { description: "Macron", htmlCode: "&#175;", character: "¯" },
  { description: "Grado", htmlCode: "&#176;", character: "°" },
  { description: "Più o meno", htmlCode: "&#177;", character: "±" },
  { description: "Al quadrato", htmlCode: "&#178;", character: "²" },
  { description: "Al cubo", htmlCode: "&#179;", character: "³" },
  { description: "Accento acuto", htmlCode: "&#180;", character: "´" },
  { description: "Micro", htmlCode: "&#181;", character: "µ" },
  { description: "Segno di paragrafo", htmlCode: "&#182;", character: "¶" },
  { description: "Punto centrale", htmlCode: "&#183;", character: "·" },
  { description: "Cediglia", htmlCode: "&#184;", character: "¸" },
  { description: "Alla potenza di uno", htmlCode: "&#185;", character: "¹" },
  { description: "Ordinale maschile", htmlCode: "&#186;", character: "º" },
  { description: "Virgolette angolari doppie destra", htmlCode: "&#187;", character: "»" },
  { description: "Frazione un quarto", htmlCode: "&#188;", character: "¼" },
  { description: "Frazione un mezzo", htmlCode: "&#189;", character: "½" },
  { description: "Frazione tre quarti", htmlCode: "&#190;", character: "¾" },
  { description: "Punto interrogativo invertito", htmlCode: "&#191;", character: "¿" },
  { description: "A maiuscola con dieresi", htmlCode: "&#196;", character: "Ä" },
  { description: "A maiuscola con anello", htmlCode: "&#197;", character: "Å" },
  { description: "AE maiuscola", htmlCode: "&#198;", character: "Æ" },
  { description: "C maiuscola con cediglia", htmlCode: "&#199;", character: "Ç" },
  { description: "E maiuscola con accento grave", htmlCode: "&#200;", character: "È" },
  { description: "E maiuscola con accento acuto", htmlCode: "&#201;", character: "É" },
  { description: "E maiuscola con accento circonflesso", htmlCode: "&#202;", character: "Ê" },
  { description: "E maiuscola con dieresi", htmlCode: "&#203;", character: "Ë" },
  { description: "I maiuscola con accento grave", htmlCode: "&#204;", character: "Ì" },
  { description: "I maiuscola con accento acuto", htmlCode: "&#205;", character: "Í" },
  { description: "I maiuscola con accento circonflesso", htmlCode: "&#206;", character: "Î" },
  { description: "I maiuscola con dieresi", htmlCode: "&#207;", character: "Ï" },
  { description: "Eth maiuscola, islandese", htmlCode: "&#208;", character: "Ð" },
  { description: "N maiuscola con tilde", htmlCode: "&#209;", character: "Ñ" },
  { description: "O maiuscola con accento grave", htmlCode: "&#210;", character: "Ò" },
  { description: "O maiuscola con accento acuto", htmlCode: "&#211;", character: "Ó" },
  { description: "O maiuscola con accento circonflesso", htmlCode: "&#212;", character: "Ô" },
  { description: "O maiuscola con tilde", htmlCode: "&#213;", character: "Õ" },
  { description: "O maiuscola con dieresi", htmlCode: "&#214;", character: "Ö" },
  { description: "Segno di moltiplicazione", htmlCode: "&#215;", character: "×" },
  { description: "O maiuscola sbarrata", htmlCode: "&#216;", character: "Ø" },
  { description: "U maiuscola con accento grave", htmlCode: "&#217;", character: "Ù" },
  { description: "U maiuscola con accento acuto", htmlCode: "&#218;", character: "Ú" },
  { description: "U maiuscola con accento circonflesso", htmlCode: "&#219;", character: "Û" },
  { description: "U maiuscola con dieresi", htmlCode: "&#220;", character: "Ü" },
  { description: "Y maiuscola con accento acuto", htmlCode: "&#221;", character: "Ý" },
  { description: "THORN maiuscola, islandese", htmlCode: "&#222;", character: "Þ" },
  { description: "Eszett minuscola, tedesco", htmlCode: "&#223;", character: "ß" },
  { description: "a minuscola con accento grave", htmlCode: "&#224;", character: "à" },
  { description: "a minuscola con accento acuto", htmlCode: "&#225;", character: "á" },
  { description: "a minuscola con accento circonflesso", htmlCode: "&#226;", character: "â" },
  { description: "a minuscola con tilde", htmlCode: "&#227;", character: "ã" },
  { description: "a minuscola con dieresi", htmlCode: "&#228;", character: "ä" },
  { description: "a minuscola con anello", htmlCode: "&#229;", character: "å" },
  { description: "ae minuscola", htmlCode: "&#230;", character: "æ" },
  { description: "c minuscola con cediglia", htmlCode: "&#231;", character: "ç" },
  { description: "e minuscola con accento grave", htmlCode: "&#232;", character: "è" },
  { description: "e minuscola con accento acuto", htmlCode: "&#233;", character: "é" },
  { description: "e minuscola con accento circonflesso", htmlCode: "&#234;", character: "ê" },
  { description: "e minuscola con dieresi", htmlCode: "&#235;", character: "ë" },
  { description: "i minuscola con accento grave", htmlCode: "&#236;", character: "ì" },
  { description: "i minuscola con accento acuto", htmlCode: "&#237;", character: "í" },
  { description: "i minuscola con accento circonflesso", htmlCode: "&#238;", character: "î" },
  { description: "i minuscola con dieresi", htmlCode: "&#239;", character: "ï" },
  { description: "eth minuscola, islandese", htmlCode: "&#240;", character: "ð" },
  { description: "n minuscola con tilde", htmlCode: "&#241;", character: "ñ" },
  { description: "o minuscola con accento grave", htmlCode: "&#242;", character: "ò" },
  { description: "o minuscola con accento acuto", htmlCode: "&#243;", character: "ó" },
  { description: "o minuscola con accento circonflesso", htmlCode: "&#244;", character: "ô" },
  { description: "o minuscola con tilde", htmlCode: "&#245;", character: "õ" },
  { description: "o minuscola con dieresi", htmlCode: "&#246;", character: "ö" },
  { description: "Segno di divisione", htmlCode: "&#247;", character: "÷" },
  { description: "o minuscola sbarrata", htmlCode: "&#248;", character: "ø" },
  { description: "u minuscola con accento grave", htmlCode: "&#249;", character: "ù" },
  { description: "u minuscola con accento acuto", htmlCode: "&#250;", character: "ú" },
  { description: "u minuscola con accento circonflesso", htmlCode: "&#251;", character: "û" },
  { description: "u minuscola con dieresi", htmlCode: "&#252;", character: "ü" },
  { description: "y minuscola con accento acuto", htmlCode: "&#253;", character: "ý" },
  { description: "thorn minuscola, islandese", htmlCode: "&#254;", character: "þ" },
  { description: "y minuscola con dieresi", htmlCode: "&#255;", character: "ÿ" },
  { description: "Alfa maiuscola", htmlCode: "&Alpha;", character: "Α" },
  { description: "alfa minuscola", htmlCode: "&alpha;", character: "α" },
  { description: "Beta maiuscola", htmlCode: "&Beta;", character: "Β" },
  { description: "beta minuscola", htmlCode: "&beta;", character: "β" },
  { description: "Gamma maiuscola", htmlCode: "&Gamma;", character: "Γ" },
  { description: "gamma minuscola", htmlCode: "&gamma;", character: "γ" },
  { description: "Delta maiuscola", htmlCode: "&Delta;", character: "Δ" },
  { description: "delta minuscola", htmlCode: "&delta;", character: "δ" },
  { description: "Epsilon maiuscola", htmlCode: "&Epsilon;", character: "Ε" },
  { description: "epsilon minuscola", htmlCode: "&epsilon;", character: "ε" },
  { description: "Zeta maiuscola", htmlCode: "&Zeta;", character: "Ζ" },
  { description: "zeta minuscola", htmlCode: "&zeta;", character: "ζ" },
  { description: "Eta maiuscola", htmlCode: "&Eta;", character: "Η" },
  { description: "eta minuscola", htmlCode: "&eta;", character: "η" },
  { description: "Theta maiuscola", htmlCode: "&Theta;", character: "Θ" },
  { description: "theta minuscola", htmlCode: "&theta;", character: "θ" },
  { description: "Iota maiuscola", htmlCode: "&Iota;", character: "Ι" },
  { description: "iota minuscola", htmlCode: "&iota;", character: "ι" },
  { description: "Kappa maiuscola", htmlCode: "&Kappa;", character: "Κ" },
  { description: "kappa minuscola", htmlCode: "&kappa;", character: "κ" },
  { description: "Lambda maiuscola", htmlCode: "&Lambda;", character: "Λ" },
  { description: "lambda minuscola", htmlCode: "&lambda;", character: "λ" },
  { description: "Mu maiuscola", htmlCode: "&Mu;", character: "Μ" },
  { description: "mu minuscola", htmlCode: "&mu;", character: "μ" },
  { description: "Nu maiuscola", htmlCode: "&Nu;", character: "Ν" },
  { description: "nu minuscola", htmlCode: "&nu;", character: "ν" },
  { description: "Xi maiuscola", htmlCode: "&Xi;", character: "Ξ" },
  { description: "xi minuscola", htmlCode: "&xi;", character: "ξ" },
  { description: "Omicron maiuscola", htmlCode: "&Omicron;", character: "Ο" },
  { description: "omicron minuscola", htmlCode: "&omicron;", character: "ο" },
  { description: "Pi maiuscola", htmlCode: "&Pi;", character: "Π" },
  { description: "pi minuscola", htmlCode: "&pi;", character: "π" },
  { description: "Rho maiuscola", htmlCode: "&Rho;", character: "Ρ" },
  { description: "rho minuscola", htmlCode: "&rho;", character: "ρ" },
  { description: "Sigma maiuscola", htmlCode: "&Sigma;", character: "Σ" },
  { description: "sigma minuscola", htmlCode: "&sigma;", character: "σ" },
  { description: "Tau maiuscola", htmlCode: "&Tau;", character: "Τ" },
  { description: "tau minuscola", htmlCode: "&tau;", character: "τ" },
  { description: "Upsilon maiuscola", htmlCode: "&Upsilon;", character: "Υ" },
  { description: "upsilon minuscola", htmlCode: "&upsilon;", character: "υ" },
  { description: "Phi maiuscola", htmlCode: "&Phi;", character: "Φ" },
  { description: "phi minuscola", htmlCode: "&phi;", character: "φ" },
  { description: "Chi maiuscola", htmlCode: "&Chi;", character: "Χ" },
  { description: "chi minuscola", htmlCode: "&chi;", character: "χ" },
  { description: "Psi maiuscola", htmlCode: "&Psi;", character: "Ψ" },
  { description: "psi minuscola", htmlCode: "&psi;", character: "ψ" },
  { description: "Omega maiuscola", htmlCode: "&Omega;", character: "Ω" },
  { description: "omega minuscola", htmlCode: "&omega;", character: "ω" },
  { description: "Punto password", htmlCode: "&#9679;", character: "●" },
  { description: "Punto elenco", htmlCode: "&#8226;", character: "•" },
]
