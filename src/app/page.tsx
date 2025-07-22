"use client"

import type React from "react"
import { useState, useEffect, type ChangeEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "../components/ui/input"
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
} from "./data"
import EmoticonSelector from "../components/Specialchar"
import Head from "next/head"

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
     <Head>

         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Caratteri Speciali 10",
              "url": "https://www.caratterispeciali10.it",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.caratterispeciali10.it/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Caratteri Speciali 10",
              "url": "https://www.caratterispeciali10.it",
              "logo": "https://www.caratterispeciali10.it/logo.png"
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Caratteri Speciali 10 - Home",
              "url": "https://www.caratterispeciali10.it",
              "description": "Generatore di caratteri speciali da tastiera, simboli eleganti per Instagram, Facebook, Fortnite, WhatsApp e molto altro.",
              "inLanguage": "it"
            })
          }}
        />
      </Head>
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
              Caratteri Speciali per Font Eleganti
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
                    Scopri i simboli e caratteri speciali per Instagram, Facebook, Fortnite, WhatsApp e molto altro!
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
                per Instagram, Facebook, WhatsApp, Fortnite, Brawl Stars e molto altro!
              </p>
            </div>

            <div className="grid gap-4">
              {Object.entries(combinedCharMap)
                .slice(0, visibleFonts)
                .map(([fontName, fontMap], index) => (
                  <FancyTextContainer
                    key={fontName}
                    charMap={fontMap}
                    inputText={displayedText}
                    fontName={fontName}
                    index={index}
                  />
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 mb-10"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Guida ai Caratteri Speciali</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Caratteri Speciali per Social Media
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      I caratteri speciali su Instagram, Facebook e WhatsApp possono rendere il tuo profilo unico e
                      attirare più follower.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Caratteri Speciali nei Giochi
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Personalizza il tuo nome in Fortnite e Brawl Stars con caratteri speciali aesthetic per
                      distinguerti dagli altri giocatori.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Caratteri Speciali in Word
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Scopri come utilizzare i caratteri speciali di Word per documenti professionali e accademici.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Simboli e Caratteri Speciali HTML
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      I caratteri speciali HTML sono essenziali per gli sviluppatori web. Usa il nostro strumento per
                      generarli facilmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Crea testi con caratteri speciali unici e belli
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vuoi rendere i tuoi testi più belli, diversi e creativi? Con il nostro generatore di caratteri speciali
                puoi trasformare semplici frasi in scritte artistiche che puoi usare ovunque: nei tuoi post Instagram,
                nei messaggi WhatsApp, nei commenti Facebook o anche nei giochi come Fortnite e Brawl Stars.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Cosa sono i caratteri speciali?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    I caratteri speciali sono simboli che non trovi sulla tastiera normale. Sono lettere o segni
                    particolari presi da un sistema chiamato Unicode. Con questi simboli puoi creare testi diversi,
                    belli, e facili da copiare e incollare. Puoi usarli su molti siti famosi come Instagram, Facebook,
                    YouTube o Discord.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Come si usano i caratteri speciali?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    È molto semplice. Basta scrivere una frase nel nostro convertitore, e subito vedrai il testo in
                    tanti stili diversi: corsivo, gotico, elegante, scritto a mano o anche stile aesthetic. Ti basta
                    cliccare sullo stile che ti piace e incollarlo dove vuoi.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Funziona anche con <strong>caratteri speciali da tastiera</strong>,{" "}
                    <strong>caratteri speciali html</strong> e con la
                    <strong> tastiera con caratteri speciali</strong> del tuo telefono o computer.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Dove posso usare questi caratteri?
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>
                      Post di Instagram con <strong>caratteri speciali instagram</strong>
                    </li>
                    <li>Messaggi WhatsApp con simboli creativi</li>
                    <li>
                      Bio e commenti su Facebook con <strong>caratteri speciali per facebook</strong>
                    </li>
                    <li>Username o nickname nei giochi come Fortnite o Brawl Stars</li>
                    <li>
                      Testi per Word o HTML usando <strong>caratteri speciali in word</strong> o{" "}
                      <strong>html caratteri speciali</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
