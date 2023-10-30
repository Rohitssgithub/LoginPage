import React, { useRef, useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styles from '..//LoginPage.module.scss'
import { Link, useNavigate } from 'react-router-dom';

const OtpReciver = () => {
    let navigate = useNavigate()
    const inputRefs = Array(6).fill(null).map(() => useRef(null));

    const signupSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid email').required("This field is required"),

    })
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
        if (enteredOtp.length === 6) {
            console.log('Entered OTP:', enteredOtp);
            // setOtp(enteredOtp);
            navigate('/new-password-generate')
        }
        else {
            alert('Please Enter OTP')

        }
    };

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
            <Formik
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
                                Didn't receive code? <Link to='/forget-password'>Request again</Link>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default OtpReciver