"use client"

import { Toaster, toast } from "sonner"

export function ToastProvider() {
  return <Toaster position="bottom-right" theme="light" closeButton richColors />
}

export function useEmojiToast() {
  const showCopiedToast = (emoji: string) => {
    toast.success("Copied to clipboard", {
      description: `Emoji ${emoji} has been copied to your clipboard.`,
      duration: 2000,
    })
  }

  return { showCopiedToast }
}
