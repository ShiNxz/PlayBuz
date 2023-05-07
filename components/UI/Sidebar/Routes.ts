import { FaGamepad } from 'react-icons/fa'
import { BiLibrary } from 'react-icons/bi'
import { TbMessages } from 'react-icons/tb'
import { HiUsers } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'

const Routes = [
	{
		route: '/store',
		name: 'Store',
		icon: FaGamepad,
	},
	{
		route: '/library',
		name: 'Library',
		icon: BiLibrary,
	},
	{
		route: '/community',
		name: 'Community',
		icon: TbMessages,
	},
	{
		route: '/friends',
		name: 'Friends',
		icon: HiUsers,
	},
]

const SubRoutes = [
	{
		route: '/settings',
		name: 'Settings',
		icon: AiFillSetting,
	},
	{
		route: '/profile',
		name: 'Profile',
		icon: HiOutlineUserCircle,
	},
]

export { SubRoutes, Routes }
