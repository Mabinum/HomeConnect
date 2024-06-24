import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 1rem;
`

function Main() {

  return (
    <>
      <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0 auto text-center">
          <p>
            {' '}
            공지 내용입니다.{' '}
          </p>
          <footer className="blockquote-footer">
            2024.06.21
          </footer>
        </blockquote>
      </Card.Body>
      </Card>

      <StyledCard >

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>공지 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>공지 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>공지 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </StyledCard>
    </>
  );
};

export default Main;