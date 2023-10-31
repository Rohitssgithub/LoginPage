import React from 'react'
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils';

const PublicRoute = ({component: Component}) => {
    console.log(getToken())
  return (
    !getToken() ? <Component/> : <Navigate to="/home"/>
  )
}

export default PublicRoute