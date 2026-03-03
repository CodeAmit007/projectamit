import React from 'react'
import DefaultCard from './DefaultCard'

const DefaultPropsConcept = () => {
    let user = [
        {
            username:"amit",
            age:21
        },
        {
            age:22
        },
        {
            username:"ankit"
        }
    ]
     
  return (
    <div>
        {
            user.map((user)=>{
                return (
                    <DefaultCard user={user}/>
                )
            })
        }
    </div>
  )
}

export default DefaultPropsConcept
