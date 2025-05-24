"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

// All special characters from the provided data
const allCharacters = `∞ ♫ ♬ ♭ ♮ ♯ ♰ ♱ ✁ ✂ ✃ ✄ ✆ ✇ ✈ ✉ ✌ ✍ ✎ ✏ ✐ ✑ ✒ ✓ ✔ ✕ ✖ ✗ ✘ ✙ ✚ ✛ ✜ ✝ ✞ ✟ ✠ ✡ ✢ ✣ ✤ ✥ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✱ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▉ ▊ ▋ ▍ ▎ ▏ ▐ ░ ▒ ▓ ■ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▬ ▭ ▮ ▯ ▰ ▱ ▲ △ ▴ ▵ ▶ ▷ ▸ ▹ ► ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃◄ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ◘ ◙ ◚ ◛ ◜ ◝ ◞ ◟ ◠ ◡ ◢ ◣ ◤ ◥ ◦ ◧ ◨ ◩ ◪ ◫ ◬ ◭ ◮ ◯ ☀ ☁ ☂ ☃ ☄ ★ ☆ ☇ ☈ ☉ ☊ ☋ ☌ ☍ ☎ ☏ ☐ ☑ ☒ ☓ ☚ ☛ ☜ ☝ ☞ ☟ ☠ ☡ ☢ ☣ ☤ ☥ ☦ ☧ ☨ ☩ ☪ ☫ ☬ ☭ ☮ ☯ ☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷ ☸ ☹ ☺ ☻ ☼ ☽ ☾ ☿ ♀ ♁ ♂ ♃ ♄ ♅ ♆ ♇ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟ ♠ ♡ ♢ ♣ ♤ ♥ ♦ ♧ ♨ ♩ ♪ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❄ ❅ ❆ ❇ ❈ ❉ ❊ ❋ ❍ ❏ ❐ ❑ ❒ ❖ ❘ ❙ ❚ ❛ ❜ ❝ ❞ ❡ ❢ ❣ ❤ ❥ ❦ ❧ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓ ➔ ➘ ➙ ➚ ➛ ➜ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ ➻ ➼ ➽ ➾ ⟡ ⟦ ⟧ ⟨ ⟩ ⟪ ⟫ ⟰ ⟱ ⟲ ⟳ ⟴ ⟵ ⟿ ⤡ ⤢ ⤣ ⤤ ⤥ ⤦ ⤧ ⤨ ⤩ ⤪ ⤫ ⤬ ⤭ ⤮ ⤯ ⤰ ⤱ ⤲ ⤳ ⤴ ⤵ ⤶ ⤷ ⤸ ⤹ ⤺ ⤻ ⤼ ⤽ ⤾ ⤿ ⥀ ⥁ ⥂ ⥃ ⥄ ⥅ ⥆ ⥇ ⥈ ⥉ ⥊ ⥋ ⥌ ⥍ ⥎ ⥏ ⥐ ⥑ ⥒ ⥓ ⥔ ⥕ ⥖ ⥗ ⥘ ⥙ ⥚ ⥛ ⥜ ⥝ ⥞     H L N No℗P Q R R R Z E M ℺γ Π∑⅁⅂ ⅃ ⅄ D d e i j 1/3 2/3 1/5 2/5 3/5 4/5 1/6 5/6 1/8 3/8 5/8 7/8 1/ I. II. III. IV. V. VII. VIII. IX. X. XI. XII. L. C. D. M. i. ii. iii. iv. v. vi. vii. viii. ix. x. xi. xii. l. c. d. m. ↂ ← ↑ → ↓ ↔ ↙ ↕ ↖ ↗ ↘ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↵ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ 2 1 C 0 ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ⇫ ⇬ ⇭ ⇮ ⇯ ⇰ ⇱ ⇲ ⇳⇴ ⇶ ⇷ ⇸ ⇹ ⇺ ⇻ ⇼ ⇽ ⇾ ⇿ ← ↑ → ↓ ↔ ↙ ↕ ↖ ↗ ↘ ↚ ↛ ↜ ↝ ↞ ↟ I. II. III. IV. V. VI. VII. VIII. IX. X. XI. XII. L. C. D. M. i. ii. iii. iv. v. vi. vii. viii. ix. x. xi. xi. xii. 1/3 2/3 1/5 2/5 3/5 4/5 1/6 5/6 1/8 3/8 5/8 7/8 1/ ᴖ ᴗ ᴝ ᴟ ᴥ ᴦ ᴧ ० १ ॰ ৲ ৴ ੦ ૦ ଽ ୹ ఇ ౦ ౧ ಇ ൫ ൬๏ ๐ ໂ ໃ ໄ ༌ ། ༎ ༏ ༐ ༑ ༒ ༼ ༽ ༾ ༿ ོ ∬ ∆ ∇ ∊ ∋ ∍ ∎ ∏ ∐ ∑ ∓ ∔ ∕ ∖ ∘ ∙ ∛ ∜ ∝ ∞ ∟ ∬ ∭ ∳ ∴ ∵ ∶ ∷ ∸ ∹ ∺ ∻ ∼ ∽ ∾ ∿ ≀ ≁ ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ ≌ ≍ ≎ ≏ ≐ ≑ ≒ ≓ ≔ ≕ ≖ ≗ ≘ ≙ ≚ ≛ ≜ ≝ ≞ ≟ ≠ ≡ ≢ ≣ ≤ ≥ ≦ ≧ ≨ ≩ ≪ ≫ ≬ ≭ ≮ ≯ ≰ ≱ ≲ ≳ ≴ ≵ ≶ ≷ ≸ ≹ ≺ ≻ ≼ ≽ ≾ ≿ ⊀ ⊁ ⊂ ⊃ ⊄ ⊅ ⊆ ⊇ ⊈ ⊉ ⊊ ⊋ ⊌ ⊍ ⊎ ⊏ ⊐ ⊑ ⊒ ⊓ ⊔ ⊕ ⊖ ⊗ ⊘ ⊙ ⊚ ⊛ ⊜ ⊝ ⊞ ⊟ ⊠ ⊡ ⊢ ⊣ ⊤ ⊥ ⊦ ⊧ ⊨ ⊩ ⊪ ⊫ ⊬ ⊭ ⊮ ⊯ ⊰ ⊱ ⊲ ⊳ ⊴ ⊵ ⊶ ⊷ ⊸ ⊹ ⊺ ⊻ ⊼ ⊽ ⊾ ⊿ ⋀ ⋁ ⋂ ⋃ ⋄ ⋅ ⋇ ⋈ ⋉ ⋊ ⋋ ⋌ ⋍ ⋎ ⋏ ⋐ ⋑ ⋒ ⋓ ⋔ ⋕ ⋖ ⋗ ⋘ ⋙ ⋚ ⋛ ⋜ ⋝ ⋞ ⋟ ⋠ ⋡ ⋢ ⋣ ⋤ ⋥ ⋦ ⋧ ⋨ ⋩ ⋪ ⋫ ⋬ ⋭ ⋮ ⋯ ⋰ ⋱ ⋲ ⋳ ⋴ ⋵ ⋶ ⋷ ⋸ ⋹ ⋺ ⋻ ⋼ ⋽ ⋾ ⋿ ⌀ ⌁ ⌂ ⌃ ⌄ ⌅ ⌆ ⌇ ⌈ ⌉ ⌊ ⌋ ⌌ ⌍ ⌎ ⌏ ⌐ ⌑ ⌒ ⌓ ⌔ ⌕ ⌖ ⌗ ⌘ ⌙ ⌚ ⌛ ⌜ ⌝ ⌞ ⌟ ⌠ ⌡ ⌢ ⌣ ⌤ ⌥ ⌦ ⌧ ⌨ ⟨ ⟩ ⌫ ⌬ ⌭ ⌮ ⌯ ⌰ ⌱ ⌲ ⌳ ⌴ ⌵ ⌶ ⌷ ⌸ ⌹ ⌺ ⌻ ⌼ ⌽ ⌾ ⌿ ⍀ ⍁ ⍂ ⍃ ⍄ ⍅ ⍆ ⍇ ⍈ ⍉ ⍊ ⍋ ⍌ ⍍ ⍎ ⍏ ⍐ ⍑ ⍒ ⍓ ⍔ ⍕ ⍖ ⍗ ⍘ ⍙ ⍚ ⍛ ⍜ ⍝ ⍞ ⍟ ⍠ ⍡ ⍢ ⍣ ⍤ ⍥ ⍦ ⍧ ⍨ ⍩ ⍪ ⍫ ⍬ ⍭ ⍮ ⍯ ⍰ ⍱ ⍲ ⍳ ⎠ ⎡ ⎢ ⎣ ⎤ ⎥ ⎦ ⎧ ⎨ ⎩ ⎪ ⎫ ⎬ ⎭ ⎮ ⎯ ⎰⎱ ⎲ ⎳ ⎴ ⎵ ⎶ ⎛ ⎜ ⎝ ⎞ ⎟ ⏜ ⏝ ⏞ ⏞ ⎡ �� ⑀ ⑁ ⑂ ⑃ ⑄ ⑅ ⑆ ⑇ ⑈ ⑉ ⑊ (1) (2) (3) (4) (5) (6) (7) (8) (9) (10) (11) (12) (13) (14) (15) (16) (17) (18) (19) (20) (A) (B) (C) (D) (E) (F) (G) (H) (I) (J) (K) (L) (M) (N) (O) (P) (Q) (R) (S) (T) (U) (V) (W) (X) (Y) (Z) (a) (b) (c) (d) (e) (f) (g) (h) (i) (j) (k) (l) (m) (n) (o) (p) ─ ━ │ ┃ ┄ ┅ ┆ ┇ │ ┄ ┅ ┆ ┇ │ � ┉ ┊ ┋ ┌ ┍ ┎ ┏ ┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛├ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┤┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ═ ║ ╒ ╓ ╔ ╕╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟ ╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╭ ╮ ╯ ╰ ╱ ╲ ╳ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿ ⓿〞〟 _( ) { } 〔 〕 【 】 《 》 〉 「 」 『 』 ( ) { } ( ) # ¬ ¥ ₩ € ' ƒ " ... † ‡ ˆ ‰ Š ‹ Œ Ž — ™ š › œ ž Ÿ ¡ ¢ £ ¤ ¥ ¦ ̈ © ª « ¬®° ± ² ³ μ ¶ · ̧¹º»1/4 ƍ ǝ ə ɛ ƒ ƒ ɣ ƕ ɩ ɨ ƚ ƛ ɯ ɲ ƞ ɵ ƣ ƣ ƥ ƨ ƨ ƨ ʃ ƪ ƭ ʊ ʋ ƴ ƴ ƶ ƶ ʒ ƹ ƹ ƺ ƻ ƾ ƿǁ ǂ ǥ ǥ ǯ ǯ ƕ ƿ ƞ ȡ ȣ ȣ ȴ ȵ ȶ ȷ ȸ ȹ ⱥ ȼ ƚ ⱦ ɀ ɂ ƀ ʉ ʌ ɇ ɇ ɉ ɉ ɋ ɍ ɍ ɏ ɏ ɐ ɑ ɒ ɓ ɔ ɕ ɖ ɗ ɘ ə ɛ ɜ ɝ ɞ ɟ ɡ ɢ ɣ ɤ ɥ ɦ ɧ ɨ ɩ ɪ ɫ ɬ ɭ ɮ ɯ ɰ ɱ ɲ ɳ ɵ ɶ ɷ ɸ ɹ ɺ ɻ ɼ ɽ ɾ ɿ ʁ ʃ ʄ ʅ ʆ ʇ ʈ ʉ ʊ ʋ ʌ ʍ ʎ ʑ ʒ ʓ ʔ ʕ ʖ ʗ ʘ ʚ ʝ ʞ ʠ ʡ ʢ ʦ ʧ ʨ ʩ ʪ ʬ ʭ ʮ ʯ ʰ ʱ ʲ ʳ ʴ ʵ ʶ ʷ ʸ ʹ ʺ ʻ ʼ ʽ ʾ ʿ ˀ ˁ ˄ ˅ ˆ ˇ ˈ ˉ ˊ ˋ ˌ ˍ ˎ ˏ ˑ ˒ ˓ ˔ ˕ ˖ ˗ ̆ ̇ ° ̨ ̃ ̋ ˟ ɣ l s x ʕ ˥ ˦ ˧ ˨ ˩ ˪ ˫ ˬ ˭ ˮ ˯ ˰ ˱ ˲ ˳ ˴ ˵ ˶ ˷ ˸ ˹ ˺ ˻ ˼ ˽ ˾ ˿ ̛ ̦ ʹ ͵ ͅ ͻ ͼ ͽ ; ΄ ΅ Δ Θ Ξ Π Σ Φ Ψ Ω έ ί ΰ β γ δ ε ζ θ ι κ λ μ ν ξ ο π ρ ς σ τ υ φ χ ψ ω Ϡ ϡ Ϣ ϣ Ϥ ϥ Ϧ ϧ Ϩ ϩ Ϫ ϫ Ϭ ϭ Ϯ ϯ ϰ ϱ ϵ ϶ Ϸ ϸ ϻ ϼ Ͻ Ͼ Ͽ Ж Ф Ш Ю Я ф Ѡ Ѳ Ѽ ѽ Ѿ Ҩ ҩ Ұ Ӷ Ԑ ԑ Ո շ ۝ ۞ ۩ ۵ ܓ ܟ ݀ ހ މ Ⴙ ᄀ ᄼ ᄽ ᄾ ᄿ ᆍ ᆕ ᆜ † ‡ • ‣ ‴ ‷ ‹ › ‿ ⁀ ₓ ₦ ₩`

// Split the characters into an array
const charactersArray = allCharacters.split(" ").filter((char) => char.trim() !== "")

// Group characters into categories for better organization
const categories = [
  { name: "Simboli", chars: charactersArray.slice(0, 100) },
  { name: "Forme", chars: charactersArray.slice(100, 200) },
  { name: "Frecce", chars: charactersArray.slice(200, 300) },
  { name: "Matematica", chars: charactersArray.slice(300, 400) },
  { name: "Lettere", chars: charactersArray.slice(400, 500) },
  { name: "Punteggiatura", chars: charactersArray.slice(500, 600) },
  { name: "Vari", chars: charactersArray.slice(600) },
]

export default function CharacterGrid() {
  const [activeCategory, setActiveCategory] = useState("Tutti")
  const [copiedChar, setCopiedChar] = useState<string | null>(null)
  const { toast } = useToast()

  // Filter characters based on active category
  const displayedChars =
    activeCategory === "Tutti" ? charactersArray : categories.find((cat) => cat.name === activeCategory)?.chars || []

  const copyToClipboard = (char: string) => {
    navigator.clipboard.writeText(char)
    setCopiedChar(char)

    toast({
      title: "Carattere copiato!",
      description: `Il carattere "${char}" è stato copiato negli appunti.`,
      duration: 2000,
    })

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedChar(null)
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Copy All Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800">Caratteri Speciali</h2>
        <Button onClick={() => copyToClipboard(allCharacters)} className="bg-purple-600 hover:bg-purple-700">
          <Copy className="mr-2 h-4 w-4" />
          Copia Tutti
        </Button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={activeCategory === "Tutti" ? "default" : "outline"}
          onClick={() => setActiveCategory("Tutti")}
          className={
            activeCategory === "Tutti" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-200 hover:bg-purple-50"
          }
        >
          Tutti
        </Button>
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={activeCategory === category.name ? "default" : "outline"}
            onClick={() => setActiveCategory(category.name)}
            className={
              activeCategory === category.name
                ? "bg-purple-600 hover:bg-purple-700"
                : "border-purple-200 hover:bg-purple-50"
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Characters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 mb-8">
        {displayedChars.map((char, index) => (
          <button
            key={index}
            onClick={() => copyToClipboard(char)}
            className={`
              h-12 w-full flex items-center justify-center text-xl border rounded-md transition-all
              ${
                copiedChar === char
                  ? "bg-purple-100 border-purple-500 text-purple-700"
                  : "hover:bg-purple-50 border-gray-200 text-gray-700 hover:border-purple-300"
              }
            `}
            title="Clicca per copiare"
          >
            {copiedChar === char ? (
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-1 text-purple-600" />
                <span>{char}</span>
              </div>
            ) : (
              char
            )}
          </button>
        ))}
      </div>

  
    </div>
  )
}
