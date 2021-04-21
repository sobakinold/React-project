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
        {/* Оболочка "BrowserRouter" позволяет работать "Route" для переключений между компонентами */}
        <Header />
        <Aside />
        {/* "Header" и "Aside" постоянная структура HTML в которой "ротируются" другие компоненты */}
        <Route path='/Dialogs' component={Dialods} />
        <Route path='/Profile' component={Profile} />
        {/* <Dialods /> */}
        {/* <Profile /> */}
      </BrowserRouter>
    </div >

  );
}

export default App;
