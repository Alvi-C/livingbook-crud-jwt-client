

import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {MdCardTravel} from 'react-icons/md'
import { RiMenu3Line } from 'react-icons/ri'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const [activeScroll, setActiveScroll] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleMobileMenuToggle = () => {
        setMobileMenu(!mobileMenu)
    }


	useEffect(() => {
		const scrollMe = () => {
			window.scrollY > 50 ? setActiveScroll(true) : setActiveScroll(false)
		}
		window.addEventListener('scroll', scrollMe)
		return () => {
			window.removeEventListener('scroll', scrollMe)
		}
	}, [])

	return (
		<nav
			className={`border-b border-slate-500 sticky top-0 z-50 ${
				activeScroll ? 'bg-lime-500' : 'bg-inherit'
			} transition-all duration-500 ease-linear`}
		>
			<div className='container-size h-[70px] flex items-center justify-between'>
				<div className='flex items-center justify-start gap-10'>
					<Link to='/' className='flex items-center gap-1 md:gap-2'>
						<MdCardTravel
							className={`text-3xl md:text-4xl transition-all duration-500 ${
								activeScroll ? 'fill-white' : 'fill-lime-500'
							}`}
						/>
						<p
							className={`text-xl md:text-3xl font-bold ${
								activeScroll ? 'text-white' : 'text-black'
							}`}
						>
							LivingBook
						</p>
					</Link>
					<div className='hidden md:flex items-center gap-5'>
						<ul
							className={`text-sm font-semibold sm:flex items-center gap-5 ${
								activeScroll ? 'text-white' : 'text-black'
							}`}
						>
							<li>
								<NavLink
									to='/rooms'
									className={({ isActive }) =>
										isActive
											? `${activeScroll ? 'text-white' : 'text-lime-500'}`
											: ``
									}
								>
									Rooms
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/mybookings'
									className={({ isActive }) =>
										isActive ? 'text-lime-500' : ''
									}
								>
									My Bookings
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

				<div className='flex items-center justify-end gap-3'>
					{/* Hamburger icons */}
					<div onClick={handleMobileMenuToggle} className='md:hidden'>
						{mobileMenu ? (
							<MdOutlineClose className='text-2xl cursor-pointer fill-slate-900 ' />
						) : (
							<RiMenu3Line className='text-2xl cursor-pointer fill-slate-900 ' />
						)}
					</div>
					{/* Mobile menu dropdown */}
					<div
						onClick={handleMobileMenuToggle}
						className={
							mobileMenu
								? 'absolute md:hidden top-[70px] right-0 bg-lime-200/80 w-full px-4 py-7 flex flex-col items-center justify-center text-center transition duration-500'
								: 'hidden'
						}
					>
						<ul className='space-y-4 text-lg'>
							<li className='border-b border-lime-500 py-3'>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? 'text-lime-500' : ''
									}
								>
									Home
								</NavLink>
							</li>
							<li className='border-b border-lime-500 py-3'>
								<NavLink
									to='/rooms'
									className={({ isActive }) =>
										isActive ? 'text-lime-500' : ''
									}
								>
									Rooms
								</NavLink>
							</li>
							<li className='border-b border-lime-500 py-3'>
								<NavLink
									to='/mybookings'
									className={({ isActive }) =>
										isActive ? 'text-lime-500' : ''
									}
								>
									My Bookings
								</NavLink>
							</li>
						</ul>
					</div>

					<Link
						to='/login'
						className={`bg-black text-white rounded-2xl p-2 px-3 text-xs md:text-sm font-medium ${
							activeScroll ? 'bg-white text-black' : 'bg-lime-500'
						}`}
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
