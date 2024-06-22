import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getIDPWInfo } from "../../features/main/mainSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [IDvalue, setIDvalue] = useState('');
  const [PWvalue, setPWvalue] = useState('');

  const handleIDChange = (e) => {
    setIDvalue(e.target.value);
  };

  const handlePWChange = (e) => {
    setPWvalue(e.target.value);
  };

  const handleSubmitINFO = () => {
    dispatch(getIDPWInfo({ID : IDvalue , PW : PWvalue}))
  };
  
  return (
    <>
      <h1>
        로그인
      </h1>
      <div>
        <label htmlFor="loginId">아이디:</label>
        <Form.Control type="text" placeholder="username" value={IDvalue} onChange={handleIDChange}/>
      </div>
      <div>
        <label htmlFor="loginId">패스워드:</label>
        <Form.Control type="password" placeholder="password" value={PWvalue} onChange={handlePWChange}/>
      </div>
      <div>
        <Button type="button" onClick={handleSubmitINFO}> 로그인 </Button>
        <Button type="button" variant="success" onClick={()=>{navigate('/login/signup')}}>회원가입</Button>
      </div>
    </>
  );
};

export default Register;