import { useLoaderData } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import FeaturedItems from "./components/FeaturedItems";
import Offer from "./components/Offer";
import VacationTypes from "./components/VacationTypes";
import Testimonials from "./components/Testimonials";


const HomePage = () => {
	const data = useLoaderData()
	// console.log(data);
    return (
			<div>
				<TopBanner />
				<div className='container-size mt-[5rem] lg:mt-[8rem]'>
					<h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl mb-10 px-3'>
						Featured Items
					</h1>
					<FeaturedItems data={data} />
				</div>
				<div className='container-size mt-[5rem] lg:mt-[8rem]'>
					<Offer />
				</div>
				<div className='container-size mt-[5rem] lg:mt-[8rem]'>
					<div className=' mb-10 px-3'>
						<h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl'>
							Explore different vacations
						</h1>
						<p className='mt-3 text-lg text-gray-800 mb-10'>
							LivingBook is always there with fabulous offers
						</p>
						<VacationTypes />
					</div>
				</div>
				<div className='container-size mt-[5rem] lg:mt-[8rem] mb-10'>
					<Testimonials/>
				</div>
			</div>
		)
};

export default HomePage;