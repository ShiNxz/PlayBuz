'use client'

import Input from '../Input'
import { BsSearch } from 'react-icons/bs'
import { VscBell } from 'react-icons/vsc'
import { BiCollection } from 'react-icons/bi'
import User from './User'

const Navbar = () => {
	return (
		<div className='pt-10 pb-10 pr-12 flex flex-row justify-between'>
			<div className='w-1/3'>
				<Input
					icon={BsSearch}
					placeholder='Search...'
					fullWidth
				/>
			</div>
			<div className='flex flex-row gap-4 items-center'>
				<Button>
					<VscBell />
				</Button>
				<Button>
					<BiCollection />
				</Button>
				<User />
			</div>
		</div>
	)
}

const Button = ({ children }: { children: React.ReactElement }) => {
	return <div className='bg-slate-50/5 rounded-full p-3 text-slate-100 text-lg cursor-pointer'>{children}</div>
}

export default Navbar
