import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/cards/Cards";
import "./store.css";
import { allProducts } from "../data/List";
import { BsSearch } from "react-icons/bs";
// import Sunglasses from "../components/category/Sunglasses";
// import Wristwatch from "../components/category/Wristwatch";
// import Fragance from "../components/category/Fragance";

function Store() {
  //Mostrar todos los productos
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await allProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  //Filtrar productos por nombre
  const [selectProducts, setSelectProducts] = useState("");

  function filterTitle(e) {
    setTimeout(() => {
      setSelectProducts(e.target.value);
    }, 500);
  }

  let results = [];
  if (!selectProducts) {
    results = products;
  } else {
    results = products.filter((dato) =>
      dato.title.toLowerCase().includes(selectProducts.toLocaleLowerCase())
    );
  }

  return (
    <>
      <div className="store__container">
        <h1 className="m-3 mt-0 mb-0 p-3">Store</h1>
        <div className="search-container">
          <div className="style-container">
            <input type="text" onChange={filterTitle} placeholder="Search" />
            <h4>
              <BsSearch />
            </h4>
          </div>
        </div>
        {/* <Fragance />
        <Sunglasses />
        <Wristwatch /> */}

        <div className="m-3">
          <Row md={2} xs={1} lg={3} className="g-3">
            {results != null
              ? results.map((item) => (
                  <Col
                    key={item.idProduct}
                    title={products.title}
                    image={products.image}
                    category={products.category}
                    idproduct={products.idProduct}
                    description={products.description}
                  >
                    <StoreItem {...item} />
                  </Col>
                ))
              : "no hay productos"}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Store;
