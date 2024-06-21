import styled from "styled-components";
import { Reset } from "styled-reset";

function SignUp() {
  const Wrapper = styled.div`
  background-color: aqua;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  `;

  const Container = styled.form`
    display: flex;
    width: 700px;
    height: 900px;
    background-color: white;
    margin: auto;
    opacity: 0.9;
    border-radius: 3cap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `;

  return (
    <>
      <Reset/>
      <Wrapper>
        <Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default SignUp;