import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

  return (
    <>
      <h1>계정 만들기</h1>
      <div>
        <label htmlFor="firstName">성 :</label>
        <Form.Control type="text" placeholder="성"/>
      </div>
      <div>
        <label htmlFor="lastName">이름 :</label>
        <Form.Control type="text" placeholder="이름"/>
      </div>
      <Button type="button" onClick={()=>{navigate('/login/signup1')}}>다음</Button>
    </>
  );
};

export default SignUp;