import React from "react";
import FoodSidebar from "../features/food/FoodSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  /* padding: 20px; */
  flex: 1;
  /* 왜 된거지? */
`;

function Menu4() {
  return (
    <Wrapper>
      <FoodSidebar />
      <ContentWrapper>
        < Outlet />
      </ContentWrapper>
    </Wrapper>
  );
}

export default Menu4;
