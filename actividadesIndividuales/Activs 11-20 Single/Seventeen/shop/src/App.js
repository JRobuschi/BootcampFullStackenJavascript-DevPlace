import "./App.css";
import Header from "./components/Header";
import Hijo from "./components/Hijo";
import Products from "./components/Products";
import Tipos from "./components/Tipos";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Hijo />
      <Products />
      <Tipos />
    </>
  );
}

export default App;
