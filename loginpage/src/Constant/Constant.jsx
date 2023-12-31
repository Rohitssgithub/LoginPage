import LoginForm from "../Component/Login/LoginForm";
import RegisterForm from "../Component/RegistrationForm/RegisterForm";
import ForgetPassword from "../Component/Login/ForgetPassword/ForgetPassword";
import OtpReceiver from "../Component/Login/OtpReciver/OtpReciver";
import NewPassword from "../Component/Login/NewPassowrd/NewPassword";
import Home from "../Page/Home/Home"
import About from "../Page/About/About";
import Setting from "../Component/setting/Setting";
import UserProfile from "../Component/User/UserProfile";
import SingleMoviePage from "../Component/SIngleMoviePage";
import UserSettings from "../Component/User/UserSetting";
export const MAIN_PATH = {
    publicRoutes: {
        LOGIN: {
            path: '/login',
            element: <LoginForm/>
        },
        REGISTER: {
            path: "/register",
            element: <RegisterForm/>
        },
        FORGOT_PASSWORD: {
            path: "/forget-password",
            element: <ForgetPassword/>
        },
        OTP_RECIVER: {
            path: '/otp-recive',
            element: <OtpReceiver/>
        },
        NEW_PASSWORD_GENERATE: {
            path: '/new-password-generate',
            element: <NewPassword/>
        },
    },
    privateRoutes: {
        HOME: {
            path: "/home",
            element: <Home />,
            pageName: "Home",
            sidebar: {
                show: true,
            }
        },
        ABOUT: {
            path: "/about",
            element: <About />,
            pageName: "About",
            sidebar: {
                show: true,
            }
        },
        SINGLE_MOVIE_ID:{
            path: "/single/movie/:id",
            element: <SingleMoviePage />,
            pageName: "Single Movie",
            
        },
        SETTING:{
            path: "/setting",
            element: <Setting />,
            pageName: "Setting",
            sidebar: {
                show: true,
            },
            children: [
                {
                    path: "/setting/user-setting",
                    element: <UserSettings />,
                    pageName: "User Setting",
                },
                {
                    path: "/setting/user-profile",
                    element: <UserProfile />,
                    pageName: "Profile Setting",
                },
            ],

        }
    },
}

// export const MAIN_PATH = {
    //     HOME: {
    //         path: '/home',
    //         pageName: "Home",
    //     },
    //     ABOUT: {
    //         path: '/about',
    //         pageName: "About",
    //     },
    //     SETTING: {
    //         path: '/setting',
    //         pageName: "Setting",
    //         children: {
    //             USER_SETTING: {
    //                 path: '/setting/user-setting',
    //                 pageName: "User Setting"
    //             },
    //             PROFILE: {
    //                 path: '/setting/user-profile',
    //                 pageName: "Profile Setting"
    //             }
    //         }
    //     },
    //     USER: {
    //         path: '/user',
    //         pageName: "User",
    //         children: {
    //             USER_SETTING: {
    //                 path: '/user/user-setting',
    //                 pageName: "User Setting"
    //             },
    //             PROFILE: {
    //                 path: '/user/user-profile',
    //                 pageName: "Profile Setting"
    //             }
    //         }
    //     },
    
    // }