import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 50px;
  width: 90%;
  height: 500px;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  text-align: center;
`;

const Container = styled.div`
  
  div{

  }
`;

function CommunityCreate() {
  return (
    <Wrapper>
      <span>카테고리 고르기</span>
      <Container>
        <img src="../../image/communityimg/002.png" alt="여행"/>
          <label htmlFor="">여행</label>
        
      </Container>
    </Wrapper>
  );
};

export default CommunityCreate;