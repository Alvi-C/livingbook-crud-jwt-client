



const TopBanner = () => {
    return (
			<div className='bg-lime-500 border-b border-black'>
				<div className='container-size py-[5rem] flex flex-col items-start gap-4'>
					<h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal'>
						Stay curious.
					</h1>
					<p className='w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-normal leading-7'>
						Discover stories, thinking, and expertise from writers on any topic.
					</p>
					<button className='btn bg-black text-white mt-[2.5rem]'>
						Start Reading
					</button>
				</div>
			</div>
		)
};

export default TopBanner;