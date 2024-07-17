import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FaMoon, FaRegMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getmyInfo, selectmyInfo } from '../features/main/mainSlice';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addressKey } from '..';
import MyPageModify from './MyPageModify';
import { color } from 'chart.js/helpers';

// 테마 설정
export const lightTheme = {
  background: '#f0f2f5',
  paperBackground: '#ffffff',
  textPrimary: '#333',
  textPrimaryReverse: '#e0e0e0',
  textSecondary: '#777',
  buttonPrimary: '#007bff',
  buttonPrimaryHover: '#0056b3',
  buttonSecondary: '#dc3545',
  buttonSecondaryHover: '#b21f2d',
  divider: '#e0e0e0',
};

export const darkTheme = {
  background: '#161414c9',
  paperBackground: '#1e1e1ef0',
  textPrimary: '#e0e0e0',
  textPrimaryReverse: '#333',
  textSecondary: '#b0b0b0',
  buttonPrimary: '#1a73e8',
  buttonPrimaryHover: '#1358a5',
  buttonSecondary: '#d93025',
  buttonSecondaryHover: '#a31518',
  divider: '#303030',
};

// 전역 스타일 설정
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s linear;
  }
`;

// 최상위 컨테이너
const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 40%;
  position: relative;
  margin: 0 auto;
`;

// 카드 스타일
const StyledPaper = styled.div`
  padding: 10% 10%;
  width: 100%;
  background-color: ${(props) => props.theme.paperBackground};
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
`;

// 타이틀 컨테이너 (아바타 및 사용자 정보)
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 상단 영역 스타일 (마이페이지 제목, 아바타, 사용자 정보, 다크모드 버튼)
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// 아바타 스타일
const StyledAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ddd;
  display: inline-block;
  margin-right: 20px;
`;

// 사용자 이름 스타일
const UserName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
`;

// 사용자 이메일 스타일
const UserEmail = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.textSecondary};
`;

// 섹션 스타일
const Section = styled.div`
  margin-bottom: 20px;
  text-align: left;
  margin-top: 20px;
`;

// 섹션 타이틀 스타일
const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 8px;
  
`;

// 섹션 내용 스타일
const SectionContent = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.5;
`;

// 버튼 스타일
const StyledButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.color === 'primary' ? props.theme.buttonPrimary : props.color === 'secondary' ? props.theme.buttonSecondary : '#6c757d'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === 'primary' ? props.theme.buttonPrimaryHover : props.color === 'secondary' ? props.theme.buttonSecondaryHover : '#5a6268'};
  }
`;

// 구분선 스타일
const Divider = styled.div`
  margin: 16px 0;
  height: 1px;
  background-color: ${(props) => props.theme.divider};
`;

// 다크모드 토글 버튼 스타일
const ToggleButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

// 하단 텍스트 스타일
const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${(props) => props.theme.textSecondary};

  a {
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;
    margin: 0 8px;
  }
`;

const SubmitButton = styled(Button)`
  width: 48%;
  height: 50px;
  font-size: 18px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  width: 48%;
  height: 50px;
  font-size: 18px;
  background-color: #6c757d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;


const MyPage = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [showModify, setShowModify] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const user = useSelector(selectmyInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  
  const handleProfileModify = () => {
    setShowModify(!showModify);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  const handleModalOpen2 = () => {
    setShowModal2(true);
  };

  const handlePwModify = () => {
    if(!pw) return alert("비밀번호를 입력해주세요");
    if(pw !== pw2){
      return alert("비밀번호 재확인이 틀렸습니다.");
    } else {
      const modifyPw = async () => {
        try {
          const response = await axios.put(`${addressKey}/login/pwModify`, {
            "userId": user.userId,
            "pw": pw2
          }, {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          });
          if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            const userInfo = JSON.parse((localStorage.getItem('user')));
            dispatch(getmyInfo(userInfo));
            alert("비밀번호가 수정되었습니다");
          } else {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
          }
        } catch (err) {
          console.error(err);
        }
      };
      modifyPw();
      setShowModal(false);
    }
  };
  
  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${addressKey}/login/remove?userId=${user.userId}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      if (response.status === 200) {
        alert("계정이 삭제되었습니다.");
        navigate('/login');
      } else {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <StyledPaper>
          {/* 상단 영역 */}
          <Header>
            <h2>마이페이지</h2>
            <ToggleButton onClick={toggleTheme}>
              {theme === lightTheme ? <FaMoon /> : <FaSun />}
            </ToggleButton>
          </Header>

          <Divider />

          {/* 사용자 정보 섹션 */}
          <TitleContainer>
            <StyledAvatar />
            <div style={{ flex: 1 }}>
              <UserName>{user.userId}</UserName>
              {showModify 
                ? <MyPageModify value={user.name} setShowModify={()=>setShowModify()}/>
                : <UserEmail>{user.name}</UserEmail>
              }
            </div>
          </TitleContainer>

          {/* 주소 섹션 */}
          <Section>
            <SectionTitle>주소지</SectionTitle>
            {showModify 
              ? <MyPageModify value={user.address} setShowModify={()=>setShowModify()}/>
              : <SectionContent>
                  {user.address}
                </SectionContent>
            }

            <div style={{ textAlign: 'right' }}>
              <StyledButton color="primary" onClick={handleProfileModify}>프로필 수정</StyledButton>
            </div>
          </Section>

          <Divider />

          {/* 계정 설정 섹션 */}
          <Section>
            <SectionTitle>계정 설정</SectionTitle>
            <div style={{ display: 'flex', gap: '16px' }}>
              <StyledButton color="primary" onClick={handleModalOpen}>비밀번호 변경</StyledButton>
              <StyledButton color="secondary" onClick={handleModalOpen2}>계정 삭제</StyledButton>
            </div>
          </Section>

          {/* 하단 텍스트 */}
          <Footer>
            <div>version 13.1</div>
            <div>
              <a href="#">개인정보약관</a> | <a href="#">이용약관</a>
            </div>
          </Footer>
        </StyledPaper>
      </Root>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 변경</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control className='textcenter' placeholder='비밀번호 변경' value={pw} onChange={(e)=>setPw(e.target.value)}/>
        </Modal.Body>
        <Modal.Body>
          <Form.Control className='textcenter' placeholder='비밀번호 재입력' value={pw2} onChange={(e)=>setPw2(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <SubmitButton onClick={handlePwModify}>확인</SubmitButton>
          <CancelButton onClick={handleModalClose}>취소</CancelButton>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal2} onHide={handleModalClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>삭제 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>정말 삭제하시겠습니까?</p>
        </Modal.Body>
        <Modal.Footer>
          <SubmitButton onClick={handleDelete}>확인</SubmitButton>
          <CancelButton onClick={handleModalClose2}>취소</CancelButton>
        </Modal.Footer>
      </Modal>

    </ThemeProvider>
  );
};

export default MyPage;

