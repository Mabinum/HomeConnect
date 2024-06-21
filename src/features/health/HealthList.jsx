import { Table } from "react-bootstrap";

import styled from "styled-components";



function HealthList() {
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
        <tbody>
          <tr>
            <td>

            </td>
            <td>
              No.1
            </td>
            <td>
              헬스장 추천 드립니다.
            </td>
            <td>
              1013호
            </td>
            <td>
              2024년6월19일
            </td>
          </tr>
          <tr></tr>
        </tbody>

      </Table>
    </>
  );
};

export default HealthList;