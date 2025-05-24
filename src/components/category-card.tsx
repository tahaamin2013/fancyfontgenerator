"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import { EmojiGrid } from "./emoji-grid"

interface CategoryCardProps {
  categoryName: string
  categoryData: any
  hexToEmoji: (hex: string) => string
}

export function CategoryCard({ categoryName, categoryData, hexToEmoji }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const mainEmoji = categoryData.headers.main ? hexToEmoji(categoryData.headers.main) : "📋"
  const symbols = categoryData.symbols || []

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full shadow-sm">
            {mainEmoji}
          </div>
          <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            {categoryData.title}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">{symbols.length} emojis</span>
          <motion.div
            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500" />
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
            className="px-5 pb-5"
          >
            <EmojiGrid symbols={symbols} hexToEmoji={hexToEmoji} categoryName={categoryName} showAll={true} />
          </motion.div>
        )}

        {!isExpanded && (
          <div className="px-5 pb-5">
            <EmojiGrid
              symbols={symbols}
              hexToEmoji={hexToEmoji}
              categoryName={categoryName}
              onShowMore={toggleExpand}
            />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
