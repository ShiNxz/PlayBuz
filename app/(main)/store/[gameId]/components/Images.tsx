'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Images = ({ images }: IProps) => {
	const [imageIndex, setImageIndex] = useState(0)

	return (
		<div className='flex flex-col w-full gap-4'>
			<AnimatePresence mode='wait'>
				<motion.img
					key={imageIndex}
					src={images[imageIndex]}
					className='w-full h-[26rem] object-cover rounded-xl'
					initial={{ x: 30, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
					exit={{ x: -30, opacity: 0, transition: { duration: 0.2 } }}
				/>
			</AnimatePresence>
			<div className='flex flex-row gap-4'>
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						className={`w-32 h-24 object-cover rounded-xl cursor-pointer`}
						onClick={() => setImageIndex(index)}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 + index * 0.02 } }}
					/>
				))}
			</div>
		</div>
	)
}

interface IProps {
	images: string[]
}

export default Images
