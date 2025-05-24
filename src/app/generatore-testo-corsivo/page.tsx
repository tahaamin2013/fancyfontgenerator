import GeneratoreTestoCorsivo from '@/src/components/generatore-testo-corsivo'
import React from 'react'
import Head from 'next/head'

const page = () => {
  return (
    <>
      <Head>
        <title>Generatore Testo Corsivo | Scrittura In Corsivo</title>
        <meta name="description" content="Genera testo in corsivo facilmente con il nostro strumento online." />
      </Head>
      <div>
        <GeneratoreTestoCorsivo />
      </div>
    </>
  )
}

export default page
