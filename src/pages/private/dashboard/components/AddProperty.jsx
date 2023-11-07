import { useState } from 'react'

const AddProperty = () => {
	const [amenities, setAmenities] = useState([])
	const [selectedCountry, setSelectedCountry] = useState('')
	const [selectedCity, setSelectedCity] = useState('')
    const [cities, setCities] = useState([])

	const allAmenities = [
		'Free parking',
		'Free wifi',
		'Non-smoking rooms',
		'Restaurant',
		'24-hour front desk',
		'Room service',
		'Breakfast',
		'Air conditioning',
	]

	const countries = {
		India: ['Kashmir', 'Kolkata', 'Darjiling'],
		Nepal: ['Kathmandu', 'Pokhara', 'Lalitpur'],
		Bangladesh: ['Sylhet', 'Khulna', 'Cox-bazar'],
		Vietnam: ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
		Maldives: ['Male', 'Maafushi', 'Hulhumale'],
		Thailand: ['Pattaya', 'Phuket', 'Chiang Mai'],
	}

	const handleAmenityChange = event => {
		event.preventDefault()
		const value = event.target.value
		if (amenities.includes(value)) {
			setAmenities(amenities.filter(item => item !== value))
		} else {
			setAmenities([...amenities, value])
		}
	}

	const handleCountryChange = event => {
		event.preventDefault()
		const country = event.target.value
		setSelectedCountry(country)
		setCities(countries[country] || [])
		setSelectedCity('') // Reset city selection when country changes
	}

	const handleCityChange = event => {
		event.preventDefault()
		setSelectedCity(event.target.value)
	}

	return (
		<div className='grid grid-rows-1 lg:grid-cols-12 gap-1'>
			<div className='col-span-6 lg:col-span-1'>{/* <h2>Hello</h2> */}</div>
			<div className='col-span-6 lg:col-span-11 px-2 md:px-0'>
				<h2 className='text-xl font-medium mb-7'>Add Property</h2>
				<form className='flex flex-col space-y-3 mb-10'>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Name
						</label>

						<input
							type='text'
							name='name'
							placeholder="Property's name"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Image url
						</label>

						<input
							type='text'
							name='imageUrl'
							placeholder="Property's image url"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div>
					{/* Country and city select */}
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Country
						</label>
						<select
							name='country'
							value={selectedCountry}
							onChange={handleCountryChange}
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400'
						>
							<option value=''>Select a country</option>
							{Object.keys(countries).map(country => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							City
						</label>
						<select
							name='city'
							value={selectedCity}
							onChange={handleCityChange}
							disabled={!selectedCountry}
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400'
						>
							<option value=''>Select a city</option>
							{cities.map(city => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
					</div>

					{/* <div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Country
						</label>

						<input
							type='text'
							name='country'
							placeholder="Property's city"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							City
						</label>

						<input
							type='text'
							name='city'
							placeholder="Property's city"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div> */}
					{/* Property type dropdown */}
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label
							htmlFor='HeadlineAct'
							className='block text-base font-medium text-gray-700'
						>
							Property&apos;s type
						</label>

						<select
							name='type'
							className='mt-2 py-2.5 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0'
						>
							<option value=''>Please select</option>
							<option value='Hotel'>Hotel</option>
							<option value='Resort'>Resort</option>
							<option value='Apartment'>Apartment</option>
							<option value='Hostel'>Hostel</option>
							<option value='Private House'>Private House</option>
						</select>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Total number of room
						</label>

						<input
							type='number'
							name='totalRooms'
							placeholder="Property's total number of room"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Price per day
						</label>

						<input
							type='number'
							name='price'
							placeholder="Property's price per day"
							className='mt-2 py-2 px-3 w-full rounded-md border border-gray-200 sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400 placeholder:text-xs'
						/>
					</div>
					{/* amenities checkbox */}
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Amenities
						</label>
						<p className='text-sm text-lime-600 mb-3'>
							you can select multiple
						</p>
						<div className='flex flex-col'>
							{allAmenities.map(amenity => (
								<label key={amenity}>
									<div className='flex items-center gap-2'>
										<input
											type='checkbox'
											value={amenity}
											checked={amenities.includes(amenity)}
											onChange={handleAmenityChange}
										/>
										<p className='text-gray-600'>{amenity}</p>
									</div>
								</label>
							))}
						</div>
					</div>
					{/* details textarea */}
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<label className='block text-base font-medium text-gray-700'>
							Details
						</label>

						<textarea
							name='details'
							rows='5'
							cols='30'
							placeholder='Enter property details'
							className='mt-2 px-3 py-2 w-full rounded-lg border border-gray-200 align-top sm:text-sm ring-0 focus:outline-none focus:ring-0 focus:border-gray-400'
						></textarea>
					</div>
					{/* submit button */}
					<div className='w-full md:w-2/3 lg:w-1/3'>
						<input
							type='submit'
							value=' Add Property'
							className='bg-lime-600 text-white text-sm py-2 px-3 rounded-lg'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddProperty
