import { useEffect, useState } from 'react'
import RoomsCard from './components/RoomsCard'
import { useLoaderData } from 'react-router-dom'
import Slider from './components/Slider'
import { Helmet } from 'react-helmet-async'

const AllRoomsPage = () => {
	const [properties, setProperties] = useState([])
	const [filteredProperties, setFilteredProperties] = useState([])
	const [selectedPriceRange, setSelectedPriceRange] = useState('')

	const [countries, setCountries] = useState([])
	const [selectedCountry, setSelectedCountry] = useState('')


	const data = useLoaderData()

	useEffect(() => {
		setProperties(data)
		setFilteredProperties(data)
		// Extract unique countries from the data
		const uniqueCountries = Array.from(
			new Set(data.map(item => item.country))
		).sort()
		setCountries(uniqueCountries)
	}, [data])

	const handlePriceFilterChange = e => {
		const value = e.target.value
		setSelectedPriceRange(value)

		if (value) {
			const [minPrice, maxPrice] = value.split('-')
			const filtered = properties.filter(property => {
				const price = parseInt(property.price)
				if (maxPrice === 'more') {
					return price >= parseInt(minPrice)
				}
				return price >= parseInt(minPrice) && price <= parseInt(maxPrice)
			})
			setFilteredProperties(filtered)
		} else {
			setFilteredProperties(properties)
		}
	}

	const handleCountryFilterChange = e => {
		const country = e.target.value
		setSelectedCountry(country)

		const filteredByCountry = properties.filter(property => {
			return property.country === country || country === ''
		})

		setFilteredProperties(filteredByCountry)
	}

	const resetFilter = () => {
		setFilteredProperties(properties)
		setSelectedPriceRange('')
		setSelectedCountry('')
	}

	return (
		<div>
			<Helmet>
				<title>LivingBook | Rooms</title>
			</Helmet>
			<Slider />
			<div className='container-size mt-10'>
				<div className='mb-10'>
					<div className='flex flex-row gap-4 mt-4'>
						<select
							className='px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
							value={selectedPriceRange}
							onChange={handlePriceFilterChange}
						>
							<option value=''>Filter by Price</option>
							<option value='20-50'>$20 - $50</option>
							<option value='50-100'>$50 - $100</option>
							<option value='100-150'>$100 - $150</option>
							<option value='150-200'>$150 - $200</option>
							<option value='200-more'>$200 +</option>
						</select>
						<select
							className='px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
							value={selectedCountry}
							onChange={handleCountryFilterChange}
						>
							<option value=''>Filter by Country</option>
							{countries.map(country => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
						<button
							className='px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-md'
							onClick={resetFilter}
						>
							Reset Filter
						</button>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3'>
					{filteredProperties.map(property => (
						<RoomsCard key={property._id} property={property} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AllRoomsPage
