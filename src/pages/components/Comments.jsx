import React from 'react'
import Avatar from "../../assets/avatar2.jpg"
import { Link } from 'react-router-dom'

function Comments() {
	return (
		<div className='mt-3 text-gray-800 dark:text-gray-100'>
			<form>
				<div className='flex items-center gap-3'>
					<img src={Avatar} alt='avatar' className='w-8 h-8 rounded-full'></img>
					<input type='text' className='flex-1 py-1 px-2 rounded-lg bg-gray-200 dark:bg-neutral-700 transition duration-200' placeholder="Write a Message"></input>
					<button className='px-2 py-1 bg-blue-500 rounded-lg text-gray-100'>Send</button>
				</div>
			</form>
			<div className='mt-4'>
				<div className='flex gap-3'>
					<Link to="/home/profile" className='w-16'>
						<img src={Avatar} alt='avatar' className='rounded-full relative'></img>
					</Link>
					<div>
						<div className='flex items-center justify-between'>
							<Link to="/home/profile" className='text-md font-semibold'>
								Mohammed Abdu
							</Link>
							<h6 className='text-xs text-gray-400'>1 hour ago</h6>
						</div>
						<h1 className='text-sm'>lorem lorem have an alt prop, either with meaningful text, or an empty string find  lorem have an alt prop, either either with meaningful text, or an empty string find  lorem have an alt prop, eit </h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comments