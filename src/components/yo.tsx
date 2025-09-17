"use client"

import type React from "react"
import { useState, type ChangeEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Input } from "@/src/components/ui/input"
import { Copy, Sparkles, ChevronDown, } from "lucide-react"
import { motion } from "framer-motion"

import {
  fonts,
} from "@/src/app/font-corsivo/data"
import EmoticonSelector from "@/src/components/Specialchar"
import Script from "next/script"

const combinedCharMap: any = {
  ...fonts,
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

  const displayedText = inputText.trim() || "lettere in corsivo"

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="px-4 py-1 rounded-full bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-sm font-medium">
                Generatore Lettere Corsive e Caratteri Speciali 
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Lettere in Corsivo e Caratteri Speciali
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl bg-bl mx-auto">
              Genera lettere corsive, alfabeto in corsivo maiuscolo e minuscolo, caratteri speciali da tastiera per Instagram, tatuaggi e social media. Copia e incolla facilmente!, fonts corsivo
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
                    placeholder="Scrivi qui per generare lettere in corsivo e caratteri speciali..."
                    value={inputText}
                    onChange={handleInputChange}
                    aria-label="Inserisci testo per generare lettere corsive e caratteri speciali"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Sparkles className="w-5 h-5 text-purple-500 opacity-70" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Crea scrittura in corsivo, alfabeto corsivo maiuscolo, caratteri speciali per Instagram, WhatsApp, tatuaggi e molto altro!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 px-8 text-white text-center">
                <p className="text-sm font-medium">Oltre 100+ stili di lettere corsive e caratteri speciali da tastiera</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="mb-10 mt-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Lettere Corsive e Alfabeto in Corsivo</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 pl-14">
                Scopri la nostra collezione di lettere in corsivo, alfabeto corsivo maiuscolo e minuscolo, caratteri speciali da tastiera per Instagram, scrittura corsiva per tatuaggi, font corsivo per social media. Perfetto per creare belle scritture in corsivo, calligrafia corsiva, lettere corsive maiuscole e minuscole. Usa questi caratteri speciali con tastiera copia incolla per Instagram, WhatsApp, Facebook e altre piattaforme social.
              </p>
            </div>

         <div className="grid gap-4">
                <div id="ad-desktop" className="flex overflow-x-hidden justify-center ">
      <Script
        id="adsterra-desktop"
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
              var container = document.getElementById("ad-desktop");
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
              <div className=" hidden md:flex my-6 justify-center w-full ">
                  <div
                        id="ad-container-728x90"
                        style={{ width: "100%", maxWidth: "728px", minHeight: "90px" }}
                      />
                      <Script
                        id="adsterra-banner"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                          __html: `
                            var atOptions = {
                              'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
                              'format' : 'iframe',
                              'height' : 90,
                              'width' : 728,
                              'params' : {}
                            };
                            var container = document.getElementById("ad-container-728x90");
                            if (container) {
                              var script = document.createElement("script");
                              script.type = "text/javascript";
                              script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
                              container.appendChild(script);
                            }
                          `,
                        }}
                      />
              </div>

            {visibleFonts < Object.keys(combinedCharMap).length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowMoreFonts}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 dark:bg-gray-900">
                    <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">
                      Carica Altri Stili di Lettere Corsive
                    </span>
                    <ChevronDown className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                  </span>
                </button>
              </div>
            )}
          </motion.div>

          {/* SEO Content Section */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="prose max-w-none dark:prose-invert">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Lettere in Corsivo: Guida Completa per Caratteri Speciali
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Alfabeto in Corsivo Maiuscolo e Minuscolo
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Il nostro generatore di lettere corsive ti permette di creare un alfabeto in corsivo completo, 
                    sia maiuscolo che minuscolo. Perfetto per scrittura Instagram, tatuaggi stilizzati e 
                    calligrafia corsiva elegante.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Lettere corsivo maiuscolo (A, B, C, D...)</li>
                    <li>• Alfabeto corsivo minuscolo (a, b, c, d...)</li>
                    <li>• Font corsivo per social media</li>
                    <li>• Caratteri speciali da tastiera</li>
                  </ul>
                </div>
                  <div className="flex justify-center my-4">
      <div id="ad-container-mobile" className="w-full flex justify-center"></div>

      <Script
        id="adsterra-mobile"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions = {
              'key' : '01eb145a7a8f8ac565cac8ed8950228e',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
            var container = document.getElementById("ad-container-mobile");
            if (container) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "//www.highperformanceformat.com/01eb145a7a8f8ac565cac8ed8950228e/invoke.js";
              container.appendChild(script);
            }
          `,
        }}
      />
    </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Caratteri Speciali per Instagram e Social
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Usa i nostri caratteri speciali con tastiera copia incolla per rendere unici i tuoi post. 
                    Ideali per Instagram, WhatsApp, Facebook e altre piattaforme social.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Scrittura corsiva per Instagram</li>
                    <li>• Font speciali per bio Instagram</li>
                    <li>• Simboli per tatuaggi e frasi tumblr</li>
                    <li>• Belle scritture in corsivo</li>
                  </ul>
                </div>
              </div>  
          

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Come Usare le Lettere Corsive
                </h2>
                <ol className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>1. Scrivi il tuo testo nel campo di input</li>
                  <li>2. Scegli lo stile di scrittura corsiva che preferisci</li>
                  <li>3. Clicca su copia per copiare le lettere corsive</li>
                  <li>4. Incolla dove vuoi: Instagram, WhatsApp, tatuaggi, etc.</li>
                </ol>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Stili di Calligrafia Corsiva Disponibili
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Il nostro generatore offre diversi stili di <strong>scrittura in corsivo</strong>, 
                  dal classico <strong>font corsivo</strong> elegante alle <strong>lettere corsive</strong> 
                  più moderne. Perfetto per creare <strong>belle scritture in corsivo</strong>, 
                  <strong>calligrafia corsiva</strong> professionale e <strong>caratteri speciali</strong> 
                  unici per ogni occasione.
                </p>
              </div>
            </div>
          </motion.div>

      <EmoticonSelector />
  <div className=" hidden md:flex justify-center w-full ">
      <div
            id="ad-container-728x90"
            style={{ width: "100%", maxWidth: "728px", minHeight: "90px" }}
          />
          <Script
            id="adsterra-banner"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var atOptions = {
                  'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
                var container = document.getElementById("ad-container-728x90");
                if (container) {
                  var script = document.createElement("script");
                  script.type = "text/javascript";
                  script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
                  container.appendChild(script);
                }
              `,
            }}
          />
  </div>
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

    toast.success("Lettere corsive copiate negli appunti!", {
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
      className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 "
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
            aria-label="Copia lettere corsive negli appunti"
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