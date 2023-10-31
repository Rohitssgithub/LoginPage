export const MAIN_PATH = {
    HOME: {
        path: '/home',
        pageName: "Home",
    },
    ABOUT: {
        path: '/about',
        pageName: "About",
    },
    SETTING: {
        path: '/setting',
        pageName: "Setting",
        children: {
            USER_SETTING: {
                path: '/setting/user-setting',
                pageName: "User Setting"
            },
            PROFILE: {
                path: '/setting/user-profile',
                pageName: "Profile Setting"
            }
        }
    },
    USER: {
        path: '/user',
        pageName: "User",
        children: {
            USER_SETTING: {
                path: '/user/user-setting',
                pageName: "User Setting"
            },
            PROFILE: {
                path: '/user/user-profile',
                pageName: "Profile Setting"
            }
        }
    },

}