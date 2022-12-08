//Principal Imports
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Boostrap Imports
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";

//My Personals Imports
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Todos from "./components/todos/Todos";
import Carrousel from "./components/carrousel/Carrousel";
import Forms from "./components/forms/Forms";
import ProductsDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart";
import Register from "./components/forms/Register";
import ProductForm from "./components/forms/ProductsForm";
import Faq from "./components/preguntas/Preguntas";
import NotFound from "./components/notFound/NotFound";

export const ProductsContext = createContext();

//functionaliti App
function App() {
  //Api connect
  const [status, setStatus] = useState("initial");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    readProducts();
  }, []);

  // async function readProducts() {
  //   await fetch("http://localhost:3030/product")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }
  const readProducts = async () => {
    try {
      const getProduct = await fetch("http://localhost:3030/product").then(
        (response) => response.json()
      );
      setStatus("done");
      setProducts(getProduct);
    } catch (err) {
      setStatus("error");
    }
  };

  //Visual page
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <ProductsContext.Provider value={(status, products)}>
            <Routes>
              <Route path="/" element={<Carrousel />} />
              <Route path="/products" element={<Todos />} />

              <Route path="/product/:id" element={<ProductsDetail />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/login" element={<Forms />} />
              <Route path="/register" element={<Register />} />
              <Route path="/addProduct" element={<ProductForm />} />
              <Route path="/faq" element={<Faq />} />
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
