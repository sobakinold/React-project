import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Aside from './components/Aside';
import Header from './components/Header';

const App = () => {
  return (
    <div className='Wrapper'>
      <div className="App">
        <Header />
        <Aside />
        <Profile />
      </div >
    </div>
  );
}

export default App;