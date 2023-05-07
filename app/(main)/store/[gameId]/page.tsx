'use client'

import games from '@/data/games'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Particle from './components/Particle'
import Images from './components/Images'
import GameInfo from './components/GameInfo'

const GamePage = ({ params }: IProps) => {
	const router = useRouter()
	const game = games.find((g) => g.id === params.gameId)

	useEffect(() => {
		if (!game) router.push('/store')
	}, [game, router])

	if (!game) return <></>

	return (
		<>
			<Particle />

			<div className='flex flex-col w-full'>
				<div className='flex flex-row gap-4 w-full'>
					<Images images={game.images} />
					<GameInfo {...game} />
				</div>
				<div className='flex flex-col gap-2 mt-6'>
					<span className='text-slate-50 font-medium text-lg'>Info</span>
					<span className='text-slate-200 font-thin w-2/5'>{game.description}</span>
				</div>
			</div>
		</>
	)
}

interface IProps {
	params: {
		gameId: string
	}
}

export default GamePage
