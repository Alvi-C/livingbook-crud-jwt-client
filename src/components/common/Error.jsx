import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='grid h-screen px-4 bg-white place-content-center'>
			<div className='text-center'>
				<h1 className='font-black text-gray-200 text-5xl'>ERROR!!</h1>

				<p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4'>
					Oh-no!
				</p>

				<p className='mt-4 mb-8 text-2xl text-gray-500'>Something is wrong.</p>

				<Link
					to='/'
					className='bg-lime-600 text-white text-sm py-2 px-3 rounded-lg'
				>
					Go Back Home
				</Link>
			</div>
		</div>
	)
}

export default Error
