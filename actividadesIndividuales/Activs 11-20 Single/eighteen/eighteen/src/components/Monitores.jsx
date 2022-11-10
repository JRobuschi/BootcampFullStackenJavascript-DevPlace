import React from "react";
import "./Monitores.css";
import { Button, Card, Row, Col } from "react-bootstrap/";

const productos = [
  {
    id: 0,
    img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
    title: "Monitor",
    description: "Monitor para juegos QHD Lenovo ",
    price: 500,
  },
  {
    id: 1,
    img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
    title: "Monitor",
    description: "Mouse Ps2 Con Bolita Varios",
    price: 1000,
  },
  {
    id: 2,
    img: "https://www.lenovo.com/medias/23073683046-73368-20201123120156.png?context=bWFzdGVyfHJvb3R8MTYzMDc5fGltYWdlL3BuZ3xoYjEvaDg5LzExODExMjYwMzM0MTEwLnBuZ3w5MGI4MjlkYzc5MWRiN2MwMDE1NTYzNTgwOTg2ZTU0MjgxZDI4ZDc2YTMxMTI4YzA5YzVhNjlhNDUwZjUzMDhj",
    title: "Monitor",
    description: "Teclado gamer Razer DeathStalker ",
    price: 250,
  },
];

export default function Products() {
  return (
    <>
      <div className="monitores-container">
        <h1>Monitores</h1>
        <div className="d-flex justify-content-center text-center mt-5">
          <Row xs={1} md={2} lg={3} xl={3}>
            {productos.map((element) => (
              <Col className="d-flex justify-content-center">
                <div key={element.id} className="m-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={element.img}
                      style={{ height: "15rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <hr />
                      <Card.Text>
                        {element.description} ${element.price}
                      </Card.Text>
                      <Button className="w-100" class="btn btn-outline-success">
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
