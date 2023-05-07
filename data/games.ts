const games: IGame[] = [
	{
		id: 'gta5',
		name: 'Grand Theft Auto V',
		price: 60,
		image: 'https://upload.wikimedia.org/wikipedia/he/thumb/d/d6/GTA_V_COVER.jpg/250px-GTA_V_COVER.jpg',
		primary: true,
		images: [
			'https://cdn.vox-cdn.com/thumbor/MzIMGcP_-ddYrzsObYo7r-bvfNg=/0x0:3840x2160/1200x800/filters:focal(1376x89:1990x703)/cdn.vox-cdn.com/uploads/chorus_image/image/70578783/Grand_Theft_Auto_V___3_4_2022___Image_2.0.jpg',
			'https://staticg.sportskeeda.com/editor/2022/04/ff02a-16496554471770-1920.jpg',
			'https://cdn.mos.cms.futurecdn.net/6wkBw7S8q9nKY7VCzXrD3L.jpg',
			'https://i.ytimg.com/vi/UK_tMhLyPy8/maxresdefault.jpg',
			'https://www.91-cdn.com/hub/wp-content/uploads/2022/09/s7eojwfwa0viamaa68gs-1024x642.jpg?tr=q-100',
			'https://cdn.mos.cms.futurecdn.net/283d2b36f19d2e2e0fd3cf1b435844f1.jpg',
			'https://media.comicbook.com/2020/05/gta-5-grand-theft-auto-1220406.jpeg?auto=webp',
		],
		description:
			"Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.",
		tags: ['Action', 'Adventure', 'Open World', 'Multiplayer', 'Singleplayer', 'Third Person', 'First Person'],
	},
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

export interface IGame {
	id: string
	name: string
	image: string
	price: number
	images: string[]
	description: string
	tags: string[]
	primary?: boolean
}

export default games
