import React, { useState } from 'react';
import Styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

const ButtonStyle = Styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 40px;
  background: blue;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const SidebarContainer = Styled.div`


  position: fixed;
  top: 0;
  left: ${props => (props.show ? '0' : '-250px')};
  height: 100%;
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
`;

const CloseButton = Styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function FoodSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <ButtonStyle onClick={handleShow}>Launch</ButtonStyle>
      
      <SidebarContainer show={show}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <h2>Food Sidebar</h2>
        {/* <Link to = '/foodsidebar/foodmain'> */}
          <p>맛집</p>
        {/* </Link> */}
        <p>운동</p>

        <Outlet />
      </SidebarContainer>
      
    </>
  )
}

export default FoodSidebar;

    {/* <Button variant="primary" onClick={handleShow}>Launch</Button> */}
    {/* <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>맛집</p>
        <p>운동</p>
      </Offcanvas.Body>
    </Offcanvas>  */}

  /* position: fixed;
  top: 90px; /* StyledHeader의 높이만큼 top 위치 조정 */
  // left: ${props => (props.show ? '0' : '-250px')}; /* 사이드바가 보일 때는 left를 120px로 설정 */
  // height: calc(100% - 90px); /* 전체 높이에서 StyledHeader의 높이를 뺀 만큼 높이 설정 */
  // width: 250px;
  // background-color: #f0f0f0;
  // padding: 20px;
  // box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  // transition: left 0.3s ease-in-out; */