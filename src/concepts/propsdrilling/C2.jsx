import React from 'react'
import C3 from './C3'

const C2 = ({data}) => {
    let updateval = {...data,message:"Bye everyone..!"}
  return (
    <div>
        <C3 updateval={updateval}/>
    </div>
  )
}

export default C2