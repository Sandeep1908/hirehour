import React from 'react';
import Header from './components/Header';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home/>
    </>
  );
};

export default App;
