import React from 'react'
import { useLocation,Navigate } from 'react-router-dom';
// import { getToken } from '../Utility/Helper';

const AuthRoute = ({ children }: { children: JSX.Element }) => {
        // const isAuthenticated = getToken() !== null ? true : false; // get Token or flag from Localstorage for dynamic
        const location = useLocation();
        // const array: any = [];
      
        // const token = localStorage.getItem("accessToken");
        // let decode: any;
        // let newArray: any;
        // let newPath: any;
      
        // if (!isAuthenticated) {
        //   return <Navigate to="/sign-in" state={{ from: location }} />;
        // }
      
  return children;

}

export default AuthRoute;