import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
//import Productos from "./components/productos/Productos";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, createContext, useEffect } from "react";

import Todos from "./components/todos/Todos";
import Carrousel from "./components/carrousel/Carrousel";
import Forms from "./components/forms/Forms";
import ProductsDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart";

//import Preguntas from "../preguntas/Preguntas";
import NotFound from "./components/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [changes, setChanges] = useState(false);

  function addCart(e) {
    let order = cart;
    if (order.includes(e)) {
      var productOrder = order.indexOf(e);
      order[productOrder].quantity++;
    } else {
      order.push(e);
    }
    setCart(order);
  }

  function removeCart(e) {
    let products = cart;
    //Revisar en que linea esta
    let indProduct =
      e.target.parentElement.parentElement.firstChild.textContent;
    let selectObj = products.find((e) => e.title === indProduct);
    let selectInd = products.indexOf(selectObj);
    selectObj.quantity = selectObj.quantity - 1;
    if (selectObj.quantity <= 0) {
      products.splice(selectInd, 1);
    } else {
      products.splice(selectInd, 1, selectObj);
    }
    setCart(products);
    changes ? setChanges(false) : setChanges(true);
  }

  function moreProductCart(e) {
    let products = cart;
    let indName = e.target.parentElement.parentElement.firstChild.textContent;
    let selectObj = products.findIndex((e) => e.title === indName);
    if (products.includes(selectObj)) {
      let productInd = products.indexOf(selectObj);
      products[productInd].quantity++;
    } else {
      products.push(selectObj);
    }
    setCart(products);
    changes ? setChanges(false) : setChanges(true);
  }

  useEffect(() => {
    readProducts();
  }, []);

  async function readProducts() {
    await fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <ProductsContext.Provider value={products}>
          <Routes>
            <Route path="/" element={<Carrousel />} />
            <Route path="/products" element={<Todos />} />
            <Route
              path="/cart"
              element={
                <Cart
                  changes={changes}
                  cart={cart}
                  setCart={setCart}
                  removeCart={removeCart}
                  moreProductCart={moreProductCart}
                />
              }
            />
            <Route
              path="/productsDetail/:id"
              element={<ProductsDetail addCart={addCart} />}
            />

            <Route path="/login" element={<Forms />} />
            <Route path="/register" element={<Forms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductsContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
