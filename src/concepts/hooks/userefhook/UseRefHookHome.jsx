import React, { useRef, useState } from 'react'

const UseRefHookHome = () => {
  // const [text,setText]=useState()
  // console.log("black")

  const nameRef=useRef()

  const updateText=()=>{
    nameRef.current.innerText="amit"
  }

  console.log("hii")

  return (
    <div>
      {/* <h1>{text}</h1>
      <button onClick={()=>setText("amit")}>Update Text</button> */}


        <h1 ref={nameRef}>ankit</h1>
        <button onClick={updateText}>Update name</button>
    </div> 
  )
}
export default UseRefHookHome