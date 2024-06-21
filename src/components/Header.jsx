import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Header() {
    
    const StyledNavbar = styled(Navbar.Brand)`
      text-align: center;
    `

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <StyledNavbar href="#">MENU1</StyledNavbar>
          <StyledNavbar href="#">MENU2</StyledNavbar>
          <StyledNavbar href="#">MENU3</StyledNavbar>
          <StyledNavbar href="#">MENU4</StyledNavbar>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* <a href="#">000호</a> ????id값 전달 */}
              입주자분 환영합니다.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; 코딩하는오합지졸. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Header;