import Header from "./components/header/Header";
import Carrousel from "./pages/Carrousel";
import Footer from "./components/footer/Footer";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import NotFound from "./components/notFound/NotFound";
import AddProduct from "./components/forms/AddProducts";
import ProductDetail from "./components/productsDetail/ProductsDetail";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
//import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Carrousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/addProducts" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
