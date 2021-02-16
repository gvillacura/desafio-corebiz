import React, { useContext, useRef } from "react";
import "./header.css";
import logo from "../../media/statics_logo.png";
import account from "../../media/statics_account.png";
import shoppingCart from "../../media/statics_shopping-cart.png";
import ProductContext from "../context/ProductsContext";

const Header = () => {
  const { dataProductsCart, setDataProductsCart } = useContext(ProductContext);
  //let productsCount = dataProducstCart.length;

  const cart = useRef(null);

  const openCart = () => {
    cart.current.classList.remove("hide");
  };

  const productsCart = dataProductsCart.map((item) => {
    return <p key={item}>{item}</p>;
  });

  const closeCart = () => {
    cart.current.classList.add("hide");
  };

  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
      <input type="text" placeholder="O qué esta procurando?" />
      <div className="account-cart-container">
        <div>
          <img src={account} alt="account" />
        </div>
        <p>Minha Conta</p>
        <div>
          <img src={shoppingCart} alt="cart" onClick={openCart} />
        </div>
        <p>{dataProductsCart.length}</p>
        <div ref={cart} className="hide">
          <h1 onClick={closeCart}>X</h1>
          {productsCart}
        </div>
        {productsCart}
      </div>
    </div>
  );
};

export default Header;
