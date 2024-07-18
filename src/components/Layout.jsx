// Layout.jsx
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getmyInfo, selectmyInfo, selectTheme } from "../features/main/mainSlice";
import WeatherMain from "./weather/WeatherMain";
import { MdManageAccounts } from "react-icons/md";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background2};
    color: ${(props) => props.theme.background};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s linear;
  }
`;

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.background2};
  color: ${(props) => props.theme.background};
  transition: all 0.3s linear;


  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .widthAdjust {
    width: 95%;
  }
`;

const SpaceBetweenContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavbar = styled(Navbar.Brand)`
  text-align: center;
  cursor: pointer;
  font-size: 1.2em;
  margin: 0 10px;
  color: ${(props) => props.theme.background};
  
  &:hover {
    color: #007bff;

  }
`;

const Home = styled(IoIosHome)`
  color: ${(props) => props.theme.background};
`;

const Mypage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    width: 50px;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  padding-top: 66px; // <-- 문제임 이제아님!!
  /* margin-top: 8rem;   */
  /* padding-top: 1%;  */
  /* margin-top: 4%; */
  
`;

const StyledFooter = styled.footer`
  width: 100%; //추가
  height: 60px;
  position: absolute;
  transform: translateY(110%);
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px 0;
  /* position: absolute; //추가 */
  // bottom: 0; //추가
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #007bff;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.background};

  &:hover {
    color: red;
  }
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

const StyledWeather = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ADMINCOMMAND = styled(MdManageAccounts)`
  /* position: fixed; */
  /* top: 5rem; */
  /* right: 3rem; */
  /* z-index: 999; */
  margin-left: 1rem;
  
`;

const Layout = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(selectmyInfo);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  console.log(theme);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(getmyInfo({}));
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <FixedHeader>
        <Navbar className="widthAdjust" expand="lg">
          <SpaceBetweenContainer style={{padding:'0 15px 0 15px'}}>
            <Navbar.Brand>
              <Home onClick={() => navigate('/')} className="cursor-pointer" size={32} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <StyledNav>
                {userInfo.role === 'ROLE_ADMIN' ? '': <StyledNavbar onClick={() => navigate('/feedetail')}>관리비</StyledNavbar>}
                <StyledNavbar onClick={() => navigate('/calendar')}>달력</StyledNavbar>
                <StyledNavbar onClick={() => navigate('/community')}>모임</StyledNavbar>
                <StyledNavbar onClick={() => navigate('/map')}>동네지도</StyledNavbar>
                <StyledNavbar onClick={() => navigate('/boardlist')}>게시판</StyledNavbar>
              </StyledNav>

              <StyledWeather>
                <WeatherMain />
              </StyledWeather>

              <Mypage>
                {/* <img src="/image/profile.png" alt="profile" /> */}
                <Nav.Link style={{transition:'none'}} onClick={() => navigate('/mypage')} className="cursor-pointer">{userInfo.name && `${userInfo?.name}님 환영합니다.`}</Nav.Link>
                <ProfileButton onClick={() => navigate('/feeinput')}>{userInfo.role === 'ROLE_ADMIN' ? '관리비 입력' : ''}</ProfileButton>
                <LogoutButton onClick={handleLogout}>{userInfo.role ? '로그아웃' : '로그인'}</LogoutButton>
                {
                  userInfo.role === 'ROLE_ADMIN' &&
                  <ADMINCOMMAND className='cursor-pointer' size={45} onClick={() => navigate('/adminPage')} />
                }
              </Mypage>
            </Navbar.Collapse>
          </SpaceBetweenContainer>
        </Navbar>
      </FixedHeader>

      <Content>
        <Outlet />
      </Content>

      <StyledFooter>
        &copy; 코딩하는오합지졸. All Rights Reserved.
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Layout;
