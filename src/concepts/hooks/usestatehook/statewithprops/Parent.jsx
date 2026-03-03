import { useState } from "react"
import Child from "./Child"

const Parent=()=>{
    const [count,setCount]=useState(0)
    console.log("parent")
    return(
        <div>
            <h2>{count} in parent</h2>
            <button onClick={()=>{setCount(count+1)}}>update in parent</button>
            <hr />
            <Child count={count} setCount={setCount}/>
        </div>
    )
}
export default Parent