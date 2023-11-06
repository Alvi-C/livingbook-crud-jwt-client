
import { Link } from 'react-router-dom'


const SignupPage = () => {
    return (
			<div className='container-size'>
				<div className='grid grid-cols-1 lg:grid-cols-2 mt-10'>
					<div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
						<div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
								Create account
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Already have an account?{' '}
								<Link
									to='/login'
									className='font-semibold text-black transition-all duration-200 hover:underline'
								>
									Please login
								</Link>
							</p>

							<form>
								<div className='space-y-5 mt-5'>
									<div>
										<label
											htmlFor=''
											className='text-base font-medium text-gray-900'
										>
											{' '}
											Name{' '}
										</label>
										<div className='mt-2'>
											<input
												className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
												name='name'
												type='text'
												placeholder='Your name'
											></input>
										</div>
									</div>
									<div>
										<label
											htmlFor=''
											className='text-base font-medium text-gray-900'
										>
											{' '}
											Email address{' '}
										</label>
										<div className='mt-2'>
											<input
												className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
												name='email'
												type='email'
												placeholder='Your email'
											></input>
										</div>
									</div>
									<div>
										<div className='flex items-center justify-between'>
											<label
												htmlFor=''
												className='text-base font-medium text-gray-900'
											>
												{' '}
												Password{' '}
											</label>
										</div>
										<div className='mt-2'>
											<input
												className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
												name='password'
												type='password'
												placeholder='Password'
											></input>
											<p className='text-blue-500 text-xs mt-2'>
												Password must be at least 6 characters a number and a
												special character
											</p>
										</div>
									</div>
								</div>
								<div className='flex justify-center mt-7'>
									<input
										type='button'
										value='Login'
										className='bg-lime-500 w-full rounded-xl py-3 px-3 text-xs md:text-sm font-medium'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='h-full w-full'>
						<img
							className='mx-auto h-full w-full rounded-md object-cover'
							src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/luxury-hero%20%281%29.jpg?itok=eHbThPZQ'
							alt=''
						/>
					</div>
				</div>
			</div>
		)
};

export default SignupPage;