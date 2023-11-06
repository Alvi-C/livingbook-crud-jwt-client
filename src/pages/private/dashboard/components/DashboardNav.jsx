import { NavLink } from "react-router-dom";



const DashboardNav = () => {
    return (
			<div className='sticky top-[4rem] z-10 bg-white mt-5 py-4'>
				<div className='flex flex-col md:flex-row items-center justify-start mb-4 gap-4'>
					<h3 className='text-xl font-semibold'>Dashboard</h3>
					<ul className='flex text-sm font-semibold gap-4 mt-1'>
						<li>
							<NavLink
								to='/dashboard/addProperty'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								Add Property
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/dashboard/allProperty'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								All Property
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/dashboard/allBookings'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								All Bookings
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/dashboard/allUsers'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								All Users
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		)
};

export default DashboardNav;

