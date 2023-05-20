import {createBrowserRouter} from "react-router-dom";

import Login from "./assets/views/Login";
import Signup from "./assets/views/Signup";
import User from "./assets/views/User";
import NotFound from "./assets/views/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/user',
        element: <User />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router; 