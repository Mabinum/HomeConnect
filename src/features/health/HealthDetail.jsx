import { useSelector } from "react-redux";
import Styled from "styled-components";
import { selectHealthInfo } from "../board/boardSlice";

const HealthForm = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */

  .buttonWrapper {
  }
`;

const HealthHeader = Styled.input`
  width: 80%;
  max-width: 465px; /* 최대 너비 설정 */
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const HealthBoard = Styled.textarea`
  width: 80%;
  max-width: 465px; /* 최대 너비 설정 */
  height: 300px; /* 높이 수정 */
  margin-bottom: 10px;
  overflow: auto; /* 스크롤바가 필요할 때만 보이도록 설정 */
  vertical-align: top;
  resize: none;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

const HealthButton = Styled.button`
  width: 80px;
  height: 35px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function HealthDetail() {
  const healthInfo = useSelector(selectHealthInfo);

  return (
    <HealthForm>
      {healthInfo && healthInfo.map((health, index) => {

      })}
      <HealthHeader
        type="text"
        // placeholder="제목"
        required
      >
        {healthInfo.title}
      </HealthHeader>
      <HealthBoard
        type="text"
        placeholder="내용을 입력하세요."
        required
      />
      <div className="buttonWrapper">
        <HealthButton type="submit">뒤로</HealthButton>
        <HealthButton type="submit">수정</HealthButton>
        <HealthButton type="submit">삭제</HealthButton>
      </div>
    </HealthForm>
  );
};

export default HealthDetail;