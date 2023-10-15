import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
	return (
		<div className='min-h-screen w-full flex items-center justify-center bg-purple-200'>
			<div className='w-1/2 relative flex border-2 min-h-[400px] shadow-lg rounded-lg'>
				<div className='w-full min-h-full bg-gradient-to-b from-slate-100 via-slate-500 to-zinc-800 flex justify-center items-center '>
					<Link to='/register' className='w-1/2 py-2  text-center bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg'>
						register
					</Link>
				</div>
				<div className='min-h-full w-full flex  bg-white items-center justify-center '>
					<div className='w-11/12'>
						<h1 className='text-3xl ml-3 text-black'>Login</h1>
						<form className='w-11/12 mx-auto flex flex-col gap-3 mt-6'>
							<input className='p-2 flex-1 border-b-2 rounded outline-none focus:border-blue-500 hover:border-green-500' type="text" placeholder='Email' />
							<input className='p-2 flex-1 border-b-2 rounded outline-none focus:border-blue-500 hover:border-green-500' type="password" placeholder='Password' />
							<button className='w-1/2 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg mx-auto'>Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login