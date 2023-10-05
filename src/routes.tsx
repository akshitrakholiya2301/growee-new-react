import { RouterProps } from "./interfaces/interface";
import React, { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import GuestRoute from "./common/GuestRoute";
import AuthRoute from "./common/AuthRoute";
import DashBoard from "./pages/Dashboard/DashBoard";
import Navbar from "./components/NavBar/NavBar";

const privateRoutes: RouterProps[] = [
  {
    path: "/dashboard",
    component: <DashBoard />,
    caseSensitive: true,
  },
];
const publicRoutes: RouterProps[] = [
  {
    // key:"main",
    path: "/",
    component: <DashBoard />,
    caseSensitive: true,
  },
];

const AppRouter = (props: any): JSX.Element => {
    // const isAuthenticated = getToken() !== null ? true : false;

    return (
        <div >
        <Router >
        
            <Navbar />
          {/* {isAuthenticated && (
  
          )} */}
  
          {/* {isAuthenticated && (
  
            <Sidebar />
          )} */}
          <div>
            <React.Suspense
              fallback={<div className="lazy-loading">Loading...</div>}
            >
              <Routes>
                {publicRoutes.map((route, i) => (
                  // <GuestRoute key={i} {...route} />
                  <Route
                    key={i}
                    caseSensitive={route.caseSensitive}
                    path={route.path}
                    element={<GuestRoute>{route.component}</GuestRoute>}
                  />
                ))}
  
                {/* {privateRoutes.map((route, i) => (
                  // <GuestRoute key={i} {...route} />
  
                  // route.isShow===true? 
                  <Route
                    key={i}
                    caseSensitive={route.caseSensitive}
                    path={route.path}
                    element={<AuthRoute>{route.component}</AuthRoute>}
                  />
                  // :
                  //  <Route path="*" element={<NotFound />} />
  
  
                ))} */}
             
              
                  {/* <Route path="*" element={<NotFound />} /> */}
  
          
              </Routes>
            </React.Suspense>
          </div>
        </Router>
      </div>
    )}
export default AppRouter;