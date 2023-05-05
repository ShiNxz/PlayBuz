'use client'

import { Menu, UnstyledButton } from '@mantine/core'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import avatar from '@/public/assets/avatar.jpeg'
import { Avatar } from '@mantine/core'

const User = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex flex-row text-slate-100 gap-4 items-center text-sm'>
			<Avatar
				src={avatar.src}
				className='bg-slate-100/10 rounded-full text-slate-100 text-lg !border-orange-500 !border-2'
				size={42}
			/>
			<span>Hello, Tom!</span>
			<Menu
				shadow='md'
				width={200}
				opened={open}
				onChange={setOpen}
			>
				<Menu.Target>
					<UnstyledButton className='!text-white'>
						<MdKeyboardArrowDown className={`duration-200 ${open ? ' rotate-90' : ''}`} />
					</UnstyledButton>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Application</Menu.Label>
					<Menu.Item icon={<FiSettings size={14} />}>Settings</Menu.Item>
					<Menu.Item icon={<FiSettings size={14} />}>Messages</Menu.Item>
					<Menu.Item icon={<FiSettings size={14} />}>Gallery</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	)
}

export default User
