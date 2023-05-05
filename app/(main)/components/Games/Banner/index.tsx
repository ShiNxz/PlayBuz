'use client'

import { Avatar } from '@mantine/core'
import { motion } from 'framer-motion'

const PrimaryGame = () => {
	return (
		<motion.div
			className='w-full h-96 relative rounded-xl bg-cover bg-center bg-no-repeat cursor-pointer'
			style={{
				backgroundImage:
					'url("https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6235/b5cfec4ca7db874a52f3221b9e034fea31ee4853.jpg")',
			}}
			initial={{ opacity: 1, scale: 0.6, borderRadius: '40px' }}
			animate={{ opacity: 1, scale: 1, borderRadius: '12px', transition: { duration: 0.4 } }}
		>
			<motion.img
				src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae81854a-0dd1-462a-9259-a603920c7286/d65rh2v-b49f93a9-ee4d-49f0-adc2-12937842c10f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlODE4NTRhLTBkZDEtNDYyYS05MjU5LWE2MDM5MjBjNzI4NlwvZDY1cmgydi1iNDlmOTNhOS1lZTRkLTQ5ZjAtYWRjMi0xMjkzNzg0MmMxMGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GUEj82lAXsPCfbrDZyLwOIf2L4TyHQinUAfSd5MsznM'
				alt='character'
				className='h-[30rem] bottom-0 right-[15%] absolute'
				draggable={false}
				initial={{ opacity: 0, x: -120 }}
				animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
			/>

			<motion.img
				src='https://i.pinimg.com/originals/24/26/31/2426310d2dd162ab6f859a327590236f.png'
				alt='logo'
				className='bottom-12 left-[20%] absolute h-64'
				draggable={false}
				initial={{ opacity: 0, scale: 0.7 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2 } }}
			/>

			<motion.div
				className='absolute flex flex-row gap-2 top-4 left-4'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } }}
			>
				<Tag text='Action' />
				<Tag text='Adventure' />
				<Tag text='Open World' />
				<Tag text='Multiplayer' />
			</motion.div>

			<motion.div
				className='absolute bottom-4 left-4 flex flex-row items-center gap-2'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } }}
			>
				<Avatar.Group spacing='sm'>
					<Avatar
						src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
						radius='xl'
						size='sm'
					/>
					<Avatar
						src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
						radius='xl'
						size='sm'
					/>
					<Avatar
						src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
						radius='xl'
						size='sm'
					/>
					<Avatar
						radius='xl'
						size='sm'
					>
						+5
					</Avatar>
				</Avatar.Group>
				<motion.div
					className='bg-neutral-800/50 backdrop-blur-sm px-3 py-1.5 text-xs text-white rounded-full'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } }}
				>
					12 Friends
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

const Tag = ({ text }: { text: string }) => (
	<div className='bg-neutral-800/50 backdrop-blur-sm px-3 py-1.5 text-xs text-white rounded-full'>{text}</div>
)

export default PrimaryGame
