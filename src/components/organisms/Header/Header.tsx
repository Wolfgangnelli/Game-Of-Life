import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-white'>
        <nav className='py-4'>
            <ul className='p-2 flex'>
                <li className='font-semibold hover:text-blue-200'>
                  <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header