import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FeeInputForm from './FeeInputForm';
import FeeChart from './FeeChart';

function Menu1() {

  return (
    <>
      <Provider store={store}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <h1>관리비</h1>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <FeeChart />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Menu1;