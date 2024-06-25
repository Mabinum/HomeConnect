import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const SidebarContainer = styled.div`
  width: 200px;
  background-color: #F8F9FA;
  padding: 30px;
  transition: 1s;

  p{
    text-align: center;
    padding: 10px;
    border-radius: 10px;
  }

  p:hover{
    transition: 0.5s;
    background-color: #ddaeae;
  }

  .textcolor{
    font-size: 21px;
    font-weight: bold;
    color: blue;
    cursor: pointer;
  }
`;

function FoodSidebar() {
  const navigate = useNavigate();

  return (
    <SidebarContainer >
      {/* <p className='header'>게시판</p><br /> */}
      <p onClick={() => navigate('noticelist')} className='textcolor'>공지사항</p>
      <p onClick={() => navigate('foodlist')} className='cursor-pointer'>게시판</p>
      <p onClick={() => navigate('')} className='cursor-pointer'>모임</p>
    </SidebarContainer>
  )
}

export default FoodSidebar;