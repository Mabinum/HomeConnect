import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBoardSlice } from '../board/boardSlice'; // boardSlice에서 foodList를 선택하는 selector 가져오기

function FoodList() {
    const foodList = useSelector(selectBoardSlice); // Redux store에서 foodList 가져오기

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>게시물 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                {foodList.map((post, index) => (
                    <tr key={post.id}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        {/* 작성자 이름칸은 임시로 저장 */}
                        <td>작성자 이름</td> 
                        <td>{post.date}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default FoodList;