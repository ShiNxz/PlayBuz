'use client'

import { motion } from 'framer-motion'

const Particle = () => (
	<motion.div
		initial={{
			opacity: 0,
		}}
		animate={{
			opacity: 0.1,
			transition: {
				duration: 0.5,
			},
		}}
		className='absolute left-52 top-4 h-4/5 w-4/5 blur-[120px] opacity-10 bg-gradient-to-r rounded-full from-red-500 to-orange-500 -z-10'
	/>
)

export default Particle
