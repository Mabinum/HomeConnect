import styled from "styled-components";

function Header() {

  const StyledHeader = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #A8E6D6;
    
  `

  return (
    <>
      <StyledHeader>
        <h2>메뉴1</h2>
        <h2>메뉴2</h2>
        <h2>메뉴3</h2>
        <h2>메뉴4</h2>
      </StyledHeader>
    </>
  );
};

export default Header;