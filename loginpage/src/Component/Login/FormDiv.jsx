import React from 'react'
import styles from './LoginPage.module.scss'
import LoginLayout from './LoginForm'

const FormDiv = ({ children }) => {
    return (
        <>
            <div className={styles.logins}>
                {children}
                {/* <LoginLayout></LoginLayout> */}
            </div>
        </>
    )
}

export default FormDiv