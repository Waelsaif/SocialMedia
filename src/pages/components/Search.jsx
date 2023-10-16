import React from 'react'
import TrendingSection from './TrendingSection'

function Search() {
  return (
    <div className='w-full pt-2'>
      <form className='mx-auto mb-3'>
        <div className='bg-gray-300 dark:bg-neutral-400 flex items-center gap-3 p-2 rounded-lg mx-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 dark:text-neutral-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type='text' placeholder='Search' className='bg-transparent w-full h-full outline-none dark:text-black dark:placeholder-neutral-800'></input>
        </div>
      </form>
        <TrendingSection />
    </div>
  )
}

export default Search