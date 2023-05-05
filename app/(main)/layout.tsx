import '@/public/globals.scss'
import { Rubik } from 'next/font/google'

import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
	title: 'PlayBuz',
	description: '...',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={rubik.className}>
				<div className='flex flex-row h-screen'>
					<Sidebar />
					<div className='flex flex-col w-full overflow-hidden'>
						<Navbar />
						<main className='pr-12 flex flex-row gap-10 h-[85vh]'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	)
}

export default RootLayout
