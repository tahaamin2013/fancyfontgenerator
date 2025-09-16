"use client"

import type React from "react"
import { useState, useEffect, type ChangeEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "@/src/components/ui/input"
import { Copy, Sparkles, ChevronDown, Star } from "lucide-react"
import { motion } from "framer-motion"

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
} from "@/src/app/data"
import EmoticonSelector from "@/src/components/Specialchar"
import Script from "next/script"

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
  Underline: underline,
  "Double Underline": doubleUnderline,
  "Slash Through": slashThrough,
  Stinky: stinky,
  "Hearts Between": heartsBetween,
  "Arrow Below": arrowBelow,
  "Cross Above Below": crossAboveBelow,
}

interface FancyTextContainerProps {
  charMap: any
  inputText: string
  fontName: string
  index: number
}

const FancyTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [visibleFonts, setVisibleFonts] = useState<number>(20)


  const handleShowMoreFonts = () => {
    setVisibleFonts((prevVisibleFonts) => prevVisibleFonts + 20)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const displayedText = inputText.trim() || "caratteri speciali"

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
  <>
    <title>Generatore di Caratteri Speciali per Nickname</title>
    <meta
      name="description"
      content="Crea facilmente caratteri speciali e simboli per nickname, social e giochi. Copia e personalizza il tuo testo con oltre 100+ stili unici!"
    />
    <link rel="canonical" href="https://www.caratterispeciali10.it/social/generatore-di-caratteri-per-nickname" />
  </>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="px-4 py-1 rounded-full bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-sm font-medium">
                Generatore di Caratteri Speciali
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
Generatore di caratteri per Nickname
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl bg-bl mx-auto">
              Una collezione di caratteri speciali da tastiera per rendere più elegante il tuo contenuto per qualsiasi
              pubblico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 ">
  
                <div className="relative -mt-[30px]">
                  <Input
                    className="w-full text-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl py-6 px-5 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                    name="text"
                    placeholder="Scrivi o incolla il testo qui per creare caratteri speciali da copiare..."
                    value={inputText}
                    onChange={handleInputChange}
                    aria-label="Inserisci testo per generare caratteri speciali"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Sparkles className="w-5 h-5 text-purple-500 opacity-70" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Scopri i simboli e caratteri speciali per Nickname!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 px-8 text-white text-center">
                <p className="text-sm font-medium">Oltre 100+ stili di caratteri speciali disponibili gratuitamente</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="mb-10 mt-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Caratteri Speciali da Tastiera</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 pl-14">
                Usa la nostra collezione di caratteri speciali sulla tastiera per rendere unici i tuoi testi. Perfetti
                per Nickname!
              </p>
            </div>

      <div className="grid gap-4">
      {Object.entries(combinedCharMap)
        .slice(0, visibleFonts)
        .map(([fontName, fontMap], index) => (
          <div key={fontName}>
            {/* Font Container */}
            <FancyTextContainer
              charMap={fontMap}
              inputText={displayedText}
              fontName={fontName}
              index={index}
            />

            {/* Show Ad after every 6 fonts */}
            {(index + 1) % 6 === 0 && (
            <div className=" mt-3 flex  justify-center">
              <div className="w-screen flex justify-center md:w-full overflow-x-scroll">
 {/* Desktop Ad */}
  <div id={`ad-desktop-${index}`} />
  <Script
    id={`adsterra-desktop-${index}`}
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var atOptions = {
            'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
          var container = document.getElementById("ad-desktop-${index}");
          if (container) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
            container.appendChild(script);
          }
        })();
      `,
    }}
  />

              </div>

              </div>
            )}
          </div>
        ))}
    </div>


            {visibleFonts < Object.keys(combinedCharMap).length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowMoreFonts}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 dark:bg-gray-900">
                    <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">
                      Carica Altri Caratteri Speciali
                    </span>
                    <ChevronDown className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                  </span>
                </button>
              </div>
            )}
          </motion.div>
      <EmoticonSelector />
        </div>
    
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar theme="colored" />

    </div>
  )
}

// FancyTextContainer component
const FancyTextContainer: React.FC<FancyTextContainerProps> = ({ charMap, inputText, fontName, index }) => {
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
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={handleCopy}
      className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white truncate">{fancyText}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{fontName}</p>
        </div>
        <div className="ml-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCopy()
            }}
            className={`flex items-center justify-center rounded-full w-10 h-10 transition-colors duration-200 ${
              isCopied
                ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                : "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
            }`}
            aria-label="Copia caratteri speciali negli appunti"
          >
            {isCopied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  
    </motion.div>
  )
}

export default FancyTextGenerator
