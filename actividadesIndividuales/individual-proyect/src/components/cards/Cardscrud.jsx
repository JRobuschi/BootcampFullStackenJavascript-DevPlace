import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";

export function StoreItem(props) {
  //Delete Product

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3060/product/${id}`);
  };
  return (
    <Card className="m-3 h-100 p-2">
      <Card.Img
        variant="top"
        src={props.image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{props.title}</span>
          <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
        </Card.Title>

        <Button className="mt-2 w-100" variant="outline-secondary">
          Detail
        </Button>
        <Button
          onClick={() => deleteProduct(props.idPoduct)}
          className="mt-2 w-100"
          variant="outline-danger"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
