const games: IGame[] = [
	{
		id: 'hogwats_legacy',
		name: 'Hogwarts Legacy',
		price: 60,
		image: 'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9',
	},
	{
		id: 'portal',
		name: 'Portal',
		price: 10,
		image: 'https://assets-prd.ignimgs.com/2021/12/20/portal-cover-1640031155845.jpg',
	},
	{
		id: 'portal2',
		name: 'Portal 2',
		price: 15,
		image: 'https://upload.wikimedia.org/wikipedia/he/a/a7/Portal-2-box-art1.jpg',
	},
	{
		id: 'pubg',
		name: 'PUBG: BATTLEGROUNDS',
		price: 60,
		image: 'https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/download-pubg-battlegrounds-offer-1er5e.jpg',
	},
	{
		id: 'rust',
		name: 'Rust',
		price: 60,
		image: 'https://image.api.playstation.com/vulcan/ap/rnd/202103/1501/enihR6QwSYiWCNl2HdPfV6R6.png',
	},
	{
		id: 'star_wars_jedi_survivor',
		name: 'STAR WARS Jedi: Survivor™',
		price: 60,
		image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/2222/l8QTN7ThQK3lRBHhB3nX1s7h.png',
	},
	// {
	// 	id: 'red_dead_online',
	// 	name: 'Red Dead Online',
	// 	price: 60,
	// 	image: 'https://m.media-amazon.com/images/I/91y09FrKWKL.jpg',
	// },
	// {
	// 	id: 'dragon_ball_z_kakarot',
	// 	name: 'DRAGON BALL Z: KAKAROT',
	// 	price: 60,
	// 	image: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/1616/ebKSYAneFeVLHD7SAWP1l5TE.png',
	// },
]

interface IGame {
	id: string
	name: string
	image: string
	price: number
}

export default games
