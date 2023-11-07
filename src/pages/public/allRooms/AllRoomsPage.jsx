import { useEffect, useState } from "react";
import RoomsCard from "./components/RoomsCard";
import { useLoaderData } from "react-router-dom";


const AllRoomsPage = () => {

    const [properties, setProperties] = useState([])

    const data = useLoaderData()

    useEffect(() => {
        setProperties(data)
    },[data])

    return (
			<div className='container-size mt-10 min-h-screen'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3'>
                    {
                        properties.map(property => <RoomsCard key={property._id} property={property}/>)
                    }
				</div>
			</div>
		)
};

export default AllRoomsPage;

