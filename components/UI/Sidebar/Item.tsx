import type { IconType } from 'react-icons'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Item = ({ title, icon: Icon, active, route }: IProps) => {
	return (
		<Link
			href={route}
			className={`flex justify-between items-center content-center duration-200 cursor-pointer relative pl-5 ${
				active ? ' text-[#d86f3e]' : 'hover:text-white'
			}`}
		>
			{active && (
				<motion.span
					layoutId='underline'
					className='absolute left-0 h-full w-1 rounded-xl'
					style={{
						backgroundColor: '#fa6c32',
						boxShadow: '#c2552692 2px 0px 4px 2px',
					}}
				/>
			)}
			<div className='flex items-center justify-center'>
				<Icon className='!text-[1.2rem]' /> <span className='ml-2'>{title}</span>
			</div>
		</Link>
	)
}

interface IProps {
	title: string
	icon: IconType
	active: boolean
	route: string
}

export default Item
