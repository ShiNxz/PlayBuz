'use client'
import type { IconType } from 'react-icons'

import { motion, MotionProps } from 'framer-motion'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/utils/functions/ClassName'

const inputVariants = cva(
	'backdrop-filter backdrop-blur-lg rounded-lg px-8 pl-10 py-3 shadow-md shadow-slate-800/5 text-slate-300 placeholder-slate-400 text-sm font-thin !outline-none',
	{
		variants: {
			variant: {
				default: 'bg-slate-50/10',
				outlined: '!bg-transparent border rounded-xl bg-none',
			},
			color: {
				default: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			color: 'default',
		},
	}
)

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ className, inputClassName, color, variant, children, icon: Icon, fullWidth, ...props }, ref) => {
		return (
			<motion.div
				className='relative'
				// whileHover={{ scale: 1.02 }}
				// whileTap={{ scale: 0.96 }}
				ref={ref}
				{...props}
			>
				{Icon && <Icon className='absolute top-0 bottom-0 flex items-center my-auto z-10 ml-4 text-sm text-slate-400' />}
				<input
					type='text'
					className={cn(inputVariants({ color, variant, className })) + ' ' + inputClassName + ' ' + (fullWidth ? 'w-full' : '')}
					{...props}
				/>
			</motion.div>
		)
	}
)

Input.displayName = 'Input'

interface IInputProps extends ResMotionProps {
	className?: string
	inputClassName?: string
	fullWidth?: boolean
	icon?: IconType
}

type ResMotionProps = MotionProps & React.ButtonHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>

export default Input
