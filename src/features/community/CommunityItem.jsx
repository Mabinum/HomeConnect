import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  img {
    width: 100px;
    height: 100px;
    vertical-align:middle;
  }
  div {
  }
`;



function CommunityItem() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <table>
        <tr>
          <Nav.Link onClick={() => navigate('/menu4/communitysignup')}>
          <td><img src="../../image/독서.jpg" alt="독서" />독서모임</td>
          </Nav.Link>
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