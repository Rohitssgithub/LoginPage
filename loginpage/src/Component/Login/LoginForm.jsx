import React from 'react'
import styles from './LoginPage.module.scss'
import LoginPage from './LoginPage'
import FormDiv from './FormDiv'
const LoginLayout = () => {
    return (
        <>
        <FormDiv>
        <div className={styles.loginDiv}>
                                <div className={styles.inputGroup}>
                                    <label>Username</label>
                                    <input type="text" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Password</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.needDiv}>
                                    <span>New User ?</span>
                                    <span>Forget Password</span>
                                </div>

                                <div className={`${styles.btnDiv} text-center`}>
                                    <button className={styles.rotate_border}>Login</button>
                                </div>
                            </div>
        </FormDiv>
             

        </>
    )
}

export default LoginLayout