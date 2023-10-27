import React, { useRef, useState, useEffect } from 'react';
import styles from './LoginPage.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { GoogleLogin } from '@react-oauth/google';

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


    // const handleInputChange = (e, index) => {
    //     if (e.target.value) {
    //         if (index < 5) {
    //             inputRefs[index + 1].current.focus();
    //         } else {
    //             e.target.value = e.target.value.charAt(0);
    //         }
    //     } else {
    //         if (index > 0) {
    //             inputRefs[index - 1].current.focus();
    //         }
    //     }
    // };
    const handleInputChange = (e, index) => {
        console.log('index', index)
        const value = e.target.value;
        console.log('value', value)
        console.log('value.length', value.length)

        if (value) {
            if (value.length > 1) {
                e.target.value = value.charAt(0);
            }
            if (index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };



    const handleVerify = () => {
        const enteredOtp = inputRefs.map((ref) => ref.current.value).join('');
        if (enteredOtp.length === 0) {
            alert('Please Enter OTP')
        }
        else {
            console.log('Entered OTP:', enteredOtp);
            setOtp(enteredOtp);
        }

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

    const handlePaste = (e, index) => {
        const pastedText = e.clipboardData.getData('text');
        const characters = pastedText.split('');
        characters.forEach((char, i) => {
            if (i + index < inputRefs.length) {
                inputRefs[i + index].current.value = char;
            }
        });
    };

    

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
                                <div>
                                    <i className={`${styles.iconPerson} bi bi-person-circle`}></i>
                                    <div className={styles.extraDiv}></div>
                                </div>
                                <Formik
                                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>
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

                                                <span className={styles.eyeSpan} onClick={() => setPass(!pass)}>
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
                                {/* <Formik
                                    initialValues={{}}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>

                                            <div className={styles.otpReceiver}>
                                                <h4>Verify</h4>
                                                <p>Your code was sent to you via email</p>

                                                <div className={styles.otp_field}>
                                                    {inputRefs.map((inputRef, index) => (
                                                        <>
                                                            <input
                                                                key={index}
                                                                type="number"
                                                                maxLength="1"
                                                                ref={inputRef}
                                                                onChange={(e) => handleInputChange(e, index)}
                                                                onPaste={(e) => handlePaste(e, index)}
                                                            />
                                                        </>
                                                    ))}
                                                </div>
                                                <button className="btn btn-danger my-4" onClick={handleVerify}>
                                                    Verify
                                                </button>
                                                <p className={styles.resend}>
                                                    Didn't receive code? <a href="">Request again</a>
                                                </p>
                                            </div>
                                        </Form>
                                    )}
                                </Formik> */}


                                {/* <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>


                                            <div className={styles.emailSenderDiv}>
                                                <h4>Email</h4>
                                                <p>Your code was sent to you on this email</p>
                                                <div className={styles.inputGroup}>

                                                    <label >Email address</label>
                                                    <input type='email' value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} placeholder='email'
                                                        id="floatingInput" className={`form-control  inp  ${errors.email && touched.email && 'is-invalid'}`} />
                                                    {
                                                        errors.email && touched.email ?
                                                            <p className={styles.errorMessage}>{errors.email}</p> : null
                                                    }
                                                </div>
                                            </div>
                                            <button className='btn btn-danger px-4 w-100' type='submit'>Send OTP</button>

                                        </Form>
                                    )}
                                </Formik> */}
                                {/* <Formik
                                    initialValues={{ password: '', confirmPassword: '' }}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>
                                            <div className={styles.emailSenderDiv}>
                                                <div className={styles.inputGroup}>
                                                    <label className='mb-1'>New Password</label>
                                                    <input type='email' value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} placeholder='Password'
                                                        id="floatingInput" className={`form-control  inp  ${errors.password && touched.password && 'is-invalid'}`} />
                                                    {
                                                        errors.password && touched.password ?
                                                            <p className={styles.errorMessage}>{errors.password}</p> : null
                                                    }
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label className='mb-1'>Confirm Password</label>
                                                    <input type='email' value={values.confirmPassword} name="confirmPassword" onChange={handleChange} onBlur={handleBlur} placeholder='Confirm Password'
                                                        id="floatingInput" className={`form-control  inp  ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} />
                                                    {
                                                        errors.confirmPassword && touched.confirmPassword ?
                                                            <p className={styles.errorMessage}>{errors.confirmPassword}</p> : null
                                                    }
                                                </div>
                                            </div>
                                            <button className='btn btn-danger px-4 w-100' type='submit'>Set Password</button>
                                        </Form>
                                    )}
                                </Formik> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage