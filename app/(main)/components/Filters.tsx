'use client'

import { Checkbox } from '@mantine/core'
import { motion } from 'framer-motion'

const Filters = () => {
	return (
		<motion.div
			className='flex flex-col bg-slate-50/5 gap-8 p-6 rounded-xl w-72 h-full justify-between'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
		>
			<div className='flex flex-col gap-8'>
				<Group
					title='Category'
					options={['Indie', 'MMO', 'Casual', 'Action']}
				/>
				<Group
					title='Category'
					options={['Indie', 'MMO', 'Casual', 'Action']}
				/>
			</div>

			<div className='flex flex-col gap-8'>
				<PriceRange />
				<button className='bg-orange-600 hover:bg-orange-700 duration-300 text-slate-200 py-2 px-2 text-sm font-medium rounded'>
					Apply Filters
				</button>
			</div>
		</motion.div>
	)
}

const Group = ({ title, options }: { title: string; options: string[] }) => {
	return (
		<div className='flex flex-col gap-2 text-slate-200'>
			<span className='text-slate-50 text-lg font-medium mb-2'>{title}</span>
			{options.map((option) => (
				<Checkbox
					key={option}
					label={option}
					style={{ color: '#fff' }}
					// label={<span className='text-slate-300'>{option}</span>}
					size='xs'
				/>
			))}
		</div>
	)
}

const PriceRange = ({}) => {
	return (
		<div className='flex flex-col'>
			<span className='text-slate-50 text-lg font-medium mb-2'>Price</span>
			<div className='flex flex-row gap-2 items-center text-slate-500'>
				<PriceInput
					type='min'
					value={40}
				/>
				-
				<PriceInput
					type='max'
					value={55}
				/>
			</div>
		</div>
	)
}

const PriceInput = ({ type, value }: { type: 'min' | 'max'; value: number }) => (
	<div className='relative flex items-center text-gray-400 text-sm'>
		<input
			className='appearance-none rounded-md w-full py-3 px-4 pl-7 bg-slate-500/10 focus:outline-none focus:shadow-outline'
			id={type}
			type='number'
			placeholder={type}
			defaultValue={value}
		/>
		<span className='absolute left-3 text-gray-500'>$</span>
	</div>
)

export default Filters
