import BookingItemCard from "./components/BookingItemCard"

const MyBookingPage = () => {
	return (
        <div className='container-size mt-10'>
            <h1 className='text-2xl font-semibold leading-none tracking-tighter'>
                My All Bookings
            </h1>
			<div className="grid grid-cols-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
				<BookingItemCard />
				<BookingItemCard />
			</div>
		</div>
	)
}

export default MyBookingPage
