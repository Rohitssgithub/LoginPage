import React from 'react';
import './App.css'
import LoginPage from './Component/Login/LoginPage';
import CaptchaGenerator from './Component/Captcha/Captcha';

import { BrowserRouter, Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path='/' element={<Home />} />
        </Router>
      </BrowserRouter> */}
      {/* <CaptchaGenerator/> */}
      <LoginPage></LoginPage>
      {/* <div className='main'>
           <div className='cla'>
                      
           </div>
      </div> */}

    </>
  )
}

export default App