import React from "react";
import "../monitores/Monitores.css";
import "./Cards.css";
import { Button, Card, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

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
                  src={props.image}
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title className="upper-container">
                    {props.title}
                  </Card.Title>
                  <hr />
                  <Card.Text>{props.price}</Card.Text>
                  <Link
                    key={props.idProduct}
                    to={`/product/${props.idProduct}`}
                  >
                    <Button className="w-100 btn">Ver Detalle</Button>
                  </Link>
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
