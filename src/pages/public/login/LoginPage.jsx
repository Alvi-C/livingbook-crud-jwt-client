import { Link } from "react-router-dom";


const LoginPage = () => {
    return (
			<div className='container-size'>
				<div className='grid grid-cols-1 lg:grid-cols-2 mt-10'>
					<div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
						<div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
								Log in
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Don&apos;t have an account?{' '}
								<Link
									to='/signup'
									className='font-semibold text-black transition-all duration-200 hover:underline'
								>
									Create an account
								</Link>
							</p>

							<div className='mt-10 space-y-3'>
								<button
									type='button'
									className='relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3 py-2 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none'
								>
									<img
										className='w-5 h-5 mr-2'
										src='https://www.svgrepo.com/show/475656/google-color.svg'
										loading='lazy'
										alt='google logo'
									/>
									Sign in with Google
								</button>
							</div>
							<p className='mt-4 text-center text-sm'>- Or -</p>
							<form>
								<div className='space-y-5'>
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
												placeholder='Email'
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
										</div>
									</div>
								</div>
								<div className='flex justify-center mt-8'>
									<input
										type='button'
										value='Login'
										className='bg-lime-500 w-full rounded-xl py-3 px-3 text-xs md:text-sm font-medium'
									/>
								</div>
								<p className='mt-3 text-sm text-red-600'>loginError msg</p>
							</form>
						</div>
					</div>
					<div className='h-full w-full'>
						<img
							className='mx-auto h-full w-full rounded-md object-cover'
							src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/LT.com%20Family%20Image-838x557.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		)
};

export default LoginPage;