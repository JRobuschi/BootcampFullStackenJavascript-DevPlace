import React, { useState, useEffect } from "react";
//import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../../components/cards/Cards";
import "../../pages/store.css";
import { allProducts } from "../../data/List";

function Fragance() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await allProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  if (products === null) {
    return null;
  }
  const filterProducts = products.filter(
    (product) => product.category === "fragance"
  );

  return (
    <>
      <div className="store__container">
        <h4 className="m-3 mt-0 mb-0 p-3">Fragance</h4>
        <div className="m-3">
          <Row md={2} xs={1} lg={3} className="g-3">
            {filterProducts != null
              ? filterProducts.map((item) => (
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

export default Fragance;
