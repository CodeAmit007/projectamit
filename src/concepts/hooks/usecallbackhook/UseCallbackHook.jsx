import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallbackHook = () => {

    const [count,setCout] = useState(0)
    console.log("parenet")

    const deleteUser = useCallback(()=>{
        console.log("delete user")
    },[])

  return (
    <div>
        <h1>UseCallbackHook</h1>
        <h1>{count}</h1>
        <button className='p-4 bg-gray-800 text-white' onClick={()=>setCout(count+1)}>Update</button>
        <hr />
        <Child data={deleteUser}/>
    </div>
  )
}

export default UseCallbackHook