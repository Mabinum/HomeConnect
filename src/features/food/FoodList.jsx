import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBoardSlice } from '../board/boardSlice'; // boardSlice에서 foodList를 선택하는 selector 가져오기
import { Link } from 'react-router-dom';
import Styled from 'styled-components'; // styled-components 추가

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

function FoodList() {
    const foodList = useSelector(selectBoardSlice);

    return (
        <Table hover>
            <thead>
                <CenteredTh>
                    <StyledLinkButton to="/foodmain">
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

            <tbody>
            {foodList.map((post, index) => (
                <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>
                    <Link to={`/foodlist/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{post.date}</td>
                    <td>작성자 ID</td> 
                    {/* <td>{post.authorId}</td> */}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default FoodList;