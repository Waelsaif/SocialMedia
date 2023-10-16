import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex-1 relative bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-gray-100 py-5 transition duration-300 ease-linear'>
      <div className='w-11/12 relative md:w-4/5 mx-auto'>
        <Outlet />
      </div>    
    </div>
  )
}

export default Home