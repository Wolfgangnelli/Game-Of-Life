import React from 'react'
import { Header, Footer } from '../index'

interface Props {
    children: React.ReactNode
}

const Page = (props: Props) => {
    const {children = null} = props

  return (
    <div className='h-screen w-full'>
        <Header />
        <main className='max-w-7xl mx-auto h-auto'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Page