import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Products from "./components/Products";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Carrousel />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
