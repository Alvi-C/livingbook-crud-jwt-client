
const TopBanner = () => {
    return (
			<div className='bg-hero-img-2 bg-fixed border-b border-black'>
				<div className='flex items-center justify-start transform left-0 top-0 bottom-0 bg-gradient-to-r from-black/50 via-transparent to-transparent '>
					<div className='container-size py-[9rem] flex flex-col items-start'>
						<h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal text-white'>
							Stay curious.
						</h1>
						<h2 className='font-title text-[2rem] sm:text-[3rem] md:text-[2rem] font-normal text-yellow-400'>
							Explore LivingBook
						</h2>
						<p className='w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-normal leading-7 text-white'>
							Discover Hotels, Resorts, and many living facilities in your favorite places.
						</p>
						<button className='px-4 py-2 bg-lime-500 text-black mt-[2.5rem] rounded-lg'>
							Know more
						</button>
					</div>
				</div>
			</div>
		)
};

export default TopBanner;