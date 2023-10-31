import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Component/Login/LoginForm";
import LoginLayout from "../Component/Login/LoginLayout";
import RegisterForm from "../Component/RegistrationForm/RegisterForm";
import ForgetPassword from "../Component/Login/ForgetPassword/ForgetPassword";
import OtpReciver from "../Component/Login/OtpReciver/OtpReciver";
import NewPassword from "../Component/Login/NewPassowrd/NewPassword";
import MainLayout from "../Page/MainLayout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import PrivateRoute from "../auth/PrivateRoute";
import PublicRoute from "../auth/PublicRoute";
export const router = createBrowserRouter([

    {
        element: <PublicRoute component={LoginLayout} />,
        children: [
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/register',
                element: <RegisterForm />
            },
            {
                path: '/forget-password',
                element: <ForgetPassword />
            },
            {
                path: '/otp-recive',
                element: <OtpReciver />
            },
            {
                path: '/new-password-generate',
                element: <NewPassword />
            },
        ]
    },
    {
        // path: '/',
        element: <PrivateRoute component={MainLayout} />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
])