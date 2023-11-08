

const About = () => {
    return (
			<div className='container-size mt-10 mb-10 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
					<div className='max-w-lg'>
						<h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
							About Us
						</h2>
						<p className='mt-4 text-gray-700 text-lg'>
							LivingBook is a dynamic online portal that offers a seamless and
							convenient experience for hotel booking. With its user-friendly
							interface and extensive database of accommodations, LivingBook
							enables travelers to effortlessly browse, compare, and secure
							their preferred lodging options. Whether one is planning a weekend
							getaway or a lengthy stay, the platform provides a range of
							choices spanning from luxurious hotels to cozy bed-and-breakfasts.
							LivingBook&apos;s commitment to user satisfaction extends beyond a mere
							booking service, as it strives to enhance the travel experience by
							delivering valuable information, reviews, and recommendations to
							help customers make well-informed decisions. With its dedication
							to simplifying the hotel booking process, LivingBook emerges as a
							trusted companion for individuals seeking the perfect
							accommodation for their journeys.
						</p>
					</div>
					<div className='mt-12 md:mt-0'>
						<img
							src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/portugal%20tours-A.jpg?itok=i7dpEDzf'
							alt='About Us Image'
							className='object-cover rounded-lg shadow-md'
						/>
					</div>
				</div>
			</div>
		)
};

export default About;