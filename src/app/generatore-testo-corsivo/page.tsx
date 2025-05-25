import GeneratoreTestoCorsivo from '@/src/components/generatore-testo-corsivo'
import React from 'react'

export const metadata = {
  title: 'Generatore Testo Corsivo | Scrittura In Corsivo',
    description: 'Genera testo in corsivo facilmente con il nostro strumento online. Personalizza e condividi i tuoi messaggi in corsivo.',
  alternates: {
    canonical: 'https://www.caratterispeciali10.it/generatore-testo-corsivo',
  },
};
const page = () => {
  return (
    <>

      <div>
        <GeneratoreTestoCorsivo />
      </div>
    </>
  )
}

export default page
