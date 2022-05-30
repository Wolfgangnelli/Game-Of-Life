import React from 'react'
import { Header, Footer } from '../index'

interface Props {
    children: React.ReactNode
}

const Page = (props: Props) => {
    const {children = null} = props

  return (
    <>
        <Header />
        <main className='max-w-7xl mx-auto h-screen'>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Page