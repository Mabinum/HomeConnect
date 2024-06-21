import React, { useState } from 'react';
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

function FoodSidebar() {
  const [show, setShow] = useState(true);

  return (
    <>
      <SidebarContainer show={show}>
          <p>Sidebar</p>
          <p>맛집</p>
          <p>운동</p>
      </SidebarContainer>
      
    </>
  )
}

export default FoodSidebar;