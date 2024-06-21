import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const StyledNavbar = styled(Navbar.Brand)`
      text-align: center;
      align-items: center; /* 수직 가운데 정렬 */

      &:hover {
        color: green;
      }
    `;

function Layout() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Collapse className="justify-content-start">
          <IoIosHome onClick={() => navigate('/')}/>
        </Navbar.Collapse>
          <StyledNavbar href="#">MENU1</StyledNavbar>
          <StyledNavbar href="#">MENU2</StyledNavbar>
          <StyledNavbar href="#">MENU3</StyledNavbar>
          <StyledNavbar href="menu4">MENU4</StyledNavbar>
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

      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white text-center">
          &copy; 코딩하는오합지졸. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;

// 홈버튼, 메인페이지 껍데기, 메뉴 컴포넌트