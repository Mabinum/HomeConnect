import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Community from "./Community";

const Wrapper = styled.form`
  margin: 50px;
  width: 90%;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.input`
  width: 400px;
  height: 50px;
  margin: 0 auto 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  `;

const Content = styled.input`
  width: 1000px;
  height: 300px;
  margin: 0 auto 10px;
  overflow: auto;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

const FileLabel = styled.label`
  padding: 6px 25px;
  background-color:#00050aba;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #00000088;
    color: #fff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const RegisterButton = styled(Button)`
  width: 100px; 
  height: 35px; 
  font-size: 16px;
  background-color: #00050aba;
  color: #fff;
  border: none;
  margin: 30px 5px; 

  &:hover {
    background-color: #00000088;
    color: #fff;
  }
`;


function CommunityRegister() {
  const navigate = useNavigate()
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [img, setImg] = useState(null);

  const handleTitleValues = (e) => {
    setTitleValue(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContentValue(e.target.value);
  };

  const handleChangFile = (e) => {
    e.preventDefault();

    // 확장자 유효성 검사 만들기 (검토해야함)
    // const file = e.target.files[0];
    // const fileExt = e.target.value.substring(e.target.value.lastIndexOf('.') + 1).toLowerCase();
    // const fileExt = file.lastIndexOf('.');
    // const newFileExt = file.substring().toLowerCase();
    // if (fileExt === 'jpg' || fileExt === 'png' || fileExt === 'jpeg') {
    //   const imageUrl = URL.createObjectURL(fileExt);
    //   setImg(imageUrl);
    // } else {
    //   return alert('이미지 파일만 선택해주세요');
    // }

    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImg(imageUrl);

  };


  return (
    <Wrapper>
      <Title
        type="text"
        placeholder="모임제목"
        value={titleValue}
        onChange={handleTitleValues}
      />
      <Content
        type="text"
        placeholder="모임내용"
        value={contentValue}
        onChange={handleChangeContent}
      />
      <div>
        <div>
          <img
            src={img}
            alt=""
            style={{ width: "100px", height: "100px" }} />
          <FileLabel htmlFor="file-input">
            썸네일올리기
          </FileLabel>
          <FileInput
            type="file"
            id="file-input"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleChangFile}
          />
        </div>
      </div>

      <div>
        <RegisterButton
          onClick={() => navigate('/menu4/community')}
        >
          등록
        </RegisterButton>
        <RegisterButton>뒤로가기</RegisterButton>
      </div>
    </Wrapper>
  );
};

export default CommunityRegister;