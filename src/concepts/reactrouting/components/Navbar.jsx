import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-19.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-around'>

        <div className='w-[15%] flex items-center justify-center text-white text-2xl font-serif tracking-wider font-bold'><Link to="/">Logo</Link></div>

        <ul className=' w-[45%] flex items-center justify-around'>
            <li className='p-4 capitalize cursor-pointer hover:underline text-white hover:text-amber-400'><Link to="/home">home</Link></li>
            <li className='p-4 capitalize cursor-pointer hover:underline text-white hover:text-amber-400'><Link to="/about">about</Link></li>
            <li className='p-4 capitalize cursor-pointer hover:underline text-white hover:text-amber-400'><Link to="/projects">projects</Link></li>
            <li className='p-4 capitalize cursor-pointer hover:underline text-white hover:text-amber-400'><Link to="/contact">contact</Link></li>
        </ul>
        
        <button className='px-7 py-2 bg-blue-800 cursor-pointer rounded-lg text-white hover:bg-blue-900 font-bold '><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar