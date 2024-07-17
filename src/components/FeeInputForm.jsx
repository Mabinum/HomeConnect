import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectmyInfo } from '../features/main/mainSlice';
import axios from 'axios';
import { setFees } from '../features/fee/feeSlice';
import { addressKey } from '..';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const FeeInputFormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SubmitButton2 = styled.button`
  padding: 12px 30px;
  border: none;
  background-color: #4240a7dc;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #4240a7;
  }
`;

function FeeInputForm() {
  const [id, setId] = useState('');;
  const [months, setMonths] = useState(
    Array.from({ length: 12 }, () => ({
      water: '0',
      electric: '0',
      maintenance: '0'
    }))
  );
  // const [month1, setMonth1] = useState('');
  // const [month2, setMonth2] = useState('');
  // const [month3, setMonth3] = useState('');
  // const [month4, setMonth4] = useState('');
  // const [month5, setMonth5] = useState('');
  // const [month6, setMonth6] = useState('');
  // const [month7, setMonth7] = useState('');
  // const [month8, setMonth8] = useState('');
  // const [month9, setMonth9] = useState('');
  // const [month10, setMonth10] = useState('');
  // const [month11, setMonth11] = useState('');
  // const [month12, setMonth12] = useState('');
  // const [electric1, setElectric1] = useState('');
  // const [electric2, setElectric2] = useState('');
  // const [electric3, setElectric3] = useState('');
  // const [electric4, setElectric4] = useState('');
  // const [electric5, setElectric5] = useState('');
  // const [electric6, setElectric6] = useState('');
  // const [electric7, setElectric7] = useState('');
  // const [electric8, setElectric8] = useState('');
  // const [electric9, setElectric9] = useState('');
  // const [electric10, setElectric10] = useState('');
  // const [electric11, setElectric11] = useState('');
  // const [electric12, setElectric12] = useState('');
  // const [maintenance1, setMaintenance1] = useState('');
  // const [maintenance2, setMaintenance2] = useState('');
  // const [maintenance3, setMaintenance3] = useState('');
  // const [maintenance4, setMaintenance4] = useState('');
  // const [maintenance5, setMaintenance5] = useState('');
  // const [maintenance6, setMaintenance6] = useState('');
  // const [maintenance7, setMaintenance7] = useState('');
  // const [maintenance8, setMaintenance8] = useState('');
  // const [maintenance9, setMaintenance9] = useState('');
  // const [maintenance10, setMaintenance10] = useState('');
  // const [maintenance11, setMaintenance11] = useState('');
  // const [maintenance12, setMaintenance12] = useState('');
  // const [water1, setWater1] = useState('');
  // const [water2, setWater2] = useState('');
  // const [water3, setWater3] = useState('');
  // const [water4, setWater4] = useState('');
  // const [water5, setWater5] = useState('');
  // const [water6, setWater6] = useState('');
  // const [water7, setWater7] = useState('');
  // const [water8, setWater8] = useState('');
  // const [water9, setWater9] = useState('');
  // const [water10, setWater10] = useState('');
  // const [water11, setWater11] = useState('');
  // const [water12, setWater12] = useState('');
  const userInfo = useSelector(selectmyInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const monthRef = useRef(null);
  const waterRef = useRef(null);
  const electricRef = useRef(null);
  const maintenanceRef = useRef(null);

  const handleInputChange = (e, monthIndex, type) => {
    const newMonths = [...months];
    newMonths[monthIndex][type] = e.target.value;
    setMonths(newMonths);
  };

  // useEffect(() => {
  //   const fetchFeeInfo = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/fee/list`, {
  //         headers: {
  //           Authorization: localStorage.getItem('token')
  //         },
  //         params: {
  //           'userId': userInfo.userId
  //         }
  //       });
  //       if (response.status === 200) {
  //         const sortedFees = response.data.sort((a, b) => a.month - b.month);
  //         dispatch(setFees(sortedFees));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching fee data:", error);
  //     }
  //   }
  //   if (userInfo && userInfo.userId) {
  //     fetchFeeInfo();
  //   }
  // }, [userInfo, dispatch]);

  const handleFeeSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }
      // 유효성 검사
      // const testResponse = await axios.get(`http://localhost:8080/fee/read`,
      //   {
      //     "userId": id,
      //     "month": month,
      //     "water": water,
      //     "electric": electric,
      //     "maintenance": maintenance
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   },
      // );
      // if (testResponse.status === 404) {
      // } else {
      //   return alert('존재하지 않는 아이디이거나, 입력된 월 입니다.');
      // };

      const response = await axios.post(`http://localhost:8080/fee/register`, 
      {
        "userId": id,
        "month": month1,
        "water": water1,
        "electric": electric1,
        "maintenance": maintenance1
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
    );

      if (response.status === 201) {
        alert("성공");
      } else {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      if (error.response && error.response.status === 401) {
        alert('존재하지 않는 아이디이거나, 입력된 월 입니다.');
      }
    }
  };

  return (
    <>
      <FormHeader>Monthly Fee Input</FormHeader>
      <FeeInputFormWrapper>
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
        {months.map((month, index) => (
          <InputGroup key={index}>
            <Label>
              Month {index + 1}
              <InputField
                type="number"
                name={`month${index}`}
                value={index + 1}
                readOnly
                required
              />
            </Label>
            <Label>
              Water
              <InputField
                type="number"
                name={`water${index}`}
                value={month.water}
                onChange={(e) => handleInputChange(e, index, 'water')}
                required
              />
            </Label>
            <Label>
              Electric
              <InputField
                type="number"
                name={`electric${index}`}
                value={month.electric}
                onChange={(e) => handleInputChange(e, index, 'electric')}
                required
              />
            </Label>
            <Label>
              Maintenance
              <InputField
                type="number"
                name={`maintenance${index}`}
                value={month.maintenance}
                onChange={(e) => handleInputChange(e, index, 'maintenance')}
                required
              />
            </Label>
          </InputGroup>
        ))}
        <ButtonContainer>
          <SubmitButton type="button" onClick={handleFeeSubmit}>
            Submit
          </SubmitButton>
          <SubmitButton2 type="button" onClick={() => navigate('/feeread')}>
            Edit
          </SubmitButton2>
        </ButtonContainer>
      </FeeInputFormWrapper>
    </>
  );
}

export default FeeInputForm;