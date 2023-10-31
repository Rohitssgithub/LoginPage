// import { MAIN_PATH } from "../../Constant/Constant";
import { PATH } from "../../Constant/Constant";

// console.log(Object.values(MAIN_PATH))

export const Navigations = Object.values(PATH).reduce((acc, portalName) => {
    console.log(portalName)
    console.log(Object.values(PATH[portalName].children))
    acc[portalName] = Object.values(MAIN_PATH[portalName].children)
        .map((pageData, index) => ({
            id: index + 1,
            path: pageData.path,
            pageName: pageData.sidebar.name || pageData.pageName
        }))
    return acc
    // console.log(acc)
}, {})  