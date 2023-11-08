/* eslint-disable react/prop-types */


const BookingItemCard = ({ booking }) => {

	return (
		<div className='container-size mt-10'>
			<div className='p-5 overflow-hidden text-left align-bottom bg-white rounded-lg border border-dashed border-gray-300 lg:p-10 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
				<div>
					<div className='mt-3 text-left sm:mt-5'>
						<p className='text-sm text-gray-500 mb-2'>
							Ordered date: {booking.date}
						</p>
						<p className='text-base font-semibold text-neutral-600 mb-4'>
							Your email: {booking.userEmail}
						</p>

						<h1 className='mb-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
							{booking.hotelName}
						</h1>
						<p className='text-sm text-gray-500 mb-2'>id: {booking._id}</p>
						<p className='text-base font-semibold text-neutral-600 mb-2'>
							Booking date: {booking.bookingDate}
						</p>
						<p className='mx-auto text-base leading-relaxed text-gray-500'>
							Thank you for choosing LivingBook. Have a sefe journey and enjoy
							your moment.
						</p>
						<h1 className='my-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
							Price: $ {booking.price}
						</h1>
					</div>
				</div>
				<div className='mt-6 flex gap-4'>
					<button className='items-center px-5 py-2 text-sm font-normal text-center text-black transition duration-500 ease-in-out transform bg-slate-200 rounded-xl hover:bg-slate-300 focus:outline-none'>
						Update
					</button>
					<button className='items-center px-5 py-2 text-sm font-normal text-center text-black transition duration-500 ease-in-out transform bg-rose-200 rounded-xl hover:bg-slate-300 focus:outline-none'>
						Cancel
					</button>

				</div>
			</div>
		</div>
	)
}

export default BookingItemCard;