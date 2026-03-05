import React from 'react'

import Sidebar from '../components/dashboard/Sidebar'
import Right from '../components/dashboard/Right'

const Dashboard = () => {
  return (
    <div className='flex w-screen h-screen'>
        <Sidebar/>
        <Right/>
    </div>
  )
}

export default Dashboard