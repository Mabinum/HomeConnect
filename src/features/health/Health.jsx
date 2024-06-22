import { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { HealthContent } from "../board/boardSlice";

const HealthForm = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const HealthHeader = Styled.input`
  width: 80%;
  max-width: 465px; /* 최대 너비 설정 */
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const HealthBoard = Styled.textarea`
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

const HealthButton = Styled.button`
  width: 80px;
  height: 35px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;


function Health() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    const value = e.target.value;
    // 최대 28자까지 입력할 수 있도록 제한
    if (value.length <= 28) {
      setTitle(value);
    }
  };
  
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 form 데이터를 처리하거나 다음 단계로 이동할 수 있습니다.
    navigate('/some-route'); // 예시: 다른 경로로 이동하는 방법
    setTitle('');
    setContent('');

    // dispatch로 title과 content 내용 넘김
    dispatch(HealthContent({
      content,
      title
    }))

    navigate('/healthlist');
  };


  return (
    <HealthForm onSubmit={handleSubmit}>
      <HealthHeader
        type="text"
        placeholder="제목"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <HealthBoard
        type="text"
        placeholder="내용을 입력하세요."
        value={content}
        onChange={handleContentChange}
        required
      />
      <HealthButton type="submit">등록</HealthButton>
    </HealthForm>
  );
};

export default Health;