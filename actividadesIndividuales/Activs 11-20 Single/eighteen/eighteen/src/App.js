import Carrusel from "./components/Carrousel";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Header from "./components/Header";
//import Marcas from "./components/Marcas";
import Preguntas from "./components/Preguntas";
import Productos from "./components/Productos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Carrusel />
      <Productos />
      <Forms />
      <Preguntas />
      <Footer />
    </>
  );
}

export default App;
