
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios'

const SignupPage = () => {

	const { createUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const handleCreateAccount = event => {
		event.preventDefault()
		const form = event.target
		const name = form.name.value
		const email = form.email.value
		const password = form.password.value

		// console.log(name, email, password);

		// validation
		if (password.length < 6) {
			toast.error('Password must be at least 6 characters long')
			return
		} else if (!/[A-Z]/.test(password)) {
			toast.error('Password must contain at least one uppercase letter')
			return
		} else if (!/[^a-zA-Z0-9]/.test(password)) {
			toast.error('Password must contain at least one special character')
			return
		}

		createUser(email, password)
			.then(result => {
				console.log('user', result.user.email);
				const userData = {
					name,
					email
				}

				axios.post('https://living-book-server.vercel.app/users', userData)
					.then(response => {
						if (response.data.insertedId) {
							toast.success('Account created successfully')
							form.reset()
							navigate('/')
						}
					})
			})
			.catch(error => {
				toast.error(error.message)
			})
	}

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

							<form onSubmit={handleCreateAccount}>
								<div className='space-y-5 mt-5'>
									<div>
										<label className='text-base font-medium text-gray-900'>
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
										<label className='text-base font-medium text-gray-900'>
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
								<div className='flex justify-center mt-7 text-white tracking-wide'>
									<input
										type='submit'
										value='Create Account'
										className='bg-lime-500 w-full rounded-xl py-3 px-3 text-xs md:text-sm font-medium'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='h-full w-full'>
						<img
							className='mx-auto h-full w-full rounded-md object-cover'
							src='https://images.trvl-media.com/lodging/35000000/34450000/34448300/34448277/e670d8fa.jpg?impolicy=resizecrop&rw=1200&ra=fit'
							alt=''
						/>
					</div>
				</div>
				<Toaster position='top-center' richColors />
			</div>
		)
};

export default SignupPage;