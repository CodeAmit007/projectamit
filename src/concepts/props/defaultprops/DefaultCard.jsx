import React from 'react'

const DefaultCard = ({user:{username="@User",age=18}}) => {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{age}</h2>
        <hr />
    </div>
  )
}

export default DefaultCard
