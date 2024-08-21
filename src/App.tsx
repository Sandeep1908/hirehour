import React from 'react';
import Header from './components/Header';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import JobDescription from './pages/JobDescription/JobDescription';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home/>
      <Signin/>
      <Signup/>
      <JobDescription/>
      <Footer/>
    </>
  );
};

export default App;
