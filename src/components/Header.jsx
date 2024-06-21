import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar.Brand)`
  text-align: center;
`;


function Header() {

  const navigate = useNavigate();

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
              <img src="../image/profile.png" alt="profile" />
              {/* <a href="#">000호</a>
              입주자분 환영합니다. */}
              {/* 수정1 */}
              <Nav.Link onClick={() => navigate('/')}>{}</Nav.Link>
              {/* 마이페이지로 가게끔 나중에 주소 수정 */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;