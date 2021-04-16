import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Profile />
    </div >
  );
}

export default App;
