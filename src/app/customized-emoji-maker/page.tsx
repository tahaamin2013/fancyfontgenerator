"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { SelectionComboboxes } from "@/src/components/selection-comboboxes"
import { ResultDisplay } from "@/src/components/result-display"

export default function Home() {
  const [selections, setSelections] = useState({
    startingWrapper: "",
    startingEyebrow: "",
    startingEye: "",
    nose: "",
    endingEyebrow: "",
    endingEye: "",
    endingWrapper: "",
  })

  const handleSelectionChange = (category: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white">
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-zinc-800 border-zinc-700 text-white">
          <CardHeader className="border-b border-zinc-700">
            <CardTitle className="text-3xl font-bold">Selection Combiner</CardTitle>
            <CardDescription className="text-zinc-400">
              Select options from each category to create your unique combination
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <SelectionComboboxes onSelectionChange={handleSelectionChange} />
            <ResultDisplay selections={selections} />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
