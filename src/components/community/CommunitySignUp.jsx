import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 50px;
  width: 90%;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CommunitySignUp() {
  const navigate = useNavigate()
  const { communityId } = useParams();
  const [communityList, setcommunityList] = useState();

    // db에서 community데이터 갖고 와서 렌더링하기
    useEffect(() => {
      const communitylist = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/menu4/communityread${communityId}`);
          setcommunityList(response.data);
          if (response.status === 200) {
            // return dispatch(getBoardList(response.data));
          } else {
            throw new Error(`api error: ${response.status} ${response.statusText}`);
          }
        } catch (error) {
          console.error(error);
        }
      };
      communitylist();
    }, []);


  return (
    <Wrapper>
      {communityList && communityList.find()}
      <div>
        <h2>모임 제목</h2>
        <p>모임 위치</p>
        <p>모임 내용</p>
        <Nav.Link onClick={() => navigate('/menu4/community')}>
          <Button variant="dark">가입하기</Button>
        </Nav.Link>
      </div>
    </Wrapper>
  );
};

export default CommunitySignUp;