import React from 'react'
import { Link } from 'react-router-dom'

function LeftBarSection({title, svg}) {
  return (
	  <Link to={`/home/${title === "home" ? "" : title}`}>
		  <div className='flex gap-3 items-center my-4 group'>
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:scale-90 transition duration-200 ">
				  <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
			  </svg>
			  <h1 className='hidden md:block capitalize'>{title}</h1>
		  </div>
	  </Link>
  )
}

export default LeftBarSection