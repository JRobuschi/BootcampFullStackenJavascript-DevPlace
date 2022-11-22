import React from "react";
import "../monitores/Monitores.css";
import "./Cards.css";
import { Button, Card, Row, Col } from "react-bootstrap/";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ProductsContext } from "../../App";
import { useContext } from "react";
import { GrFavorite } from "react-icons/gr";

function BasicExample(props) {
  const products = useContext(ProductsContext);
  let params = useParams();
  let element = products.find((e) => e.id === params.id);

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
                  <Card.Text>{props.obj.price}</Card.Text>
                  <Link to={`/productsDetail/${props.obj.id}`}>
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
