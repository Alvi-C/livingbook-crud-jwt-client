



const BookingItemCard = () => {
    return (
			<div className='container-size mt-10'>
				<div className='p-5 overflow-hidden text-left align-bottom bg-white rounded-lg border border-dashed border-gray-300 lg:p-10 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
					<div>
						<div className='mt-3 text-left sm:mt-5'>
							<p className='text-sm text-gray-500 mb-2'>
								Ordered date: 23/33/33
							</p>
							<p className='text-base font-semibold text-neutral-600 mb-4'>
								Customer&apos;s email:sdf
							</p>

							<h1 className='mb-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
								dddd
							</h1>
							<p className='text-sm text-gray-500 mb-2'>id: 12343efdff</p>
							<p className='text-base font-semibold text-neutral-600 mb-2'>
								Booking date: 22/22/22
							</p>
							<p className='mx-auto text-base leading-relaxed text-gray-500'>
								Thank you for choosing LivingBook. Have a sefe journey and enjoy your moment.
							</p>
							<h1 className='my-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
								Price: $100
							</h1>
						</div>
					</div>
					<div className='mt-6 flex gap-4'>
						<button className='items-center px-5 py-2 text-sm font-normal text-center text-black transition duration-500 ease-in-out transform bg-slate-200 rounded-xl hover:bg-slate-300 focus:outline-none'>
							Edit
						</button>

						<button className='items-center px-5 py-2 text-sm font-normal text-center text-black transition duration-500 ease-in-out transform bg-rose-200 rounded-xl hover:bg-rose-300 focus:outline-none'>
							Delete
						</button>
					</div>
				</div>
			</div>
		)
};

export default BookingItemCard;