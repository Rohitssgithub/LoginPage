import { createBrowserRouter, Navigate } from "react-router-dom";
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
export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/home',
                element: <PrivateRoute component={Home} />
            },
            {
                path: '/about',
                element: <PrivateRoute component={About} />
            },
        ]
    },
    {
        element: <LoginLayout />,
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
])