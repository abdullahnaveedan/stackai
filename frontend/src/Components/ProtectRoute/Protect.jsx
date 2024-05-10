import React from 'react'
import { Navigate } from 'react-router-dom';

function Protect({children}) {
    const token = localStorage.getItem("token")
    if (localStorage.getItem("token")) {
        return children;
      } else {
        return <Navigate to="/" />;
      }  
}

export default Protect