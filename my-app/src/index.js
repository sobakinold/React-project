import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: "Привет, как дела?" },
  { id: 2, message: "Зашибись! Сам как?" }
]

let dialogData = [
  { id: 1, message: "Привет! Как дела?" },
  { id: 2, message: "Зашибись! Сам как?" },
  { id: 3, message: "Нормально" }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
