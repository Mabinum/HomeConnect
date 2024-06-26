import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

  return (
    <Wrapper>
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