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
			<div className='flex flex-row gap-4 w-full'>
				<Images images={game.images} />
				<GameInfo {...game} />
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
