import EmoticonPage from '@/src/components/ClientEmoticonPage'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Emoticon, Simboli e Caratteri Speciali - caratterispeciali10.it',
  description: 'Scopri una vasta raccolta di emoticon, simboli e caratteri speciali da copiare e incollare facilmente. Perfetto per arricchire i tuoi messaggi e post!',
  alternates: {
    canonical: 'https://caratterispeciali10.it/text-characters-emoticons',
  },
  metadataBase: new URL('https://caratterispeciali10.it'),
  openGraph: {
    title: 'Emoticon, Simboli e Caratteri Speciali - caratterispeciali10.it',
    description: 'Scopri una vasta raccolta di emoticon, simboli e caratteri speciali da copiare e incollare facilmente.',
    url: 'https://caratterispeciali10.it/text-characters-emoticons',
    locale: 'it_IT',
    siteName: 'caratterispeciali10.it',
  },
  robots: {
    index: true,
    follow: true,
  },


}
const page = () => {
  return (
    <div>
      <EmoticonPage />
    </div>
  )
}

export default page
