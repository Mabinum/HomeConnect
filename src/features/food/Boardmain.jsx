import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Food } from '../board/boardSlice';
import { Modal, Button } from 'react-bootstrap';

const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FoodHeader = styled.input`
  width: 1000px;
  height: 50px;
  margin: 0 auto 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const FoodBoard = styled.textarea`
  width: 1000px;
  height: 300px;
  margin: 0 auto 10px;
  overflow: auto;
  padding: 10px;
  font-size: 16px;
`;

const FoodButton = styled(Button)`
  width: 100px; 
  height: 35px; 
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  margin: 30px 5px; 

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

function Boardmain() {
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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    console.log(showModal);
    setShowModal(true); // Modal 열기
  };

  const handleConfirmSubmit = () => {
    dispatch(
      Food({
        id: Date.now(),
        // uuid로 나중에 수정할것 // 데이터 받아와서
        title,
        content,
        date: getCurrentDate(),
      })
    );

    setTitle('');
    setContent('');
    setShowModal(false);
    navigate('/menu4/boardlist');
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <FoodHeader
          type="text"
          name="title"
          placeholder="제목"
          value={title}
          onChange={handleChange}
        />
        <FoodBoard
          name="content"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={handleChange}
          required
        />
        <div>
          <FoodButton type="submit">등록</FoodButton>
          <FoodButton onClick={()=>navigate('/menu4/boardlist')}>목록으로</FoodButton>
        </div>
      </Container>

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

export default Boardmain;

