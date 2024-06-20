import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HealthList from './features/HealthList';

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import Sidebar from './features/Sidebar';
import Health from './features/Health';
// import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Health />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
