import { useContext, useEffect, useState } from 'react'
import BookingItemCard from './components/BookingItemCard'
import { AuthContext } from '../../../provider/AuthProvider'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

const MyBookingPage = () => {
	const { user } = useContext(AuthContext)
	const [bookings, setBookings] = useState([])

	const url = `http://localhost:3000/bookings?userEmail=${user.email}`

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url, { withCredentials: true })
				setBookings(response.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [url])


	return (
		<div className='container-size mt-10'>
			<Helmet>
				<title>LivingBook | My Bookings</title>
			</Helmet>
			<h1 className='text-2xl font-semibold leading-none tracking-tighter'>
				{bookings.length > 0
					? `Your total bookings ${bookings.length}`
					: 'You have no booking yet'}
			</h1>
			<div className='grid grid-cols-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{bookings.map(booking => (
					<BookingItemCard
						key={booking._id}
						booking={booking}
					/>
				))}
			</div>
		</div>
	)
}

export default MyBookingPage
