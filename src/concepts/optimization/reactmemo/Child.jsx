import React from 'react'

const Child = ({name}) => {
    console.log("child")
  return (
    <h1>{name}</h1>
  )
}

export default React.memo(Child)