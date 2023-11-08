/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import RoomsCard from '../../allRooms/components/RoomsCard'

const FeaturedItems = ({ data }) => {
	const [properties, setProperties] = useState([])

	useEffect(() => {
		setProperties(data)
	}, [data])

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 pb-10'>
			{properties.map(property => (
				<RoomsCard key={property._id} property={property} />
			))}
		</div>
	)
}

export default FeaturedItems
