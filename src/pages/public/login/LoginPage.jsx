import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider'
import { Toaster, toast } from 'sonner'
import axios from 'axios'

const LoginPage = () => {
	const { logInUser, signInWithGoogle } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()


	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then(result => {
				const user = result?.user
				console.log(user)
				navigate(location?.state ? location.state : '/')
				// Check if the user is already registered or not
				axios
					.get('https://https:/living-book-server.vercel.app/users')
					.then(response => {
						// Find if there is any user registered with this email
						const isUserRegistered = response.data.find(
							existingUser => existingUser?.email === user?.email
						)

						if (isUserRegistered) {
							navigate(location?.state ? location.state : '/')
						} else {
							// Add user to the database
							axios
								.post('https://https:/living-book-server.vercel.app/users', {
									name: user?.displayName,
									email: user?.email,
								})
								.then(response => {
									if (response?.data?.insertedId) {
										toast.success('You are logged in')
									}
								})
								.catch(error => {
									console.error(error)
								})

							navigate(location?.state ? location.state : '/')
						}
					})
					.catch(error => {
						console.error(error)
					})
			})
			.catch(error => {
				console.error(error)
			})
	}

	// user login with email and password
	const handleLogin = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value

		if (!email || !password) {
			toast.error('Please fill all the fields')
			return
		}

		logInUser(email, password)
			.then(result => {
				const user = result.user
				console.log(user.email)
				navigate(location?.state ? location.state : '/')
				toast.success('Logged in successfully')
			})
			.catch(error => {
				if (error.code === 'auth/wrong-password') {
					toast.error("Password doesn't match")
				} else if (error.code === 'auth/user-not-found') {
					toast.error("Email doesn't match")
				} else {
					console.error(error)
					toast.error('An error occurred. Please try again later.')
				}
			})
	}

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
								onClick={handleGoogleLogin}
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
						<form onSubmit={handleLogin}>
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
									type='submit'
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
						src='https://www.libertytravel.com/sites/default/files/styles/full_size/public/LT.com%20Family%20Image-838x557.jpg'
						alt=''
					/>
				</div>
			</div>
			<Toaster position='top-center' richColors />
		</div>
	)
}

export default LoginPage
