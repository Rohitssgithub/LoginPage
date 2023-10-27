import React, { useRef, useState, useEffect } from 'react';
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'
import FormDiv from './FormDiv';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const LoginPage = () => {
    const inputRefs = Array(6).fill(null).map(() => useRef(null));
    const text = "Welcome Login Here";
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    let [pass, setPass] = useState(false)


    const signupSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid email').required("This field is required"),
        password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required")
            .matches(
                "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup.string().required("This field is required").oneOf([Yup.ref("password"), null], "Password must match"),
    })


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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (charIndex < text.length) {
                setDisplayText(displayText + text.charAt(charIndex));
                setCharIndex(charIndex + 1);
            } else {
                setDisplayText('');
                setCharIndex(0);
            }
        }, 150);


        return () => {
            clearTimeout(timer);
        };
    }, [charIndex, text, displayText]);

    const handleSubmit = () => {
        // alert()
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className='row g-0'>
                    <div className='col-6'>
                        <div className={styles.login}>
                            {/* <p className={styles.movingPage}>{displayText}</p> */}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className={styles.logins}>
                            <div className={styles.loginDiv}>
                                <Formik
                                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>

                                            <i className={`${styles.iconPerson} bi bi-person-circle`}></i>
                                            <div className={styles.extraDiv}></div>
                                            <div className={styles.inputGroup}>

                                                <label >Email address</label>
                                                <input type='email' value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} placeholder='email'
                                                    id="floatingInput" className={`form-control  inp  ${errors.email && touched.email && 'is-invalid'}`} />
                                                {
                                                    errors.email && touched.email ?
                                                        <p className={styles.errorMessage}>{errors.email}</p> : null
                                                }
                                            </div>
                                            <div className={`${styles.inputGroup} ${styles.passInput} `}>
                                                <label>Password</label>
                                                <input type={pass ? 'text' : 'password'} value={values.password} name="password" placeholder='password' onChange={handleChange}
                                                    onBlur={handleBlur} className={`form-control inp ${errors.password && touched.password}`} />

                                                <span className={styles.eyeSpan} onClick={()=>setPass(!pass)}>
                                                    {
                                                        pass ? <i class="bi bi-eye-fill"></i> :
                                                            <i class="bi bi-eye-slash-fill"></i>
                                                    }
                                                </span>
                                                {
                                                    errors.password && touched.password ?
                                                        <p className={styles.errorMessage}>{errors.password}</p> : null
                                                }
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Confirm Password</label>
                                                <input type='text' value={values.confirmPassword} name="confirmPassword" onChange={handleChange} onBlur={handleBlur} placeholder='confirm password'
                                                    className={`form-control inp ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} />
                                                {
                                                    errors.confirmPassword && touched.confirmPassword ?
                                                        <p className={styles.errorMessage}>{errors.confirmPassword}</p> : null
                                                }
                                            </div>

                                            <button className='btn btn-danger px-4 w-100' type='submit'>Login</button>

                                        </Form>
                                    )}
                                </Formik>
                                {/* <form onSubmit={handleSubmit}>
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
                                        <button className={styles.rotate_border} type='submit'>Login</button>
                                    </div>
                                </form> */}

                                {/* <div className={styles.otpReceiver}>
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
                                    <button className="btn btn-primary my-4" onClick={handleVerify}>
                                        Verify
                                    </button>
                                    <p className={styles.resend}>
                                        Didn't receive code? <a href="">Request again</a>
                                    </p>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage