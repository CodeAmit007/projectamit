import { useState } from "react"

const Child=({count,setCount})=>{

    return(
        <div>
            <h2>{count} in child</h2>
            <button onClick={()=>{setCount(count+1)}}>update from chlid </button>
        </div>
    )
}
export default Child