import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./products.css";
import ProductContext from "../context/ProductsContext";

const Products = () => {
  const [productsData, setproductsData] = useState([]);
  const { dataProductsCart, setDataProductsCart } = useContext(ProductContext);

  const settings = {
    infinite: true,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const allData = await fetch(
      "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
    );
    const dataJson = await allData.json();
    setproductsData(dataJson);
  };

  const saveProduct = (item) => {
    console.log(dataProductsCart);
    dataProductsCart.push(item);
    setDataProductsCart(dataProductsCart);
  };

  // const productsCart = dataProducstCart.map((item) => {
  //   return <p key={item}>{item}</p>;
  // });

  const allProducts = productsData.map((item) => {
    return (
      <div key={item.id}>
        <div className="product-container">
          <div className="img-container">
            {" "}
            <img src={item.img} alt="img-product" />
          </div>
          <h3>{item.product}</h3>
          <div>
            <p>por R$</p>
            <p>{item.price}</p>
          </div>
          <button
            onClick={() => {
              saveProduct(item.product);
            }}
          >
            COMPRAR
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="products-all-container">
      <h3>Mais vendidos</h3>
      <div>
        <Slider {...settings}>{allProducts}</Slider>
      </div>
    </div>
  );
};

export default Products;
