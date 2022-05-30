import React from 'react'
import { Button } from '../components/atoms/index'

const NotFound = () => {
  return (
    <>
        <h1 className='text-white text-lg p-10 font-semibold'>Sorry, page NotFound! <span className='text-red-500'><i className="fa-solid fa-bug"></i></span></h1>
        <Button label='Back To Homepage' href='/' />
    </>
  )
}

export default NotFound