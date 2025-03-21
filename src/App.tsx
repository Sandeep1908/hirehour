import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderJP from './components/HeaderJP';
import HeaderAdmin from './components/HeaderAdmin';
import HeaderRTR from './components/HeaderRTR';
 

import { ToastContainer } from 'react-toastify';
 
 


const App: React.FC = () => {
  const pathname = useLocation().pathname;
  const route = pathname.includes('/job-poster');
  const adminRoute = pathname.includes('/admin');

  const headerRTR = pathname.includes('/dashboard-rtr');
 
 
 

  return (
    
       
      <div className="w-full  bg-[#F2F2F5]">
        {adminRoute ? (
          <HeaderAdmin />
        ) : headerRTR ? (
          <HeaderRTR />
        ) : route ? (
          <HeaderJP />
        ) : (
          <Header  />
        )}

        <Outlet />
        <ToastContainer/>
      </div>
 
  );
};

export default App;
