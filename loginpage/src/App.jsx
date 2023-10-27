import React from 'react';
import './App.css'
import LoginPage from './Component/Login/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter, Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path='/' element={<Home />} />
        </Router>
      </BrowserRouter> */}
      <GoogleOAuthProvider clientId="654413472912-cr9p77rsu658m5fpiqcaabuk4squs5bc.apps.googleusercontent.com">
        <LoginPage></LoginPage>
      </GoogleOAuthProvider>
      {/* <div className='main'>
           <div className='cla'>
                      
           </div>
      </div> */}

    </>
  )
}

export default App