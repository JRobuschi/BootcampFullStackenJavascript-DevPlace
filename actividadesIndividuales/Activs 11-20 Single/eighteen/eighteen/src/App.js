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

import { CartProvider } from "react-use-cart";
export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState();

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
      <CartProvider>
        <BrowserRouter>
          <Header />
          <ProductsContext.Provider value={products}>
            <Routes>
              <Route path="/" element={<Carrousel />} />
              <Route path="/products" element={<Todos />} />

              <Route path="/productsDetail/:id" element={<ProductsDetail />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/login" element={<Forms />} />
              <Route path="/register" element={<Forms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProductsContext.Provider>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
