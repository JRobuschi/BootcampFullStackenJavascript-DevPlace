import React, { useContext } from "react";
import Card from "./Card";
import "../styles/products.css";
import { ProductsContext } from "../App";
import { useState } from "react";

function ProductsGrid() {
  let products = useContext(ProductsContext);
  const [selectedProducts, setSelectedProducts] = useState(products);

  function filterProducts(e) {
    let cat = e.target.textContent;

    let arrayFiltrado = products.filter((obj) => {
      return obj.type === cat;
    });
    setSelectedProducts(arrayFiltrado);
  }

  return (
    <>
      <ul>
        <li onClick={filterProducts}>Bicicletas</li>
        <li onClick={filterProducts}>Cascos</li>
        <li onClick={filterProducts}>Indumentaria</li>
        <li
          onClick={() => {
            setSelectedProducts(products);
          }}
        >
          Todos
        </li>
      </ul>

      <div className="products-container">
        {selectedProducts.map((obj, idx) => {
          return <Card obj={obj} key={idx} />;
        })}
      </div>
    </>
  );
}

export default ProductsGrid;
