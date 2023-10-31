import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const About = () => {
  const [progress, setProgress] = useState(0);

  let [data, setData] = useState([])

  // const getData = async () => {
  //   let d = await axios.get('https://dummyjson.com/users')
  //   console.log('d', d)
  //   setData(d)
  // }

  const simulateAPICall = () => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 3000);
  };

  // useEffect(async () => {
  //   setProgress(10);
  //   await getData()
  //   setProgress(100);
  // }, [])

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <button onClick={simulateAPICall}>Start API Call</button>
    </div>
  );
};

export default About;
