import React from "react";
import FoodSidebar from "../features/food/FoodSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start; /* 왼쪽 정렬 */
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const SidebarWrapper = styled.div`
  width: 250px; /* 사이드바 너비 조정 */
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  flex: 1; /* 나머지 영역을 모두 차지하도록 설정 */
  padding: 20px; /* 컨텐츠 내부 여백 */
`;

function Menu4() {
  return (
    <Wrapper>
      <SidebarWrapper>
        <FoodSidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
}

export default Menu4;
