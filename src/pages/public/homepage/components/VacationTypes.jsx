

const VacationTypes = () => {
    return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 pb-10'>
				<div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40'>
					<img
						src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/luxury-hero%20%281%29.jpg?itok=eHbThPZQ'
						alt=''
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
					<h3 className='z-10 mt-3 text-3xl font-bold text-white'>Luxury</h3>
				</div>
				<div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40'>
					<img
						src='https://media.cnn.com/api/v1/images/stellar/prod/underscored-cheap-honeymoon-packages-lead-couple-honeymoon-beach-maldives.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp'
						alt=''
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
					<h3 className='z-10 mt-3 text-3xl font-bold text-white'>Honeymoon</h3>
				</div>
				<div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40'>
					<img
						src='https://www.explore.com/img/gallery/20-tips-for-surviving-a-family-vacation/family_vacation_hero.webp'
						alt=''
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
					<h3 className='z-10 mt-3 text-3xl font-bold text-white'>
						Last Minute
					</h3>
				</div>
				<div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40'>
					<img
						src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/exotic-hero.jpg?itok=Ve6ehRMf'
						alt=''
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
					<h3 className='z-10 mt-3 text-3xl font-bold text-white'>Exotic</h3>
				</div>
			</div>
		)
};

export default VacationTypes;

