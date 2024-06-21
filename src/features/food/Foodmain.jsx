import React,{ useState } from "react";
import Styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const FoodHeader = Styled.input`
  width: 465px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const FoodBoard = Styled.textarea`
  width: 450px;
  height: 450px;
  overflow: hidden;
  vertical-align: top; 
  resize: none; /* 사용자가 텍스트 영역 크기를 조정하지 못하도록 설정 */
  border: 1px solid #ccc; /* 테두리 스타일 설정 */
  padding: 10px; /* 내부 여백 설정 */
  font-size: 16px; /* 폰트 크기 설정 */
`;

const FoodButton = Styled.button`
  width: 80px;
  height: 35px;
  margin-top: 6px;
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

  return (
    <>
    <form>
    <FoodHeader
      type="text"
      placeholder="제목"
      value={inputValue}
      onChange={handleChange}
    />

    <FoodBoard 
      placeholder="내용을 입력하세요."
      onClick={() => navigate('/foodsidebar/foodmain')}
    />
   
    </form>

    <FoodButton>버튼</FoodButton>
    <Outlet />
    </>
  );
};

export default Foodmain;