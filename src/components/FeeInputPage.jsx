import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FeeInputForm from './FeeInputForm';
import styled from 'styled-components';

const InputDiv = styled.div`
    width: 80%;
    margin: 0px auto;
    height: 47.6rem;
    padding: 2rem;
    min-width: 450px;
`

function FeeInputPage() {
  return (
    <Provider store={store}>
      <InputDiv>
        <FeeInputForm />
      </InputDiv>
    </Provider>
  );
};

export default FeeInputPage;