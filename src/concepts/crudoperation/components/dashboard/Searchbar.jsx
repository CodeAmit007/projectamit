import React from 'react'
import { FaBell, FaMoon, FaSearch } from 'react-icons/fa'


const Searchbar = () => {
    return (
        <header className="w-\[100%\] flex justify-between items-center bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
                <FaSearch className="text-gray-500" />
                <input
                    className="bg-transparent outline-none ml-2 w-full"
                    placeholder="Search for projects"
                />
            </div>

            <div className="flex items-center space-x-4 text-gray-600">
                <FaMoon className="text-purple-600 text-xl" />
                <div className="relative inline-flex">
                    <FaBell className="text-purple-600 text-xl" />

                    <sup className="absolute -top-2 -right-2 min-w-\[18px\] h-\[18px\] flex items-center justify-center bg-red-500 text-white text-[10px] font-semibold rounded-full">
                        
                    </sup>
                </div>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </header>

    )
}

export default Searchbar 