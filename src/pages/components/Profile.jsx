import React from 'react'
import headerImg from '../../assets/header-img.jpeg'
import avatar from '../../assets/avatar2.jpg'
import PostsPage from './PostsPage'
function Profile() {
  return (
    <div className=''>
      <div className='w-full'>
        <img src={headerImg} className='w-full max-h-40 object-cover rounded-md' alt="header"></img>
      </div>
      <div className='w-full flex justify-center bg-white dark:bg-neutral-800 my-5 rounded-lg text-gray-700 dark:text-gray-200 transition duration-300 '>
        <div className='w-11/12 mx-auto flex flex-col gap-2 items-center mt-2 relative -top-8'>
          <div className='w-full flex items-center justify-between'>
            <div className='pt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <img src={avatar} className='lg:w-24 lg:h-24 w-16 h-16 rounded-full self-center' alt="avatar"></img>
            <div className='pt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>
          <h1 className='md:text-xl'>Mohammed Abdo</h1>
          <div className='text-sm flex gap-2'>
            <div className='text-sm'><span className='font-semibold'>Following: </span><span>2302</span></div>
            <div className='text-sm'><span className='font-semibold'>Following: </span><span>2302</span></div>
          </div>
          <button className='px-4 py-1 rounded-lg bg-blue-500 text-white'>Follow</button>
          <p className='text-md'>Full Stack Dev trying to center a div | CS Senior Student | Part of @KEPTAR_SA , @GDSCUQU , @UQUCC | Professional bug writer @safealgo</p>
        </div>
        <div>

        </div>
      </div>
      <PostsPage />
    </div>
  )
}

export default Profile