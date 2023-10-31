import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const MainLayout = () => {
    return (
        <>
            <div>
                <Sidebar></Sidebar>
                <div className='container-fluid'>
                    <Outlet />
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}

export default MainLayout