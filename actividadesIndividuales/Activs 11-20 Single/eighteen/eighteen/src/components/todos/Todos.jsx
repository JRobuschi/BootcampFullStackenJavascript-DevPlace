import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import { useState } from "react";

import CarrouselProducts from "../carrouselProducts/CarrouselProducts";
import Cards from "../cards/Cards";

import "./Todos.css";

import { BsSearch } from "react-icons/bs";

function AllProducts() {
  let products = useContext(ProductsContext);
  const [selectProducts, setSelectProducts] = useState(products);

  function filterProducts(e) {
    let category = e.target.textContent;

    let arrayFilter = products.filter((el) => {
      return el.type === category;
    });

    setSelectProducts(arrayFilter);
  }

  function filterTitle(e) {
    let title = e.target.value;
    let arrayFilter = products.filter((el) => {
      return el.title.includes(title.toLowerCase());
    });
    setSelectProducts(arrayFilter);
  }

  return (
    <>
      <div className="div-general-container">
        <div>
          <ul className="ul-container">
            <li onClick={filterProducts}>monitor</li>
            <li onClick={filterProducts}>mouse</li>
            <li onClick={filterProducts}>teclado</li>
            <li
              onClick={() => {
                setSelectProducts(products);
              }}
            >
              Todos
            </li>
          </ul>

          <div className="search-container">
            <div className="style-container">
              <input
                type="text"
                onChange={filterTitle}
                placeholder="Buscar Producto"
              />
              <h4>
                <BsSearch />
              </h4>
            </div>
          </div>
        </div>

        <div className="products-container">
          {selectProducts &&
            selectProducts.map((obj, idx) => {
              return (
                <>
                  <Cards obj={obj} key={idx} />
                </>
              );
            })}
        </div>
        <CarrouselProducts />
      </div>
    </>
  );
}

export default AllProducts;
