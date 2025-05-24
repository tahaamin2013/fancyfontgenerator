"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Textarea } from "@/src/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Copy, Check } from "lucide-react"

export default function GeneratoreTestoCorsivo() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [selectedStyle, setSelectedStyle] = useState("corsivo")

  // Complete list of all keywords


  const styles = [
    {
      name: "Corsivo",
      key: "corsivo",
      transform: (text: string) => {
        const italicMap: Record<string, string> = {
          a: "𝘢",
          b: "𝘣",
          c: "𝘤",
          d: "𝘥",
          e: "𝘦",
          f: "𝘧",
          g: "𝘨",
          h: "𝘩",
          i: "𝘪",
          j: "𝘫",
          k: "𝘬",
          l: "𝘭",
          m: "𝘮",
          n: "𝘯",
          o: "𝘰",
          p: "𝘱",
          q: "𝘲",
          r: "𝘳",
          s: "𝘴",
          t: "𝘵",
          u: "𝘶",
          v: "𝘷",
          w: "𝘸",
          x: "𝘹",
          y: "𝘺",
          z: "𝘻",
          A: "𝘈",
          B: "𝘉",
          C: "𝘊",
          D: "𝘋",
          E: "𝘌",
          F: "𝘍",
          G: "𝘎",
          H: "𝘏",
          I: "𝘐",
          J: "𝘑",
          K: "𝘒",
          L: "𝘓",
          M: "𝘔",
          N: "𝘕",
          O: "𝘖",
          P: "𝘗",
          Q: "𝘘",
          R: "𝘙",
          S: "𝘚",
          T: "𝘛",
          U: "𝘜",
          V: "𝘝",
          W: "𝘞",
          X: "𝘟",
          Y: "𝘠",
          Z: "𝘡",
        }
        return text
          .split("")
          .map((char) => italicMap[char] || char)
          .join("")
      },
    },
    {
      name: "Grassetto",
      key: "grassetto",
      transform: (text: string) => {
        const boldMap: Record<string, string> = {
          a: "𝗮",
          b: "𝗯",
          c: "𝗰",
          d: "𝗱",
          e: "𝗲",
          f: "𝗳",
          g: "𝗴",
          h: "𝗵",
          i: "𝗶",
          j: "𝗷",
          k: "𝗸",
          l: "𝗹",
          m: "𝗺",
          n: "𝗻",
          o: "𝗼",
          p: "𝗽",
          q: "𝗾",
          r: "𝗿",
          s: "𝘀",
          t: "𝘁",
          u: "𝘂",
          v: "𝘃",
          w: "𝘄",
          x: "𝘅",
          y: "𝘆",
          z: "𝘇",
          A: "𝗔",
          B: "𝗕",
          C: "𝗖",
          D: "𝗗",
          E: "𝗘",
          F: "𝗙",
          G: "𝗚",
          H: "𝗛",
          I: "𝗜",
          J: "𝗝",
          K: "𝗞",
          L: "𝗟",
          M: "𝗠",
          N: "𝗡",
          O: "𝗢",
          P: "𝗣",
          Q: "𝗤",
          R: "𝗥",
          S: "𝗦",
          T: "𝗧",
          U: "𝗨",
          V: "𝗩",
          W: "𝗪",
          X: "𝗫",
          Y: "𝗬",
          Z: "𝗭",
          "0": "𝟬",
          "1": "𝟭",
          "2": "𝟮",
          "3": "𝟯",
          "4": "𝟰",
          "5": "𝟱",
          "6": "𝟲",
          "7": "𝟳",
          "8": "𝟴",
          "9": "𝟵",
        }
        return text
          .split("")
          .map((char) => boldMap[char] || char)
          .join("")
      },
    },
    {
      name: "Grassetto Corsivo",
      key: "grassetto-corsivo",
      transform: (text: string) => {
        const boldItalicMap: Record<string, string> = {
          a: "𝙖",
          b: "𝙗",
          c: "𝙘",
          d: "𝙙",
          e: "𝙚",
          f: "𝙛",
          g: "𝙜",
          h: "𝙝",
          i: "𝙞",
          j: "𝙟",
          k: "𝙠",
          l: "𝙡",
          m: "𝙢",
          n: "𝙣",
          o: "𝙤",
          p: "𝙥",
          q: "𝙦",
          r: "𝙧",
          s: "𝙨",
          t: "𝙩",
          u: "𝙪",
          v: "𝙫",
          w: "𝙬",
          x: "𝙭",
          y: "𝙮",
          z: "𝙯",
          A: "𝘼",
          B: "𝘽",
          C: "𝘾",
          D: "𝘿",
          E: "𝙀",
          F: "𝙁",
          G: "𝙂",
          H: "𝙃",
          I: "𝙄",
          J: "𝙅",
          K: "𝙆",
          L: "𝙇",
          M: "𝙈",
          N: "𝙉",
          O: "𝙊",
          P: "𝙋",
          Q: "𝙌",
          R: "𝙍",
          S: "𝙎",
          T: "𝙏",
          U: "𝙐",
          V: "𝙑",
          W: "𝙒",
          X: "𝙓",
          Y: "𝙔",
          Z: "𝙕",
        }
        return text
          .split("")
          .map((char) => boldItalicMap[char] || char)
          .join("")
      },
    },
    {
      name: "Corsivo Elegante",
      key: "corsivo-elegante",
      transform: (text: string) => {
        return text
          .split("")
          .map((char) => {
            if (char >= "a" && char <= "z") {
              const scriptLower: Record<string, string> = {
                a: "𝒶",
                b: "𝒷",
                c: "𝒸",
                d: "𝒹",
                e: "𝑒",
                f: "𝒻",
                g: "𝑔",
                h: "𝒽",
                i: "𝒾",
                j: "𝒿",
                k: "𝓀",
                l: "𝓁",
                m: "𝓂",
                n: "𝓃",
                o: "𝑜",
                p: "𝓅",
                q: "𝓆",
                r: "𝓇",
                s: "𝓈",
                t: "𝓉",
                u: "𝓊",
                v: "𝓋",
                w: "𝓌",
                x: "𝓍",
                y: "𝓎",
                z: "𝓏",
              }
              return scriptLower[char] || char
            } else if (char >= "A" && char <= "Z") {
              const scriptUpper: Record<string, string> = {
                A: "𝒜",
                B: "ℬ",
                C: "𝒞",
                D: "𝒟",
                E: "ℰ",
                F: "ℱ",
                G: "𝒢",
                H: "ℋ",
                I: "ℐ",
                J: "𝒥",
                K: "𝒦",
                L: "ℒ",
                M: "ℳ",
                N: "𝒩",
                O: "𝒪",
                P: "𝒫",
                Q: "𝒬",
                R: "ℛ",
                S: "𝒮",
                T: "𝒯",
                U: "𝒰",
                V: "𝒱",
                W: "𝒲",
                X: "𝒳",
                Y: "𝒴",
                Z: "𝒵",
              }
              return scriptUpper[char] || char
            }
            return char
          })
          .join("")
      },
    },
    {
      name: "Testo Piccolo",
      key: "piccolo",
      transform: (text: string) => {
        return text
          .split("")
          .map((char) => {
            const smallMap: Record<string, string> = {
              a: "ᵃ",
              b: "ᵇ",
              c: "ᶜ",
              d: "ᵈ",
              e: "ᵉ",
              f: "ᶠ",
              g: "ᵍ",
              h: "ʰ",
              i: "ⁱ",
              j: "ʲ",
              k: "ᵏ",
              l: "ˡ",
              m: "ᵐ",
              n: "ⁿ",
              o: "ᵒ",
              p: "ᵖ",
              q: "ᑫ",
              r: "ʳ",
              s: "ˢ",
              t: "ᵗ",
              u: "ᵘ",
              v: "ᵛ",
              w: "ʷ",
              x: "ˣ",
              y: "ʸ",
              z: "ᶻ",
              A: "ᴬ",
              B: "ᴮ",
              C: "ᶜ",
              D: "ᴰ",
              E: "ᴱ",
              F: "ᶠ",
              G: "ᴳ",
              H: "ᴴ",
              I: "ᴵ",
              J: "ᴶ",
              K: "ᴷ",
              L: "ᴸ",
              M: "ᴹ",
              N: "ᴺ",
              O: "ᴼ",
              P: "ᴾ",
              Q: "ᑫ",
              R: "ᴿ",
              S: "ˢ",
              T: "ᵀ",
              U: "ᵁ",
              V: "ⱽ",
              W: "ᵂ",
              X: "ˣ",
              Y: "ʸ",
              Z: "ᶻ",
              "0": "⁰",
              "1": "¹",
              "2": "²",
              "3": "³",
              "4": "⁴",
              "5": "⁵",
              "6": "⁶",
              "7": "⁷",
              "8": "⁸",
              "9": "⁹",
            }
            return smallMap[char] || char
          })
          .join("")
      },
    },
    {
      name: "Cerchiato",
      key: "cerchiato",
      transform: (text: string) => {
        return text
          .split("")
          .map((char) => {
            if (char >= "a" && char <= "z") {
              return String.fromCharCode(0x24d0 + char.charCodeAt(0) - "a".charCodeAt(0))
            } else if (char >= "A" && char <= "Z") {
              return String.fromCharCode(0x24b6 + char.charCodeAt(0) - "A".charCodeAt(0))
            } else if (char >= "0" && char <= "9") {
              return String.fromCharCode(0x2460 + char.charCodeAt(0) - "0".charCodeAt(0))
            }
            return char
          })
          .join("")
      },
    },
    {
      name: "Sottosopra",
      key: "sottosopra",
      transform: (text: string) => {
        const flipMap: Record<string, string> = {
          a: "ɐ",
          b: "q",
          c: "ɔ",
          d: "p",
          e: "ǝ",
          f: "ɟ",
          g: "ƃ",
          h: "ɥ",
          i: "ᴉ",
          j: "ɾ",
          k: "ʞ",
          l: "l",
          m: "ɯ",
          n: "u",
          o: "o",
          p: "d",
          q: "b",
          r: "ɹ",
          s: "s",
          t: "ʇ",
          u: "n",
          v: "ʌ",
          w: "ʍ",
          x: "x",
          y: "ʎ",
          z: "z",
          A: "∀",
          B: "B",
          C: "Ɔ",
          D: "D",
          E: "Ǝ",
          F: "Ⅎ",
          G: "פ",
          H: "H",
          I: "I",
          J: "ſ",
          K: "ʞ",
          L: "˥",
          M: "W",
          N: "N",
          O: "O",
          P: "Ԁ",
          Q: "Q",
          R: "R",
          S: "S",
          T: "┴",
          U: "∩",
          V: "Λ",
          W: "M",
          X: "X",
          Y: "⅄",
          Z: "Z",
          "0": "0",
          "1": "Ɩ",
          "2": "ᄅ",
          "3": "Ɛ",
          "4": "ㄣ",
          "5": "ϛ",
          "6": "9",
          "7": "ㄥ",
          "8": "8",
          "9": "6",
          ".": "˙",
          ",": "'",
          "'": ",",
          '"': ",,",
          "`": ",",
          "?": "¿",
          "!": "¡",
          "(": ")",
          ")": "(",
          "[": "]",
          "]": "[",
          "{": "}",
          "}": "{",
          "<": ">",
          ">": "<",
          "&": "⅋",
          _: "‾",
        }
        return text
          .split("")
          .map((char) => flipMap[char] || char)
          .reverse()
          .join("")
      },
    },
    {
      name: "Maiuscoletto",
      key: "maiuscoletto",
      transform: (text: string) => {
        return text
          .split("")
          .map((char) => {
            if (char >= "a" && char <= "z") {
              const smallCapsMap: Record<string, string> = {
                a: "ᴀ",
                b: "ʙ",
                c: "ᴄ",
                d: "ᴅ",
                e: "ᴇ",
                f: "ꜰ",
                g: "ɢ",
                h: "ʜ",
                i: "ɪ",
                j: "ᴊ",
                k: "ᴋ",
                l: "ʟ",
                m: "ᴍ",
                n: "ɴ",
                o: "ᴏ",
                p: "ᴘ",
                q: "ǫ",
                r: "ʀ",
                s: "s",
                t: "ᴛ",
                u: "ᴜ",
                v: "ᴠ",
                w: "ᴡ",
                x: "x",
                y: "ʏ",
                z: "ᴢ",
              }
              return smallCapsMap[char] || char
            } else if (char >= "A" && char <= "Z") {
              return char
            }
            return char
          })
          .join("")
      },
    },
  ]

const uppercaseAlphabets = [
  { letter: "A", italic: "𝐴", keywords: ["a corsivo maiuscolo", "a corsivo"] },
  { letter: "B", italic: "𝐵", keywords: ["b corsivo maiuscolo"] },
  { letter: "C", italic: "𝐶", keywords: ["c corsivo maiuscolo"] },
  { letter: "D", italic: "𝐷", keywords: ["d corsivo maiuscolo", "d in corsivo maiuscolo", "d maiuscola corsivo"] },
  { letter: "E", italic: "𝐸", keywords: ["e corsivo maiuscolo"] },
  { letter: "F", italic: "𝐹", keywords: ["f corsivo maiuscolo", "f maiuscola corsivo", "f in corsivo", "f in corsivo maiuscolo"] },
  { letter: "G", italic: "𝐺", keywords: ["g maiuscola corsivo", "g corsivo maiuscolo", "g in corsivo maiuscolo"] },
  { letter: "H", italic: "𝐻", keywords: ["h corsivo maiuscolo"] },
  { letter: "I", italic: "𝐼", keywords: ["i corsivo", "i corsivo maiuscolo"] },
  { letter: "J", italic: "𝐽", keywords: ["j in corsivo maiuscolo", "j in maiuscolo corsivo"] },
  { letter: "K", italic: "𝐾", keywords: ["k in corsivo maiuscolo"] },
  { letter: "L", italic: "𝐿", keywords: ["l corsivo maiuscolo", "l maiuscola corsivo"] },
  { letter: "M", italic: "𝑀", keywords: ["m corsivo", "m corsivo maiuscolo"] },
  { letter: "N", italic: "𝑁", keywords: ["n corsivo maiuscolo"] },
  { letter: "O", italic: "𝑂", keywords: ["o corsivo maiuscolo"] },
  { letter: "P", italic: "𝑃", keywords: ["p corsivo maiuscolo", "p in corsivo maiuscolo"] },
  { letter: "Q", italic: "𝑄", keywords: ["q corsivo maiuscolo"] },
  { letter: "R", italic: "𝑅", keywords: ["r in corsivo", "r maiuscola corsivo", "r corsivo maiuscolo", "r corsivo"] },
  { letter: "S", italic: "𝑆", keywords: ["s corsivo maiuscolo", "s maiuscola corsivo", "s in corsivo maiuscolo", "s corsivo"] },
  { letter: "T", italic: "𝑇", keywords: ["t maiuscola corsivo", "t in corsivo maiuscolo", "t corsivo maiuscolo", "t in corsivo", "t corsivo"] },
  { letter: "U", italic: "𝑈", keywords: ["u corsivo maiuscolo"] },
  { letter: "V", italic: "𝑉", keywords: ["v corsivo", "v corsivo maiuscolo"] },
  { letter: "W", italic: "𝑊", keywords: ["w corsivo maiuscolo"] },
  { letter: "X", italic: "𝑋", keywords: ["x corsivo maiuscolo"] },
  { letter: "Y", italic: "𝑌", keywords: ["y corsivo maiuscolo"] },
  { letter: "Z", italic: "𝑍", keywords: ["z corsivo maiuscolo"] },
];

const lowercaseAlphabets = [
  { letter: "a", italic: "𝑎", keywords: ["a corsivo", "a corsivo minuscolo"] },
  { letter: "b", italic: "𝑏", keywords: ["b corsivo minuscolo"] },
  { letter: "c", italic: "𝑐", keywords: ["c corsivo minuscolo"] },
  { letter: "d", italic: "𝑑", keywords: ["d corsivo minuscolo"] },
  { letter: "e", italic: "𝑒", keywords: ["e corsivo minuscolo"] },
  { letter: "f", italic: "𝑓", keywords: ["f corsivo minuscolo"] },
  { letter: "g", italic: "𝑔", keywords: ["g corsivo minuscolo"] },
  { letter: "h", italic: "ℎ", keywords: ["h corsivo minuscolo"] },
  { letter: "i", italic: "𝑖", keywords: ["i corsivo", "i corsivo minuscolo"] },
  { letter: "j", italic: "𝑗", keywords: ["j corsivo minuscolo"] },
  { letter: "k", italic: "𝑘", keywords: ["k corsivo minuscolo"] },
  { letter: "l", italic: "𝑙", keywords: ["l corsivo minuscolo"] },
  { letter: "m", italic: "𝑚", keywords: ["m corsivo", "m corsivo minuscolo"] },
  { letter: "n", italic: "𝑛", keywords: ["n corsivo minuscolo"] },
  { letter: "o", italic: "𝑜", keywords: ["o corsivo minuscolo"] },
  { letter: "p", italic: "𝑝", keywords: ["p corsivo minuscolo"] },
  { letter: "q", italic: "𝑞", keywords: ["q corsivo minuscolo"] },
  { letter: "r", italic: "𝑟", keywords: ["r in corsivo", "r corsivo", "r corsivo minuscolo"] },
  { letter: "s", italic: "𝑠", keywords: ["s corsivo", "s corsivo minuscolo"] },
  { letter: "t", italic: "𝑡", keywords: ["t in corsivo", "t corsivo", "t corsivo minuscolo"] },
  { letter: "u", italic: "𝑢", keywords: ["u corsivo minuscolo"] },
  { letter: "v", italic: "𝑣", keywords: ["v corsivo", "v corsivo minuscolo"] },
  { letter: "w", italic: "𝑤", keywords: ["w corsivo minuscolo"] },
  { letter: "x", italic: "𝑥", keywords: ["x corsivo minuscolo"] },
  { letter: "y", italic: "𝑦", keywords: ["y corsivo minuscolo"] },
  { letter: "z", italic: "𝑧", keywords: ["z corsivo minuscolo"] },
];


  const handleStyleChange = (style: any) => {
    setSelectedStyle(style.key)
    if (inputText) {
      setOutputText(style.transform(inputText))
    }
  }

  const handleInputChange = (text: string) => {
    setInputText(text)
    const currentStyle = styles.find((s) => s.key === selectedStyle)
    if (currentStyle) {
      setOutputText(currentStyle.transform(text))
    }
  }

  const copyToClipboard = async (text: string, index?: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index ?? -1)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Errore nel copiare il testo: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Generatore di Testo Corsivo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trasforma il tuo testo in bellissimi stili corsivi. Copia e incolla caratteri speciali della tastiera,
            simboli e font corsivi.
          </p>
        </div>

        {/* Main Generator */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Generatore di Stili di Testo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Inserimento</label>
              <Textarea
                placeholder="Digita/Incolla il Tuo Testo Qui"
                value={inputText}
                onChange={(e) => handleInputChange(e.target.value)}
                className="min-h-[120px] text-lg border-2 border-purple-200 focus:border-purple-400 rounded-xl"
              />
            </div>

            {/* Style Buttons */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Scegli Stile</label>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <Button
                    key={style.key}
                    variant={selectedStyle === style.key ? "default" : "outline"}
                    onClick={() => handleStyleChange(style)}
                    className={`rounded-full transition-all duration-200 ${
                      selectedStyle === style.key
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                        : "hover:bg-purple-50 border-purple-200"
                    }`}
                  >
                    {style.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Risultato</label>
                <Button
                  onClick={() => copyToClipboard(outputText)}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-purple-200 hover:bg-purple-50"
                >
                  {copiedIndex === -1 ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  Copia
                </Button>
              </div>
              <div className="min-h-[120px] p-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-mono">
                {outputText || "Il tuo testo stilizzato apparirà qui..."}
              </div>
            </div>
          </CardContent>
        </Card>

  
        {/* Uppercase Italic Alphabets */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Alfabeto Corsivo Maiuscolo - Lettere Maiuscole in Corsivo
            </CardTitle>
            <p className="text-center text-gray-600">
              Copia l'alfabeto maiuscolo in corsivo, lettere maiuscole corsive e caratteri scritti in corsivo
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {uppercaseAlphabets.map((item, index) => (
                <div key={item.letter} className="group">
                  <div
                    className="relative bg-gradient-to-br h-full from-purple-100 to-blue-100 border-2 border-purple-200 rounded-xl p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                    onClick={() => copyToClipboard(item.italic, index)}
                  >
                    <div className="text-3xl font-bold text-purple-700 mb-2">{item.italic}</div>
                    <div className="text-xs text-gray-600 mb-2">{item.letter}</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.keywords.slice(0, 2).map((keyword, kidx) => (
                        <Badge key={kidx} variant="secondary" className="text-[10px] font-thin px-1 py-0">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    {copiedIndex === index && (
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lowercase Italic Alphabets */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Alfabeto Corsivo Minuscolo - Scrivi in Corsivo
            </CardTitle>
            <p className="text-center text-gray-600">
              Copia k minuscola in corsivo, scrivi in corsivo e caratteri corsivi per il tuo testo
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {lowercaseAlphabets.map((item, index) => (
                <div key={item.letter} className="group">
                  <div
                    className="relative bg-gradient-to-br h-full from-blue-100 to-indigo-100 border-2 border-blue-200 rounded-xl p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                    onClick={() => copyToClipboard(item.italic, index + 100)}
                  >
                    <div className="text-3xl font-bold text-blue-700 mb-2">{item.italic}</div>
                    <div className="text-xs text-gray-600 mb-2">{item.letter}</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.keywords.slice(0, 1).map((keyword, kidx) => (
                        <Badge key={kidx} variant="secondary" className="text-[10px] font-thin px-1 py-0">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    {copiedIndex === index + 100 && (
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>



      </div>
    </div>
  )
}
