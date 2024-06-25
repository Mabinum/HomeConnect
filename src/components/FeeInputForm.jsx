import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFee } from '../features/fee/feeSlice';

const FeeInputForm = () => {
  const [month, setMonth] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (month && type && amount) {
      dispatch(setFee({ month: parseInt(month), type, amount: parseFloat(amount) }));
      setMonth('');
      setType('');
      setAmount('');
    } else {
      alert('월, 항목 및 금액을 입력해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>월:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">선택</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{`${i + 1}월`}</option>
          ))}
        </select>
      </div>
      <div>
        <label>항목:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">선택</option>
          <option value="electric">전기세</option>
          <option value="water">수도세</option>
          <option value="maintenance">관리비</option>
        </select>
      </div>
      <div>
        <label>금액:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">추가</button>
    </form>
  );
};

export default FeeInputForm;