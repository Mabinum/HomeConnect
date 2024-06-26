import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 50px;
  width: 90%;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.input`
  width: 400px;
  height: 50px;
  margin: 0 auto 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  `;

const Content = styled.input`
  width: 1000px;
  height: 300px;
  margin: 0 auto 10px;
  overflow: auto;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

const FileLabel = styled.label`
  padding: 6px 25px;
  background-color:#00050aba;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #00000088;
    color: #fff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const RegisterButton = styled(Button)`
  width: 100px; 
  height: 35px; 
  font-size: 16px;
  background-color: #00050aba;
  color: #fff;
  border: none;
  margin: 30px 5px; 

  &:hover {
    background-color: #00000088;
    color: #fff;
  }
`;


function CommunityRegister() {
  const navigate = useNavigate()


  return (
    <Wrapper>
      <Title type="text" placeholder="모임제목" />
      <Content type="text" placeholder="모임내용" />
      <div>
        <FileLabel for="file-input">
          썸네일올리기
        </FileLabel>
        <FileInput type="file" id="file-input" />
      </div>
      
      <div>
        <RegisterButton onClick={() => navigate('/menu4/community')}>등록</RegisterButton>
        <RegisterButton>뒤로가기</RegisterButton>
      </div>
    </Wrapper>
  );
};

export default CommunityRegister;