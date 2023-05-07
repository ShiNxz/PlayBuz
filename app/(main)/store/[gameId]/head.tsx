// generate title and description for each game

import games from '@/data/games'

export async function generateMetadata({ params }: IProps) {
	const game = games.find((g) => g.id === params.gameId)

	return {
		title: `PlayBuz | ${game?.name || ''}`,
		description: game?.description || '',
	}
}

interface IProps {
	params: {
		gameId: string
	}
}
