"use client"

import type React from "react"
import { useState, type ChangeEvent } from "react"

import {
  fonts,
  Dot_Saparater,
  strikeThrough,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  stinky,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  Magical_Fancy_Font,
  Medical_Serif_Font,
  Lovely_Heart_Font,
  Underline_Strike_Font,
  Square_Letter_Font,
  Boxed_Square_Font,
  Full_Width_Bracket_Font,
  Corner_Bracket_Font,
  Light_Shade_Block_Font,
  Dark_Text_Bubbles,
  Royal_Bear_Style,
} from "./data"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "../components/ui/input"

const combinedCharMap: any = {
  ...fonts,
  "Underline Strike Font": Underline_Strike_Font,
  "Boxed Square Font": Boxed_Square_Font,
  "Square Letter Font": Square_Letter_Font,
  "Full Width Bracket Font": Full_Width_Bracket_Font,
  "Corner Bracket Font": Corner_Bracket_Font,
  "Light Shade Block Font": Light_Shade_Block_Font,
  "Dark Text Bubbles": Dark_Text_Bubbles,
  "Royal Bear Style": Royal_Bear_Style,
  "Magical Fancy Font": Magical_Fancy_Font,
  "Medical Serif Font": Medical_Serif_Font,
  "Lovely Heart Font": Lovely_Heart_Font,
  "Strike Through": strikeThrough,
  "Dot Separator": Dot_Saparater,
  "Tilde Strike Through": tildeStrikeThrough,
  "Underline": underline,
  "Double Underline": doubleUnderline,
  "Slash Through": slashThrough,
  "Stinky": stinky,
  "Hearts Between": heartsBetween,
  "Arrow Below": arrowBelow,
  "Cross Above Below": crossAboveBelow,
};


interface FancyTextContainerProps {
  charMap: any
  inputText: string
  fontName: string
}

const FancyTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [visibleFonts, setVisibleFonts] = useState<number>(20)
  const fontNames = Object.keys(fonts)

  const handleShowMoreFonts = () => {
    setVisibleFonts((prevVisibleFonts) => prevVisibleFonts + 20)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }
  const displayedText = inputText.trim() || "caratteri speciali"
  return (
    <div className="px-7 overflow-hidden">
      <div className="border border-zinc-200 shadow-md bg-transparent p-4 mb-3 rounded-2xl pt-8 gap-2 flex flex-col text-center justify-center">
        <h1 className="text-3xl md:text-4xl font-normal text-[#7b33f1] text-center">
          Generatore di Caratteri Speciali per Font Eleganti e Formali
        </h1>

        <p className="text-sm font-normal text-center text-[#5F5F5F] dark:text-white">
          Una collezione di caratteri speciali da tastiera per rendere più elegante il tuo contenuto per qualsiasi
          pubblico.
        </p>

        <div className="mt-2 text-sm text-center text-[#5F5F5F] dark:text-white">
          <p>Scopri i simboli e caratteri speciali per Instagram, Facebook, Fortnite, WhatsApp e molto altro!</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-row gap-0.5 text-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stopColor="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stopColor="white" stopOpacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                strokeWidth="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stopColor="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stopColor="white" stopOpacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                strokeWidth="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stopColor="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stopColor="white" stopOpacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                strokeWidth="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stopColor="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stopColor="white" stopOpacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                strokeWidth="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="star-with-partial-fill-root-0-2-168"
            >
              <defs>
                <linearGradient id="qt_star_gradient_-1">
                  <stop offset="80%" stopColor="var(--x-accent-1-1)"></stop>
                  <stop offset="80%" stopColor="white" stopOpacity="1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M5.40625 5.48438C5.52083 5.46354 5.61979 5.42188 5.70312 5.35938C5.79688 5.28646 5.86979 5.20312 5.92188 5.10938L7.54688 1.625C7.64062 1.42708 7.79167 1.32812 8 1.32812C8.20833 1.32812 8.35938 1.42708 8.45312 1.625L10.0781 5.10938C10.1302 5.20312 10.1979 5.28646 10.2812 5.35938C10.375 5.42188 10.4792 5.46354 10.5938 5.48438L14.2344 6.03125C14.4427 6.0625 14.5781 6.18229 14.6406 6.39062C14.7031 6.59896 14.6615 6.77604 14.5156 6.92188L11.8594 9.64062C11.7865 9.71354 11.7344 9.80208 11.7031 9.90625C11.6719 10.0104 11.6615 10.1146 11.6719 10.2188L12.2969 14.0469C12.3385 14.2656 12.276 14.4375 12.1094 14.5625C11.9427 14.6875 11.7656 14.7031 11.5781 14.6094L8.32812 12.8125C8.22396 12.75 8.11458 12.7188 8 12.7188C7.88542 12.7188 7.77604 12.75 7.67188 12.8125L4.42188 14.6094C4.23438 14.7031 4.05729 14.6875 3.89062 14.5625C3.72396 14.4375 3.66146 14.2656 3.70312 14.0469L4.32812 10.2188C4.34896 10.1146 4.34375 10.0104 4.3125 9.90625C4.28125 9.80208 4.22396 9.71354 4.14062 9.64062L1.48438 6.92188C1.33854 6.77604 1.29688 6.59896 1.35938 6.39062C1.42188 6.18229 1.55729 6.0625 1.76562 6.03125L5.40625 5.48438Z"
                fill="#c209c1"
                strokeWidth="1"
                stroke="var(--x-accent-1-1)"
              ></path>
            </svg>
          </div>
          <p>4.9</p>
          <p className="text-[#5F5F5F] text-[12.5px] mt-0.5">(1,284)</p>
        </div>

        <Input
          className="text-black dark:text-white border-[#888888] focus:border-[#7b33f1] border-2 mt-2 rounded-xl text-md placeholder:text-[#5F5F5F] py-7 form-control fancytext mb-1 px-4"
          name="text"
          placeholder="Scrivi o incolla il testo qui per creare caratteri speciali da copiare..."
          value={inputText}
          onChange={handleInputChange}
          aria-label="Inserisci testo per generare caratteri speciali"
        />

        <div className="mt-2 text-xs text-center text-[#5F5F5F] dark:text-white">
          <p>Quali sono i caratteri speciali più popolari? Scopri simboli per Instagram, Facebook, WhatsApp e altro!</p>
        </div>
      </div>

      <section aria-label="Sezione caratteri speciali" className="mb-6">
        <h2 className="text-xl font-semibold text-[#7b33f1] mb-3">Caratteri Speciali da Tastiera</h2>
        <p className="text-sm text-[#5F5F5F] dark:text-white mb-4">
          Usa la nostra collezione di caratteri speciali sulla tastiera per rendere unici i tuoi testi. Perfetti per
          Instagram, Facebook, WhatsApp, Fortnite, Brawl Stars e molto altro!
        </p>
      </section>

      <div className="w-screen">
        {Object.entries(combinedCharMap)
          .slice(0, visibleFonts)
          .map(([fontName, fontMap]) => (
            <FancyTextContainer key={fontName} charMap={fontMap} inputText={displayedText} fontName={fontName} />
          ))}
      </div>

      <div className="w-screen flex justify-center items-center">
        {visibleFonts < Object.keys(combinedCharMap).length && (
          <button className="text-white font-bold rounded-xl px-4 py-2 bg-[#c209c1] mt-4" onClick={handleShowMoreFonts}>
            Carica Altri Caratteri Speciali
          </button>
        )}
      </div>

      <section className="my-8 px-4">
        <h2 className="text-xl font-semibold text-[#7b33f1] mb-3">Guida ai Caratteri Speciali</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Caratteri Speciali per Social Media</h3>
            <p className="text-sm text-[#5F5F5F] dark:text-white mb-2">
              I caratteri speciali su Instagram, Facebook e WhatsApp possono rendere il tuo profilo unico e attirare più
              follower.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Caratteri Speciali nei Giochi</h3>
            <p className="text-sm text-[#5F5F5F] dark:text-white mb-2">
              Personalizza il tuo nome in Fortnite e Brawl Stars con caratteri speciali aesthetic per distinguerti dagli
              altri giocatori.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Caratteri Speciali in Word</h3>
            <p className="text-sm text-[#5F5F5F] dark:text-white mb-2">
              Scopri come utilizzare i caratteri speciali di Word per documenti professionali e accademici.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Simboli e Caratteri Speciali HTML</h3>
            <p className="text-sm text-[#5F5F5F] dark:text-white mb-2">
              I caratteri speciali HTML sono essenziali per gli sviluppatori web. Usa il nostro strumento per generarli
              facilmente.
            </p>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  )
}

// FancyTextContainer component
const FancyTextContainer: React.FC<FancyTextContainerProps> = ({ charMap, inputText, fontName }) => {
  // Function to generate fancy text
  const generateFancyText = (text: string): string => {
    if (typeof charMap === "function") {
      return charMap(text)
    } else {
      return text
        .split("")
        .map((char, index) => {
          const lowercaseChar = char.toLowerCase()
          if (charMap[lowercaseChar]) {
            return text[index].toUpperCase() === char ? charMap[lowercaseChar].toUpperCase() : charMap[lowercaseChar]
          } else {
            return char
          }
        })
        .join("")
    }
  }

  const fancyText = generateFancyText(inputText)
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(fancyText)
    // Set the copied state to true
    setIsCopied(true)

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)

    // Display toast notification
    toast.success("Copiato negli appunti!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return (
    <div
      onClick={handleCopy}
      className="copy-container w-full pr-[70px] justify-between flex items-center dark:text-white cursor-pointer bg-transparent border-[#dfdfdf] border-b py-3 pl-1 rounded"
    >
      <div className="truncate mx-3">
        <h2 className="text-2xl font-bold truncate max-w-max">{fancyText}</h2>
        <p className="text-zinc-400">{fontName}</p>
      </div>
      <button
        className="text-white font-bold rounded-xl px-4 py-2 bg-[#c209c1]"
        onClick={(e) => {
          e.stopPropagation()
          handleCopy()
        }}
        aria-label="Copia caratteri speciali negli appunti"
      >
        {isCopied ? "Copiato!" : "Copia"}
      </button>
    </div>
  )
}

export default FancyTextGenerator
