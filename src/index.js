import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';


import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
// import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>

);

reportWebVitals();
