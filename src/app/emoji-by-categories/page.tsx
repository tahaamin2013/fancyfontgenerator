"use client"

import { useState, useEffect } from "react"
import { Search, Sparkles } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { CategoryCard } from "@/src/components/category-card"
import { ToastProvider } from "@/src/components/toast-provider"
import { motion } from "framer-motion"
import tags from "./data"
import { hexToEmoji } from "@/src/utils"

export default function EmojiByCategories() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [tagOrder, setTagOrder] = useState<string[]>([])

  useEffect(() => {
    // Create a default tag order based on the keys in the tags object
    const defaultOrder = Object.keys(tags)
    setTagOrder(defaultOrder)
  }, [])

  // Filter categories based on search query
  const filteredCategories = Object.entries(tags).filter(
    ([categoryName, categoryData]) =>
      searchQuery === "" ||
      categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      categoryData.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getCategoriesByTab = (tab: string) => {
    switch (tab) {
      case "emotions":
        return filteredCategories.filter(
          ([_, data]) =>
            data.motherTags.includes("Emoji") && (data.title.includes("Emotions") || data.title.includes("Love")),
        )
      case "symbols":
        return filteredCategories.filter(
          ([_, data]) => data.title === "Security" || data.title === "Letters" || data.title === "Maths",
        )
      case "objects":
        return filteredCategories.filter(
          ([_, data]) =>
            data.motherTags.includes("Emoji") && !data.title.includes("Emotions") && !data.title.includes("Love"),
        )
      case "all":
      default:
        return filteredCategories
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <ToastProvider />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto py-12 px-4 max-w-7xl">
          <motion.header
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-purple-500" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Emoji Explorer
              </h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Browse and search emojis organized by categories. Click on any emoji to copy it to your clipboard.
            </p>
            <div className="relative max-w-md mx-auto">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-10 h-12 rounded-full border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.header>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-full w-fit mx-auto">
              <TabsTrigger
                value="all"
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm"
              >
                All Categories
              </TabsTrigger>
              <TabsTrigger
                value="emotions"
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm"
              >
                Emotions
              </TabsTrigger>
              <TabsTrigger
                value="objects"
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm"
              >
                Objects
              </TabsTrigger>
              <TabsTrigger
                value="symbols"
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm"
              >
                Symbols
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
                {getCategoriesByTab("all").map(([categoryName, categoryData]) => (
                  <CategoryCard
                    key={categoryName}
                    categoryName={categoryName}
                    categoryData={categoryData}
                    hexToEmoji={hexToEmoji}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="emotions" className="space-y-8">
              <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
                {getCategoriesByTab("emotions").map(([categoryName, categoryData]) => (
                  <CategoryCard
                    key={categoryName}
                    categoryName={categoryName}
                    categoryData={categoryData}
                    hexToEmoji={hexToEmoji}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="objects" className="space-y-8">
              <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
                {getCategoriesByTab("objects").map(([categoryName, categoryData]) => (
                  <CategoryCard
                    key={categoryName}
                    categoryName={categoryName}
                    categoryData={categoryData}
                    hexToEmoji={hexToEmoji}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="symbols" className="space-y-8">
              <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
                {getCategoriesByTab("symbols").map(([categoryName, categoryData]) => (
                  <CategoryCard
                    key={categoryName}
                    categoryName={categoryName}
                    categoryData={categoryData}
                    hexToEmoji={hexToEmoji}
                  />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          {filteredCategories.length === 0 && (
            <motion.div
              className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-medium mb-3 text-gray-800 dark:text-gray-200">No categories found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search query to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}
