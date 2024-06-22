import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup4() {
  const navigate = useNavigate();


  return (
    <>
      <h1>
        정보 입력
      </h1>
      {/* 지도랑 연동하여 주소확인하기 */}
      <div>
        <label htmlFor="loginId">주소:</label>
        <Form.Control type="text" placeholder="주소"/>
      </div>
      <div>
        <label htmlFor="loginId">동 :</label>
        <Form.Control type="text" placeholder="동"/>
      </div>
      <div>
        <label htmlFor="loginId">호수 :</label>
        <Form.Control type="text" placeholder="호수 "/>
      </div>
      <div>
        <Button type="button" onClick={()=>{navigate('/')}}>완료</Button>
      </div>
    </>
  );
};

export default Signup4;