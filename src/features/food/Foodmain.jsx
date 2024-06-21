import React, { useState } from "react";
import Styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const FoodForm = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const FoodHeader = Styled.input`
  width: 80%;
  max-width: 465px; /* 최대 너비 설정 */
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const FoodBoard = Styled.textarea`
  width: 80%;
  max-width: 465px; /* 최대 너비 설정 */
  height: 300px; /* 높이 수정 */
  margin-bottom: 10px;
  overflow: auto; /* 스크롤바가 필요할 때만 보이도록 설정 */
  vertical-align: top;
  resize: none;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

const FoodButton = Styled.button`
  width: 80px;
  height: 35px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function Foodmain() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    // 최대 28자까지 입력할 수 있도록 제한
    if (value.length <= 28) {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 form 데이터를 처리하거나 다음 단계로 이동할 수 있습니다.
    navigate('/some-route'); // 예시: 다른 경로로 이동하는 방법
  };

  return (
    <FoodForm onSubmit={handleSubmit}>
      <FoodHeader
        type="text"
        placeholder="제목"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <FoodBoard
        placeholder="내용을 입력하세요."
        required
      />
      <FoodButton type="submit">버튼</FoodButton>
      <Outlet />
    </FoodForm>
  );
}

export default Foodmain;