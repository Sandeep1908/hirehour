import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#F2F2F5]'>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
