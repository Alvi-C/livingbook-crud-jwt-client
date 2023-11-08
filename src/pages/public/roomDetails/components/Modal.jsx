/* eslint-disable react/prop-types */



const Modal = ({ bookingInfo, onConfirm, onCancel }) => {

    const { date,userEmail, hotelName, hotelId, bookingDate, price } = bookingInfo


    // const confirmBooking = async () => {
    //     try {
    //         // Call the backend API to store booking
    //         await axios.post('/bookings', bookingInfo)
    //             .then(response => {
    //             if (response.data.insertedId) {
    //                 toast.success('Booking successful')
    //             }
    //             })
    //         catch (error) {
    //             toast.error(error.message)
    //         }

	return (
		<div className='fixed inset-0 top-28 z-10'>
			<div
				className='overflow-y-auto'
				aria-labelledby='modal-title'
				role='dialog'
				aria-modal='true'
			>
				<div className='flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
					{/* <!--This is the background that overlays when the modal is
                        active. It  has opacity, and that's why the background looks gray.-->
                        <!----- add this code to this very first div: fixed inset-0 --> */}
					<div
						className='transition-opacity bg-gray-500 bg-opacity-75'
						aria-hidden='true'
					></div>
					<span
						className='hidden sm:inline-block sm:align-middle sm:'
						aria-hidden='true'
					></span>
					{/* <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper --> */}
					<div className='inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
						<div>
							<div className='mt-3 text-left sm:mt-5'>
								<p className='text-sm text-gray-500 mb-2'>Today: {date}</p>
								<p className='text-base font-semibold text-neutral-600 mb-4'>
									Customer&apos;s email: {userEmail}
								</p>

								<h1 className='mb-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
									{hotelName}
								</h1>
								<p className='text-sm text-gray-500 mb-2'>id: {hotelId}</p>
								<p className='text-base font-semibold text-neutral-600 mb-2'>
									Booking date: {bookingDate}
								</p>
								<p className='mx-auto text-base leading-relaxed text-gray-500'>
									This is LivingBook, where your next hotel room is just a
									click away.
								</p>
								<h1 className='my-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600'>
									Price: ${price}
								</h1>
							</div>
						</div>
						<div className='mt-6 sm:flex gap-4'>
							<div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
								<button
									onClick={onConfirm}
									className='items-center block px-10 py-3 text-base font-medium text-center text-black transition duration-500 ease-in-out transform bg-lime-500 rounded-xl hover:bg-lime-700 hover:text-white focus:outline-none'
								>
									Confirm
								</button>
							</div>

							<div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
								<button
									onClick={onCancel}
									className='items-center block px-10 py-3 text-base font-medium text-center text-black transition duration-500 ease-in-out transform bg-white border rounded-xl hover:bg-lime-700 hover:text-white focus:outline-none'
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;

