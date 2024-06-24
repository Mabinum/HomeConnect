import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp3() {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        본인 인증
      </h1>
      <div>
        <label htmlFor="loginId">전화번호:</label>
        <Form.Control type="text" placeholder="전화번호"/>
      </div>
      
      <div>
        <Button type="button" onClick={()=>{navigate('/login/signup4')}}>다음</Button>
      </div>
    </>
  );
};

export default SignUp3;