

const Offer = () => {
    return (
			<div className='px-4 sm:px-6 lg:px-8 pb-16'>
				<div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center'>
					<div className='lg:col-span-3'>
						<h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl'>
							Where is your next Destination?
						</h1>
						<p className='mt-3 text-lg text-gray-800'>
							Send your email, we will send you our best offers that fits your
							destinations.
						</p>

						<div className='mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3'>
							<div className='w-full sm:w-auto'>
								<label htmlFor='hero-input' className='sr-only'>
									Search
								</label>
								<input
									type='text'
									id='hero-input'
									name='hero-input'
									className='py-3 px-4 block w-full xl:min-w-[18rem] border border-gray-200 rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 disabled:opacity-50 disabled:pointer-events-none'
									placeholder='Enter your email'
								/>
							</div>
							<a
								className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-normal rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 disabled:opacity-50 disabled:pointer-events-none'
								href='#'
							>
								Send
							</a>
						</div>
					</div>
					<div className='lg:col-span-4 mt-10 lg:mt-0'>
						<img
							className='w-full rounded-xl'
							src='https://i.ibb.co/xs0xMw8/hero-copy-2.jpg'
							alt='Image Description'
						/>
					</div>
				</div>
			</div>
		)
};

export default Offer;



