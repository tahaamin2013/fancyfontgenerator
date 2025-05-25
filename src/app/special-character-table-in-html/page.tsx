import SpecialCharactersPage from '@/src/components/special-html'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tabella dei caratteri speciali in HTML',
  description: 'Scopri la tabella completa dei caratteri speciali HTML con codici e descrizioni in italiano.',
  alternates: {
    canonical: '/special-character-table-in-html',
  },
}

const page = () => {
  return (
    <div>
      <SpecialCharactersPage />
    </div>
  )
}

export default page
