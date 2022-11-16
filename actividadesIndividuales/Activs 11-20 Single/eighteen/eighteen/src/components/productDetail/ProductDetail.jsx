import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import "./productDetail.css";

const Product = (props) => {
  let allProducts = useContext(ProductsContext);
  let params = useParams();
  //Buscamos el elemento con el find
  let element = allProducts.find((e) => e.id == params.id);

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
            <button>Seguir comprando</button>
          </Link>
          <Link>
            <button
              onClick={() => {
                props.addCart(element);
              }}
            >
              Agregar al carrito
            </button>
          </Link>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
