import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { removeFoodList ,selectBoardSlice } from '../board/boardSlice';
import styled from 'styled-components';

const CommentContainer = styled.div`
    margin-top: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
`;

const CommentList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CommentItem = styled.li`
    margin-bottom: 8px;
    font-size: 16px;
`;

const TextInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start; 
    margin-top: 10px;
`;

const Button = styled.button`
    width: 100px;
    height: 35px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

const CloseButton = styled.button`
    width: 100px;
    height: 35px;
    font-size: 16px;
    background-color: #fc0037;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;

    &:hover {
        background-color:#b30000;
    }
`;

const PostContent = styled.div`
    margin-bottom: 20px;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333; 
    }
    p {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
    }
`;

function BoardListDetail() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const { boardId } = useParams();
    const boardList = useSelector(selectBoardSlice);
    const dispatch = useDispatch();
		console.log(boardList);
		
    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const boardItem = boardList.find((item) => item.no === parseInt(boardId));
		console.log(boardItem);
    return (
        <CommentContainer>
            {boardItem && (
                <PostContent>
                    <h2>{boardItem.title}</h2>
                    <p>{boardItem.content}</p>
                    {/* <p>{post.date}</p>
                    <Button onClick={() => handleFoodLike(post.id)}>좋아요</Button> */}
                </PostContent>
            )}

            <h3>댓글</h3>
            <CommentList>
                {comments.map((comment, index) => (
                    <CommentItem key={index}>{comment}</CommentItem>
                ))}
            </CommentList>
            <TextInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력하세요."
            />
            <ButtonContainer>
                <Link to="/menu4/boardlist">
                    <Button>목록으로</Button>
                </Link>
                <Button onClick={handleAddComment}>댓글 추가</Button>
                <Link to="/menu4/boardlist">
                <CloseButton onClick={() => dispatch(removeFoodList(boardItem.writer))}>삭제</CloseButton>
                </Link>
            </ButtonContainer>
        </CommentContainer>
    );
}

export default BoardListDetail;
