'use client'

import games from '@/data/games'
import Filters from './components/Filters'
import PrimaryGame from './components/Games/Banner'
import Game from './components/Games/Game'
import { motion } from 'framer-motion'

const HomePage = () => {
	return (
		<>
			<div className='absolute left-52 top-4 h-4/5 w-4/5 blur-[120px] opacity-10 bg-gradient-to-r rounded-full from-red-500 to-orange-500 -z-10' />
			<Filters />
			<div className='flex flex-col gap-10 w-full'>
				<PrimaryGame />
				<div className='flex flex-col gap-2'>
					<span className='text-sm text-slate-50 font-semibold'>Special Offers</span>
					<div className='grid grid-cols-6 gap-6'>
						{games.map((game, index) => (
							<motion.div
								key={game.id}
								initial={{
									y: 75,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
									transition: {
										duration: 0.5,
										delay: 0.1 + index * 0.05,
									},
								}}
							>
								<Game
									id={game.id}
									name={game.name}
									price={game.price}
									image={game.image}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
