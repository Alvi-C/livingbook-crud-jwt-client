import { Link, useLoaderData } from 'react-router-dom'

const RoomDetails = () => {
	const data = useLoaderData()

	const {
			propertyName,
			city,
			country,
			price,
			image,
			propertyType,
			amenity,
			details,
			totalRoom
		} = data

	return (
		<div className='container-size mt-10 min-h-screen'>
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
							<span className='font-bold text-gray-900'>Availability: </span>
							<span className='text-slate-600'>{totalRoom}</span>
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
					<div className='w-1/2 px-2 mt-7 space-x-4 text-sm'>
						<button className='w-[40%] bg-lime-600 text-white tracking-wide py-2 px-4 rounded-lg font-normal hover:bg-lime-700'>
							Reserve
						</button>
						<Link to='/rooms'>
							<button className='w-[40%] bg-lime-600 text-white tracking-wide py-2 px-4 rounded-lg font-normal hover:bg-lime-700'>
								Go back
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoomDetails
