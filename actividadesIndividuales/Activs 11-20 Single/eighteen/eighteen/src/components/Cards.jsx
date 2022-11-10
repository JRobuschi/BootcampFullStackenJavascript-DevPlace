import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="d-flex">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
          <Button className="button-container">Go somewhere</Button>
        </Card.Body>
        <Card.Img
          variant="top"
          src="https://http2.mlstatic.com/D_NQ_NP_999971-MLA43745770464_102020-O.jpg"
        />
      </div>
    </Card>
  );
}

export default BasicExample;
