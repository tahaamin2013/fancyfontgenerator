import FancyTextGenerator from '@/src/components/yo'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generatore di Testo Corsivo | alphabetico corsivo',
  keywords: ['generatore testo corsivo', 'corsivo online', 'testo corsivo', 'scrittura corsiva'],
  description: 'Crea testo corsivo online facilmente con il nostro generatore di testo corsivo.',
  alternates: {
    canonical: 'https://carraterispeciali10.it/font-corsivo',
  },
}

const page = () => {
  return (
    <div>
      <FancyTextGenerator />
    </div>
  )
}

export default page
