import React, { useState, useEffect } from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "./CartItem";
//import storeItems from "../../data/items.json";
import { allProducts } from "../../data/List";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await allProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem
              key={item.idProduct}
              title={products.title}
              image={products.image}
              category={products.category}
              idproduct={products.idProduct}
              description={products.description}
              {...item}
            />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(
                  (i) => i.idProduct === cartItem.idProduct
                );
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
        <Button>Buy Cart</Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
