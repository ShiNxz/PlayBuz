import type { IGame } from '@/data/games'

const GameInfo = ({ name, tags, description, price }: IGame) => {
	return (
		<div className='flex flex-col p-6 bg-slate-50/5 rounded-xl w-1/5 justify-between'>
			<div className='flex flex-col gap-4'>
				<h5 className='text-slate-50 text-xl font-medium'>{name}</h5>
				<div className='flex flex-row gap-2 flex-wrap'>
					{tags.map((tag) => (
						<Tag
							key={tag}
							text={tag}
						/>
					))}
				</div>
				<span className='text-slate-100 text-sm'>{description}</span>
			</div>
			<div className='flex flex-col gap-2'>
				<span className='text-orange-500 text-lg'>${price}</span>
				<button className='bg-orange-500 hover:bg-orange-600 duration-300 text-slate-200 py-2 px-2 text-sm font-medium rounded'>
					Add to Cart
				</button>
			</div>
		</div>
	)
}

const Tag = ({ text }: { text: string }) => (
	<div className='rounded-full bg-slate-50/10 text-slate-200 py-0.5 px-2 text-xs'>{text}</div>
)

export default GameInfo
