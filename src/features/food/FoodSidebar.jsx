import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';


const SidebarContainer = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  width: 150px;
  background-color: #f0f0f0;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  /* z-index: 5; */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333; /* 아이콘 색상 */
  font-size: 1.5rem;

  .header{
    font-size: 1.5rem;
  }
`;

function FoodSidebar() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const navigate = useNavigate();

  return (
    <>
      <SidebarContainer show={show}>
        <CloseButton onClick={handleClose}>
          {/* <FaTimes /> 버튼입니다. */}
        </CloseButton>
        <p className='header'>게시판</p><br />
        <p onClick={() => navigate('noticelist')}>공지사항</p>
        <p onClick={() => navigate('foodlist')}>맛집</p>
        <p onClick={() => navigate('healthlist')}>운동</p>
        <p onClick={() => navigate('')}>모임</p>
      </SidebarContainer>
    </>
  )
}

export default FoodSidebar;