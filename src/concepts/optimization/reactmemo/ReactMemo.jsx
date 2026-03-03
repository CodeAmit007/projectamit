import React, { useState } from 'react'
import Child from './Child'

const ReactMemo = () => {

    const [count,setCount] = useState(0)
    console.log("parent")

  return (
    <div>
        <h1>ReactMemo</h1>
        <p className='text-4xl'>{count}</p>
        <button className='p-4 border bg-amber-800 text-white cursor-pointer' onClick={()=>setCount(count+1)}>Update</button>
        <Child name="amit"/>
    </div>
  )
}

export default ReactMemo