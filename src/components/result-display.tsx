"use client"

import { Card, CardContent } from "@/src/components/ui/card"

type ResultDisplayProps = {
  selections: {
    startingWrapper: string
    startingEyebrow: string
    startingEye: string
    nose: string
    endingEyebrow: string
    endingEye: string
    endingWrapper: string
  }
}

export function ResultDisplay({ selections }: ResultDisplayProps) {
  const allSelected = Object.values(selections).every((value) => value !== "")

  // Format the result string
  const resultString = allSelected
    ? `${selections.startingWrapper}${selections.startingEyebrow}${selections.startingEye}${selections.nose}${selections.endingEyebrow}${selections.endingEye}${selections.endingWrapper}`
    : "Complete all selections to see the result"

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-zinc-200">Result</h3>
      <Card className="bg-zinc-900 border-zinc-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="p-4 rounded-lg bg-zinc-800 border border-zinc-700 font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words text-emerald-400">{resultString}</pre>
          </div>

          {!allSelected && (
            <p className="mt-4 text-sm text-zinc-400">
              Select an option from each category to generate the complete result.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
