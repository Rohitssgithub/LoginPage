import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    // const webcamRef = useRef(null);
    // const [isCameraOn, setIsCameraOn] = useState(false);

    // // Function to start the camera
    // const startCamera = () => {
    //     if (navigator.mediaDevices) {
    //         navigator.mediaDevices
    //             .getUserMedia({ video: true })
    //             .then((stream) => {
    //                 if (webcamRef.current) {
    //                     webcamRef.current.srcObject = stream;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error('Error accessing the camera:', error);
    //             });
    //     }
    //     setIsCameraOn(true);
    // };

    // // Function to stop the camera
    // const stopCamera = () => {
    //     const tracks = webcamRef.current?.video.srcObject.getTracks();
    //     if (tracks) {
    //         tracks.forEach((track) => {
    //             track.stop();
    //         });
    //     }
    //     setIsCameraOn(false);
    // };

    // useEffect(() => {
    //     // Check if the camera is already on before starting it
    //     if (!isCameraOn) {
    //         startCamera();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []); // Empty dependency array ensures this effect runs only once on initial load

    return (
        <>
        </>
        //     <div>
        //         <h2>Camera Component</h2>
        //         {isCameraOn ? (
        //             <button onClick={stopCamera}>Stop Camera</button>
        //         ) : (
        //             <button onClick={startCamera}>Start Camera</button>
        //         )}
        //         <Webcam
        //             audio={false}
        //             ref={webcamRef}
        //             screenshotFormat="image/jpeg"
        //         />
        //     </div>
    );
};

export default CameraComponent;
