import { Button, Form } from "react-bootstrap";
import {Reset} from "styled-reset";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: aqua;
position: fixed;
width: 100%;
height: 100%;
display: flex;

.loginFunction{
  border: none;
  border-radius: 3px;
  outline: 1px solid blue;
}

.logindiv{
  display: flex;
  margin-top: 40px;
}

label {
  width: 150px;
  text-align : right ;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  display: flex;
  font-size: 50px;
  position: absolute;
  top: 130px;
}

Button {
  margin-top: 50px;

}
`;

const Container = styled.form`
  display: flex;
  width: 500px;
  height: 700px;
  background-color: white;
  margin: auto;
  opacity: 0.9;
  border-radius: 3cap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;



function Login() {

  return (
    <>
      <Reset/>
      <Wrapper>
        <Container>
          {/* <label htmlFor="">
            아이디 : <IdInput type="text" placeholder="username"/>
          </label>
          <label htmlFor="">
            패스워드 : <PasswordInput type="password"/>
          </label> */}
          <h1>
            로그인
          </h1>
          <div className="logindiv">
            <label htmlFor="loginId">아이디 :</label>
            <Form.Control className="loginFunction" type="text" placeholder="username"/>
          </div>
          <div className="logindiv">
            <label htmlFor="loginId">패스워드 :</label>
            <Form.Control className="loginFunction" type="password" placeholder="password"/>
          </div>
          <Button type="button"> 로그인 </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;