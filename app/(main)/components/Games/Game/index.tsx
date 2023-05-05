import Link from 'next/link'

const Game = ({ id, name, price, image }: IProps) => {
	return (
		<Link
			href={`/store/${id}`}
			className='p-4 rounded-xl bg-slate-50/10 min-h-full flex flex-col justify-between'
		>
			<div className='flex flex-col'>
				<img
					src={image}
					alt={name}
					className='rounded-lg h-44 mb-4 object-cover'
				/>
				<span className='text-sm text-medium text-slate-50 mb-2'>{name}</span>
				<span className='text-sm text-slate-300 mb-6'>${price}</span>
			</div>

			<button className='bg-orange-600 hover:bg-orange-700 duration-300 text-slate-200 py-1 px-1 text-sm font-medium rounded-lg w-full'>
				Buy Now
			</button>
		</Link>
	)
}

interface IProps {
	id: string
	name: string
	image: string
	price: number
}

export default Game
