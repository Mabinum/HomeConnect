import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 50px;
  width: 90%;
  height: 500px;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  text-align: center;
  display: flex;
`;

const Container = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  flex: 1;
  margin: 2px;
`;

function CommunityCreate() {
  return (
    <Wrapper>
      <Container>
        <img src="../../image/002.png" alt="여행" />
        <p>여행</p>
      </Container>
      <Container>
        <img src="../../image/002.png" alt="여행" />
        <p>여행</p>
      </Container>
      <Container>
        <img src="../../image/002.png" alt="여행" />
        <p>여행</p>
      </Container>
    </Wrapper>
  );
};

export default CommunityCreate;