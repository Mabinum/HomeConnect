import { Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectHealthInfo } from "../board/boardSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

function HealthList() {
  const healthInfo = useSelector(selectHealthInfo);
  const navigate = useNavigate();

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>게시물 번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody onClick={() => navigate('/healthdetail')}>
          {healthInfo && healthInfo.map((health, index) => (
            <tr key={index}>
              <td></td>
              <td>No.{index + 1}</td>
              <td>{health.title}</td>
              <td>작성자 불러오기</td>
              <td>등록일 불러오기</td>
            </tr>
          ))}
        </tbody>

      </Table>
    </>
  );
};

export default HealthList;