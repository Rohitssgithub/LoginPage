import React, { useRef, useState, useEffect } from 'react';
import styles from './LoginPage.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/Slice/LoginSlice';
import image from '../../../src/assets/loginImage.png'
import sideImage from '../../../src/assets/sideImage.jpg'
import LoginLayout from './LoginForm';

const CommonLoginUI = () => {

    let dispatch = useDispatch()

    let { loginUser } = useSelector((state) => state.login);


    console.log('loginUser', loginUser)
    const inputRefs = Array(6).fill(null).map(() => useRef(null));
    const text = "Welcome Login Here";
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    let [pass, setPass] = useState(false)


    const signupSchema = Yup.object().shape({
        username: Yup.string().required("This field is required"),
        // email: Yup.string().email('Enter valid email').required("This field is required"),
        password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required")
        // .matches(
        //     "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // )
        ,
        confirmPassword: Yup.string().required("This field is required").oneOf([Yup.ref("password"), null], "Password must match"),
        // captcha: Yup.string().required("Captcha is Required")
    })

   




    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (charIndex < text.length) {
    //             setDisplayText(displayText + text.charAt(charIndex));
    //             setCharIndex(charIndex + 1);
    //         } else {
    //             setDisplayText('');
    //             setCharIndex(0);
    //         }
    //     }, 150);


    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [charIndex, text, displayText]);



    // const [captchaText, setCaptchaText] = useState(generateCaptchaText());

    // function generateCaptchaText() {
    //     const numbers = '0123456789';
    //     const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    //     let captcha = '';
    //     captcha += getRandomCharacter(numbers, 2);
    //     captcha += getRandomCharacter(uppercaseLetters, 2);
    //     captcha += getRandomCharacter(lowercaseLetters, 2);
    //     captcha = shuffleString(captcha);
    //     return captcha;
    // }

    // function getRandomCharacter(source, count) {
    //     let result = '';
    //     for (let i = 0; i < count; i++) {
    //         const randomIndex = Math.floor(Math.random() * source.length);
    //         result += source[randomIndex];
    //     }
    //     return result;
    // }

    // function shuffleString(string) {
    //     console.log('string', string)
    //     const array = string.split('');
    //     console.log('array', array)
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array.join('');
    // }

    // const refreshCaptcha = () => {
    //     setCaptchaText(generateCaptchaText());
    // };

    return (
        <>
            <div className={styles.login}>
                <img src={image} alt="login_image" />
            </div>
           
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
                                </Formik>  */}

            {/* <Formik
                                    initialValues={{ captcha: '' }}
                                    validationSchema={signupSchema}
                                    onSubmit={values => {
                                        console.log('values', values)
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                                        <Form Form onSubmit={handleSubmit}>
                                            <div className={styles.emailSenderDiv}>
                                                <div className={styles.inputGroup}>
                                                    <div className="captcha-image">{captchaText}</div>
                                                    <input type='text' value={values.captcha} name="captcha" onChange={handleChange} onBlur={handleBlur} placeholder='Captcha'
                                                        id="floatingInput" className={`form-control  inp  ${errors.captcha && touched.captcha && 'is-invalid'}`} />
                                                    {
                                                        errors.captcha && touched.captcha ?
                                                            <p className={styles.errorMessage}>{errors.captcha}</p> : null
                                                    }
                                                </div>
                                            </div>
                                            <button className='btn btn-danger'>Submit</button>
                                        </Form>
                                    )}
                                </Formik>  */}
            {/* </div>

                        </div>
                    </div> */}
            {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default CommonLoginUI