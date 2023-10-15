import React from 'react'
import Avatar from "../../assets/avatar.avif"
import testIng from "../../assets/ex-img2.png"
function Post() {
	return (
		<div className='min-h-max bg-white shadow-lg dark:bg-neutral-800 dark:text-white   mx-auto transition duration-300 ease-linear'>
			<div className='w-full mx-auto border-b-[0.5px] py-6'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-3 items-center'>
						<img className='w-10 h-10 object-fit rounded-full' src={Avatar}></img>
						<div>
							<h1 className='text-md'>Waelsi</h1>
							<h3 className='text-sm text-gray-300'>few seconds ago</h3>
						</div>

					</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
					</svg>
				</div>
				<p className='py-3'>
					orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</p>
				<img className='rounded-md ' src={testIng}></img>
			</div>

		</div>
	)
}

export default Post