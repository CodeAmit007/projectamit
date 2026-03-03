import React from 'react'

const Child = ({data}) => {
    console.log("child")
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)