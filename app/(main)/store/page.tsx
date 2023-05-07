'use client'

import games from '@/data/games'
import Filters from '../components/Filters'
import PrimaryGame from '../components/Games/Banner'
import Game from '../components/Games/Game'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Particle from './Particle'

const HomePage = () => {
	return (
		<>
			<Particle />
			<Filters />
			<div className='flex flex-col gap-10 w-full justify-between '>
				<Link href='/store/gta5'>
					<PrimaryGame />
				</Link>
				<div className='flex flex-col gap-2 '>
					<span className='text-sm text-slate-50 font-semibold'>Special Offers</span>
					<div className='grid grid-cols-6 gap-6'>
						{games
							.filter((g) => !g.primary)
							.map((game, index) => (
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
