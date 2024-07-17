import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setFees } from '../features/fee/feeSlice';
import { selectmyInfo } from '../features/main/mainSlice';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const FeeInputFormWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto;
  padding: 20px;
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: calc(100% - 10px); /* Adjust width */
`;

const SubmitButton = styled.button`
  padding: 10px 24px;
  margin-top: 20px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SubmitButton2 = styled.button`
  padding: 10px 30px;
  margin-top: 20px;
  border: none;
  background-color: #4240a7dc;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4240a7;
  }
`;

function FeeInputForm() {
  const [id, setId] = useState('');
  const [months, setMonths] = useState(
    Array.from({ length: 12 }, () => ({
      water: '0',
      electric: '0',
      maintenance: '0'
    }))
  );
  const userInfo = useSelector(selectmyInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e, monthIndex, type) => {
    const newMonths = [...months];
    newMonths[monthIndex][type] = e.target.value;
    setMonths(newMonths);
  };

  const handleFeeSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const responses = await Promise.all(months.map((month, index) => (
        axios.post(`http://localhost:8080/fee/register`, 
          {
            "userId": id,
            "month": index + 1,
            "water": month.water,
            "electric": month.electric,
            "maintenance": month.maintenance
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
      )));

      const allSuccess = responses.every(response => response.status === 201);

      if (allSuccess) {
        alert("All entries were successfully submitted.");
      } else {
        throw new Error("Failed to submit one or more entries.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      if (error.response && error.response.status === 401) {
        alert('Unauthorized access.');
      }
    }
  };

  return (
    <FeeInputFormWrapper>
        <h2>관리비 입력</h2>
      <Label>
        ID
        <InputField 
          type="text" 
          name="id" 
          value={id} 
          onChange={(e) => setId(e.target.value)}  
          required 
        />
      </Label>
      {Array.from({ length: 12 }).map((_, index) => (
        <InputRow key={index}>
          <Label>{index + 1}월</Label>
          <Label>수도세</Label>
          <InputField 
            type="number" 
            name={`water${index + 1}`} 
            value={months[index].water} 
            onChange={(e) => handleInputChange(e, index, 'water')} 
            required 
          />
          <Label>전기세</Label>
          <InputField 
            type="number" 
            name={`electric${index + 1}`} 
            value={months[index].electric} 
            onChange={(e) => handleInputChange(e, index, 'electric')} 
            required 
          />
          <Label>관리비</Label>
          <InputField 
            type="number" 
            name={`maintenance${index + 1}`} 
            value={months[index].maintenance} 
            onChange={(e) => handleInputChange(e, index, 'maintenance')} 
            required 
          />
        </InputRow>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton type="button" onClick={handleFeeSubmit}>Submit</SubmitButton>
        <SubmitButton2 type="button" onClick={() => navigate('/feeread')}>Edit</SubmitButton2>
      </div>
    </FeeInputFormWrapper>
  );
}

export default FeeInputForm;
