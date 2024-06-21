import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Header() {


  // const StyledHeader = styled.div`
  //   height: 90px;
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: #A8E6D6;
    
  //   p {
  //     margin: 0 1rem;
  //     font-size: 2rem;
  //     cursor: pointer;

  //     &:hover {
  //       color: #ffffff;
  //     }
  //   }
    
  //   h3 {
  //     margin-left: auto;
  //     margin-right: 1rem;
  //   }
  //   `
    
    const StyledNavbar = styled(Navbar.Brand)`
      text-align: center;
    `

  return (
    <>
        {/* <StyledHeader>
          <p>메뉴1</p>
          <p>메뉴2</p>
          <p>메뉴3</p>
          <p>메뉴4</p>

          <h3>0000호</h3>
        </StyledHeader> */}

      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

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