import { useDispatch, useSelector } from "react-redux";
import { clearBoardList, getBoardList, selectBoardList } from "./boardSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function BoardList() {
	const boardList = useSelector(selectBoardList);
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const TableWrapper = styled(Table)`
			margin-top: 20px;
			width: 100%;
    `;

useEffect(() => {
	const boardlist = async () => {
	try {
		const response = await axios.get('http://localhost:8080/menu4/boardlist');
		if (response.status === 200) { 
			return dispatch(getBoardList(response.data));
		} else { 
			throw new Error(`api error: ${response.status} ${response.statusText}`);
		}
		} catch (error) {
			console.error(error);
		}
	};
	boardlist();
	}, []);

	// 날짜 포맷하기
	

	return (
		<>
			<Button variant="primary" key={1} onClick={() => { navigate('/menu4/board') }}>게시글 작성</Button>
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
						navigate(`/menu4/read/${post.no}`)
						}}>
						<tr key={post.writer}>
							<td>{post.no}</td>
							<td>{post.title}</td>
							<td>{post.regDate}</td>
							<td>{post.writer}</td>
						</tr>
					</tbody>
				))}
			</TableWrapper>
		</>
	);
}

export default BoardList;