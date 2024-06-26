import React, { useEffect, useState } from 'react';
import axios from 'axios';

function feeAPI() {
  const [token, setToken] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/getToken')
      .then(response => {
        setToken(response.data.token);
      })
      .catch(error => {
        console.error('Error fetching token:', error);
      });
  }, []);

  const onClickPayment = () => {
    if (!token) {
      console.error('Token is not available');
      return;
    }

    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: 1000,
      name: '테스트 결제',
      buyer_name: '홍길동',
      buyer_tel: '010-1234-5678',
      buyer_email: 'example@example.com',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456',
    };

    window.IMP.init('your_iamport_api_key');
    window.IMP.request_pay(data, response => {
      if (response.success) {
        // 결제 성공 시 처리
        console.log(response);
      } else {
        // 결제 실패 시 처리
        console.error(response);
      }
    });
  };

  return (
    <div>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
};

export default feeAPI;