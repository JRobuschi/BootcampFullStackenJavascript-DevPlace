import React from "react";
import "../monitores/Monitores.css";
import "./Cards.css";
import { Button, Card, Row, Col } from "react-bootstrap/";

function BasicExample(props) {
  return (
    <div className="main">
      <div className="monitores-container ">
        <div className="justify-content-center text-center ">
          <Row>
            <Col className="">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={props.obj.img}
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title className="upper-container">
                    {props.obj.title}
                  </Card.Title>
                  <hr />
                  <Card.Text>${props.obj.price}</Card.Text>
                  <Button className="w-100" class="btn btn-outline-success">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
