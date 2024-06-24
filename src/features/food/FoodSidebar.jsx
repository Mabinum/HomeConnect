import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Styled from 'styled-components';


const SidebarContainer = Styled.div`
  position: fixed;
  left: ${props => (props.show ? '0' : '-250px')};
  height: 100%;
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 5;
`;

const CloseButton = Styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333; /* 아이콘 색상 */
  font-size: 1.5rem;
`;

function FoodSidebar() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <SidebarContainer show={show}>
        <CloseButton onClick={handleClose}>
          <FaTimes /> {/*버튼입니다.*/}
        </CloseButton>
          <p>Sidebar</p><br />
          <p>공지사항</p>
          <p>맛집</p>
          <p>운동</p>
      </SidebarContainer>
    </>
  )
}

export default FoodSidebar;