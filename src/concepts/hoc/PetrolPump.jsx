import React, { Children } from 'react'

const PetrolPump = ({children}) => {
  return (
    <div className='w-full h-19.5 bg-orange-400 text-black'>
        {
            children
        }

    </div>
  )
}

export default PetrolPump