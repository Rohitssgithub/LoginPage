import React, { useState, useEffect } from 'react'
import styles from './LoginPage.module.scss'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../Redux/Slice/LoginSlice';
import { useDispatch } from 'react-redux';
const LoginForm = () => {

    let navigate = useNavigate()

    let dispatch = useDispatch()
    let [pass, setPass] = useState(false)

    const signupSchema = Yup.object().shape({
        username: Yup.string().required("This field is required"),
        password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required"),
        confirmPassword: Yup.string().required("This field is required").oneOf([Yup.ref("password"), null], "Password must match"),
    })
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '', confirmPassword: '' }}
                validationSchema={signupSchema}
                onSubmit={async (values, { resetForm }) => {
                    console.log('values', values)
                    console.log('values', values);
                    await dispatch(userLogin(values));
                    const isLoginSuccessful = true; // Replace with actual logic
                    if (isLoginSuccessful) {
                        // Redirect to the '/home' page
                        navigate('/home');
                    }
                    navigate('/home')
                }}
            >
                {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                    <Form Form onSubmit={handleSubmit}>
                        <h4>Login Here</h4>

                        <div className={styles.inputGroup}>

                            <label >username</label>
                            <input type='text' value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} placeholder='username'
                                id="floatingInput" className={`form-control  inp  ${errors.username && touched.username && 'is-invalid'}`} />
                            {
                                errors.username && touched.username ?
                                    <p className={styles.errorMessage}>{errors.username}</p> : null
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
                        <div className={styles.needDiv}>
                            <Link to='/register'>
                                <span>New User ?</span>
                            </Link>
                            <Link to='/forget-password'>
                                <span>Forget Password</span>
                            </Link>
                        </div>
                        <button className='btn btn-danger px-4 w-100' type='submit'>Login</button>
                    </Form>
                )}
            </Formik>


        </>
    )
}

export default LoginForm