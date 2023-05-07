'use client'

import { BiJoystick } from 'react-icons/bi'
import { Routes, SubRoutes } from './Routes'
import { usePathname } from 'next/navigation'
import Item from './Item'
import Link from 'next/link'

// padding - px-8, py-12
const Sidebar = () => {
	const router = usePathname()

	return (
		<div className='flex flex-col py-10 px-10 pr-12 justify-between'>
			<div className=''>
				<Link
					href='/'
					className='flex flex-row items-center gap-2 font-medium'
				>
					<BiJoystick className='w-8 h-8 text-slate-200' />
					<span className='text-slate-200 text-xl'>PlayBuz</span>
				</Link>

				<div className='flex flex-col gap-6 text-slate-300 pt-12'>
					{Routes.map((route) => (
						<Item
							key={route.route}
							title={route.name}
							icon={route.icon}
							active={router.startsWith(route.route)}
							route={route.route}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-6 text-slate-400 pt-12'>
				{SubRoutes.map((route) => (
					<Item
						key={route.route}
						title={route.name}
						icon={route.icon}
						active={router.startsWith(route.route)}
						route={route.route}
					/>
				))}
			</div>
		</div>
	)
}

export default Sidebar
