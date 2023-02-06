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

//const value = useContext(miContexto); //acepta un objeto de contexto (valor devuelto de React.context)

//Devuelve el valor del contexto actual

//El valor actual del contexto es el "value" del <Mycontext.Provide>

//Argumento enviado a useContext: useContext(miContexto)

//Creacion de temas claro y oscuro
const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

//Creamos el hook, y le damos un contexto inicial que es el light
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    //Con un onClick y un if se puede pasar como valor dark o light dependiendo lo que quiera el usuario
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Mi estilo depende de mi contexto...
    </button>
  );
}
