'use client'

import { useRouter } from 'next/navigation'

const HomePage = () => {
	const router = useRouter()

	router.push('/store')

	return <></>
}

export default HomePage
