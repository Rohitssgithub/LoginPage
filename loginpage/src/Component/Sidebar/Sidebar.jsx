import React, { useState, useEffect } from "react";
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";
import { MAIN_PATH } from "../../Constant/Constant";

const Sidebar = () => {
    const [currentPath, setCurrentPath] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = getToken();
        setIsLoggedIn(!!token);
    }, []);

    const getToken = () => {
        const userDataString = localStorage.getItem('userData');
        let userData = JSON.parse(userDataString);
        return userData?.token;
    }

    const ToggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSettingsDropdown = (pageName) => {
        console.log('pageName', pageName)
        // if (openDropdown === pageName) {
        //     setOpenDropdown(null); 
        // } else {
            setOpenDropdown(pageName); 
        // }
    }

    console.log('openDropdown', openDropdown)

    return (
        <>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <div className="form-inline me-auto">
                            <div className="btn btn-primary" onClick={ToggleSidebar}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebars ${isOpen ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            {Object.values(MAIN_PATH).map((ele) => {
                                if (ele.children) {
                                    return (
                                        <li key={ele.path} className="innerLink">
                                            <span
                                                className={`mainLinkNav ${openDropdown === ele.pageName ? 'active' : ''}`}
                                                onClick={() => toggleSettingsDropdown(ele.pageName)}
                                            >
                                                {ele.pageName}
                                            </span>
                                            {openDropdown === ele.pageName && (
                                                <ul className="user-settings-dropdown">
                                                    {Object.values(ele.children).map((child) => (
                                                        <Link className="linksDrop" to={child.path}>{child.pageName}</Link>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={ele.path}>
                                            <Link className='mainLinkNav' to={ele.path}>{ele.pageName}</Link>
                                        </li>
                                    );
                                }
                            })}
                            <Link className='mainLinkNav' onClick={() => localStorage.clear()} to='/login'>Logout</Link>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>
        </>
    )
}

export default Sidebar;
