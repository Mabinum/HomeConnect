// FoodListDetail.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectBoardSlice } from '../board/boardSlice';
import Styled from 'styled-components';

const CommentContainer = Styled.div`
    margin-top: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
`;

const CommentList = Styled.ul`
    list-style: none;
    padding: 0;
`;

const CommentItem = Styled.li`
    margin-bottom: 8px;
    font-size: 16px;
`;

const TextInput = Styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: flex-start; 
    margin-top: 10px;
`;

const Button = Styled.button`
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

const PostContent = Styled.div`
    margin-bottom: 20px;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333; 

    p {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
    }
`;

function FoodListDetail() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const { foodId } = useParams();
    const foodList = useSelector(selectBoardSlice);
    // const dispatch = useDispatch();

    // 로컬 스토리지에서 댓글 불러오기
    // useEffect(() => {
    //     const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    //     setComments(storedComments);
    // }, []);

    // 댓글 추가 시 로컬 스토리지 업데이트
    // useEffect(() => {
    //     localStorage.setItem('comments', JSON.stringify(comments));
    // }, [comments]);

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    // const handleFoodLike = (foodId) => {
    //     const food = foodList.find((food) => food.id === foodId);
    //     if (food) {
    //         dispatch(
    //             Food({
    //                 ...food,
    //                 likes: food.likes + 1,
    //             })
    //         );
    //     }
    // };

    const post = foodList.find((item) => item.id === parseInt(foodId));

    return (
        <CommentContainer>
            {post && (
                <PostContent>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
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
                <Link to="/foodlist">
                    <Button>목록으로</Button>
                </Link>
                <Button onClick={handleAddComment}>댓글 추가</Button>
            </ButtonContainer>
        </CommentContainer>
    );
}

export default FoodListDetail;
