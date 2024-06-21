import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <>
    <App/>
  </>
=======
  <Provider store={store}>
    <App/>
  </Provider>

>>>>>>> 9882744d7cc5c303031eb755ecd42282411dcf33
);

reportWebVitals();
