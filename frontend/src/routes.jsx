import { createBrowserRouter} from "react-router-dom";

// Import All Components
import Username from "./components/Username";
import Register from "./components/Register";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Username/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/password',
        element: <Password/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/recovery',
        element: <Recovery/>
    },
    {
        path: '/reset',
        element: <Reset/>
    },
    {
        path: '*',
        element: <PageNotFound/>
    }
])

export default router