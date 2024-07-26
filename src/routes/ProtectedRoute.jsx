// import Cookies from 'js-cookie'
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  //   const accessToken = Cookies.get('accessToken')
  const accessToken = 'accessToken';
  return accessToken ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;
