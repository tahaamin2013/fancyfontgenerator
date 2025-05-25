import GeneratoreTestoCorsivo from '@/src/components/generatore-testo-corsivo'
import React from 'react'

export const metadata = {
  title: 'Generatore Testo Corsivo | Scrittura In Corsivo',
  description: 'Genera testo in corsivo facilmente con il nostro strumento online.',
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
