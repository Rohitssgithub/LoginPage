import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Sidebar/Sidebar'
const MainLayout = () => {
    return (
        <>
            <div>
                <Sidebar></Sidebar>
                <div className='container-fluid'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout