import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const CrudOperationHome = () => {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default CrudOperationHome