import type { IGame } from '@/data/games'

const GameInfo = ({ name, tags, price }: IGame) => {
	return (
		<div className='flex flex-col gap-2 p-4 py-8 bg-slate-50/5 rounded-xl w-1/5'>
			<h5 className='text-slate-100'>{name}</h5>
		</div>
	)
}

export default GameInfo
