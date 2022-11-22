import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import "./productDetail.css";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
// CommonJS
import { useCart } from "react-use-cart";

const Product = (props) => {
  let allProducts = useContext(ProductsContext);
  let params = useParams();
  //Buscamos el elemento con el find
  let element = allProducts.find((e) => e.id == params.id);

  //Prueba nueva
  const { addItem } = useCart();

  const showAlert = () => {
    Swal.fire("Good job!", "You added this product to the cart!", "success");
  };
  return (
    <>
      <div className="div__container">
        <div className="product__container">
          <div className="img__container">
            <img src={element.img} alt="" />
          </div>
          <div className="letras__container">
            <h2>{element.title}</h2>
            <p>{element.description}</p>
            <h4>{element.price}</h4>
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
                const dos = addItem(element);
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
    </>
  );
};

export default Product;
