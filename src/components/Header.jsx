import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";
import FoodSidebar from "../features/FoodSidebar";
import { Outlet } from "react-router-dom";

function Header() {
    
    const StyledNavbar = styled(Navbar.Brand)`
      text-align: center;
      align-items: center; /* 수직 가운데 정렬 */
    `

    const HeaderContainer = styled.div`
      display: flex;
      flex-direction: column; /* 수직으로 정렬 */
    `;

    const ContentContainer = styled.div`
      display: flex;
      justify-content: space-between; /* 자식 요소 사이에 공간을 균등하게 배치 */
      align-items: flex-start; /* 자식 요소를 위쪽으로 정렬 */
    `;

    const ProfileImage = styled.img`
      margin-right: 10px;
    `;

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
            <img src="./image/profile.png" alt="profile" />
            <Navbar.Text>
              <a href="#">000호</a> 입주자분 환영합니다.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <ContentContainer>
      <FoodSidebar />
      </ContentContainer>
    </HeaderContainer>
      
  
      
    </>
  );
};

export default Header;
