import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
//import storeItems from "../../data/items.json";
import { allProducts } from "../../data/List";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";

export function CartItem({ idProduct, quantity }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await allProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  const { removeFromCart } = useShoppingCart();

  if (products == null) return null;
  const item = products.find((i) => i.idProduct === idProduct);

  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.image}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
          alt=""
        />
        <div className="me-auto">
          <div>
            {item.title}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.idProduct)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
