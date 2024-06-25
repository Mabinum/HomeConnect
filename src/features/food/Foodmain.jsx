import React, { useState } from 'react';
import Styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Food } from '../board/boardSlice';
import { Modal, Button } from 'react-bootstrap';

const FoodForm = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const FoodHeader = Styled.input`
  width: 80%;
  max-width: 465px;
  height: 50px;
  margin: 0 auto 10px; /* 수정 */
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const FoodBoard = Styled.textarea`
  width: 80%;
  max-width: 465px;
  height: 300px;
  margin: 0 auto 10px; /* 수정 */
  overflow: auto;
  vertical-align: top;
  resize: none;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

const FoodButton = Styled(Button)`
  width: 100px;
  height: 35px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0 5px; /* 추가 */

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const ListButton = Styled(Button)`
  width: 100px;
  height: 35px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0 5px; /* 추가 */

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px; /* 추가 */
`;


function Foodmain() {
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
    navigate('/menu4/foodlist');
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
      Food({
        id: Date.now(),
        title,
        content,
        date: getCurrentDate(),
      })
    );

    setTitle('');
    setContent('');
    setShowModal(false);
    navigate('/menu4/foodlist');
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
}

export default Foodmain;

