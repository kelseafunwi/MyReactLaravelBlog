import { Navigate, createBrowserRouter } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Surveys from './views/Surveys'
import Signup from "./views/SignUp"
import Login from './views/Login'
import NotFound from "./views/NotFound"
import GuestLayout from "./components/GuestLayout"
import DefaultLayout from "./components/DefaultLayout"

const router =  createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate  to='/' />
            },
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/surveys',
                element: <Surveys />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound />
    },
])

export default router;
