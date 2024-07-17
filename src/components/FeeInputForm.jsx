import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setFees } from '../features/fee/feeSlice';
import { selectmyInfo } from '../features/main/mainSlice';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const FeeInputFormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 606px;
  margin: 0 auto;
  padding: 20px;
  padding-right: 10px;
  /* border: solid 1px black; */
  /* border-radius: 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const Header = styled.h1`
  text-align: center;
  padding: 12px;
  font-size: 2em;
  color: #333;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: end;
  height: 2rem;
  width: 716px;
  margin: 0 auto;
`;

const InputRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 10rem;
`;

const SubmitButton = styled.button`
  padding: 16px 30px;
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
  padding: 16px 36px;
  border: none;
  background-color: #4240a7dc;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 3rem;

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

  const handleCheckIdExists = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }
      const response = await axios.get(`http://localhost:8080/fee/check/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          'userId': id
        }
      });
      console.log(response);
      return response.data.exists; 
    } catch (error) {
      console.error("Error checking ID existence:", error);
      return false;
    }
  };
  
  const handleFeeSubmit = async () => {
    // db에 userid가 존재하는지 확인
    const idExists = await handleCheckIdExists();
    if (idExists) {
      alert("이미 등록된 ID입니다.");
      return;
    }

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
        alert("관리비 정보가 등록되었습니다.");
      } else {
        throw new Error("관리비 정보 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      if (error.response && error.response.status === 401) {
        alert('인증 오류');
      }
    }
  };

  return (
    <>
        <Header>관리비 입력</Header>
        <HeaderDiv>
          <p style={{ fontSize: '1.7rem', }}>ID</p>
          <Label>
            <InputField
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{marginLeft:'5px'}}
              required
            />
          </Label>
        </HeaderDiv>
      <FeeInputFormWrapper>
        {Array.from({ length: 12 }).map((_, index) => (
          <InputRow key={index}>
            <Label style={{ width: '2rem' }}>{index + 1}월</Label>
            <Label>수도세</Label>
            <InputField
              type="number"
              name={`water${index + 1}`}
              value={months[index].water}
              onChange={(e) => handleInputChange(e, index, 'water')}
              required
            />
            <Label style={{marginLeft:'6px'}}>전기세</Label>
            <InputField
              type="number"
              name={`electric${index + 1}`}
              value={months[index].electric}
              onChange={(e) => handleInputChange(e, index, 'electric')}
              required
            />
            <Label style={{marginLeft:'6px'}}>관리비</Label>
            <InputField
              type="number"
              name={`maintenance${index + 1}`}
              value={months[index].maintenance}
              onChange={(e) => handleInputChange(e, index, 'maintenance')}
              required
            />
          </InputRow>
        ))}
      </FeeInputFormWrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton type="button" onClick={handleFeeSubmit}>Submit</SubmitButton>
        <SubmitButton2 type="button" onClick={() => navigate('/feeread')}>Edit</SubmitButton2>
      </div>
    </>
  );
}

export default FeeInputForm;
