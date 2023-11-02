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
import PublicRoute from "../auth/PublicRoute";
import ProfileSetting from "../Component/setting/ProfileSetting";
import UserSetting from "../Component/setting/UserSetting";
import Setting from "../Component/setting/Setting";
import User from "../Component/User/User";
import UserSettings from "../Component/User/UserSetting";
import UserProfile from "../Component/User/UserProfile";
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
            {
                path: "*",
                element: <Navigate to='/login' />
            },
        ]
    },
    {
        element: <MainLayout/>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/setting',
                element: <Setting />,
                children: [
                    {
                        path: '/setting/user-setting',
                        element: <UserSetting />
                    },
                    {
                        path: '/setting/user-profile',
                        element: <ProfileSetting />
                    }
                ]
            },
            {
                path: '/user',
                element: <User />,
                children: [
                    {
                        path: '/user/user-setting',
                        element: <UserSettings />
                    },
                    {
                        path: '/user/user-profile',
                        element: <UserProfile />
                    }
                ]
            },
            {
                path: "*",
                element: <Navigate to='/home' />
            },
        ]
    }
])