import React from "react";

function CartItem(props) {
  return (
    <div className="cart-item">
      <h4>{props.obj.title}</h4>
      {/* <div>
        <span className="cart-btn add" onClick={props.multiplyProductInCart}>
          +
        </span>
        <span>{props.obj.quantity}</span>
        <span className="cart-btn take" onClick={props.removeFromCart}>
          -
        </span>
      </div> */}
      <span>{props.obj.price}</span>
    </div>
  );
}

export default CartItem;
