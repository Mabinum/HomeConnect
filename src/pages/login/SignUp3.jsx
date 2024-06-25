import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPhoneNumberInfo } from "../../features/main/mainSlice";
import { useDispatch } from "react-redux";

function SignUp3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(``);

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  }
  
  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]);

  const overInfo = () => {
    dispatch(getPhoneNumberInfo({PhoneNumber : `${inputValue}`}));
    navigate('/login/signup4');
  };


  
  return (
    <>
      <h1>
        본인 인증
      </h1>
      <div>
        <label htmlFor="loginId">전화번호:</label>
        <Form.Control type="text" placeholder="전화번호" value={inputValue} onChange={handlePress}/>
      </div>

      <div>
        <Button type="button" onClick={overInfo}>인증</Button>
      </div>
    </>
  );
};

export default SignUp3;