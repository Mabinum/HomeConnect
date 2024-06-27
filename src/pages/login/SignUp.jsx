import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNameInfo } from "../../features/main/mainSlice";
import { addProduct } from "../../api/productAPI";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [value, setValue] = useState(``);
  const handleName1Change = (e) => {
    setValue(e.target.value);
  }
  const [value2, setValue2] = useState(``);
  const handleName2Change = (e) => {
    setValue2(e.target.value);
  }

  const overInfo = () => {
    dispatch(getNameInfo(value.concat(value2)));
    navigate('/login/signup1');
  };

  return (
    <>
      <h1>계정 만들기</h1>
      <div>
        <label htmlFor="firstName">성 :</label>
        <Form.Control type="text" placeholder="성" value={value} onChange={handleName1Change}/>
      </div>
      <div>
        <label htmlFor="lastName">이름 :</label>
        <Form.Control type="text" placeholder="이름" value={value2} onChange={handleName2Change}/>
      </div>
      <Button type="button" onClick={()=>overInfo()}>다음</Button>
    </>
  );
};

export default SignUp;