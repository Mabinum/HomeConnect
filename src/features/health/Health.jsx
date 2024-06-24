import { useState } from "react";
import { Button, FloatingLabel, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { HealthContent } from "../board/boardSlice";

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

const FoodButton = Styled(Button)`
  width: 100px; /* 버튼 너비 조정 */
  height: 35px; /* 버튼 높이 조정 */
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const ListButton = Styled(Button)`
  width: 100px; /* 버튼 너비 조정 */
  height: 35px; /* 버튼 높이 조정 */
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;


function Health() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'content') {
      setContent(value);
    }
  };

  const handleToList = () => {
    navigate('/healthlist');
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    setShowModal(true); // Modal 열기
  };

  const handleConfirmSubmit = () => {
    dispatch(
      HealthContent({
        id: Date.now(),
        title,
        content,
        date: getCurrentDate(),
      })
    );

    setTitle('');
    setContent('');
    setShowModal(false);
    navigate('/healthlist');
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
  };

  return (
    <>
      <FoodForm onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <FoodButton type="submit">등록</FoodButton>
          <ListButton onClick={handleToList}>목록으로</ListButton>
        </ButtonContainer>
        <Outlet />
      </FoodForm>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>등록 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>등록하시겠습니까?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmSubmit}>
            확인
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Health;