"use client"

import { motion } from "framer-motion"
import { useEmojiToast } from "./toast-provider"
import { Copy } from "lucide-react"

interface EmojiGridProps {
  symbols: string[]
  hexToEmoji: (hex: string) => string
  categoryName: string
  limit?: number
  showAll?: boolean
  onShowMore?: () => void
}

export function EmojiGrid({
  symbols,
  hexToEmoji,
  categoryName,
  limit = 8,
  showAll = false,
  onShowMore,
}: EmojiGridProps) {
  const { showCopiedToast } = useEmojiToast()
  const displaySymbols = showAll ? symbols : symbols.slice(0, limit)

  const copyEmoji = (emoji: string) => {
    navigator.clipboard.writeText(emoji)
    showCopiedToast(emoji)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {displaySymbols.map((symbol, index) => {
          const emoji = hexToEmoji(symbol)
          return (
            <motion.div
              key={`${categoryName}-${index}`}
              className="aspect-square flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md cursor-pointer transition-all group relative overflow-hidden"
              onClick={() => copyEmoji(emoji)}
              title="Click to copy"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">{emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Copy className="h-3 w-3 text-gray-400" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {!showAll && symbols.length > limit && (
        <div className="mt-6 text-center">
          <motion.button
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            onClick={onShowMore}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Show all {symbols.length} emojis
          </motion.button>
        </div>
      )}
    </div>
  )
}
