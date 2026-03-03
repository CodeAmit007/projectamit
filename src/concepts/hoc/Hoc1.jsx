import React from 'react'
import Bike from './Bike'
import PetrolPump from './PetrolPump'

const Hoc1 = () => {
  return (
    <div>
      
      <PetrolPump>
        <Bike name="H2R"/>
      </PetrolPump>

      <Bike name="splender"/>
    </div>
  )
}

export default Hoc1