import React from "react";

import "./cardCart.css";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      <h1>My CART</h1>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="container__li">
            <div className="conteiner__product">
              <img className="container__img" src={item.img} alt="" />
              <td className="carrito-card-title text-center">{item.title}</td>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              {item.quantity} x {item.price} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                id="container__delete"
                onClick={() => removeItem(item.id)}
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
