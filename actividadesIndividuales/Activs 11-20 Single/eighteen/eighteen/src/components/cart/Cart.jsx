import React from "react";
import { useState, useEffect, useMemo } from "react";
import CardCart from "./CardCart";

function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    props.cart.forEach(
      (ele) => (total = total + parseInt(ele.price) * parseInt(ele.quantity))
    );
    setTotalPrice(total);
  }, [props.changes]);

  return (
    <div className="wrapper">
      <h2>Carrito</h2>
      <div className="cart">
        <div className="cart-head">
          <h3>Articulo</h3>
          <h3>Cantidad</h3>
          <h3>Precio</h3>
        </div>
        <div className="cart-body">
          {props.cart.map((obj, idx) => {
            return (
              <CardCart
                obj={obj}
                key={idx}
                // removeFromCart={props.removeFromCart}
                // multiplyProductInCart={props.multiplyProductInCart}
              />
            );
          })}
        </div>
        <div className="cart-foot">
          <h5>total</h5>
          <span>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
