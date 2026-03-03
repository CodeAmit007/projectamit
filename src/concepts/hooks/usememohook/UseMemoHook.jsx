import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [count,setCount] = useState(0)

    const expensiveCalculation = useMemo(() => {
        let sum = 0
        for(let i = 0; i <= 10000000; i++){
            sum+=i
        }
        return sum
    },[])
    console.log(expensiveCalculation)
    return ( 
        <div>
            <h1>UseMemoHook</h1>
            <h1>{count}</h1>
            <button className='p-4 bg-blue-950 text-black' onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}

export default UseMemoHook