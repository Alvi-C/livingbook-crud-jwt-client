import { useContext, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Datepicker from 'react-tailwindcss-datepicker'
import { AuthContext } from '../../../provider/AuthProvider'
import { Toaster, toast } from 'sonner'
// import axios from 'axios'
import Modal from './components/Modal'

const RoomDetails = () => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [bookingInfo, setBookingInfo] = useState({})

	const [value, setValue] = useState({
		startDate: null,
		endDate: null,
	})

	const { user } = useContext(AuthContext)

	const navigate = useNavigate()

	const data = useLoaderData()
	const {
		_id,
		propertyName,
		city,
		country,
		price,
		image,
		propertyType,
		amenity,
		details,
		totalRoom,
	} = data

	const [updatedTotalRoom, setUpdatedTotalRoom] = useState(totalRoom)

	const handleValueChange = newValue => {
		// console.log('newValue:', newValue)
		setValue(newValue)
	}

	const handleBooking = async () => {
		if (!user) {
			navigate('/login')
			return // Prevent further execution if user is not logged in
		}

		if (value.startDate === null) {
			toast.error('Please select date')
			return // Prevent further execution if startDate is null
		}

		try {
			const response = await fetch(
				`https://living-book-server.vercel.app/bookings?userEmail=${user?.email}&hotelId=${_id}&bookingDate=${value.startDate}`
			)
			const data = await response.json()
			if (data.length > 0) {
				toast.error('Booking already exists for this date')
				return // Exit the function if booking exists
			} else {
				// Function to format a date to YYYY/MM/DD
				const formatDateToYYMMDD = date => {
					let day = date.getDate().toString().padStart(2, '0')
					let month = (date.getMonth() + 1).toString().padStart(2, '0')
					let year = date.getFullYear().toString()
					return `${year}-${month}-${day}`
				}


				setBookingInfo({
					date: formatDateToYYMMDD(new Date()),
					userEmail: user?.email,
					hotelName: propertyName,
					hotelId: _id,
					bookingDate: value.startDate,
					price: price,
				})
				setModalOpen(true) // Open modal
			}
		} catch (error) {
			console.error(error)
			toast.error('An error occurred while checking the booking')
		}
	}

	// Function to handle confirmation inside the modal
	const confirmBooking = async () => {
		try {
			const response = await fetch('https://living-book-server.vercel.app/bookings', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(bookingInfo),
			})
			const data = await response.json()
			// console.log(data);
			if (data.bookingId) {
				setModalOpen(false) // Close modal
				setValue({ startDate: null, endDate: null })
				setUpdatedTotalRoom(prevRoomCount => prevRoomCount - 1)
				toast.success(data.message)
			}
		} catch (error) {
			console.error(error)
			toast.error('An error occurred while confirming the booking')
		}
	}

	return (
		<div className='container-size mt-10'>
			{isModalOpen && (
				<Modal
					bookingInfo={bookingInfo}
					onConfirm={confirmBooking}
					onCancel={() => setModalOpen(false)}
				/>
			)}
			<div className='flex flex-col md:flex-row -mx-4'>
				<div className='md:flex-1 px-4'>
					<div className='h-[460px] rounded-lg bg-gray-300'>
						<img
							className='w-full h-full object-cover'
							src={image}
							alt='Image'
						/>
					</div>
				</div>
				<div className='md:flex-1 px-4 mt-6 md:mt-0 mb-4'>
					<h2 className='text-2xl font-bold text-gray-800'>{propertyName}</h2>
					<p className='text-sm text-slate-600 mb-6'>
						{city}, {country}
					</p>
					<p className='text-gray-600 text-sm mb-4'>
						Whether you&apos;re planning a relaxing getaway, a business trip, or
						an adventure-packed vacation, LivingBook offers a user-friendly
						interface to effortlessly browse, compare, and secure your ideal
						hotel room. Welcome to LivingBook, where your next hotel room is
						just a click away.
					</p>
					<div className='flex mb-4'>
						<div className='mr-4'>
							<span className='font-bold text-gray-900'>Type: </span>
							<span className='text-slate-600 '>{propertyType}</span>
						</div>
						<div className='mr-4'>
							<span className='font-bold text-gray-900'>Price: </span>
							<span className='text-slate-600 '>${price}</span>
						</div>
						<div>
							<span className='font-bold text-gray-900'>
								Room Availability:{' '}
							</span>
							<span className='text-slate-600'>{updatedTotalRoom}</span>
						</div>
					</div>

					<div>
						<span className='font-bold text-gray-900'>Short details:</span>
						<p className='text-gray-600 text-sm mt-2'>{details}</p>
					</div>
					<div className='mt-6 w-full lg:w-2/3'>
						<span className='font-bold text-gray-900'>Aminities:</span>
						<ul className='text-gray-600 flex flex-wrap gap-3 text-sm mt-2'>
							{amenity.map(amenity => (
								<li key={amenity}>{amenity}</li>
							))}
						</ul>
					</div>
					<div className='mt-6 w-full lg:w-2/3'>
						<span className='font-bold text-gray-900'>
							Select Booking Date:
						</span>
						<Datepicker
							asSingle={true}
							value={value}
							onChange={handleValueChange}
							primaryColor={'white'}
							startFrom={new Date()}
							displayFormat={'DD/MM/YYYY'}
							readOnly={true}
							containerClassName='relative'
							popoverDirection='up'
							startWeekOn='sun'
							inputClassName='w-full py-2 border px-4 rounded-md font-normal bg-white text-gray-600 mt-3'
						/>
					</div>
					<div className='px-2 mt-7 flex space-x-4 text-sm'>
						<button
							onClick={handleBooking}
							className=' bg-lime-600 text-white tracking-wide py-2 px-4 rounded-lg font-normal hover:bg-lime-700 '
						>
							Book now
						</button>
						<Link to='/rooms'>
							<button className=' bg-lime-600 text-white tracking-wide py-2 px-4 rounded-lg font-normal hover:bg-lime-700'>
								Go back
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Toaster position='top-center' richColors />
		</div>
	)
}

export default RoomDetails
