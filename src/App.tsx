import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderJP from './components/HeaderJP';
import HeaderAdmin from './components/HeaderAdmin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const App: React.FC = () => {
  const pathname = useLocation().pathname;
  const route = pathname.includes('/job-poster');
  const adminRoute = pathname.includes('/admin');

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>

    <div className="w-full  bg-[#F2F2F5]">
      {adminRoute ? <HeaderAdmin /> : route ? <HeaderJP /> : <Header />}

      <Outlet />
    </div>
    </QueryClientProvider>

  );
};

export default App;
