// import React, { useRef, useState, useEffect } from 'react';
// import styles from '..//LoginPage.module.scss';
// import { Link, useNavigate } from 'react-router-dom';
// import { verifyLoginOtp } from '../../../Redux/Slice/LoginSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const OtpReceiver = () => {

//     let { loginUser, loading } = useSelector((state) => state.login)
//     console.log('loginUser', loginUser)

//     let dispatch = useDispatch()

//     let [otp, setOtp] = useState(0)
//     let [error, setError] = useState(false)
//     let navigate = useNavigate();
//     const inputRefs = Array(6).fill(null).map(() => useRef(null));

//     const handleInputChange = (e, index) => {
//         const value = e.target.value;

//         if (value) {
//             if (value.length > 1) {
//                 e.target.value = value.charAt(0);
//             }
//             if (index < inputRefs.length - 1) {
//                 inputRefs[index + 1].current.focus();
//             }
//         }
//         else {
//             if (index > 0) {
//                 inputRefs[index - 1].current.focus();
//             }
//         }

//     };

//     const handleVerify = () => {
//         const enteredOtp = inputRefs.map((ref) => ref.current.value).join('');
//         if (enteredOtp.length === 6) {
//             console.log('Entered OTP:', enteredOtp);
//             setOtp(enteredOtp)
//             setError(false)
//             dispatch(verifyLoginOtp(otp))
//             navigate('/home');
//         } else {
//             setError(true)

//         }
//     };

//     const handlePaste = (e, index) => {
//         const pastedText = e.clipboardData.getData('text');
//         const characters = pastedText.split('');
//         characters.forEach((char, i) => {
//             if (i + index < inputRefs.length) {
//                 inputRefs[i + index].current.value = char;
//             }
//         });
//     };

//     useEffect(() => {
//         setOtp(loginUser.otp)
//     }, [loginUser])

//     console.log('otp', otp)

//     return (
//         <>
//             <div className={styles.otpReceiver}>
//                 <h4>Verify</h4>
//                 <p>Your code was sent to you via email</p>

//                 <div className={styles.otp_field}>
//                     {inputRefs.map((inputRef, index) => (
//                         <input
//                             key={index}
//                             type="number"
//                             maxLength="1"
//                             ref={inputRef}
//                             onChange={(e) => handleInputChange(e, index)}
//                             onPaste={(e) => handlePaste(e, index)}
//                         />
//                     ))}
//                 </div>
//                 {error && <p className={styles.error}>Please enter a valid 6-digit OTP</p>}
//                 <button className="btn btn-danger my-4" onClick={handleVerify}>
//                     Verify
//                 </button>
//                 <p className={styles.resend}>
//                     Didn't receive code? <Link to="/forget-password">Request again</Link>
//                 </p>
//             </div>
//         </>
//     );
// };

// export default OtpReceiver;


import React, { useRef, useState, useEffect } from 'react';
import styles from '..//LoginPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { verifyLoginOtp } from '../../../Redux/Slice/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';

const OtpReceiver = () => {
    let { loginUser } = useSelector((state) => state.login);
    let dispatch = useDispatch();

    const [otp, setOtp] = useState(loginUser?.otp || '');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const inputRefs = Array(6).fill(null).map(() => useRef(null));

    const handleInputChange = (e, index) => {
        const value = e.target.value;

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
            setOtp(enteredOtp);
            setError(false);
            dispatch(verifyLoginOtp(otp));
            navigate('/home');
        } else {
            setError(true);
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

    useEffect(() => {
        setOtp(loginUser.otp)
    }, [loginUser])

    useEffect(() => {
        inputRefs.forEach((ref, index) => {
            ref.current.value = otp?.charAt(index) || '';
        });
    }, [otp]);

    console.log('otp', otp)

    return (
        <>
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
                            onPaste={(e) => handlePaste(e, index)}
                        />
                    ))}
                </div>
                {error && <p className={styles.error}>Please enter a valid 6-digit OTP</p>}
                <button className="btn btn-danger my-4" onClick={handleVerify}>
                    Verify
                </button>
                <p className={styles.resend}>
                    Didn't receive code? <Link to="/forget-password">Request again</Link>
                </p>
            </div>
        </>
    );
};

export default OtpReceiver;


