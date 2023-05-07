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
		images: [
			'https://images8.alphacoders.com/110/thumb-1920-1102284.jpg',
			'https://cdn-hogwartslegacy.warnerbrosgames.com/community/slide-04.jpg',
			'https://assets.xboxservices.com/assets/c5/91/c591b2b9-a8ce-43e1-9ea8-cc38216fbcba.jpg?n=Hogwarts-Legacy_Gallery_8_1350x759.jpg',
			'https://imgix.bustle.com/uploads/image/2023/2/2/68dc5b32-2eaf-4ea4-b9bc-1f59688971d8-hogwarts-header.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
			'https://www.digitaltrends.com/wp-content/uploads/2021/01/hogwarts-legacy-5.jpg?p=1',
			'https://www.cnet.com/a/img/resize/d22b759bfe23791c7958f6ca671566a26bc5926f/hub/2023/01/26/a6df9c24-1ad6-452f-8768-e58756e73305/screenshot-2023-01-26-at-5-16-25-pm.jpg?auto=webp&fit=crop&height=675&precrop=1727,970,x245,y0&width=1200',
			'https://img.lemde.fr/2023/02/06/0/116/3240/2160/1440/960/60/0/725bf58_1675668055896-entrance-screenshot.jpg',
		],
		description:
			'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it.',
		tags: ['Action', 'Adventure', 'Open World', 'Singleplayer', 'Third Person'],
	},
	{
		id: 'portal',
		name: 'Portal',
		price: 10,
		image: 'https://assets-prd.ignimgs.com/2021/12/20/portal-cover-1640031155845.jpg',
		images: [
			'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYZGBgaGhgaGhgZGBoaHBwcGBoaGhwcHBgcIy4lHCErIRgYJjgmKzAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISs0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0MTQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EAEEQAAIBAQUECAMHAwIFBQAAAAECABEDBBIhMQVBUfAiMmFxgZGhsRPB0QYUQlJyguEVI2I0kiQzosLxB0NEU9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQEBAAICAgAFAwUAAAAAAAAAAQIRAyESMQRBUWFxBZGxExQiMsH/2gAMAwEAAhEDEQA/APL7LZ4359/0mtLqNKAd2UWz7wrDgw1Hzm8JNJIm1iF3iaxm8JIPZytECCzHxiD+X6S57ip3U7so4T++R/j9IRCSZDtA7XZ5HVNew/WY3Qg0IpOmdJntbsGFCIriJkG3LaTpl1l4H5HdOkuV9VxVT3jeO8Tk71YhTQGvZvEaxtmVsSmh5yPGEy0LNu4DR68886QZs6/i0HBt453QgDzzzpNJdosV3bq+Le5lpaZ7Dq+Le8mWhAlWQJiJkDAIvMtlv7z7zRaTPZb+8+8Ka2OI0QgDvp4j3EsErfTy9xLBAHEeNHgCkT1l7m+UlInrL3N8oGtiEUYQI8akeNzzzvgDgRxGEcCAZrp1T+ozQTKLr1f3NL4QzERuee+SpG53c5QIw5+cVOaRwea+UbnfAOfvl1aybGmnt/EK3G9B1qNd44GaHQEUMAXizawcMhyO75GR6V7dBEwlNzvIdcQ8RwMuaUkKUf8AEH9H0hULBY/1P7IUEUVUGSYL/eAg7ToJqvt5VFqfAcTBdzuzWjfEfTcOd0L9IIps7izgsxzOn8zDaWZU0ORnUMkH3+64lqNRp9JNx6EoVd7cowZdR6jgZ1t1vIdQw3zjBCuxbzhbCdG07x9R7QxuhZsesTl4t7yZMpu56Pi3vJPaAZmaJSrIEyv7yvE+RjfGXj6H6QGknMost/efeWq6kgYgKkCpqAK7yaZDtie7MhIYakkEEMrDirKSGHaDECEkJFRJgRgz6eXuJYJFxl5e4kiwAqYA4jmWWdmjAH41mK7mZgR2Hoyfwk/+6x/3N/8AiGwokT1l7m+UttAi/wDu2Z/SWOn7ZViqy0zyb5QC2KKMIA8UUUAcRxzzzrG5553xweeecoBnuvV/cfeX15z51lF16p/UZfzv50hDMRGPPPbJESJHNIEYR+dYw50koBkvd5CKWPgOJgW72D27FmOQ5oJPa9oWfCN1Kd5hq52ARQok+6r1Ervd1UUUUEm0nKLzaqq1Y9naTwAlJDgf+I/ZCggQWv8Adx03Uw1XF5Vhewtg4qpqOcpMVWXalxxjEOsBlwlWy71iGBsmX1hMwJtFPh2iuN5z+fpC9dlO+hhlme0WXh5U5jJz19s8LHgc5TZuQQRqCD5Tftdeqe8QaJnfa46u52lUB4kn1j2mbDumbZLf2l8feaWPSE0+SfmfAOEenYP9o+kmBHwwJQ61Gg8hEl4NmtCodKg4GrSvYRmvhCl12Wzip6I3ZZyna+zmRcxlUUO45+8erpPlN6ZV6XSAwhswta4QcwtTmaaVMmEPH0H0mrZtkhQY3wEZUpUkAZEQw2x7MWAvGNvhl8AbD+OhNMNK0oDnDRXKRzz3ooMRVXAIqpSzzFRUBihw98e2tBa9MIEU6IDUCnaAK+Qk9q2KBAEcPiPChFKHObNlbNZ7MHQZ59tTpDV2flPYM47B5Ae0rKwhfri1mc8xuP14TEZNVFLCW3E6fv8A+2VuJZct3e//AGwh1urEOeedI8YGUkueed0QPOXP/mPGHOsDSrHrGHOscQJnuvV/cZfzv51lF26v7jLuefCEOnjHnKPzpGPOXlAGpHkQNcvSLnSAc5ehS2z/ADKfadGmkD7Zu+jjuPyPPGbtn3oOg4jIjtkzqqvcbIO2mpqrbhiBPDFSjeFPWb6yLSqmBz3kYTmQpTCLKgwBsJXEGruNXGVak95ls5TRm0DNUd1KVp2zNbWQ+OBQdWug1zzhKzB3mRBrU6XQPt45KN9T7Qqz0gWvxrWo6q8+p9o79FQUQUA6KtkBRq/Ix2tP8E/2t9ZOQaVvTO4S3d/kH2mKKP1E+dYMEI7TbEyqOa8mYGWhI4TLL21noe2T/wAsd59zNf4hMuzlogB7ZoIlz0m+2gEQrsq44jjYZbh84EW1UGjGk6LZO1rMUVmA4H6ysdJy3roWtXSyQu5oPUngBvM5++X97fo0wpXJe7Sp3xtoXk29pUdQZKOz83j9IV2Xs6tMuR27h2yvbLrGboZd9nk7p1j3I/0xU4Xmv/Q0xPfbNDhRcbaVzVK9lOk/pNf9XvHwQv3YfDxY8WC1wk0pUPWmnbFdRPlcu5jXKXjZ5G6TuO03saIwxJw3j9J+RnRWN6sbbokfDY6YjVCf1ar41HbB21dmFagihGREevoMc5lfGzVbHRLVMS0ZWHI7JyO0rmbNqfhOn0hDZd6Ni+FjRGNG7Dub69ndIbb2hZOaAggaHPM8ZOWq1xll0CWmkVz/AA/v+UsSzLq7IKqmDG35Q7hFOetWYDL5R0QKVA4N8oo0ul9Y9eeec40UaTgxDnnnSMIqwCxY8ghkq8885wCi69XxMvme69XxMupzz5QgSjMOfeMI/O/wgCHPyjV5zi53xudYBB1DChzEBXiyaxbEpy3fQjeIWt7cIpYwQitbvU5KPTs75NXBW43outSKbuw901VlKAKABkN0RaMmC0/1A/R9YQQwbaH++P0/WEVOUUOh+2C2EU6v4qa+PZJ7MZcPR8eNe2bHpTOBrZDZNiXq7x8or1didwZLSq1cAEkyuzvAYVEG7RvVThXTf9IWiRUtrVmc+A9pVd7PG4HE1PdqZTC2zLCgxHU6d38/KTOzvTbd+r4n3ltZTZHI9595YDLSvW5o2ZrX9R+RmobMCp8QEgYsIU517a+flHu46InQXOzu5sEF4d0XESCihjiq+RB3UrKkRlloN2ZY1M6JrB7Rku1kKvaCrfpFSATuFFLHj0Zds2w2fXo2t4P6kQQp9mrRVv1sVDMfhKtmtOkaizzO5cgKncKwyy1iiTyykv5Gbutjs6yDGwZdAXZrMu5O4UavbhGQzPEzDdPtnd0cBEtFs2PTDYSFJzLrRicz1l36jOuIN9vS4vCq7Yj8NWoOqpZnBCjh0RmczTwHNVmcks3W1uvT0bb/ANnLO9LaWthhx0VlKUw2gw1INMiTubjrlOUuFt8WxZXzeyoKnUo2QrvqrZdzCdF9gLdvgPZoKv8AFJqQSqKUTpHjnWijMngKkBrmtmL7elYsUC2wZhhxVFotTpSuKu4ZysLZbGXPjNTKe45HatjQmYLfZq/DR61xFgRphoaAa51oZ2m0Bs2pxNev2iy+YgjbS3cWCfdy5TGf+Zhxg0ao6IpTSVYMcu5HKgYKhCQHKhgGNGwsGXEK50IqK6GXP1l7m+Urtt3ePeTbrDxiaLKxgeeecoxi5553RkkOeedI8aNzzzugFgMeshEDAKrsej4mWjnn1lF3OXifeXDnTnshBUoq85+MYxV59oA+Lmsavb6xc6xq85QDnXtGtn4KPQce+FbBVQADSD7JQoyPfLTa8JEXW8mMz0mMWhiLGPZaUsf7wP8Aj9YQNpMRs6sG30pESd/pFA0s8ptXBy1rIgDjJBOyADGs3WoWtDKlsmOgPl84cS6udFPlLl2Y5/AYvE9gdjdjWpGXCusIK7dg8z9IRTYtof5ln9Hca08DX0MqY0XKBIxfm9B86x895Y+J+ULNs9EFXfCB+YYfeUt8IHCCS3ChB8ajKGhtdZ3hQB0gMhvE2vtFGshZipYNUEUwjvPHMwYt0VszXzhjZWxkahauHvNT2fzKm0ZWT2u2XbgGdFd9oNd7ezvKgstMFoBvUilP9oFO1M5yV6sjY2hX8JzU8R9RpDWz78rLhahByIOhHbzuh7mqi9WZR6PftnWG0VZ0YVwJgtVGanp1VhrTipzHYZzl1+wrtVWtlV1pjTCaiuhB3qaGjU3HKoIASwsrWxYvdrVkrqA1CeAP4WH6qTda37ajqtozmikoHHwEILDNcS0OdAaaZA6gGZ+OU6a+WNdXtPaI2dYKiCyBp0LMYizHezdm8sddJxGzwy2b2r1xWuhOpUNiZj+pwB+1pUlzGIveHLscyMTHEf8ANzme4a/mEo2rtOuVflkMgABoAMqTTHHx7rHktzsk9BW0repMyW20kNklnphLEk6Ek5U8zNOzbr8e0z6i5sePBa9vtIbV2WiNkvROmZ8oXftUs3oKFoGIAIOYMtrUjfrKHu6jTLjnumc2tkpKsWGlHGYHE4QRXdwktNbEqyQEGo7E0s7RWXdUlT4qfrHtr49mQHFKgHNaHMZjMVy4jKPyLxoiI9Jgs79XPCCOwy9b4u8Eese4Wq0iKkgt6Q/ip3j6VlgdToynxA96Q2TPYaeJlvO7ntjIhFaAnM6Z7+yP3wMo9efePSKkCMTGpzSSMjQciBhC2JGqmnGk2WWznYVC5cZ06FaUoPmJGzRkOKzzBzKGoXtIP4T6HfTWHifkCpsS0PATSn2fY6tz4w/dbX4lcNBQ9JTkQe1d01LYHefIZ+pNY5jE+Vc8n2dXexl6bCsxqPOHku4318SQPTSTW7qNwr3Cv8x+MLyoH/SLHhnxX+NYluRXRAw7gG8t/pD3wRzzl4xgyDKo7hmfIfKPQ2GXZEOWSn8ra+RpXwmsXUS58LihTF4cn0g+3vZsyVRqn8hOMDvOoPZ6Q9Bs+6jh5mvvBu2by1ktEwKxqMbkBVHEqM2PAAbs+Bxba281kubdI6KtKDvOpnEXu9Wls2J2PYP4kZZa6VjiIXnaFmOu73hs+scKCvAZmncR3Sdnf2tmZ3pU0qaGulOkzEs2QGZMC4AJs2a3W8PnM5V6Fg3bOg2LfQVwnrLl3jcZy+KWWdsVIZTQjfKmWhlh5R3V5uyWyYW7wRqDxE5y83W0sDmKrucaePAzVs/bKkdM4W9D3Svbm0saFR1ajxzEq2a2zxwyl1rorvtMjfOsa+n+l46//Jp/0GcVst7DB/dDEnMFdw4aw4dp3f7v92q+DH8TTpYsOHrcKRb+6suO7mpQi8bQJzrFdNnvbGp6KfmO/wDSN/tM+1bSxwj4SMtNSxrWtO0zdsfaOCzAY9HOnZmYS9nlhlrqDdmiWSBEFAOaniZy+2r/AI2wrou/iezsktqbXL1VMl3nee7gIGLQyy+UGHFZ3SYwPfOt4fOFWaDreyJatCRTWkzyvTXHG26jKFmy73+0TKuJTqrdIHwMyFKSSmKJsGbmtnaVKDA+9Pwk9ldOcpG0QqaETDcFYuuDrc/Ok6fadmuLtpLk3EX2BY5IJXfWa2IAzAPfr/McWStuhobZgCN5liWzjRjHtLJVFakdn/iRSzc5+8YW/e330PgJNb9xX1mdkYfhr3SkqSekCBw+sNjUb1vqNuIk/jp+b0mDLuioOaQ2WnarZ0+R3GWoabs94+Ylao5yyHPjJrds6Mxrz4TVCF4RSQ4bA40YHPupvHYcu45zTdtpfgtF6W4r1WpvBPVPYfWJLJVypTgdx8omYjKlO0ZCA3toa+cBz2jIHzmS32i606LYd+GlR2hMyR3Gsan5tdxEcruMA0WDpaLiDhge2o9dJC9X2zsh0szuXUnu4QNfnWzfEpIfVqbxwcaE9usGWFqXcs2e76/KLY0LXjaFo9anCn5FO7/JtW9pVZWiqakgAb90wW96CDM1PDnSBb1e2c5nLcJNy0uYpbdtA9oWBqtcvSnzg6bFcEUMotrvUUGkyqoyHOarqMNe2ZGsyNQfKOjkHKT82s160Kh5MNB6W/GFbnYhwTUgDtGfpJy5ZjN128Hw2XNfHHVpkbOa7dC6kDWPZXRdTiHeR9IrG8WiE/DbEpNSuEFfI1mc5vLqO+fp945Lyzq/S9p3W6uaKEYsBoBU5cANZZaXW0U0dHQ/5oy+WICs7643zZd8RTaj4NsFUOQcFWAA/SdNdZrs9j3UthTaFvQKWoHBVVG8kEATTef2rms4PvPzN/tY80s7k9p0Qr4fxOtm74FrmxVRnQZ0ymi/bOe7AoxrrQmgNK/iQM2DuJnoVps/Z4B+NfrZxwNsKeQqZj2pa7NS6t8G7/EVqorksCWBypatmKEDQHhHPL3dM8pxb1jLbep108wYytjNCMlaPVT35ecu+5IaEHLvr6zO80nuV04/pmfJP8bPxvufkNYzMl5KNUZ5UIOhhF7oWbAiM7HJQPmTlN9n9ibemK2dLMa4SwLHwqB6zSXznrp5/LjfhuT/AGm59PlXO295DfhA7qxrtcXtD0Fy/McgPGdMtxutjqrWr8X0/wBunvKr1fWbIAINwE0xwmM05uTmud3e6os7BLuMjifeRzkJX97YnpZ9sssERsnJB4ikybRKJ1HxcKj6SmS1yT3TOloQ2R4zDZ3ojPP3EdbyNaSdnoXsEBzY1M0V+kEJfBpn6azfZXlTqad8qUrF57Yzdvj9ZYpBiK89kZKcA4SHwhL8P8fSNhiDsk6QodRzkZNTXotr5ytlr0l157RHtGXCCxCntOnnNUJl/wALeB48+MqZiMm0486d+Ugb2pFAGc/4ggeZlF7vTIhZylmo3tmfADf2CA01AUyOY7Zjv200sgaupNDRa1Ne7Wk47au3HtCQrME76Fu8DQdkEraUkXP6LmP1HL1tJW041qcqzJ/VMIIU9uWZz7TBrKNQcvMiRA4588ZncqrxjXZWhc5mgOu8ntM0W1iFNNYNsmocs5otXLUzpSLY0n3RBpQLTdr7y1WjNej01z7IsKHVB4Ze0qrJgwETF2sz+Ydx+oMIXMKoIV9dzLXypSDlM2XJc68JOWOOXVm2/FzZ8WXlhbKINsovQteVFdxQingDN912SoXD94sxnrX5A5aTAHk1aK8ONmtNsPjufG3Ly3b1u9t9l9n0rU3uxA1p0q+QEubZ9kB/qE7gjH2gwPFjh/Qxvv8Alrh+p/EYTUyn7Rst7rYkEG0NOxTX1ErtrezCJZl3ZErhU0ABJJJoKVJJOZmVnmO82YcGutDSOcWMmpGXJ8fz8lmVy7n2iy8W1hUkqKni3yj2FmzmllYOf0WTHxqQBPTvsps67C7WT2dmmaCrYQWLaNUnfWs1X/aAsnGKmEYMsJLdNsFRh1AYoNPxjhOrHgxkeXn8dyZ5W97/AC87u2w78SGSxKEZgu6p5BSTM20tn3+zDM4GFD0ihqQNSwqMxQg1+hnr9k4YA8ZmvlzxKV3GopuoRmCN4OlO6a/0cXN/dZ77keW2iK6g76ZGCrVQr4HZVNKgsaKd3WhQ2HwLR7CpKqSUYgiq9zZ5HLwrvkb3d1dcLDL1HaOE58sXZjlL2wXvZbhQyP6dE/uBga2s0Bo+NSN+TKe7IR7wtpYNQMwG4gkA940kk2q1KMFYcSKH0y9JldLjJa4TmGJ4ClPKmUzlpdb2gY5Cg4SiI0g023e90oGzHH6zBJAwlGnQWaqfqDLwCNG884K2bbCmEnOtQCaZHWFk9+H1lyppiW/L5Gkb4g4Hylg9R4yVO/nwjJ0osnNAz0roqCks+6ImeHF2nP1JykyuJfrWniN8yX7a1nYJW0PS/CgpibuUdUdpl3UR3UNs7bs7BBQ4mIqqqaVFaVYjRff24XaW07S3fE7V/KoyVRwUfPWVX+9m1tGdtWOla0GgFTwEylpjlltrjjomMiTFWOq8YjILXWTCLIlpBjEa02lNBIqSchGs0r3S3IdHQe8AnZ2YH1lgEpXKuXCWYpRJxxI4hHEAtSE7JaACYrolc+azaI5CtTrJK8qrFWMbXYoxaVYoxaA2uLyJMgDGrAbd5/6c7Q6NpdyeqfiJ3Nk3kc/GX7Qe8teSHZfu5GGzBVAQ4K4iCxBBXC71r1VNATpxewdpfd7wlqT0QcL/AKGyPlkfCeh/aK7pb2aNZ3wWGFsYdWqCCDUEBgDuOfA8Z0y+WPXuOHOTHk79Vj+zdi12tbSytbxjxdRWcNRhmyqxbEWwGzYjCAAw1znXo2Ie84O833Z/xLF2tHtbSxqQyF6FiVNak4QtQaIDhANNJO0+2+HqWW7V2ppp0V+seOUk1ajPjud3J/w32+2W1BboCSnSoAT0fxjs1DUy0Ou7mLO0DKGGhFRNe1ftba2ylHZcJBBVFoCNNWJO86Gc217oAqAKBMs8sbdx08OOWOOsm3admrJnSo0+k5a3TCctIRtbQnU1mC8kZTDK7dEVAyJEUkDEaEURjCSaQMLXPaFei+u5tPP6wRWIGOXRWOsD7/bOT51gLZ1+KkK2ak07RX5Qxj7ZpLtFmm3aH2hFlVUo7cSxYKe07z/iNN/CcheLdnYs7FmY1JPPpFFFlauRSTGJiikGcZRsUUUYMYooog0WLUHnLgwiijIitdI+CKKARKCTReEUUYErMUFJZiiilEYtETFFERqxViigDF5E2gjRRmTWglWIbgIooFpIO3GS7zFFA0GMy2t5Ub690UUVNktLyTplKQpMUUgyK0jViigCMSiKKIERGiigFtitWHn5Qp8eKKVCr//Z',
			'https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/portal-with-rtx-ray-tracing/portal-rtx-comparison-key-visual-screenshot-001-rtxon.jpg',
			'https://www.pcworld.com/wp-content/uploads/2023/04/2022-09-20_11-14-43.jpg?quality=50&strip=all&w=1024',
			'https://s.yimg.com/uu/api/res/1.2/WT3VfHu8J5xtDSy2zh9Xhg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/28abca80-38fa-11ed-9ffe-39e63a2852c3.cf.jpg',
			'https://cdn.mos.cms.futurecdn.net/xGEQw6JFjTykH2XTV4F96C.png',
			'https://s.yimg.com/uu/api/res/1.2/WT3VfHu8J5xtDSy2zh9Xhg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/28abca80-38fa-11ed-9ffe-39e63a2852c3.cf.jpg',
		],
		description:
			"Portal is a 2011 first-person puzzle-platform game developed by Valve. It was released in April 2011 for Windows, OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve's Steam service, while all retail editions were distributed by Electronic Arts.",
		tags: ['Puzzle', 'Puzzle', 'Platformer', 'First-Person', 'Sci-fi'],
	},
	{
		id: 'portal2',
		name: 'Portal 2',
		price: 15,
		image: 'https://upload.wikimedia.org/wikipedia/he/a/a7/Portal-2-box-art1.jpg',
		images: [
			'data:image/jpeg;base64,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',
			'https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/portal-with-rtx-ray-tracing/portal-rtx-comparison-key-visual-screenshot-001-rtxon.jpg',
			'https://www.pcworld.com/wp-content/uploads/2023/04/2022-09-20_11-14-43.jpg?quality=50&strip=all&w=1024',
			'https://s.yimg.com/uu/api/res/1.2/WT3VfHu8J5xtDSy2zh9Xhg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/28abca80-38fa-11ed-9ffe-39e63a2852c3.cf.jpg',
			'https://cdn.mos.cms.futurecdn.net/xGEQw6JFjTykH2XTV4F96C.png',
			'https://s.yimg.com/uu/api/res/1.2/WT3VfHu8J5xtDSy2zh9Xhg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/28abca80-38fa-11ed-9ffe-39e63a2852c3.cf.jpg',
		],
		description:
			"Portal 2 is a 2011 first-person puzzle-platform game developed by Valve. It was released in April 2011 for Windows, OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve's Steam service, while all retail editions were distributed by Electronic Arts.",
		tags: ['Puzzle', 'Puzzle', 'Platformer', 'First-Person', 'Sci-fi'],
	},
	{
		id: 'pubg',
		name: 'PUBG: BATTLEGROUNDS',
		price: 60,
		image: 'https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/download-pubg-battlegrounds-offer-1er5e.jpg',
		images: [
			'https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg',
			'https://i.ytimg.com/vi/e90WhwN2QdQ/maxresdefault.jpg',
			'https://i.ytimg.com/vi/sctOYN2pMs4/maxresdefault.jpg',
			'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_abadb3bfc951cd05150901ff65386e3129c6011a.1920x1080.jpg?t=1681115546',
			'https://assets-prd.ignimgs.com/2022/01/21/pubg-battlegrounds-20220113203831-1642723335768.jpg',
			'https://assets-prd.ignimgs.com/2022/01/21/pubg-battlegrounds-20220113204642-1642723335769.jpg',
		],
		description:
			'Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only.',
		tags: ['Battle Royale', 'Shooter', 'Multiplayer', 'Action', 'Survival'],
	},
	{
		id: 'rust',
		name: 'Rust',
		price: 60,
		image: 'https://image.api.playstation.com/vulcan/ap/rnd/202103/1501/enihR6QwSYiWCNl2HdPfV6R6.png',
		images: [
			'https://i.ytimg.com/vi/LGcECozNXEw/maxresdefault.jpg',
			'https://cdn.akamai.steamstatic.com/steam/apps/252490/ss_271feae67943bdc141c1249aba116349397e9ba9.1920x1080.jpg?t=1678981332',
			'https://s.yimg.com/uu/api/res/1.2/KPF2R5Z.vI.mUWHRwBA6ag--~B/Zmk9ZmlsbDtoPTQ5Mjt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-03/77249040-8e68-11eb-97ee-0a218afcca06.cf.jpg',
			'https://img.championat.com/c/1350x759/news/big/s/a/rust-sdelayut-eschyo-slozhnee_16620337901149943594.jpg',
			'https://cdn.shazoo.ru/539651_12YFL3CVm8_rust.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RZG2WNWThW8eQP_gVVnJj2qr4ucjb500KihY7xs2eCYwObca04YpS2kHjuwoPFkP4a0&usqp=CAU',
		],
		description:
			'The only aim in Rust is to survive. To do this you will need to overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals for meat. Protect yourself from other players, and kill them for meat. Create alliances with other players and form a town. Do whatever it takes to survive.',
		tags: ['Survival', 'Multiplayer', 'Open World', 'Sandbox', 'Crafting'],
	},
	{
		id: 'star_wars_jedi_survivor',
		name: 'STAR WARS Jedi: Survivor™',
		price: 60,
		image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/2222/l8QTN7ThQK3lRBHhB3nX1s7h.png',
		images: [
			'https://lumiere-a.akamaihd.net/v1/images/swjs-story-trailer-cal-lightsaber_dfb7a156.jpeg?region=235%2C0%2C1451%2C816',
			'https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2022/05/Star-Wars-Jedi.png?w=640',
			'https://images.thedirect.com/media/article_full/cal-kestis-sequel.jpg',
			'https://www.nme.com/wp-content/uploads/2022/05/Star-Wars-Jedi-Fallen-Order.jpg',
			'https://assetsio.reedpopcdn.com/star-wars-jedi-fallen-order_842f9b8_tu5C5h3.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
		],
		description:
			'A galaxy-spanning adventure awaits in STAR WARS Jedi: Fallen Order, a 3rd person action-adventure title from Respawn Entertainment.',
		tags: ['Action', 'Adventure', 'Singleplayer', 'Third Person', 'Story Rich'],
	},
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
