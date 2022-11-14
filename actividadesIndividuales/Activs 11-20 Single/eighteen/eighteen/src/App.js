import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Productos from "./components/productos/Productos";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, createContext } from "react";

import Todos from "./components/todos/Todos";
import Carrousel from "./components/carrousel/Carrousel";
import Forms from "./components/forms/Forms";

//import Preguntas from "../preguntas/Preguntas";
import NotFound from "./components/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ProductsContext = createContext();

function App() {
  const [section, setSection] = useState("Intro");

  const [products, setProducts] = useState();

  function readProducts() {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  readProducts();

  return (
    <>
      <BrowserRouter>
        <Header setSection={setSection} />
        <ProductsContext.Provider value={products}>
          <Routes>
            <Route path="/" element={<Carrousel />} />
            <Route path="products" element={<Todos />} />
            <Route path="login" element={<Forms />} />
            <Route path="register" element={<Forms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductsContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
