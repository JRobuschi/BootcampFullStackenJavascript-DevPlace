import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./productDetail.css";

import { OneProduct } from "../../data/List";

const Product = (props) => {
  const [producto, setProducto] = useState(null);

  const params = useParams();
  // let elemento = params.id;
  useEffect(() => {
    OneProduct(params.id, setProducto);
  }, [params]);

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
              <h4>${producto.price}</h4>
            </div>
          </div>

          <div className="buttons__container">
            <Link to="/store">
              <button>Keep shopping</button>
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
