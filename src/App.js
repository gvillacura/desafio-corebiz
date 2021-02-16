import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import ProductsContext from "./components/context/ProductsContext";

function App() {
  let [dataProductsCart, setDataProductsCart] = useState([]);
  return (
    <ProductsContext.Provider value={{ dataProductsCart, setDataProductsCart }}>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </ProductsContext.Provider>
  );
}

export default App;
