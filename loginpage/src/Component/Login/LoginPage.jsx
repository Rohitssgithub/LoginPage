import React, { useRef, useState, useEffect } from 'react';
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'
import FormDiv from './FormDiv';

const LoginPage = () => {
    const inputRefs = Array(6).fill(null).map(() => useRef(null));

    console.log('inputRefs', inputRefs)

    const handleInputChange = (e, index) => {
        if (e.target.value) {
            if (index < 5) {
                inputRefs[index + 1].current.focus();
            } else {
                e.target.value = e.target.value.charAt(0);
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };


    const handleVerify = () => {
        const enteredOtp = inputRefs.map((ref) => ref.current.value).join('');
        console.log('Entered OTP:', enteredOtp);
        setOtp(enteredOtp);
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className='row g-0'>
                    <div className='col-6'>
                        <div className={styles.login}>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className={styles.logins}>
                            <div className={styles.loginDiv}>
                                {/* <div className={styles.inputGroup}>
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
                                </div> */}

                                <div className={styles.otpReceiver}>
                                    <h4>Verify</h4>
                                    <p>Your code was sent to you via email</p>

                                    <div className={styles.otp_field}>
                                        {inputRefs.map((inputRef, index) => (
                                            <input
                                                key={index}
                                                type="number"
                                                maxLength="1"
                                                ref={inputRef}
                                                onChange={(e) => handleInputChange(e, index)}
                                            />
                                        ))}
                                    </div>
                                    {/* <div className={styles.otp_field}>
                                        <input
                                            type="number"
                                            maxLength="1"
                                            ref={firstInputRef}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="number"
                                            maxLength="1"
                                            ref={secondInputRef}
                                            onChange={handleInputChange}
                                        />
                                        <input type="number"
                                            maxLength="1"
                                            ref={thirdRef}
                                            onChange={handleInputChange}
                                        />
                                        <input type="number"
                                            maxLength="1"
                                            ref={fourthRef}
                                            onChange={handleInputChange}
                                        />
                                        <input type="number"
                                            maxLength="1"
                                            ref={fifthRef}
                                            onChange={handleInputChange}
                                        />
                                        <input type="number"
                                            maxLength="1"
                                            ref={sisxthRef}
                                            onChange={handleInputChange}
                                        />
                                    </div> */}
                                    <button className="btn btn-primary my-4" onClick={handleVerify}>
                                        Verify
                                    </button>
                                    <p className={styles.resend}>
                                        Didn't receive code? <a href="">Request again</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage