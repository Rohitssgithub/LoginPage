import React from 'react';
import './App.css'
import LoginPage from './Component/Login/CommonLoginUI';
import CaptchaGenerator from './Component/Captcha/Captcha';
import { BrowserRouter, Route, Router, Navigate } from 'react-router-dom';
import ForwardRef from './Component/ForwardRef';
import { RouterProvider } from 'react-router-dom'
import { router } from './Constant/routing';
import LoginLayout from './Component/Login/LoginLayout';
import MainLayout from './Page/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import PublicRoute from './auth/PublicRoute';
import PrivateRoute from './auth/PrivateRoute';
import { MAIN_PATH as PATH } from './Constant/Constant';

const App = () => {
  const roleWiseRouting = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute component={LoginLayout} />,
      children: [
        ...Object.values(PATH.publicRoutes)
          .map(child => ({
            path: child.path,
            element: child.element
          })),
        {
          path: "/login",
          element: <Navigate to={PATH.publicRoutes.LOGIN.path} />
        },
      ]
    },
    {
      path: "/",
      element: <PrivateRoute component={MainLayout} />,
      children: [
        ...Object.values(PATH.privateRoutes)
          .map(parent => ({
            path: parent.path,
            element: parent.element,
          })),
        {
          path: "/home",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
        {
          path: "*",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />
    },
  ])
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
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={roleWiseRouting} />
      {/* <div className='main'>
           <div className='cla'>
                      
           </div>
      </div> */}

    </>
  )
}

export default App