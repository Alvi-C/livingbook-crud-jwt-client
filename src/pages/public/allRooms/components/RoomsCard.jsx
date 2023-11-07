/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const RoomsCard = ({ property }) => {
    const { _id, propertyName, city, country, price, image, propertyType } = property

    return (
			<div className='flex flex-col bg-white border rounded-xl'>
				<div className='relative'>
					<img
						className='w-full h-60 object-cover rounded-t-xl'
						src={image}
						alt='Image'
					/>
					<h3 className='absolute bottom-4 bg-black px-3 py-1 text-sm tracking-wide text-lime-300'>
						{propertyType}
					</h3>
				</div>
				<div className='p-4 md:p-5'>
					<h3 className='text-lg font-bold text-gray-800'>{propertyName}</h3>
					<p className='text-sm text-slate-600 mb-2'>
						{city}, {country}
					</p>
					<h3 className='text-base text-slate-700'>
						Price per day: <span className='font-bold'>${price}</span>
					</h3>
					<Link
						className='mt-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent tracking-wide text-slate-600 hover:text-lime-600 disabled:opacity-50 disabled:pointer-events-none '
						to={`/rooms/details/${_id}`}
					>
						View details
						<svg
							className='flex-shrink-0 w-4 h-4'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='m9 18 6-6-6-6' />
						</svg>
					</Link>
				</div>
			</div>
		)
};

export default RoomsCard;