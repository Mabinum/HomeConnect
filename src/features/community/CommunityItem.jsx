import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  img {
    width: 100px;
    height: 100px;
  }
`;



function CommunityItem() {
  return (
    <Wrapper>
      <table>
        <tr>
          <td><img src="../../image/독서.jpg" alt="독서" /></td>
          <div>독서 모임</div>
        </tr>
      </table>
      <table>
        <tr>
          <td><img src="../../image/라이딩.jpg" alt="라이딩" /></td>
          <div>라이딩 모임</div>
        </tr>
      </table>
      <table>
        <tr>
          <td><img src="../../image/여행.jpg" alt="여행" /></td>
          <div>여행 모임</div>
        </tr>
      </table>
      <table>
        <tr>
          <td><img src="../../image/여행.jpg" alt="여행" /></td>
          <div>여행 모임</div>
        </tr>
      </table>
    </Wrapper>
  );
};

export default CommunityItem;