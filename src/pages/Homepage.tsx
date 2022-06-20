import React from 'react'
import { homePageTitle } from '../utils/settings'
import frontImage from '../assets/life_video.png';
import { Button } from '../components/atoms/index'

const Homepage = () => {
  return (
    <div className='py-10 h-screen'>
      <h1 className='mb-6 font-bold text-5xl text-white'>{homePageTitle}</h1>
      <img src={frontImage} alt="conway's game of life" className='mx-auto mb-5' />
      <div className='mb-6 text-white'>
        <p>This is a zero-player game and its evolution is determined by its initial state, requiring no further input.</p>
      </div>
      <Button label="GET STARTED" icon={<i className="fa-solid fa-arrow-right-long"></i>} href="/game" />
    </div>
  )
}

export default Homepage