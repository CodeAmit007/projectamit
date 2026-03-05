import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ToastContainer } from 'react-toastify'

const CrudOperationHome = () => {
  return (
    <div>
      <ToastContainer/>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default CrudOperationHome