import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./productDetail.css";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
// CommonJS
import { useCart } from "react-use-cart";
import { oneProduct } from "../list/List";

const Product = (props) => {
  const [producto, setProducto] = useState(null);

  const params = useParams();
  // let elemento = params.id;
  useEffect(() => {
    oneProduct(params.id, setProducto);
  }, [params]);

  //Prueba nueva
  const { addItem } = useCart();

  const showAlert = () => {
    Swal.fire("Good job!", "You added this product to the cart!", "success");
  };
  return (
    <>
      {producto !== null ? (
        <div className="div__container">
          <div className="product__container">
            <div className="img__container">
              <img src={producto.image} alt="" />
            </div>
            <div id="letras__container">
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
              <h4>{producto.price}</h4>
            </div>
          </div>

          <div className="buttons__container">
            <Link to="/products">
              <button>Keep shopping</button>
            </Link>
            <Link>
              <button
                onClick={() => {
                  const uno = showAlert();
                  const dos = addItem(producto);
                  uno();
                  dos();
                }}
              >
                Add to cart
              </button>
            </Link>

            <Link to="/cart">
              <button>Go to cart</button>
            </Link>
          </div>
        </div>
      ) : (
        "no hay productos con ese id"
      )}
    </>
  );
};

export default Product;
