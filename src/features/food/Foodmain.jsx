import React, { useState } from "react";
import Styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Food } from "../board/boardSlice";

const FoodForm = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 73vh; // 화면 전체 높이를 차지하도록 설정
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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 현재 날짜를 가져오는 부분
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    // Redux에 액션 디스패치
    dispatch(Food({ 
      id: Date.now(), 
      title, 
      content, 
      date: formattedDate
    }));

    // 폼 초기화
    setTitle("");
    setContent("");

    // 다음 경로로 이동
    navigate('/foodlist');
  };

  return (
    <FoodForm onSubmit={handleSubmit} > 
      <FoodHeader
        type="text"
        name="title"
        placeholder="제목"
        value={title}
        onChange={handleChange}
        required
      />
      <FoodBoard
         name="content"
         placeholder="내용을 입력하세요."
         value={content}
         onChange={handleChange}
         required
      />
      <FoodButton type="submit">버튼</FoodButton>
      <Outlet />
    </FoodForm>
  );
}

export default Foodmain;

// const handleSubmit = (e) => {
//   e.preventDefault();
  
//   const currentDate = new Date().toISOString(); // 현재 날짜를 ISO 형식으로 변환
//   dispatch(Food({
//     id: Date.now(),
//     title,
//     content,
//     date: currentDate
//   }));

//   setInputValue(''); // 입력 필드 초기화
//   navigate('/foodlist');
// };
