import EmojisPage from '@/src/components/Emojipage'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Emojis per Discord, Telegram, WhatsApp e Social - Categorie Emoji',
  description: 'Soglia emoji per categoria e copia facilmente le tue preferite per chat e social.',
  keywords: [
    'emoji',
    'categorie',
    'faccine',
    'animali',
    'simboli',
    'Discord',
    'Telegram',
    'WhatsApp',
    'social',
    'copia emoji',
    'emoticon'
  ],
  openGraph: {
    title: 'Emojis per Discord, Telegram, WhatsApp e Social - Categorie Emoji',
    description: 'Soglia emoji per categoria e copia facilmente le tue preferite per chat e social.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.caratterispeciali10.it/emojis',
  },
  alternates: {
    canonical: 'https://www.caratterispeciali10.it/emojis',
  },
  other: {
    'language': 'Italian',
  },
}
const page = () => {
  return (
    <div>
      <EmojisPage/>
    </div>
  )
}

export default page
