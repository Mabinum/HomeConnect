import styled from "styled-components";
import { Button, Dropdown, DropdownButton, Form, Nav, Table } from "react-bootstrap";
import CommunityItem from "./CommunityItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { selectCategory, selectCommunityList } from "../../features/community/communitySlice";

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 80%;
  padding: 50px 50px 114px 50px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .input-group {
    display: flex;
    align-items: center;
    width: 20%;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  .input-group-icon {
    color: #495057;
    margin-right: 0.5rem;
  }

  .form-control {
    border: none;
    box-shadow: none;
  }

  .form-control:focus {
    border: none;
    box-shadow: none;
  }
`;

const CommunityContainer = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
  display: flex;
  border-radius: 15px;
  justify-content: space-evenly;
`;

const ItemContainer = styled.div`
  max-height: 600px;
  flex: 1;
  border: 2px solid #e0e0e0;
  margin: 2px;
  padding: 10px;
  border-radius: 10px;
  overflow-y: auto;
  background-color: #fafafa;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #ccc;
  }
`;

const Constyle = styled.div`
  padding-top: 30px;
`;

const StyledNav = styled(Nav)`
  .nav-link {
    color: #333 !important;  /* 기본 링크 색상 수정 */
    font-weight: bold;
    &:hover {
      color: #555 !important;  /* 링크 호버 시 색상 수정 */
    }
    &.active {
      color: #000 !important;  /* 활성화된 링크 색상 수정 */
      border-bottom: 2px solid #000; /* 활성화된 링크 밑줄 */
    }
  }
`;

function Community() {
  const categoryItem = useSelector(selectCommunityList);
  localStorage.setItem('category', JSON.stringify(categoryItem));
  const item = localStorage.getItem('category')
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('맛집');
  const dispatch = useDispatch();
  const [searchtitle, setSearchtitle] = useState(``);

  const handleSearchTitle = (e) => {
    setSearchtitle(e.target.value)
  }


  return (
    <Wrapper>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div className="input-group">
          <FaSearch className="input-group-icon" />
          <Form.Control type="text" placeholder="통합검색" value={searchtitle} onChange={handleSearchTitle} />
        </div>
      </div>
      <Constyle>
        <StyledNav justify variant="tabs" defaultActiveKey="link-1" className="color-nav">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => {setCategoryName('맛집'); dispatch(selectCategory('맛집'));}}>맛집투어</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => {setCategoryName('독서'); dispatch(selectCategory('독서'));}}>독서</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => {setCategoryName('운동'); dispatch(selectCategory('운동'));}}>운동</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={() => {setCategoryName('등산'); dispatch(selectCategory('등산'));}}>등산</Nav.Link>
          </Nav.Item>

          <DropdownButton style={{ marginLeft: '15px' }} id="dropdown-basic-button" title="모임 개설하기" variant="dark">
            <Dropdown.Item
              onClick={() => {
                dispatch(selectCategory('맛집'));
                navigate(`/communityregister`);
              }}
            >
              맛집투어
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(selectCategory('독서'));
                navigate(`/communityregister`);
              }}
            >독서
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(selectCategory('운동'));
                navigate(`/communityregister`);
              }}
            >
              운동</Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(selectCategory('등산'));
                navigate(`/communityregister`);
              }}
            >
              등산</Dropdown.Item>
          </DropdownButton>
        </StyledNav>
      </Constyle>
      <CommunityContainer>
        <ItemContainer>
          <CommunityItem categoryName={categoryName} searchtitle={searchtitle} />
        </ItemContainer>
      </CommunityContainer>
    </Wrapper>
  );
};

export default Community;
