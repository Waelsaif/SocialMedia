import React from 'react'
import Avatar from "../../assets/avatar.avif"
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className='w-full  bg-white text-gray-800 transition duration-300 ease-linear dark:bg-neutral-800 dark:text-white sticky top-0 z-50 shadow-md'>
      <div className='w-11/12 mx-auto py-3 flex justify-between'>
        <div className='flex items-center gap-3'>
          <Link to='/'>
            <h1 className='text-2xl'>Twitter</h1>
          </Link>
        </div>
        <div className='flex-1 hidden md:block'>
          <form className=' w-1/2 mx-auto'>
            <div className='bg-zinc-200 dark:bg-neutral-400 flex items-center gap-3 p-2 rounded-lg mx-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 dark:text-neutral-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type='text' placeholder='Search' className='bg-transparent w-full h-full outline-none dark:text-black dark:placeholder-neutral-800'></input>
            </div>
          </form>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8'>
            <img className='object-fit rounded-full' src={Avatar}></img>
          </div>
          <span>Waelsi</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar