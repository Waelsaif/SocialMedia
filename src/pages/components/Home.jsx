import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex-1  bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-gray-100 py-5 transition duration-300 ease-linear'>
      <div className='w-11/12 md:w-4/5 mx-auto'>
        <Outlet />
      </div>
      <button className='fixed right-2 top-[88vh] z-50 p-3 bg-blue-500 text-white rounded-full md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}

export default Home