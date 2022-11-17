import React from "react";
import "./cardCart.css";

function CartItem(props) {
  return (
    <>
      <div className="cart__item">
        <img src={props.obj.img} alt="" />
        <h4>{props.obj.title}</h4>
        <div>
          <span className="cart__add" onClick={props.moreProductCart}>
            +
          </span>
          <span>{props.obj.quantity}</span>
          <span className="cart__remove" onClick={props.removeCart}>
            -
          </span>
        </div>
        <span>{props.obj.price}</span>
      </div>
    </>
  );
}

export default CartItem;
