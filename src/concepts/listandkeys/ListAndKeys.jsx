import React, { Fragment } from 'react'

const ListAndKeys = () => {
    let arr = ["amit","ankit","kanhu","krish"]
  return (
    <div>
        {
            arr.map((ele,index)=>{
                return(
                    <Fragment key={index}>
                        <h1>{ele}</h1>
                        <p>hii</p>
                    </Fragment>
                )
            })
        }
    </div>
  )
}
export default ListAndKeys