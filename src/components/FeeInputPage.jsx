import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FeeInputForm from './FeeInputForm';

const FeeInputPage = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <h1>관리비 입력</h1>
        <div style={{ width: '80%', margin: '0 auto' }}>
          <FeeInputForm />
        </div>
      </div>
    </Provider>
  );
};

export default FeeInputPage;