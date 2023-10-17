import React from 'react'
import TrendingSection from './TrendingSection'
function RightBar() {
  return (
      <div className='w-1/5 hidden lg:block sticky right-0 top-14 h-screen transition duration-300 ease-linear border-gray-400 bg-white text-gray-500 dark:bg-neutral-800 dark:text-gray-300'>
        <TrendingSection />
      </div>
  )
}

export default RightBar