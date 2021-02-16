import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </Fragment>
  );
}

export default App;
