
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FoodSidebar from "../features/food/FoodSidebar";
import { Outlet } from "react-router-dom";

const StyledNavbar = styled(Navbar.Brand)`
      text-align: center;
      align-items: center; /* 수직 가운데 정렬 */

      &:hover {
        color: green;
      }
    `;

    const HeaderContainer = styled.div`
      display: flex;
      flex-direction: column; /* 수직으로 정렬 */
    `;

    const ContentContainer = styled.div`
      display: flex;
      justify-content: space-between; /* 자식 요소 사이에 공간을 균등하게 배치 */
      align-items: flex-start; /* 자식 요소를 위쪽으로 정렬 */
    `;

function Header() {

  const navigate = useNavigate();

  return (
    <>
    <HeaderContainer>
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
