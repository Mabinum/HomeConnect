import { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 700px;
  margin: 6rem auto 0;
  border: 2px solid black;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #61bcd3;

  h2 {
    margin-bottom: 25px;
  }
  
`;



function Health() {
  const [titleValue, setTitleValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleTitle = (e) => {
    setTitleValue(e.target.value);
  }
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <Wrapper>
      <from>
        <h2>게시판 등록 페이지</h2>
        <FloatingLabel
          controlId="floatingTextarea"
          label="제목"
          className="mb-3"
        >
          <Form.Control
            as="textarea" placeholder="Leave a comment here"
            onChange={handleTitle}
            value={titleValue}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="내용">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '300px', width: '500px' }}
            onChange={handleInput}
          />
        </FloatingLabel>
        <button type="submit">등록</button>
      </from>
    </Wrapper>
  );
};

export default Health;