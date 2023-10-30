import React from 'react'
import { Outlet } from 'react-router-dom';
import CommonLoginUI from './CommonLoginUI';
import styles from './LoginPage.module.scss'


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
        </>
    )
}

export default LoginLayout