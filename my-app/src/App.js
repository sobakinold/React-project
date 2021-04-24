import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

// let postData = [
//   { id: 1, message: "Привет, как дела?" },
//   { id: 2, message: "Все нормально! Как сам?" }
// ]

// let dialogData = [
//   { id: 1, message: "Привет! Как дела?" },
//   { id: 2, message: "Зашибись! Сам как?" },
//   { id: 3, message: "Нормально" }
// ]

// let dialogData = [
//   { id: 1, message: "Привет! Как дела?" },
//   { id: 2, message: "Зашибись! Сам как?" },
//   { id: 3, message: "Нормально" }
// ]

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Оболочка "BrowserRouter" позволяет работать "Route" для переключений между компонентами */}
        <Header />
        <Aside />
        {/* "Header" и "Aside" постоянная структура HTML в которой "ротируются" другие компоненты */}
        <div className='Content'>
          {/* <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Profile' component={Profile} /> */}

          <Route path='/Dialogs' render={() => <Dialogs dialogData={props.dialogData} />} />
          <Route path='/Profile' render={() => <Profile postData={props.postData} />} />
        </div>
      </BrowserRouter>
    </div >

  );
}

export default App;
