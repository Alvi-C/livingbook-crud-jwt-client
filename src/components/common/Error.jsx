import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='grid h-screen px-4 bg-white place-content-center'>
			<div className='text-center'>
				<img
					src='https://miro.medium.com/v2/resize:fit:720/1*zE2qnVTJehut7B8P2aMn3A.gif'
					alt=''
				/>

				<p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
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
