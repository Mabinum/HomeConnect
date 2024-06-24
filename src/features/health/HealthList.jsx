import { Button, Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectHealthInfo } from "../board/boardSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Styled from 'styled-components';

const StyledTh = Styled.th`
    vertical-align: middle;
`;

const CenteredTh = Styled(StyledTh)`
    text-align:  justify;
`;

const StyledLinkButton = Styled(Link)`
    display: block;
    margin: 2px 0 2px;
`;

const StyledTbody = Styled.tbody`
  cursor: pointer;
`;


function HealthList() {
  const healthInfo = useSelector(selectHealthInfo);
  const navigate = useNavigate();

  return (
    <Table hover>
      <thead>
        <CenteredTh>
          <StyledLinkButton to="menu4/health">
            <Button variant="primary">게시글 작성</Button>
          </StyledLinkButton>
        </CenteredTh>
        <tr>
          <StyledTh>게시물 번호</StyledTh>
          <StyledTh>제목</StyledTh>
          <StyledTh>작성일자</StyledTh>
          <StyledTh>작성자ID</StyledTh>

        </tr>
      </thead>

        {healthInfo.map((post, index) => (
      <StyledTbody onClick={() => navigate(`${post.id}`)}>
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td>{post.title}</td>
            <td>{post.date}</td>
            <td>작성자 ID</td>
            {/* <td>{post.authorId}</td> */}
          </tr>
      </StyledTbody>
        ))}
    </Table>
  );
};

export default HealthList;