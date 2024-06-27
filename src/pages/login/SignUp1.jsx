import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getBirthdateAndSex } from "../../features/main/mainSlice";

const SelectSex = styled(Form.Select)`
  width: 250px;
`;

function SignUp1() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [value, setValue] = useState(``);
  const handleYearChange = (e) => {
    setValue(e.target.value);
  }
  const [value2, setValue2] = useState(``);
  const handleMonthChange = (e) => {
    setValue2(e.target.value);
  }
  const [value3, setValue3] = useState(``);
  const handleDayChange = (e) => {
    setValue3(e.target.value);
  }

  const [value4, setValue4] = useState(``);
  const handleSexSelect = (e) => {
    setValue4(e.target.value)
  };

  const overInfo = () => {
    navigate('/login/signup2');
    dispatch(getBirthdateAndSex({birthdate : `${value}-${value2}-${value3}`, sex : `${value4}`}))
  }

  return (
    <>
      <h1>기본 정보</h1>
      <div>
        <label htmlFor="firstName">연 :</label>
        <Form.Control type="text" placeholder="연" value={value} onChange={handleYearChange}/>
      </div>
      <div>
        <label htmlFor="lastName">월 :</label>
        <Form.Control type="text" placeholder="월" value={value2} onChange={handleMonthChange}/>
      </div>
      <div>
        <label htmlFor="lastName">일 :</label>
        <Form.Control type="text" placeholder="일" value={value3} onChange={handleDayChange}/>
      </div>
      <div>
        <label htmlFor="lastName"> 성별 :</label>
        <SelectSex placeholder="성별" value={value4} onChange={handleSexSelect}> 
          <option>성별</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
          <option value="공개안함">공개안함</option>
        </SelectSex>
      </div>
      <Button type="button" onClick={overInfo}>다음</Button>
    </>
  );
};

export default SignUp1;