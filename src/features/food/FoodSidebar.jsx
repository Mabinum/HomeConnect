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
  color: black; /* 버튼 글자색 */
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;


function FoodSidebar() {
  const [show, setShow] = useState(true);

  const hadleClose = () => setShow(false);
  const hadleOpen = () => setShow(true);

  return (
    <>
      <SidebarContainer show={show}>
        <CloseButton onClick={hadleClose}>
          <FaTimes />
        </CloseButton>
          <p>Sidebar</p>
          <p>맛집</p>
          <p>운동</p>

      </SidebarContainer>
      
    </>
  )
}

export default FoodSidebar;