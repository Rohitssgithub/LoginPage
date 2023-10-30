import React from 'react';
import './App.css'
import LoginPage from './Component/Login/CommonLoginUI';
import CaptchaGenerator from './Component/Captcha/Captcha';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ForwardRef from './Component/ForwardRef';
import { RouterProvider } from 'react-router-dom'
import { router } from './Constant/routing';
const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path='/' element={<Home />} />
        </Router>
      </BrowserRouter> */}
      {/* <CaptchaGenerator/> */}
      {/* <ForwardRef/> */}
      {/* <LoginPage></LoginPage> */}
      <RouterProvider router={router} />
      {/* <div className='main'>
           <div className='cla'>
                      
           </div>
      </div> */}

    </>
  )
}

export default App