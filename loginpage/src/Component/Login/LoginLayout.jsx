import React from 'react'
import { Outlet } from 'react-router-dom';
import CommonLoginUI from './CommonLoginUI';
import styles from './LoginPage.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginLayout = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className='row'>
                    <div className='col-6'>
                        <CommonLoginUI></CommonLoginUI>
                    </div>
                    <div className='col-6'>
                        <div className={styles.logins}>
                            <div className={styles.loginDiv}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
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

export default LoginLayout