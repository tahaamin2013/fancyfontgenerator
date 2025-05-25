"use client"

import { useState, useEffect, type ChangeEvent } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Copy, Sparkles, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Import the embellishment patterns
import { embellishmentPatterns } from "@/embellishment-patterns"

export default function FancyTextGenerator() {
  const [inputText, setInputText] = useState<string>("")
  const [visiblePatterns, setVisiblePatterns] = useState<number>(20)
  const [isLoading, setIsLoading] = useState(true)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleShowMorePatterns = () => {
    setVisiblePatterns((prev) => prev + 20)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const displayedText = inputText.trim() || "Il Tuo Nome"

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)

    setTimeout(() => {
      setCopiedIndex(null)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <Sparkles className="w-12 h-12 text-purple-600 animate-pulse" />
            <p className="mt-4 text-purple-600 font-medium">Caricamento...</p>
          </div>
        </div>
      ) : (
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
              Decorazioni per Nomi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fai risaltare il tuo nome o nickname con bellissime decorazioni di caratteri speciali per social media,
              giochi e altro ancora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="relative">
                  <Input
                    className="w-full text-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl py-6 px-5 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                    name="text"
                    placeholder="Inserisci qui il tuo nome o nickname..."
                    value={inputText}
                    onChange={handleInputChange}
                    aria-label="Inserisci il tuo nome o nickname"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Sparkles className="w-5 h-5 text-purple-500 opacity-70" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Scopri decorazioni con caratteri speciali per Instagram, Facebook, Fortnite, WhatsApp e altro!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 px-8 text-white text-center">
                <p className="text-sm font-medium">Oltre 100+ stili di caratteri speciali disponibili gratuitamente</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Decorazioni con Caratteri Speciali</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 pl-14">
                Usa la nostra collezione di decorazioni con caratteri speciali per rendere unico il tuo nome. Perfetto
                per Instagram, Facebook, WhatsApp, Fortnite e altro!
              </p>
            </div>

            <div className="grid gap-4">
              {embellishmentPatterns.slice(0, visiblePatterns).map((pattern, index) => {
                const decoratedName = pattern.replace(/your name/gi, displayedText)
                const isCopied = copiedIndex === index

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleCopy(decoratedName, index)}
                    className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white truncate">{decoratedName}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Stile #{index + 1}</p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleCopy(decoratedName, index)
                          }}
                          className={cn(
                            "flex items-center justify-center rounded-full w-10 h-10 transition-colors duration-200",
                            isCopied
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                              : "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800",
                          )}
                          aria-label="Copia negli appunti"
                        >
                          {isCopied ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
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
              })}
            </div>

            {visiblePatterns < embellishmentPatterns.length && (
              <div className="flex justify-center mt-10">
                <Button
                  onClick={handleShowMorePatterns}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="flex items-center gap-2">
                    <span>Carica Altri Stili</span>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            )}
          </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Come usare le decorazioni con caratteri speciali
              </h2>

              <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Cosa sono le decorazioni con caratteri speciali?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Le decorazioni con caratteri speciali sono combinazioni di simboli e lettere che rendono il tuo nome più bello e originale. Puoi usarle per far risaltare il tuo testo online.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Come usarle:</h3>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Scrivi il tuo nome o nickname nel campo in alto.</li>
                <li>Guarda i diversi stili disponibili.</li>
                <li>Clicca su uno stile per copiarlo.</li>
                <li>Incolla il nome dove vuoi usarlo.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Dove puoi usare il tuo nome decorato:
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>Profili social (Instagram, Facebook, Twitter)</li>
                <li>Nomi nei giochi (Fortnite, Brawl Stars, Minecraft)</li>
                <li>App di messaggi (WhatsApp, Discord, Telegram)</li>
                <li>Firme email</li>
                <li>Forum e comunità online</li>
                </ul>
              </div>
              </div>
            </div>
            <div className="p-8 pt-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Domande frequenti sulle decorazioni di testo
              </h2>
              <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Perché usare caratteri speciali per il nome?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                I caratteri speciali rendono il tuo nome unico e facile da riconoscere. Ti aiutano a farti notare su social, giochi e chat.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                I nomi decorati funzionano ovunque?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Quasi tutte le piattaforme accettano questi caratteri. Se hai dubbi, prova a incollare il nome per vedere se funziona.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                È sicuro usare questi caratteri?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Sì, sono simboli Unicode standard. Non ci sono rischi per la sicurezza del tuo account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Posso decorare anche messaggi o bio?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Certo! Puoi decorare qualsiasi testo: messaggi, bio, descrizioni, titoli e altro.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Come creo uno stile personalizzato?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Usa il generatore qui sopra per trovare idee. Puoi anche combinare simboli diversi per creare una decorazione unica.
                </p>
              </div>
              </div>
              <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Generatore di nomi decorati online gratis
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Il nostro generatore è gratis e non serve registrarsi. Provalo per trovare il tuo stile e rendere il tuo nome speciale su ogni piattaforma!
              </p>
              </div>
              <div className="mt-10">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>generatore caratteri speciali</li>
                <li>decorazioni per nomi</li>
                <li>nome decorato Instagram</li>
                <li>nickname con simboli</li>
                <li>testo stilizzato online</li>
                <li>font speciali per social</li>
                <li>simboli per nomi giochi</li>
                <li>caratteri strani per WhatsApp</li>
              </ul>
              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Perché scegliere il nostro generatore di decorazioni per nomi?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Il nostro strumento ti permette di trasformare facilmente il tuo nome o nickname in una versione unica e accattivante, pronta per essere usata ovunque online. Grazie a una vasta selezione di stili e simboli, puoi trovare la decorazione perfetta per ogni occasione, sia che tu voglia distinguerti sui social, nei giochi o nelle chat.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Tutti gli stili sono compatibili con la maggior parte delle piattaforme e non richiedono installazioni o registrazioni. Basta inserire il testo, scegliere lo stile che preferisci e copiarlo con un click. Il generatore è aggiornato regolarmente per offrirti sempre nuove idee e combinazioni originali.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Prova subito il generatore e scopri come un semplice dettaglio può rendere il tuo nome davvero speciale!
                </p>
              </div>
            </div>
            </motion.div>
        </div>
      )}
    </div>
  )
}
