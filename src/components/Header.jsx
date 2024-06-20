import { Container, Navbar } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
      margin-left: auto;
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
        {/* <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">menu1</Navbar.Brand>
        <Navbar.Brand href="#home">menu2</Navbar.Brand>
        <Navbar.Brand href="#home">menu3</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  );
};

export default Header;