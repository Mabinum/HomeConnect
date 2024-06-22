import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp2() {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        로그인 방법
      </h1>
      <div>
        <label htmlFor="loginId">아이디:</label>
        <Form.Control type="text" placeholder="username"/>
      </div>
      <div>
        <label htmlFor="loginId">패스워드:</label>
        <Form.Control type="password" placeholder="password"/>
      </div>
      <div>
        <label htmlFor="loginId">재확인:</label>
        <Form.Control type="password" placeholder="password"/>
      </div>
      <div>
        <Button type="button" onClick={()=>{navigate('/login/signup3')}}>다음</Button>
      </div>
    </>
  );
};

export default SignUp2;