import React from 'react'
import Post from './post'

function Home() {
  return (
    <div className='flex-1 bg-gray-200 dark:bg-neutral-800 py-5 transition duration-300 ease-linear'>
      <div className='w-4/5 mx-auto'>
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Home