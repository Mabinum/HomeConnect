import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: aqua;
position: fixed;
width: 100%;
height: 100%;
display: flex;
/* align-items: center;
justify-content: center; */
`;

const Container = styled.div`
  display: flex;
  width: 700px;
  height: 900px;
  background-color: white;
  margin: auto;
  opacity: 0.9;
  border-radius: 3cap;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
`;

// const IdInput = styled(Form.Control)`
//   margin-left: 10px;
// `;

// const PasswordInput = styled(Form.Control)`
//   margin-left: 10px;
// `;

const IdInput = styled.input`
  display: block;
  margin-left: 10px;
`;

const PasswordInput = styled.input`
  display: block;
  margin-left: 10px;
`;



function Login() {

  return (
    <Wrapper>
      <Container>
        {/* <label htmlFor="">
          아이디 : <IdInput type="text" placeholder="username"/>
        </label>
        <label htmlFor="">
          패스워드 : <PasswordInput type="password"/>
        </label> */}
        아이디 : <IdInput type="text" placeholder="username"/>
        패스워드 : <PasswordInput type="password"/>
        <Button type="button"> 로그인 </Button>
      </Container>
    </Wrapper>
  );
};

export default Login;