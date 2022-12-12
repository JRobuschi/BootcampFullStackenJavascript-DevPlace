import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";

export function StoreItem({ idProduct, title, image, price }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(idProduct);

  return (
    <Card className="m-3 h-100 p-2">
      <Card.Img
        alt=""
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              variant="outline-secondary"
              onClick={() => increaseCartQuantity(idProduct)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex alig-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(idProduct)}>
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(idProduct)}>
                  +
                </Button>
              </div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(idProduct)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        <Link key={idProduct} to={`/product/${idProduct}`}>
          <Button className="mt-2 w-100" variant="outline-secondary">
            Detail
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
