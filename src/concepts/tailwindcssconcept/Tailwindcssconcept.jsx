import React from 'react'

const Tailwindcssconcept = () => {

    const arr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='w-screen h-auto flex flex-wrap gap-25 justify-evenly p-5'>
        {/* <h1 className="bg-[#14bd14e0] text-red-600 text-[86px] font-extrabold underline uppercase">Tailwindcssconcept</h1> */}

       {
        arr.map((ele,index)=>{
            return(
              <div></div>
                //  <div className='w-[300px] h-[300px] bg-gray-300 border-2 border-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400 cursor-pointer hover:bg-blue-500 hover:scale-105'>{ele}</div>
            )
        })
       }


    </div>
  )
}

export default Tailwindcssconcept