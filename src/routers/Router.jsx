
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Error from '../components/common/Error';
import HomePage from '../pages/public/homepage/HomePage';
import AllRoomsPage from '../pages/public/allRooms/AllRoomsPage';
import RoomDetails from '../pages/public/roomDetails/RoomDetails';
import MyBookingPage from '../pages/private/myBookings/MyBookingPage';
import DashboardPage from '../pages/private/dashboard/DashboardPage';
import LoginPage from '../pages/public/login/LoginPage';
import SignupPage from '../pages/public/signup/SignupPage';
import AddProperty from '../pages/private/dashboard/components/AddProperty';
import AllProperty from '../pages/private/dashboard/components/AllProperty';
import AllBookings from '../pages/private/dashboard/components/AllBookings';
import AllUsers from '../pages/private/dashboard/components/AllUsers';
import axios from 'axios'
import PrivateRoute from './PrivateRoute';
import About from '../pages/public/about/About';
import ContactUs from '../pages/public/contact/ContactUs';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				loader: async () => {
					const response = await axios.get('https://living-book-server.vercel.app/featured')
					return response.data
				},
			},
			{
				path: '/rooms',
				element: <AllRoomsPage />,
				loader: async () => {
					const response = await axios.get('https://living-book-server.vercel.app/properties')
					return response.data
				},
			},
			{
				path: '/rooms/details/:id',
				element: <RoomDetails />,
				loader: async ({ params }) => {
					const response = await axios.get(
						`https://living-book-server.vercel.app/properties/${params.id}`
					)
					return response.data
				},
			},
			{
				path: '/mybookings',
				element: (
					<PrivateRoute>
						<MyBookingPage />
					</PrivateRoute>
				),
			},
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						<DashboardPage />
					</PrivateRoute>
				),
				children: [
					{
						path: '/dashboard/addProperty',
						element: <AddProperty />,
					},
					{
						path: '/dashboard/allProperty',
						element: <AllProperty />,
					},
					{
						path: '/dashboard/allBookings',
						element: <AllBookings />,
					},
					{
						path: '/dashboard/allUsers',
						element: <AllUsers />,
					},
					{
						path: '*',
						element: <Error />,
					},
				],
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/signup',
				element: <SignupPage />,
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            }
		],
	},
])


export default Router