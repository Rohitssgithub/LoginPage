import React from 'react';
import { Outlet } from 'react-router-dom';

const Setting = () => {
    return (
        <>
            <p>setting page</p>
            <Outlet></Outlet>
        </>
    )
}

export default Setting