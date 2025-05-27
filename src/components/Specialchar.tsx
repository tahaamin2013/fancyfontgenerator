"use client"

import { useState, useEffect } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

// Default face parts


// Separate the wrappers from the face parts
const wrappers = [
  { id: "default", format: "({face})", display: "( ͡❛ ͜ʖ ͡❛)" },
  { id: "brackets", format: "【{face}】", display: "【 ͡❛ ͜ʖ ͡❛】" },
  { id: "shrug", format: "¯\\_{face}_/¯", display: "¯\\_ ͡❛ ͜ʖ ͡❛_/¯" },
  { id: "fist", format: "{face}✊", display: "( ͡❛ ͜ʖ ͡❛)✊" },
  { id: "peace", format: "{face}✌", display: "( ͡❛ ͜ʖ ͡❛)✌" },
  { id: "ok", format: "{face}👌", display: "( ͡❛ ͜ʖ ͡❛)👌" },
  { id: "pointLeft", format: "☜ {face}", display: "☜ ( ͡❛ ͜ʖ ͡❛)" },
  { id: "pointRight", format: "{face} 👉", display: "( ͡❛ ͜ʖ ͡❛) 👉" },
  { id: "thumbsUp", format: "(👍 {face})👍", display: "(👍  ͡❛ ͜ʖ ͡❛)👍" },
  { id: "thumbsUpAlt", format: "👍({face}👍)", display: "👍( ͡❛ ͜ʖ ͡❛👍)" },
  { id: "thumbsDown", format: "{face}👎", display: "( ͡❛ ͜ʖ ͡❛)👎" },
  { id: "raise", format: "\\({face})/", display: "\\( ͡❛ ͜ʖ ͡❛)/" },
  { id: "throw", format: "(ノ{face})ノ", display: "(ノ ͡❛ ͜ʖ ͡❛)ノ" },
  { id: "tableFlip", format: "(╯{face})╯┻━┻", display: "(╯ ͡❛ ͜ʖ ͡❛)╯┻━┻" },
  { id: "hug", format: "(っ{face})っ", display: "(っ ͡❛ ͜ʖ ͡❛)っ" },
  { id: "flower", format: "(✿{face})", display: "(✿ ͡❛ ͜ʖ ͡❛)" },
  { id: "excited", format: "≧{face}≦", display: "≧ ͡❛ ͜ʖ ͡❛≦" },
  { id: "dance", format: "┏({face})┛", display: "┏( ͡❛ ͜ʖ ͡❛)┛" },
  { id: "bear1", format: "ʕ{face}ʔ", display: "ʕ( ͡❛ ͜ʖ ͡❛)ʔ" },
  { id: "bear2", format: "ʕ{face}ʔ", display: "ʕ ͡❛ ͜ʖ ͡❛ʔ" },
  { id: "hugAlt", format: "⊂{face}⊃", display: "⊂( ͡❛ ͜ʖ ͡❛)⊃" },
  { id: "hugAlt2", format: "⊂{face}つ", display: "⊂ ͡❛ ͜ʖ ͡❛つ" },
  { id: "gift", format: "(っ{face})っ🎔", display: "(っ ͡❛ ͜ʖ ͡❛)っ🎔" },
  { id: "grabby", format: "ლ({face})ლ", display: "ლ( ͡❛ ͜ʖ ͡❛)ლ" },
  { id: "hugLeft", format: "(ɔ{face})ɔ", display: "(ɔ ͡❛ ͜ʖ ͡❛)ɔ" },
  { id: "fightMe", format: "(ง{face})ง", display: "(ง ͡❛ ͜ʖ ͡❛)ง" },
  { id: "flex1", format: "(ᕗ{face})ᕗ", display: "(ᕗ ͡❛ ͜ʖ ͡❛)ᕗ" },
  { id: "flex2", format: "ᕙ({face})ᕗ", display: "ᕙ( ͡❛ ͜ʖ ͡❛)ᕗ" },
  { id: "celebrate", format: "٩({face})۶", display: "٩( ͡❛ ͜ʖ ͡❛)۶" },
  { id: "celebrateAlt", format: "٩({face}ԅ)", display: "٩( ͡❛ ͜ʖ ͡❛ԅ)" },
  { id: "fight", format: "(҂{face})ᕤ", display: "(҂ ͡❛ ͜ʖ ͡❛)ᕤ" },
  { id: "puff", format: "{face}💨", display: "( ͡❛ ͜ʖ ͡❛)💨" },
  { id: "strongArm", format: "💪({face}҂)", display: "💪( ͡❛ ͜ʖ ͡❛҂)" },
  { id: "fist2", format: "👊 {face}", display: "👊 ( ͡❛ ͜ʖ ͡❛)" },
  { id: "strongFist", format: "💪 {face} 👊", display: "💪 ( ͡❛ ͜ʖ ͡❛) 👊" },
  { id: "doubleFist", format: "👊 {face} 👊", display: "👊 ( ͡❛ ͜ʖ ͡❛) 👊" },
  { id: "money", format: "[̲̅$̲̅{face}̲̅$̲̅]", display: "[̲̅$̲̅( ͡❛ ͜ʖ ͡❛)̲̅$̲̅]" },
  { id: "gang", format: "( ͡° ͜ʖ ͡°{face} ͡° ͜ʖ ͡°)", display: "( ͡° ͜ʖ ͡°( ͡❛ ͜ʖ ͡❛) ͡° ͜ʖ ͡°)" },
  { id: "gangBig", format: "( ͡°( ͡° ͜ʖ ͡°{face} ͡° ͜ʖ ͡°) ͡°)", display: "( ͡°( ͡° ͜ʖ ͡°( ͡❛ ͜ʖ ͡❛) ͡° ͜ʖ ͡°) ͡°)" },
  { id: "kiss", format: "(ɔ˘ ³{face}c)", display: "(ɔ˘ ³( ͡❛ ͜ʖ ͡❛)c)" },
  { id: "write", format: "✍{face}", display: "✍( ͡❛ ͜ʖ ͡❛)" },
  { id: "middleFinger", format: "🖕{face}", display: "🖕( ͡❛ ͜ʖ ͡❛)" },
  { id: "doubleFinger", format: "凸 {face}凸", display: "凸 ( ͡❛ ͜ʖ ͡❛)凸" },
  { id: "tFinger", format: "t{face}t)", display: "t( ͡❛ ͜ʖ ͡❛)t)" },
  { id: "fingerAlt", format: "{face}┌∩┐", display: "( ͡❛ ͜ʖ ͡❛)┌∩┐" },
  { id: "plain", format: "{face}", display: " ͡❛ ͜ʖ ͡❛" },
]

// Face parts separated
const eyeVariations = [
  "•",
  "°",
  "❛",
  "👁️",
  "ᵔ",
  "~",
  "◡",
  "─",
  "≖",
  "ಠ",
  "ಥ",
  "▀̿ ̿",
  "╯",
  "◉",
  "⊙",
  "⚈",
  "◎",
  "◒",
  "◓",
  "◐",
  "◑",
  "◔",
  "◕",
  "♥",
  "^",
  ">",
  "'",
  "`",
  "◭",
  "¬",
  "ㆆ",
  "Ⓘ",
  "눈",
  "O",
  "o",
  "╥",
  "▧",
  "►",
  "๑",
  "◣",
  "🔥",
  "⊗",
  "*",
  "⏿",
  "👁",
]

const eyebrowVariations = [" ❛", " ͡❛", "❛̃", " ❛︠", " ͠❛", " ͡❛", " ͠❛", " ͠❛", "❛̀", "︡❛", " ❛︣", "❛︣", " ❛︡"]

const noseMouthVariations = [
  "͜ʖ",
  "ᴗ",
  "‿",
  "‿‿",
  "⏥",
  "⏏",
  ".",
  "ₒ",
  "₃",
  "⍨",
  "ㅅ",
  " ͟ʖ",
  "Ĺ̯",
  "👅",
  "ᆽ",
  "ᴥ",
  "ᵜ",
  "●",
  "‿●‿",
  "ω",
  "ェ",
  "⍙",
  "▿",
  "-",
  "▭",
  "皿",
  "益",
  "﹏",
  "︹",
  "︵",
  "ᖨ",
  "‿っ",
  "_⦣",
  "_>",
  "෴",
  "𝆒",
]

export default function EmoticonSelector() {
  const [selectedWrapper, setSelectedWrapper] = useState(wrappers[0])
  const [selectedEyes, setSelectedEyes] = useState("❛")
  const [selectedEyebrows, setSelectedEyebrows] = useState(" ͡❛")
  const [selectedNoseMouth, setSelectedNoseMouth] = useState("͜ʖ")
  const [combinedEmoticon, setCombinedEmoticon] = useState("")
  const [copied, setCopied] = useState(false)

  // Function to create a face from selected parts
  const createFace = (eyes: string, eyebrows: string, noseMouth: string) => {
    // Extract the eyebrow modifiers
    const leftEyebrow = eyebrows.includes("❛") ? eyebrows.replace("❛", "") : " ͡"
    const rightEyebrow = eyebrows.includes("❛") ? eyebrows.replace("❛", "") : "͡"

    return `${leftEyebrow}${eyes} ${noseMouth} ${rightEyebrow}${eyes}`
  }

  // Function to combine wrapper and face
  const combineEmoticon = (wrapper: (typeof wrappers)[0], eyes: string, eyebrows: string, noseMouth: string) => {
    const face = createFace(eyes, eyebrows, noseMouth)

    if (wrapper.id === "default") {
      return `(${face})`
    }

    // For wrappers that need parentheses around the face
    if (wrapper.format.includes("({face})")) {
      return wrapper.format.replace("{face}", `(${face})`)
    }

    // For wrappers that don't need extra parentheses
    return wrapper.format.replace("{face}", face)
  }

  // Update combined emoticon when selections change
  useEffect(() => {
    setCombinedEmoticon(combineEmoticon(selectedWrapper, selectedEyes, selectedEyebrows, selectedNoseMouth))
  }, [selectedWrapper, selectedEyes, selectedEyebrows, selectedNoseMouth])

  const handleCopy = () => {
    navigator.clipboard.writeText(combinedEmoticon)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSelectWrapper = (wrapper: (typeof wrappers)[0]) => {
    setSelectedWrapper(wrapper)
  }

  const handleSelectEyes = (eyes: string) => {
    setSelectedEyes(eyes)
  }

  const handleSelectEyebrows = (eyebrows: string) => {
    setSelectedEyebrows(eyebrows)
  }

  const handleSelectNoseMouth = (noseMouth: string) => {
    setSelectedNoseMouth(noseMouth)
  }

  // Function to preview how parts would look with current selections
  const previewWithCurrentSelections = (newPart: string | { id: string; format: string; display: string }, partType: string) => {
    let previewEyes = selectedEyes
    let previewEyebrows = selectedEyebrows
    let previewNoseMouth = selectedNoseMouth

    if (partType === "eyes") previewEyes = newPart as string
    if (partType === "eyebrows") previewEyebrows = newPart as string
    if (partType === "noseMouth") previewNoseMouth = newPart as string
    if (partType === "wrapper") return (newPart as { id: string; format: string; display: string }).display

    return combineEmoticon(selectedWrapper, previewEyes, previewEyebrows, previewNoseMouth)
  }

  return (
    <div className="rounded-lg mt-[100px] overflow-hidden">
      {/* Header with combined emoticon and copy button */}
      <div className="flex justify-between items-center bg-white p-4">
        <div className="text-2xl font-medium text-center flex-grow">{combinedEmoticon}</div>
        <button
          onClick={handleCopy}
          className={cn(
            "px-4 py-2 rounded-md text-white flex items-center gap-2",
            "bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 transition-opacity",
          )}
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Grid of emoticons with overflow scrolling */}
      <div className="grid grid-cols-4 bg-white">
        {/* Column 1 - Wrappers */}
        <div className="border-r border-gray-200 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-gray-100 font-medium">Involucri</div>
          {wrappers.map((wrapper, index) => (
            <div
              key={`wrapper-${index}`}
              className={cn(
                "p-0 md:p-4 text-center cursor-pointer hover:bg-gray-100 transition-colors text-lg",
                "border-b border-gray-200",
                selectedWrapper.id === wrapper.id && "bg-blue-100",
              )}
              onClick={() => handleSelectWrapper(wrapper)}
            >
              <div className="bg-gray-50 py-3 rounded-md text-xs md:text-xl">{previewWithCurrentSelections(wrapper, "wrapper")}</div>
            </div>
          ))}
        </div>

        {/* Column 2 - Eyes */}
        <div className="border-r border-gray-200 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-gray-100 font-medium">Occhi</div>
          {eyeVariations.map((eyes, index) => (
            <div
              key={`eyes-${index}`}
              className={cn(
                "p-0 md:p-4 text-center cursor-pointer hover:bg-gray-100 transition-colors text-lg",
                "border-b border-gray-200",
                selectedEyes === eyes && "bg-blue-100",
              )}
              onClick={() => handleSelectEyes(eyes)}
            >
              <div className="bg-gray-50 py-3 rounded-md text-xs md:text-xl">{previewWithCurrentSelections(eyes, "eyes")}</div>
            </div>
          ))}
        </div>

        {/* Column 3 - Eyebrows */}
        <div className="border-r border-gray-200 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-gray-100 font-medium">Sopracciglia</div>
          {eyebrowVariations.map((eyebrows, index) => (
            <div
              key={`eyebrows-${index}`}
              className={cn(
                "p-0 md:p-4 text-center cursor-pointer hover:bg-gray-100 transition-colors text-lg",
                "border-b border-gray-200",
                selectedEyebrows === eyebrows && "bg-blue-100",
              )}
              onClick={() => handleSelectEyebrows(eyebrows)}
            >
              <div className="bg-gray-50 py-3 rounded-md text-xs md:text-xl">{previewWithCurrentSelections(eyebrows, "eyebrows")}</div>
            </div>
          ))}
        </div>

        {/* Column 4 - Nose & Mouth */}
        <div className="max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-gray-100 font-medium">Naso e bocca</div>
          {noseMouthVariations.map((noseMouth, index) => (
            <div
              key={`noseMouth-${index}`}
              className={cn(
                "p-0 md:p-4 text-center cursor-pointer hover:bg-gray-100 transition-colors text-lg",
                "border-b border-gray-200",
                selectedNoseMouth === noseMouth && "bg-blue-100",
              )}
              onClick={() => handleSelectNoseMouth(noseMouth)}
            >
              <div className="bg-gray-50 py-3 rounded-md text-xs md:text-xl">{previewWithCurrentSelections(noseMouth, "noseMouth")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}