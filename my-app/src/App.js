import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Dialods from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Aside />
        {/* <Route path='/Music' component={Music} />
        <Route path='/News' component={News} />
        <Route path='/Settings' component={Settings} /> */}
        <Route path='/Dialogs' component={Dialods} />
        <Route path='/Profile' component={Profile} />
        {/* <Dialods /> */}
        {/* <Profile /> */}
      </BrowserRouter>
    </div >

  );
}

export default App;
