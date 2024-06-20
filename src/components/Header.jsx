import styled from "styled-components";

function Header() {

  const StyledHeader = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A8E6D6;
    
    p {
      margin: 0 1rem;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        color: #ffffff;
      }
    }

    h3 {
      margin-right: 1rem;
    }
`
    


  return (
    <>
      <StyledHeader>
          <p>메뉴1</p>
          <p>메뉴2</p>
          <p>메뉴3</p>
          <p>메뉴4</p>
        <h3>0000호</h3>
      </StyledHeader>
    </>
  );
};

export default Header;