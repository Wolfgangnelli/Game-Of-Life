import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Game from '../pages/Game'
import NotFound from '../pages/NotFound'

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Game-Of-Life/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default routes