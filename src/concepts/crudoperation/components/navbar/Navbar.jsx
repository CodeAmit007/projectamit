import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { IoHome } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { TbHelp } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navlist = [
    {
      text: "home",
      path: "/",
      icon: <IoHome />
    },
    {
      text: "about",
      path: "/about",
      icon: <CiCircleInfo />
    },
    {
      text: "contact",
      path: "/contact",
      icon: <MdEmail />
    },
    {
      text: "help",
      path: "/help",
      icon: <TbHelp />
    },
  ]

  return (
   <nav className="w-full h-19.5 bg-slate-900 text-gray-200 shadow-lg flex justify-around">
    <div className='w-10% h-full flex items-center justify-center text-3xl font-extrabold'>
      Logo
    </div>
    <ul className='w-50% h-full flex items-center justify-around gap-10'>
     {
      navlist.map((ele,index)=>{
        return(
          <li key={index}>
              <Link
                to={ele.path}
                className="flex items-center gap-2 text-lg hover:text-blue-400 transition duration-300 capitalize active:underline"
              >
                {ele.icon}
                {ele.text}
              </Link>
            </li>
        )
      })
     }
    </ul>

    <div className='w-10% h-full flex items-center justify-center'>
      <button className='px-6 py-2 rounded-md text-white transition duration-300 shadow-md'><Link to="/login">Login</Link></button>
    </div>
    
    </nav>
  )
}

export default Navbar