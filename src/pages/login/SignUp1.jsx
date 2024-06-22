import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectSex = styled(Form.Select)`
  width: 250px;
`;

function SignUp1() {

  const navigate = useNavigate();

  return (
    <>
      <h1>기본 정보</h1>
      <div>
        <label htmlFor="firstName">연 :</label>
        <Form.Control type="text" placeholder="연"/>
      </div>
      <div>
        <label htmlFor="lastName">월 :</label>
        <Form.Control type="text" placeholder="월"/>
      </div>
      <div>
        <label htmlFor="lastName">일 :</label>
        <Form.Control type="text" placeholder="일"/>
      </div>
      <div>
        <label htmlFor="lastName">성별 :</label>
        <SelectSex placeholder="성별"> 
          <option>성별</option>
          <option value="1">남자</option>
          <option value="2">여자</option>
          <option value="3">공개안함</option>
        </SelectSex>
      </div>
      <Button type="button" onClick={()=>{navigate('/login/signup2')}}>다음</Button>
    </>
  );
};

export default SignUp1;