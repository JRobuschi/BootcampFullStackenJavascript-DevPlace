import React from "react";
import { useState, useEffect, useMemo } from "react";
import CardCart from "./CardCart";

function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    let total = 0;
    props.cart.forEach(
      (ele) => (total = total + parseInt(ele.price) * parseInt(ele.quantity))
    );
    setTotalPrice(total);
  }, [props.changes]);

  return (
    <div className="myCart__container">
      <h2>My Cart</h2>
      <div className="cart__container">
        <div className="cart-body">
          {props.cart.map((obj, idx) => {
            return (
              <CardCart
                obj={obj}
                key={idx}
                removeCart={props.removeCart}
                moreProductCart={props.moreProductCart}
              />
            );
          })}
        </div>
        <div className="cart__footer">
          <h5>total</h5>
          <span>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
