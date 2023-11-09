import Marquee from 'react-fast-marquee'

const Testimonials = () => {
	return (
		<div>
			<div className='mb-10'>
				<div className='max-w-2xl w-3/4 lg:w-1/2'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-semibold'>
						We are Loved by lovely individuals across the globe
					</h2>
				</div>
			</div>
			{/* <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>


			</div> */}

			<Marquee pauseOnHover={true} className='space-x-11'>
				<div className='flex h-auto w-[30rem] border rounded-xl ml-4'>
					<div className='flex flex-col bg-white rounded-x'>
						<div className='flex-auto p-4 md:p-6'>
							<p className='text-base italic md:text-lg text-gray-800'>
								We had a wonderful experience traveling 18 days from the Fergana
								Valley to Nukus. I have already highly recommended Advantour to
								two persons beginning to plan travel to your country.
							</p>
						</div>

						<div className='p-4 bg-gray-100 rounded-b-xl md:px-7'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										className='h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]'
										src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
										alt='Image Description'
									/>
								</div>

								<div className='grow ms-3'>
									<p className='text-sm sm:text-base font-semibold text-gray-800'>
										Josh Tyson
									</p>
									<p className='text-xs text-gray-500'>
										Product Manager | Capsule
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Card --> */}

				{/* <!-- Card 2--> */}
				<div className='flex h-auto w-[30rem] border rounded-xl ml-4'>
					<div className='flex flex-col bg-white'>
						<div className='flex-auto p-4 md:p-6'>
							<p className='text-base italic md:text-lg'>
								We had a wonderful experience traveling 18 days from the Fergana
								Valley to Nukus. I have already highly recommended Advantour to
								two persons beginning to plan travel to your country.
							</p>
						</div>

						<div className='p-4 bg-gray-100 rounded-b-xl md:px-7'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										className='h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]'
										src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
										alt='Image Description'
									/>
								</div>

								<div className='grow ms-3'>
									<p className='text-sm sm:text-base font-semibold'>Luisa</p>
									<p className='text-xs text-gray-500'>
										Senior Director of Operations | Fitbit
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Card --> */}

				{/* <!-- Card 3--> */}
				<div className='flex h-auto w-[30rem] border rounded-xl ml-4'>
					<div className='flex flex-col bg-white rounded-xl'>
						<div className='flex-auto p-4 md:p-6'>
							<p className='text-base italic md:text-lg text-gray-800'>
								We had a wonderful experience traveling 18 days from the Fergana
								Valley to Nukus. I have already highly recommended Advantour to
								two persons beginning to plan travel to your country.
							</p>
						</div>

						<div className='p-4 bg-gray-100 rounded-b-xl md:px-7'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										className='h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]'
										src='https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
										alt='Image Description'
									/>
								</div>

								<div className='grow ms-3'>
									<p className='text-sm sm:text-base font-semibold text-gray-800'>
										Alisa Williams
									</p>
									<p className='text-xs text-gray-500'>
										Entrepreneur | Happy customer
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Card 2--> */}
				<div className='flex h-auto w-[30rem] border rounded-xl ml-4'>
					<div className='flex flex-col bg-white'>
						<div className='flex-auto p-4 md:p-6'>
							<p className='text-base italic md:text-lg'>
								We had a wonderful experience traveling 18 days from the Fergana
								Valley to Nukus. I have already highly recommended Advantour to
								two persons beginning to plan travel to your country.
							</p>
						</div>

						<div className='p-4 bg-gray-100 rounded-b-xl md:px-7'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										className='h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]'
										src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
										alt='Image Description'
									/>
								</div>

								<div className='grow ms-3'>
									<p className='text-sm sm:text-base font-semibold'>Luisa</p>
									<p className='text-xs text-gray-500'>
										Senior Director of Operations | Fitbit
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Card --> */}
			</Marquee>
		</div>
	)
}

export default Testimonials
