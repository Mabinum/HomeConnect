import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Food, selectBoardSlice, clearBoardList } from '../board/boardSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import BoardListDetail from './BoardListDetail';

function BoardList() {
	const boardList = useSelector(selectBoardSlice);
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const TableWrapper = styled(Table)`
        margin-top: 20px;
        width: 100%;
    `;

	// 서버에서 boardlist 목록 요청
	useEffect(() => {
		// 서버에 상품 목록 요청
		axios.get('http://localhost:8080/menu4/boardlist')
			.then((response) => {
				dispatch(Food(response.data));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [dispatch]);

	return (
		<>
			<Button variant="primary" onClick={() => { navigate('/menu4/board') }}>게시글 작성</Button>
			<TableWrapper>
				<thead>
					<tr>
						<th>게시물 번호</th>
						<th>제목</th>
						<th>작성일자</th>
						<th>작성자ID</th>
					</tr>
				</thead>

				{boardList.map((post) => (
					<tbody onClick={() => {
						navigate(`/menu4/boardlist/${post.writer}`)
						}}>
						<tr key={post.writer}>
							<td>{post.no}</td>
							<td>{post.title}</td>
							<td>{post.regDate}</td>
							<td>{post.writer}</td>
							{/* <td>{post.authorId}</td> */}
						</tr>
					</tbody>
				))}
			</TableWrapper>
		</>
	);
}

export default BoardList;