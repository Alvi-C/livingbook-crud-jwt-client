
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


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/rooms',
                element:<AllRoomsPage/>
            },
            {
                path: '/rooms/details/:id',
                element: <RoomDetails/>
            },
            {
                path: '/mybookings',
                element: <MyBookingPage/>
            },
            {
                path: '/dashboard',
                element: <DashboardPage />,
                errorElement: <Error />,
                children: [
                    {
                        path: '/dashboard/addProperty',
                        element: <AddProperty/>
                    },
                    {
                        path: '/dashboard/allProperty',
                        element: <AllProperty/>
                    },
                    {
                        path: '/dashboard/allBookings',
                        element: <AllBookings/>
                    },
                    {
                        path: '/dashboard/allUsers',
                        element: <AllUsers/>
                    }
                ]

            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/signup',
                element: <SignupPage/>
            }
        ]
    }
])


export default Router