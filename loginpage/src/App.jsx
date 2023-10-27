import React from 'react';
import './App.css'
import LoginPage from './Component/Login/LoginPage';

import { BrowserRouter, Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path='/' element={<Home />} />
        </Router>
      </BrowserRouter> */}
      <LoginPage></LoginPage>
      {/* <div className='main'>
           <div className='cla'>
                      
           </div>
      </div> */}

    </>
  )
}

export default App