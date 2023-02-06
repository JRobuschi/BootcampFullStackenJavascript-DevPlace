import Header from "./components/header/Header";
import Carrousel from "./pages/Carrousel";
import Footer from "./components/footer/Footer";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import NotFound from "./components/notFound/NotFound";
import AddProduct from "./components/forms/AddProducts";
//import ProductDetail from "./components/productsDetail/ProductsDetail";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import About from "./components/aboutUs/AboutUs";
import Fragance from "./components/category/Fragance";
import Sunglasses from "./components/category/Sunglasses";
import Wristwatch from "./components/category/Wristwatch";
import ProductDetail from "./components/productsDetail/ProductsDetail";
import RequireAuth from "./utilities/RequireAuth";
import React from "react";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Header />
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Carrousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth />}>
            <Route path="/store" element={<Store />} />
            <Route path="/store/fragance" element={<Fragance />} />
            <Route path="/store/sunglasses" element={<Sunglasses />} />
            <Route path="/store/wristwatch" element={<Wristwatch />} />
            <Route path="/addProducts" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;

// import Header from "./components/header/Header";
// import Carrousel from "./pages/Carrousel";
// import Footer from "./components/footer/Footer";
// import Login from "./components/forms/Login";
// import Register from "./components/forms/Register";
// import NotFound from "./components/notFound/NotFound";
// import AddProduct from "./components/forms/AddProducts";
// //import ProductDetail from "./components/productsDetail/ProductsDetail";
// import { Routes, Route } from "react-router-dom";
// import Store from "./pages/Store";
// import { ShoppingCartProvider } from "./context/shoppingCartContext";
// import About from "./components/aboutUs/AboutUs";
// import Fragance from "./components/category/Fragance";
// import Sunglasses from "./components/category/Sunglasses";
// import Wristwatch from "./components/category/Wristwatch";
// import ProductDetail from "./components/productsDetail/ProductsDetail";
// import PrivateRoutes from "./utilities/PrivateRoutes";

// function App() {
//   return (
//     <div className="App">
//       <ShoppingCartProvider>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Carrousel />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           <Route element={<PrivateRoutes />}>
//             <Route path="/store" element={<Store />} />
//             <Route path="/store/fragance" element={<Fragance />} />
//             <Route path="/store/sunglasses" element={<Sunglasses />} />
//             <Route path="/store/wristwatch" element={<Wristwatch />} />
//             <Route path="/addProducts" element={<AddProduct />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//           </Route>

//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </ShoppingCartProvider>
//     </div>
//   );
// }

// export default App;
