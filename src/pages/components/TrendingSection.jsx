import React from 'react'
import Trending from './Trending'

function Trendings() {
	return (
		<div>
			<div className='w-full bg-white text-gray-500 dark:bg-neutral-800 dark:text-gray-300 rounded-md transition duration-300 ease-linear'>
				<div className='w-11/12 mx-auto py-2'>
					<Trending hashtag={"free_Palestine"} posts={810.3} location={"The world 🌍"} />
					<Trending hashtag={"worldCup_2034"} posts={13.1} location={"saudi arabia 🇸🇦"} />
					<Trending hashtag={"riyadh_Season"} posts={18.5} location={"italy 🇮🇹"} />
					<Trending hashtag={"2030_Vision"} posts={41.7} location={"saudi arabia 🇸🇦"} />
					<Trending hashtag={"ترضى_تتزوج_ممرضة؟"} posts={102.9} location={"saudi arabia 🇸🇦"} />
				</div>
			</div>

		</div>
	)
}

export default Trendings