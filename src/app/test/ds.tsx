"use client"

import { useState, useEffect } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

// Default face to use in wrapper displays
const defaultFace = " ͡❛ ͜ʖ ͡❛"
const defaultFaceWithParens = "( ͡❛ ͜ʖ ͡❛)"

// Separate the wrappers from the faces
const wrappers = [
  { id: "default", format: "{face}", display: defaultFaceWithParens, preserveParentheses: true },
  { id: "parentheses", format: "{face}", display: defaultFaceWithParens, preserveParentheses: true },
  { id: "brackets", format: "【{face}】", display: "【" + defaultFace + "】", preserveParentheses: false },
  { id: "shrug", format: "¯\\_ ({face}) _/¯", display: "¯\\_(" + defaultFaceWithParens + ")_/¯", preserveParentheses: true },
  { id: "fist", format: "{face}✊", display: defaultFaceWithParens + "✊", preserveParentheses: true },
  { id: "peace", format: "{face}✌", display: defaultFaceWithParens + "✌", preserveParentheses: true },
  { id: "ok", format: "{face}👌", display: defaultFaceWithParens + "👌", preserveParentheses: true },
  { id: "pointLeft", format: "☜ {face}", display: "☜ " + defaultFaceWithParens, preserveParentheses: true },
  { id: "pointRight", format: "{face} 👉", display: defaultFaceWithParens + " 👉", preserveParentheses: true },
  { id: "thumbsUp", format: "(👍 {face})👍", display: "(👍 " + defaultFace + ")👍", preserveParentheses: false },
  { id: "thumbsUpAlt", format: "👍({face}👍)", display: "👍(" + defaultFace + "👍)", preserveParentheses: false },
  { id: "thumbsDown", format: "{face}👎", display: defaultFaceWithParens + "👎", preserveParentheses: true },
  { id: "raise", format: "\\({face})/", display: "\\(" + defaultFace + ")/", preserveParentheses: false },
  { id: "throw", format: "(ノ{face})ノ", display: "(ノ" + defaultFace + ")ノ", preserveParentheses: false },
  { id: "tableFlip", format: "(╯{face})╯┻━┻", display: "(╯" + defaultFace + ")╯┻━┻", preserveParentheses: false },
  { id: "hug", format: "(っ{face})っ", display: "(っ" + defaultFace + ")っ", preserveParentheses: false },
  { id: "flower", format: "(✿{face})", display: "(✿" + defaultFace + ")", preserveParentheses: false },
  { id: "excited", format: "≧{face}≦", display: "≧" + defaultFace + "≦", preserveParentheses: false },
  { id: "dance", format: "┏({face})┛", display: "┏(" + defaultFace + ")┛", preserveParentheses: false },
  { id: "bear1", format: "ʕ{face}ʔ", display: "ʕ" + defaultFaceWithParens + "ʔ", preserveParentheses: true },
  { id: "bear2", format: "ʕ{face}ʔ", display: "ʕ" + defaultFace + "ʔ", preserveParentheses: false },
  { id: "hugAlt", format: "⊂{face}⊃", display: "⊂" + defaultFaceWithParens + "⊃", preserveParentheses: true },
  { id: "hugAlt2", format: "⊂{face}つ", display: "⊂" + defaultFace + "つ", preserveParentheses: false },
  { id: "gift", format: "(っ{face})っ🎔", display: "(っ" + defaultFace + ")っ🎔", preserveParentheses: false },
  { id: "grabby", format: "ლ({face})ლ", display: "ლ(" + defaultFace + ")ლ", preserveParentheses: false },
  { id: "hugLeft", format: "(ɔ{face})ɔ", display: "(ɔ" + defaultFace + ")ɔ", preserveParentheses: false },
  { id: "fightMe", format: "(ง{face})ง", display: "(ง" + defaultFace + ")ง", preserveParentheses: false },
  { id: "flex1", format: "(ᕗ{face})ᕗ", display: "(ᕗ" + defaultFace + ")ᕗ", preserveParentheses: false },
  { id: "flex2", format: "ᕙ({face})ᕗ", display: "ᕙ(" + defaultFace + ")ᕗ", preserveParentheses: false },
  { id: "celebrate", format: "٩({face})۶", display: "٩(" + defaultFace + ")۶", preserveParentheses: false },
  { id: "celebrateAlt", format: "٩({face}ԅ)", display: "٩(" + defaultFace + "ԅ)", preserveParentheses: false },
  { id: "fight", format: "(҂{face})ᕤ", display: "(҂" + defaultFace + ")ᕤ", preserveParentheses: false },
  { id: "puff", format: "{face}💨", display: defaultFaceWithParens + "💨", preserveParentheses: true },
  { id: "strongArm", format: "💪({face}҂)", display: "💪(" + defaultFace + "҂)", preserveParentheses: false },
  { id: "fist2", format: "👊 {face}", display: "👊 " + defaultFaceWithParens, preserveParentheses: true },
  {
    id: "strongFist",
    format: "💪 {face} 👊",
    display: "💪 " + defaultFaceWithParens + " 👊",
    preserveParentheses: true,
  },
  {
    id: "doubleFist",
    format: "👊 {face} 👊",
    display: "👊 " + defaultFaceWithParens + " 👊",
    preserveParentheses: true,
  },
  { id: "money", format: "[̲̅$̲̅{face}̲̅$̲̅]", display: "[̲̅$̲̅" + defaultFaceWithParens + "̲̅$̲̅]", preserveParentheses: true },
  {
    id: "gang",
    format: "( ͡° ͜ʖ ͡°{face} ͡° ͜ʖ ͡°)",
    display: "( ͡° ͜ʖ ͡°" + defaultFaceWithParens + " ͡° ͜ʖ ͡°)",
    preserveParentheses: true,
  },
  {
    id: "gangBig",
    format: "( ͡°( ͡° ͜ʖ ͡°{face} ͡° ͜ʖ ͡°) ͡°)",
    display: "( ͡°( ͡° ͜ʖ ͡°" + defaultFaceWithParens + " ͡° ͜ʖ ͡°) ͡°)",
    preserveParentheses: true,
  },
  { id: "kiss", format: "(ɔ˘ ³{face}c)", display: "(ɔ˘ ³" + defaultFaceWithParens + "c)", preserveParentheses: true },
  { id: "write", format: "✍{face}", display: "✍" + defaultFaceWithParens, preserveParentheses: true },
  { id: "middleFinger", format: "🖕{face}", display: "🖕" + defaultFaceWithParens, preserveParentheses: true },
  {
    id: "doubleFinger",
    format: "凸 {face}凸",
    display: "凸 " + defaultFaceWithParens + "凸",
    preserveParentheses: true,
  },
  { id: "tFinger", format: "t{face}t)", display: "t" + defaultFaceWithParens + "t)", preserveParentheses: true },
  { id: "fingerAlt", format: "{face}┌∩┐", display: defaultFaceWithParens + "┌∩┐", preserveParentheses: true },
  { id: "plain", format: "{face}", display: defaultFace, preserveParentheses: false },
]

// Define inner faces without parentheses for use with wrappers that need them
const innerFaces = {
  column2: [
    " ͡• ͜ʖ ͡•",
    " ͡° ͜ʖ ͡°",
    " ͡❛ ͜ʖ ͡❛",
    " ͡👁️ ͜ʖ ͡👁️",
    " ͡ᵔ ͜ʖ ͡ᵔ",
    " ͡~ ͜ʖ ͡°",
    " ͡◡ ͜ʖ ͡◡",
    " ͡─ ͜ʖ ͡─",
    " ͡≖ ͜ʖ ͡≖",
    " ͡ಠ ͜ʖ ͡ಠ",
    " ͡ಥ ͜ʖ ͡ಥ",
    " ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ ",
    " ͡╯ ͜ʖ ͡╰",
    " ͡◉ ͜ʖ ͡◉",
    " ͡⊙ ͜ʖ ͡⊙",
    " ͡⚈ ͜ʖ ͡⚈",
    " ͡◎ ͜ʖ ͡◎",
    " ͡◒ ͜ʖ ͡◒",
    " ͡◓ ͜ʖ ͡◓",
    " ͡◐ ͜ʖ ͡◐",
    " ͡◑ ͜ʖ ͡◑",
    " ͡◔ ͜ʖ ͡◔",
    " ͡◕ ͜ʖ ͡◕",
    " ͡♥ ͜ʖ ͡♥",
    " ͡^ ͜ʖ ͡^",
    " ͡> ͜ʖ ͡<",
    " ͡' ͜ʖ ͡'",
    " ͡` ͜ʖ ͡´",
    " ͡◭ ͜ʖ ͡◭",
    " ͡¬ ͜ʖ ͡¬",
    " ͡ㆆ ͜ʖ ͡ㆆ",
    " ͡Ⓘ ͜ʖ ͡Ⓘ",
    " ͡눈 ͜ʖ ͡눈",
    " ͡O ͜ʖ ͡o",
    " ͡o ͜ʖ ͡O",
    " ͡╥ ͜ʖ ͡╥",
    " ͡▧ ͜ʖ ͡▧",
    " ͡► ͜ʖ ͡◄",
    " ͡๑ ͜ʖ ͡๑",
    " ͡◣ ͜ʖ ͡◢",
    " ͡🔥 ͜ʖ ͡🔥",
    " ͡⊗ ͜ʖ ͡⊗",
    " ͡* ͜ʖ ͡*",
    " ͡⏿ ͜ʖ ͡⏿",
    " ͡👁 ͜ʖ ͡👁",
  ],
  column3: [
    " ❛ ͜ʖ ❛ ",
    " ͡❛ ͜ʖ ͡❛",
    "❛̃ ͜ʖ❛̃",
    " ❛︠ ͜ʖ ︡❛",
    " ͠❛ ͜ʖ ͡❛",
    " ͡❛ ͜ʖ͡❛ ",
    " ͠❛ ͜ʖ͠❛ ",
    " ͠❛ ͜ʖ ͠❛ ",
    "❛̀ ͜ʖ ́❛",
    "︡❛ ͜ʖ❛︠",
    " ❛︣ ͜ʖ ❛︣ ",
    "❛︣ ͜ʖ ❛᷅",
    " ❛︡ ͜ʖ ❛︠ ",
  ],
  column4: [
    " ͡❛ ͜ʖ ͡❛",
    " ͡❛ ᴗ ͡❛",
    " ͡❛ ‿ ͡❛",
    " ͡❛ ‿‿ ͡❛",
    " ͡❛ ⏥ ͡❛",
    " ͡❛ ⏏ ͡❛",
    " ͡❛ . ͡❛",
    " ͡❛ ₒ ͡❛",
    " ͡❛ ₃ ͡❛",
    " ͡❛ ⍨ ͡❛",
    " ͡❛ ㅅ ͡❛",
    " ͡❛  ͟ʖ ͡❛",
    " ͡❛ Ĺ̯ ͡❛",
    " ͡❛ 👅 ͡❛",
    " ͡❛ ᆽ ͡❛",
    " ͡❛ ᴥ ͡❛",
    " ͡❛ ᵜ ͡❛",
    " ͡❛ ● ͡❛",
    " ͡❛ ‿●‿ ͡❛",
    " ͡❛ ω ͡❛",
    " ͡❛ ェ ͡❛",
    " ͡❛ ⍙ ͡❛",
    " ͡❛ ▿ ͡❛",
    " ͡❛ - ͡❛",
    " ͡❛ ▭ ͡❛",
    " ͡❛ 皿 ͡❛",
    " ͡❛ 益 ͡❛",
    " ͡❛ ﹏ ͡❛",
    " ͡❛ ︹ ͡❛",
    " ͡❛ ︵ ͡❛",
    " ͡❛ ᖨ ͡❛",
    " ͡❛ ‿っ ͡❛",
    " ͡❛ _⦣ ͡❛",
    " ͡❛ _> ͡❛",
    " ͡❛ ෴ ͡❛",
    " ͡❛ 𝆒 ͡❛",
  ],
}

const faces = {
  column2: [
    "( ͡• ͜ʖ ͡•)",
    "( ͡° ͜ʖ ͡°)",
    "( ͡❛ ͜ʖ ͡❛)",
    "( ͡👁️ ͜ʖ ͡👁️)",
    "( ͡ᵔ ͜ʖ ͡ᵔ)",
    "( ͡~ ͜ʖ ͡°)",
    "( ͡◡ ͜ʖ ͡◡)",
    "( ͡─ ͜ʖ ͡─)",
    "( ͡≖ ͜ʖ ͡≖)",
    "( ͡ಠ ͜ʖ ͡ಠ)",
    "( ͡ಥ ͜ʖ ͡ಥ)",
    "( ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ )",
    "( ͡╯ ͜ʖ ͡╰)",
    "( ͡◉ ͜ʖ ͡◉)",
    "( ͡⊙ ͜ʖ ͡⊙)",
    "( ͡⚈ ͜ʖ ͡⚈)",
    "( ͡◎ ͜ʖ ͡◎)",
    "( ͡◒ ͜ʖ ͡◒)",
    "( ͡◓ ͜ʖ ͡◓)",
    "( ͡◐ ͜ʖ ͡◐)",
    "( ͡◑ ͜ʖ ͡◑)",
    "( ͡◔ ͜ʖ ͡◔)",
    "( ͡◕ ͜ʖ ͡◕)",
    "( ͡♥ ͜ʖ ͡♥)",
    "( ͡^ ͜ʖ ͡^)",
    "( ͡> ͜ʖ ͡<)",
    "( ͡' ͜ʖ ͡')",
    "( ͡` ͜ʖ ͡´)",
    "( ͡◭ ͜ʖ ͡◭)",
    "( ͡¬ ͜ʖ ͡¬)",
    "( ͡ㆆ ͜ʖ ͡ㆆ)",
    "( ͡Ⓘ ͜ʖ ͡Ⓘ)",
    "( ͡눈 ͜ʖ ͡눈)",
    "( ͡O ͜ʖ ͡o)",
    "( ͡o ͜ʖ ͡O)",
    "( ͡╥ ͜ʖ ͡╥)",
    "( ͡▧ ͜ʖ ͡▧)",
    "( ͡► ͜ʖ ͡◄)",
    "( ͡๑ ͜ʖ ͡๑)",
    "( ͡◣ ͜ʖ ͡◢)",
    "( ͡🔥 ͜ʖ ͡🔥)",
    "( ͡⊗ ͜ʖ ͡⊗)",
    "( ͡* ͜ʖ ͡*)",
    "( ͡⏿ ͜ʖ ͡⏿)",
    "( ͡👁 ͜ʖ ͡👁)",
  ],
  column3: [
    "( ❛ ͜ʖ ❛ )",
    "( ͡❛ ͜ʖ ͡❛)",
    "(❛̃ ͜ʖ❛̃)",
    "( ❛︠ ͜ʖ ︡❛)",
    "( ͠❛ ͜ʖ ͡❛)",
    "( ͡❛ ͜ʖ͡❛ )",
    "( ͠❛ ͜ʖ͠❛ )",
    "( ͠❛ ͜ʖ ͠❛ )",
    "(❛̀ ͜ʖ ́❛)",
    "(︡❛ ͜ʖ❛︠)",
    "( ❛︣ ͜ʖ ❛︣ )",
    "(❛︣ ͜ʖ ❛᷅)",
    "( ❛︡ ͜ʖ ❛︠ )",
  ],
  column4: [
    "( ͡❛ ͜ʖ ͡❛)",
    "( ͡❛ ᴗ ͡❛)",
    "( ͡❛ ‿ ͡❛)",
    "( ͡❛ ‿‿ ͡❛)",
    "( ͡❛ ⏥ ͡❛)",
    "( ͡❛ ⏏ ͡❛)",
    "( ͡❛ . ͡❛)",
    "( ͡❛ ₒ ͡❛)",
    "( ͡❛ ₃ ͡❛)",
    "( ͡❛ ⍨ ͡❛)",
    "( ͡❛ ㅅ ͡❛)",
    "( ͡❛  ͟ʖ ͡❛)",
    "( ͡❛ Ĺ̯ ͡❛)",
    "( ͡❛ 👅 ͡❛)",
    "( ͡❛ ᆽ ͡❛)",
    "( ͡❛ ᴥ ͡❛)",
    "( ͡❛ ᵜ ͡❛)",
    "( ͡❛ ● ͡❛)",
    "( ͡❛ ‿●‿ ͡❛)",
    "( ͡❛ ω ͡❛)",
    "( ͡❛ ェ ͡❛)",
    "( ͡❛ ⍙ ͡❛)",
    "( ͡❛ ▿ ͡❛)",
    "( ͡❛ - ͡❛)",
    "( ͡❛ ▭ ͡❛)",
    "( ͡❛ 皿 ͡❛)",
    "( ͡❛ 益 ͡❛)",
    "( ͡❛ ﹏ ͡❛)",
    "( ͡❛ ︹ ͡❛)",
    "( ͡❛ ︵ ͡❛)",
    "( ͡❛ ᖨ ͡❛)",
    "( ͡❛ ‿っ ͡❛)",
    "( ͡❛ _⦣ ͡❛)",
    "( ͡❛ _> ͡❛)",
    "( ͡❛ ෴ ͡❛)",
    "( ͡❛ 𝆒 ͡❛)",
  ],
}

export default function EmoticonSelector() {
  const [selectedWrapper, setSelectedWrapper] = useState(wrappers[0])
  const [selectedFace, setSelectedFace] = useState(faces.column2[2]) // Default to ( ͡❛ ͜ʖ ͡❛)
  const [selectedEyes, setSelectedEyes] = useState(faces.column2[2]) // Track selected eyes
  const [selectedEyebrows, setSelectedEyebrows] = useState(faces.column3[1]) // Track selected eyebrows
  const [selectedMouth, setSelectedMouth] = useState(faces.column4[0]) // Track selected mouth
  const [combinedEmoticon, setCombinedEmoticon] = useState("")
  const [copied, setCopied] = useState(false)

  // Function to combine wrapper and face
  const combineEmoticon = (wrapper: (typeof wrappers)[0], face: string) => {
    // If this is the default wrapper, just return the face as is
    if (wrapper.id === "default" || wrapper.id === "parentheses") {
      return face
    }

    // Get the index of the face in its column
    let faceIndex = -1
    let faceColumn = ""

    for (const column of ["column2", "column3", "column4"] as const) {
      const index = faces[column].indexOf(face)
      if (index !== -1) {
        faceIndex = index
        faceColumn = column
        break
      }
    }

    // If we found the face, use the corresponding inner face
    if (faceIndex !== -1 && faceColumn) {
      // If we need to preserve parentheses, use the original face
      if (wrapper.preserveParentheses) {
        return wrapper.format.replace("{face}", face)
      } else {
        // Otherwise, use the inner face without parentheses
        return wrapper.format.replace("{face}", innerFaces[faceColumn as keyof typeof innerFaces][faceIndex])
      }
    }

    // Fallback: just use the face as is
    return wrapper.format.replace("{face}", face)
  }

  // Update combined emoticon when selections change
  useEffect(() => {
    setCombinedEmoticon(combineEmoticon(selectedWrapper, selectedFace))
  }, [selectedWrapper, selectedFace])

  const handleCopy = () => {
    navigator.clipboard.writeText(combinedEmoticon)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSelectWrapper = (wrapper: (typeof wrappers)[0]) => {
    setSelectedWrapper(wrapper)
  }

  const handleSelectFace = (face: string, column: "column2" | "column3" | "column4") => {
    // Update the selected face for the specific column
    if (column === "column2") {
      setSelectedEyes(face)
    } else if (column === "column3") {
      setSelectedEyebrows(face)
    } else if (column === "column4") {
      setSelectedMouth(face)
    }

    // Also update the overall selected face
    setSelectedFace(face)
  }

  // Get the index of the selected eyes in the eyes column
  const getSelectedEyesIndex = () => {
    return faces.column2.indexOf(selectedEyes)
  }

  // Function to preview how a face would look with the selected wrapper
  const previewWithWrapper = (face: string | (typeof wrappers)[0], column: string) => {
    // For the wrapper column, apply the selected eyes to the wrapper's display
    if (column === "wrapper") {
      const wrapper = face as (typeof wrappers)[0]
      // Get the index of the selected eyes
      const eyesIndex = getSelectedEyesIndex()
      if (eyesIndex === -1) return wrapper.display // Fallback to default display

      // Get the selected eyes pattern (without parentheses)
      const selectedEyesPattern = innerFaces.column2[eyesIndex]

      // If this wrapper preserves parentheses, use the face with parentheses
      if (wrapper.preserveParentheses) {
        return wrapper.format.replace("{face}", `(${selectedEyesPattern})`)
      } else {
        // Otherwise, use the inner face without parentheses
        return wrapper.format.replace("{face}", selectedEyesPattern)
      }
    }

    // For the eyes column, just apply the wrapper
    if (column === "column2") {
      return combineEmoticon(selectedWrapper, face as string)
    }

    // For other columns, we need to apply the selected eyes
    const eyesIndex = getSelectedEyesIndex()
    if (eyesIndex === -1) return combineEmoticon(selectedWrapper, face as string) // Fallback

    // Find the index of this face in its column
    const faceIndex = faces[column as "column3" | "column4"].indexOf(face as string)
    if (faceIndex === -1) return combineEmoticon(selectedWrapper, face as string) // Fallback

    // Create a modified face with the selected eyes
    let modifiedFace = face as string

    // Get the selected eyes pattern (without parentheses)
    const selectedEyesPattern = innerFaces.column2[eyesIndex]

    if (column === "column3") {
      // For eyebrows column, replace the eyes part
      // This is a simplified approach - in a real app, you might need more sophisticated pattern matching
      const leftEye = selectedEyesPattern.split(" ͜ʖ")[0]
      const rightEye = selectedEyesPattern.split(" ͜ʖ")[1]

      // Create a new face with the selected eyes
      modifiedFace = `(${leftEye} ͜ʖ ${rightEye})`
    } else if (column === "column4") {
      // For mouths column, replace the eyes part
      const leftEye = selectedEyesPattern.split(" ͜ʖ")[0]
      const rightEye = selectedEyesPattern.split(" ͜ʖ")[1]

      // Create a new face with the selected eyes
      modifiedFace = `(${leftEye} ͜ʖ ${rightEye})`
    }

    return combineEmoticon(selectedWrapper, modifiedFace)
  }

  // Function to check if a face contains the selected eyes/eyebrows/mouth
  const containsSelectedComponent = (face: string, column: "column2" | "column3" | "column4") => {
    if (column === "column2") {
      // Check if this face has the same eyes as the selected eyes
      return face === selectedEyes
    } else if (column === "column3") {
      // Check if this face has the same eyebrows as the selected eyebrows
      return face === selectedEyebrows
    } else if (column === "column4") {
      // Check if this face has the same mouth as the selected mouth
      return face === selectedMouth
    }
    return false
  }

  return (
    <div className="rounded-lg overflow-hidden">
      {/* Header with combined emoticon and copy button */}
      <div className="flex justify-between items-center bg-white p-4">
        <div className="text-2xl font-medium text-center flex-grow">{combinedEmoticon}</div>
        <button
          onClick={handleCopy}
          className={cn(
            "px-4 py-2 rounded-md text-black flex items-center gap-2",
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
        <div className="border-r border-white-800 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-white-800 font-medium">Wrappers</div>
          {wrappers.map((wrapper, index) => (
            <div
              key={`wrapper-${index}`}
              className={cn(
                "p-4 text-center cursor-pointer hover:bg-white-800 transition-colors text-xl",
                "border-b border-white-800",
                selectedWrapper.id === wrapper.id && "bg-white-900",
              )}
              onClick={() => handleSelectWrapper(wrapper)}
            >
              <div className="bg-white-100 py-3 rounded-md">{previewWithWrapper(wrapper, "wrapper")}</div>
            </div>
          ))}
        </div>

        {/* Column 2 - Eyes */}
        <div className="border-r border-white-800 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-white-800 font-medium">Eyes</div>
          {faces.column2.map((face, index) => (
            <div
              key={`face2-${index}`}
              className={cn(
                "p-4 text-center cursor-pointer hover:bg-white-800 transition-colors text-xl",
                "border-b border-white-800",
                containsSelectedComponent(face, "column2") && "bg-white-900",
              )}
              onClick={() => handleSelectFace(face, "column2")}
            >
              <div
                className={cn(
                  "bg-white-100 py-3 rounded-md",
                  containsSelectedComponent(face, "column2") && "ring-2 ring-blue-500",
                )}
              >
                {previewWithWrapper(face, "column2")}
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 - Eyebrows */}
        <div className="border-r border-white-800 max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-white-800 font-medium">Eyebrows</div>
          {faces.column3.map((face, index) => (
            <div
              key={`face3-${index}`}
              className={cn(
                "p-4 text-center cursor-pointer hover:bg-white-800 transition-colors text-xl",
                "border-b border-white-800",
                containsSelectedComponent(face, "column3") && "bg-white-900",
              )}
              onClick={() => handleSelectFace(face, "column3")}
            >
              <div
                className={cn(
                  "bg-white-100 py-3 rounded-md",
                  containsSelectedComponent(face, "column3") && "ring-2 ring-blue-500",
                )}
              >
                {previewWithWrapper(face, "column3")}
              </div>
            </div>
          ))}
        </div>

        {/* Column 4 - Mouths */}
        <div className="max-h-[500px] overflow-y-auto">
          <div className="p-2 text-center text-black bg-white-800 font-medium">Mouths</div>
          {faces.column4.map((face, index) => (
            <div
              key={`face4-${index}`}
              className={cn(
                "p-4 text-center cursor-pointer hover:bg-white-800 transition-colors text-xl",
                "border-b border-white-800",
                containsSelectedComponent(face, "column4") && "bg-white-900",
              )}
              onClick={() => handleSelectFace(face, "column4")}
            >
              <div
                className={cn(
                  "bg-white-100 py-3 rounded-md",
                  containsSelectedComponent(face, "column4") && "ring-2 ring-blue-500",
                )}
              >
                {previewWithWrapper(face, "column4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
