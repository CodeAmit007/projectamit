import React from 'react'
import { FaFileAlt, FaMousePointer, FaRegSquare, FaTable } from 'react-icons/fa'
import { FiFileText, FiGrid, FiHome, FiPieChart } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className='w-[300px] h-screen bg-white shadow-sm px-6 py-6'>
        <h1 className='text-xl font-bold mb-10'>Windmill</h1>
        <ul className='space-y-8 text-gray-600'>
            <li className="flex items-center gap-3 text-purple-600 font-semibold border-l-4 border-purple-600 pl-2"><FiHome />Dashboard</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FiFileText />Forms</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FiGrid />Cards</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FiPieChart />Charts</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FaMousePointer />Buttons</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FaRegSquare />Modals</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"><FaTable />Tables</li>
            <li className="flex items-center gap-3 hover:text-purple-600 cursor-pointer "><FaFileAlt /><span className='flex gap-8 items-center'>Pages <RiArrowDropDownLine /></span></li>
        </ul>
        <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-700 font-bold">Log Out</button>
    </div>
  )
}

export default Sidebar