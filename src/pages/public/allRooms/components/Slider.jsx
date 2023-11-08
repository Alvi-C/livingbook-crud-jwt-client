import { useState, useEffect } from 'react'

const Slider = () => {
    const images = [
			{
				img: 'https://images.trvl-media.com/lodging/5000000/4630000/4624400/4624340/a6649f18.jpg?impolicy=resizecrop&rw=1200&ra=fit',
				heading: "Let's go Vietnam!",
				subHeading: 'Book your next stay today!',
				buttonText: 'Book Now',
				buttonLink: '/rooms/details/654a097d0ef9ee94eaf5d20a',
			},

			{
				img: 'https://images.trvl-media.com/lodging/6000000/5420000/5411800/5411777/2990ed27.jpg?impolicy=resizecrop&rw=1200&ra=fit',
				heading: 'This is the Time!',
				subHeading: 'Book your next stay today!',
				buttonText: 'Book Now',
				buttonLink: '/rooms/details/654a08c10ef9ee94eaf5d209',
			},

			{
				img: 'https://images.trvl-media.com/lodging/1000000/970000/966300/966242/d8bfd106.jpg?impolicy=resizecrop&rw=1200&ra=fit',
				heading: 'Remember Pattaya?',
				subHeading: 'Book your next stay today!',
				buttonText: 'Book Now',
				buttonLink: '/rooms/details/654a080a0ef9ee94eaf5d208',
			},
		]

	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	useEffect(() => {
		let intervalId = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 4000) // Change image every 4 seconds.

		return () => {
			clearInterval(intervalId)
		}
	}, [images.length])

	const currentImage = images[currentImageIndex]

	return (
		<div
			className='relative w-full h-[30rem]'
			style={{
				backgroundImage: `url(${currentImage.img})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='absolute left-0 top-0 bottom-0 bg-gradient-to-r from-black/50 to-transparent p-12'>
				<div className='mt-36 lg:mt-40 lg:px-10'>
					<h1 className='font-title text-[2rem] sm:text-[3rem] md:text-[4rem] font-normal text-white'>
						{currentImage.heading}
					</h1>
					<h2 className='font-title text-[2rem] sm:text-[3rem] md:text-[2rem] font-normal text-yellow-400'>
						{currentImage.subHeading}
					</h2>
					<button
						onClick={() => (window.location.href = currentImage.buttonLink)}
						className='px-4 py-2 bg-lime-500 text-black mt-[2.5rem] rounded-lg'
					>
						{currentImage.buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slider
