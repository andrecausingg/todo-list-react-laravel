import {createBrowserRouter} from "react-router-dom";

import Login from "./assets/views/Login";
import Signup from "./assets/views/Signup";
import ForgotPassword from "./assets/views/ForgotPassword";
import User from "./assets/views/User";
import NotFound from "./assets/views/NotFound";
import DefaultLayout from "./assets/components/DefaultLayout";
import GuestLayout from "./assets/components/GuestLayout";
import Dashboard from "./assets/views/Dashboard";
import  TodoList from "./assets/components/TodoList"

const router = createBrowserRouter([
    {
        path:'/',
        element: <GuestLayout />,
        children:[
            {
                path: '/',
                element: <TodoList />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword />
            },
        ]
    },
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                path:'/user',
                element: <User />
            }, 
            {
                path:'/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router; 