import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Оболочка "BrowserRouter" позволяет работать "Route" для переключений между компонентами */}
        <Header />
        <Aside />
        {/* "Header" и "Aside" постоянная структура HTML в которой "ротируются" другие компоненты */}
        <Route path='/Dialogs' component={Dialogs} />
        <Route path='/Profile' component={Profile} />
      </BrowserRouter>
    </div >

  );
}

export default App;
