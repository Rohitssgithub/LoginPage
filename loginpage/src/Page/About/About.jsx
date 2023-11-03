// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import LoadingBar from 'react-top-loading-bar';

// const About = () => {
//   const [progress, setProgress] = useState(0);

//   let [data, setData] = useState([])

//   // const getData = async () => {
//   //   let d = await axios.get('https://dummyjson.com/users')
//   //   console.log('d', d)
//   //   setData(d)
//   // }

//   const simulateAPICall = () => {
//     setProgress(10);
//     setTimeout(() => {
//       setProgress(100);
//     }, 3000);
//   };

//   // useEffect(async () => {
//   //   setProgress(10);
//   //   await getData()
//   //   setProgress(100);
//   // }, [])

//   return (
//     <div>
//       <LoadingBar
//         color="#f11946"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       <button onClick={simulateAPICall}>Start API Call</button>
//     </div>
//   );
// };

// export default About;

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Movie from './MovieData/MovieData'

// import { BsFillArrowUpCircleFill } from "react-icons/bs";

// const About = () => {
//   let [data, setData] = useState([])
//   let [page, setPage] = useState(1)
//   const [visible, setVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);


//   const fetchApiData = async (page) => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
//       setData(res.data.results)
//       setIsLoading(false)
//     }
//     catch (err) {
//       console.log(err)
//     }

//   }


//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//       document.documentElement.scrollHeight
//     ) {
//       if (!isLoading) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }
//     toggleVisible();
//   };

//   console.log('page', page)


//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 250) {
//       setVisible(true);
//     } else if (scrolled <= 250) {
//       setVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   });

//   useEffect(() => {
//     fetchApiData(page)
//   }, [page]);
//   console.log('data', data)


//   const gotoTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>

//       <div className='row'>

//         {isLoading && <p>Loading....</p>}
//         {
//           data.map((ele) => {
//             return (
//               // <p>{ele.original_title}</p>
//               <div className='col-lg-3 col-md-6 sdkmk' key={ele.id}>
//                 <Movie movie={ele}></Movie>
//               </div>
//             )
//           })
//         }
//       </div>
//       {visible && (
//         <BsFillArrowUpCircleFill className='scroll-top-icon' onClick={gotoTop} />
//       )}
//     </>
//   )
// }

// export default About


import React, { useEffect, useState } from 'react';
import Movie from './MovieData/MovieData';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import axios from 'axios';
import "./About.css"

const About = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = async (page) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`);
      setIsLoading(false);
      return res.data.results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
    ) {
      if (!isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    toggleVisible();
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const loadMoreData = async () => {
    const newData = await fetchApiData(page);
    setData((prevData) => [...prevData, ...newData]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    loadMoreData();
  }, [page]);

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  console.log('visible', visible)
  return (
    <>
      <div className='row'>
        {isLoading && <p>Loading....</p>}
        {data.map((ele) => (
          <div className='col-lg-3 col-md-6 sdkmk' key={ele.id}>
            <Movie movie={ele}></Movie>
          </div>
        ))}
      </div>
      {visible && (
        <button className='scroll_top_icon btn btn-danger' onClick={gotoTop}>click</button>
      )}
    </>
  );
};

export default About;
