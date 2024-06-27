import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIDPWInfo, getSignupIDPWInfo } from "../../features/main/mainSlice";

function SignUp2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [value, setValue] = useState(``);
  const handleIDChange = (e) => {
    setValue(e.target.value);
  };
  const [value2, setValue2] = useState(``);
  const handlePWChange = (e) => {
    setValue2(e.target.value);
  };
  const [value3, setValue3] = useState(``);
  const handlereconfirmPWChange = (e) => {
    setValue3(e.target.value);
  };

  const overInfo = () => {
    if (value2===value3) {
      dispatch(getSignupIDPWInfo({userId : `${value}`, pw : `${value3}`}));
      navigate('/login/signup4');
      return 0;
    } else { 
      return alert("패스워드를 다시 확인해주세요");
    }
  };

  return (
    <>
      <h1>
        로그인 방법
      </h1>
      <div>
        <label htmlFor="loginId">아이디:</label>
        <Form.Control type="text" placeholder="username" value={value} onChange={handleIDChange}/>
      </div>
      <div>
        <label htmlFor="loginId">패스워드:</label>
        <Form.Control type="password" placeholder="password" value={value2} onChange={handlePWChange}/>
      </div>
      <div>
        <label htmlFor="loginId">재확인:</label>
        <Form.Control type="password" placeholder="password" value={value3} onChange={handlereconfirmPWChange}/>
      </div>
      <div>
        <Button type="button" onClick={overInfo}>다음</Button>
      </div>
    </>
  );
};

export default SignUp2;