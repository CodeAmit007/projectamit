import React from 'react'

const Starcard = ({ title, value, icon, iconBg, iconColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center space-x-4 cursor-pointer shadow-gray-500">
      

      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg}`}>
        <span className={`text-xl ${iconColor}`}>
          {icon}
        </span>
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-bold text-gray-800">{value}</h2>
      </div>

    </div>
  )
}

export default Starcard